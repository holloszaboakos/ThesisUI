import * as React from "react"
import * as Framer from "framer"
import { DisplayDataLine } from "./sub/lines/DisplayDataLine"
import { ButtonLine } from "./sub/lines/ButtonLine"
import * as WebInterface from "../../web/webinterface"
import * as DataCenter from "../../data/dataCenter"

export function RunningWindow(props: { previous: () => void }) {

    const [progress, setProgress] = React.useState(DataCenter.getProgress)
    const [result, setResult] = React.useState(DataCenter.getResult)

    let interval

    React.useEffect(() => {
        DataCenter.addProgressChangeCallBack(setProgress)
        DataCenter.addResultChangeCallBack(setResult)
        interval = setInterval(async () => {
            setProgress(DataCenter.getProgress())
            setResult(DataCenter.getResult())
        }, 1000)
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
                <DisplayDataLine label="Maximum cost (€)" value={result.maxCost_Euro.toString()} />
                <DisplayDataLine label="Minimum cost (€)" value={result.minCost_Euro.toString()} />
                <DisplayDataLine label="Best cost (€)" value={result.bestCost_Euro.toString()} />
                <DisplayDataLine label="Iteration" value={progress.iteration.toString()} />
                <DisplayDataLine label="Time (s)" value={progress.runtime_Second.toString()} />
            </Framer.Stack>
            <ButtonLine label="Pause" functionality={props.previous} />
        </Framer.Stack>
    )
}