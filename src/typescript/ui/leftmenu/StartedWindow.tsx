import * as React from "react"
import * as Framer from "framer"
import { ButtonLine } from "./sub/lines/ButtonLine"
import { DisplayDataLine } from "./sub/lines/DisplayDataLine"
import { LabelAndIconButtons } from "./sub/lines/LabelAndIconButtons"
import * as WebInterface from "../../web/webinterface"
import { GPS } from "../../data/web/gps"
import { Progress } from "../../data/web/progress"
import * as DataCenter from "../../data/dataCenter"

export function StartedWindow(props: { previous: () => void, next: () => void }) {

    const [progress, setProgress] = React.useState(DataCenter.getProgress)
    const [result, setResult] = React.useState(DataCenter.getResult)

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
                <DisplayDataLine label="Maximum cost (€)" value={result.maxCost_Euro.toString()} />
                <DisplayDataLine label="Minimum cost (€)" value={result.minCost_Euro.toString()} />
                <DisplayDataLine label="Best cost (€)" value={result.bestCost_Euro.toString()} />
                <LabelAndIconButtons
                    label="Iteration"
                    iconButtons={[
                        {
                            name: "skip-forward",
                            function: () => {
                                let bestCost: number
                                let bestRoot: GPS[]
                                WebInterface.step().then(progress => {
                                    bestCost = progress.bestCost_Euro
                                    bestRoot = progress.bestRout
                                })
                            }
                        },
                        {
                            name: "fast-forward",
                            function: () => WebInterface.cycle()
                        }
                    ]}
                />
                <DisplayDataLine label="Iteration" value={progress.iteration.toString()} />
                <DisplayDataLine label="Time (s)" value={progress.runtime_Second.toString()} />
            </Framer.Stack>
            <ButtonLine label="run" functionality={props.next} />
            <ButtonLine label="Stop" functionality={props.previous} />
        </Framer.Stack>
    )
}