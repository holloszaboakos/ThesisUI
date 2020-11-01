import * as React from "react"
import * as Framer from "framer"

export function radioButtonLine(
    label: string,
    groupName: string
) {
    return (
        <label>
            <input
                type="radio"
                value={label}
                name={groupName}
            />
            {label}
        </label>
    )
}