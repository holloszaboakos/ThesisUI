import * as React from "react"

export function displayDataLine(
    label: string,
    value: string
) {
    return (
        <>
            <label>
                {label}
            </label>
            <label>
                ":"
            </label>
            <label>
                {value}
            </label>
        </>
    )
}

