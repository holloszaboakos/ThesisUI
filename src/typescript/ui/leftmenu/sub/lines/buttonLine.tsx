import * as React from "react"
import * as Framer from "framer"

export function buttonLine(
    label: string,
    functionality: (label: string) => void
) {
    function onClick() {
        functionality(label)
    }
    return (
        <button onClick={onClick}>{label}</button>
    )
}
