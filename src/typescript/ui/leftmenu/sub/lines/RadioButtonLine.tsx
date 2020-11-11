import * as React from "react"
import * as Framer from "framer"

export function RadioButtonLine(props: {
    label: string,
    groupName: string
}
) {
    return (
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
            <input
                style={{
                    height: "32px",
                    width: "32px",
                }}
                type="radio"
                value={props.label}
                name={props.groupName}
            />
            <Framer.Frame
                height={32}
                width="1fr"
                radius={16}
                background="#FFFFFF"
            >{props.label}
            </Framer.Frame>
        </Framer.Stack>
    )
}