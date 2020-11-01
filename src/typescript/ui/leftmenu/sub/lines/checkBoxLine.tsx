import * as React from "react"

export function checkBoxLine(
    label: string,
    groupName: string,
    onCheck: (string) => void,
) {
    function onCheckboxChange() {
        onCheck(label)
    }
    return (
        <label>
            <input
                type="checkbox"
                name={label}
                checked={false}
                onChange={onCheckboxChange}
                className="check-input"
            />
            {label}
        </label>
    )
}