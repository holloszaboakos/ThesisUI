import * as React from "react"
import * as Framer from "framer"
import { DisplayDataLine } from "./sub/lines/DisplayDataLine"
import { ButtonLine } from "./sub/lines/ButtonLine"
import * as WebInterface from "../../web/webinterface"
import * as DataCenter from "../../data/dataCenter"

export function RunningWindow(props: { previous: () => void }) {

    const [progress, setProgress] = React.useState(DataCenter.getProgress)
    const [progressRefresher, setProgressRefresher] = React.useState(true)
    React.useEffect(() => {
        setProgressRefresher(false)
    }, [progress])
    React.useEffect(() => {
        !progressRefresher && setProgressRefresher(true)
    }, [progressRefresher])

    const [result, setResult] = React.useState(DataCenter.getResult)
    const [resultRefresher, setResultRefresher] = React.useState(true)
    React.useEffect(() => {
        setResultRefresher(false)
    }, [result])
    React.useEffect(() => {
        !resultRefresher && setResultRefresher(true)
    }, [resultRefresher])

    let interval

    React.useEffect(() => {
        DataCenter.addProgressChangeCallBack(setProgress)
        DataCenter.addResultChangeCallBack(setResult)
        interval = setInterval(async () => {
            WebInterface.getProgress().then(progress => DataCenter.updateProgress(progress))
            WebInterface.getResult().then(result => DataCenter.updateResult(result))
        }, DataCenter.getTask().costGraph.objectives.length * 100)
    }, [])

    React.useEffect(() => {
        return () => {
            DataCenter.removeProgressChangeCallBack(setProgress)
            DataCenter.removeResultChangeCallBack(setResult)
            clearInterval(interval)
        }
    }, [])

    return (
        <Framer.Stack
            width="100%"
            height="100%"
            direction="vertical"
            distribution="start"
            alignment="center"
            padding={8}
            gap={8}
        >
            <Framer.Stack
                width="100%"
                height="1fr"
                direction="vertical"
                distribution="start"
                alignment="center"
                gap={8}
            >
                {resultRefresher && <>
                    <DisplayDataLine label="Maximum cost (€)" value={result.maxCost_Euro.toFixed(2).toString()} />
                    <DisplayDataLine label="Minimum cost (€)" value={result.minCost_Euro.toFixed(2).toString()} />
                    <DisplayDataLine label="Best cost (€)" value={result.bestCost_Euro.toFixed(2).toString()} />
                </>}
                {progressRefresher && <>
                    <DisplayDataLine label="Iteration" value={progress.iteration.toString()} />
                    <DisplayDataLine label="Time (s)" value={progress.runtime_Second.toString()} />
                </>}
            </Framer.Stack>
            <ButtonLine label="Pause" functionality={props.previous} />
        </Framer.Stack>
    )
}