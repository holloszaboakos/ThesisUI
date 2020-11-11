import * as React from "react"
import * as Framer from "framer"

export function SetDataLine(props: { label: string, startText: string, placefolder: string, validate: (text: string) => boolean, sendValue: (text: string) => void }) {
    const [text, setText] = React.useState(props.startText)
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
            <Framer.Frame
                width="2fr"
                height={32}
                radius={16}
                background="#FFFFFF">
                {props.label}
            </Framer.Frame>
            <Framer.Stack
                width="1fr"
                height={32}
                radius={16}
                paddingBottom={4}
                paddingLeft={8}
                paddingRight={8}
                paddingTop={4}
                background="#FFFFFF">
                <input
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                    }}
                    onChange={(event) => {
                        let value: string = event.target.value
                        setText(value)
                        if (props.validate(value)) {
                            props.sendValue(value)
                        }
                    }}
                    value={text}
                />
            </Framer.Stack>
        </Framer.Stack>
    )
}