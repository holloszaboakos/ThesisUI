import * as React from "react"
import * as Framer from "framer"
import { ButtonLine } from "./sub/lines/ButtonLine"
import { DisplayDataLine } from "./sub/lines/DisplayDataLine"
import { LabelAndIconButtons } from "./sub/lines/LabelAndIconButtons"
import * as WebInterface from "../../web/webinterface"

export function StartedWindow(props: { stop: () => void, run: () => void }) {
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
                <DisplayDataLine label="Maximum cost (€)" value="1000" />
                <DisplayDataLine label="Minimum cost (€)" value="0" />
                <DisplayDataLine label="Best cost (€)" value="50" />
                <LabelAndIconButtons
                    label="Iteration"
                    iconButtons={[
                        {
                            name: "skip-forward",
                            function: () => {
                                WebInterface.step()
                                let bestCost = WebInterface.getBestCost()
                                let bestRoot = WebInterface.getBestResult()
                            }
                        },
                        {
                            name: "fast-forward",
                            function: () => WebInterface.cycle()
                        }
                    ]}
                />
                <DisplayDataLine label="Iteration" value="15" />
                <DisplayDataLine label="Time (s)" value="1070.123" />
            </Framer.Stack>
            <ButtonLine label="Stop" functionality={props.stop} />
            <ButtonLine label="run" functionality={props.run} />
        </Framer.Stack>
    )
}