import * as React from "react"
import * as Framer from "framer"

export function DisplayDataLine(props: {
    label: string,
    value: string
}) {

    return (<>
        <Framer.Stack
            width="100%"
            height={48}
            direction="horizontal"
            distribution="start"
            alignment="center"
            padding={8}
            gap={8}
            background="#BBBBBB"
            radius={24}>
            <Framer.Frame
                width="2fr"
                height={32}
                radius={16}
                background="#FFFFFF">
                {props.label}
            </Framer.Frame>
            <Framer.Frame
                width="1fr"
                height={32}
                radius={16}
                background="#FFFFFF">
                {props.value}
            </Framer.Frame>
        </Framer.Stack>
    </>)
}

