import * as React from "react"
import * as Framer from "framer"
import { ButtonLine } from "./sub/lines/ButtonLine"
import { DisplayDataLine } from "./sub/lines/DisplayDataLine"
import { LabelAndIconButtons } from "./sub/lines/LabelAndIconButtons"
import * as WebInterface from "../../web/webinterface"
import * as DataCenter from "../../data/dataCenter"

export function StartedWindow(props: { previous: () => void, next: () => void }) {

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

    React.useEffect(() => {
        DataCenter.loadResult(setResult)
        DataCenter.addProgressChangeCallBack(setProgress)
        DataCenter.addResultChangeCallBack(setResult)
    }, [])

    React.useEffect(() => {
        DataCenter.addProgressChangeCallBack(setProgress)
        DataCenter.addResultChangeCallBack(setResult)
    }, [])

    React.useEffect(() => {
        return () => {
            DataCenter.removeProgressChangeCallBack(setProgress)
            DataCenter.removeResultChangeCallBack(setResult)
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
                <LabelAndIconButtons
                    label="Iteration"
                    iconButtons={[
                        {
                            name: "skip-forward",
                            function: () => {
                                WebInterface.step().then(result => {
                                    DataCenter.updateResult(result)
                                    WebInterface.getProgress().then(progress => {
                                        DataCenter.updateProgress(progress)
                                    })
                                })

                            }
                        },
                        {
                            name: "fast-forward",
                            function: () => {
                                WebInterface.cycle().then(result => {
                                    DataCenter.updateResult(result)
                                    WebInterface.getProgress().then(progress => {
                                        DataCenter.updateProgress(progress)
                                    })
                                })


                            }
                        }
                    ]}
                />
                {progressRefresher && <>
                    <DisplayDataLine label="Iteration" value={progress.iteration.toString()} />
                    <DisplayDataLine label="Time (s)" value={progress.runtime_Second.toString()} />
                </>}
            </Framer.Stack>
            <ButtonLine label="Run" functionality={props.next} />
            <ButtonLine label="Stop" functionality={props.previous} />
        </Framer.Stack>
    )
}