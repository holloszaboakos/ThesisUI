import * as React from "react"
import * as Framer from "framer"

export function CheckBoxLine(props: {
    label: string,
    groupName: string,
    onCheckChange: (string) => void,
}) {

    const [checked, setChecked] = React.useState(false)

    function onCheckboxChange() {
        props.onCheckChange(props.label)
        setChecked(!checked)
    }

    return (<Framer.Stack
        width="100%"
        height={48}
        direction="horizontal"
        distribution="start"
        alignment="center"
        padding={8}
        gap={8}
        background="#BBBBBB"
        radius={24}
    >
        <Framer.Frame
            size={32}
            background="#000000000"
        >
            <input
                type="checkbox"
                name={props.label}
                checked={checked}
                onChange={onCheckboxChange}
                className="check-input"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                }}
            />
        </Framer.Frame>
        <Framer.Frame
            height={32}
            width="1fr"
            round={16}
            background="#FFFFFF"
        >
            {props.label}
        </Framer.Frame>
    </Framer.Stack>)
}