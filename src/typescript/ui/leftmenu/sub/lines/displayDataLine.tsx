import * as React from "react"
import * as Framer from "framer"

export function DisplayDataLine(props: {
    label: string,
    value: string
}) {

    return (<>
        <label>
            {props.label}
        </label>
        <label>
            ": "
            </label>
        <label>
            {props.value}
        </label>
    </>)
}

