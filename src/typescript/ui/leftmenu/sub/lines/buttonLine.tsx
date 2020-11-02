import * as React from "react"
import * as Framer from "framer"

export function ButtonLine(props: {
    label: string,
    functionality: (label: string) => void
}
) {
    function onClick() {
        props.functionality(props.label)
    }
    return (
        <Framer.Frame
            width="100%"
            height={48}
            padding={8}
            background="#FFFFFF"
            radius={24}
            onClick={onClick}>
            {props.label}
        </Framer.Frame>
    )
}
