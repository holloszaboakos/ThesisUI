import * as React from "react"
import * as Framer from "framer"
import { DisplayDataLine } from "./sub/lines/DisplayDataLine"
import { ButtonLine } from "./sub/lines/ButtonLine"
import * as WebInterface from "../../web/webinterface"

export function RunningWindow(props: { pause: () => void }) {
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
                <DisplayDataLine label="Iteration" value="15" />
                <DisplayDataLine label="Time (s)" value="1070.123" />
            </Framer.Stack>
            <ButtonLine label="Pause" functionality={props.pause} />
        </Framer.Stack>
    )
}