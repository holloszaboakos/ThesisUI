import * as React from "react"
import * as Framer from "framer"
import { Icon, IconName } from 'ts-react-feather-icons'

export function LabelAndIconButtons(props: {
    label: string,
    iconButtons: { name: IconName, function: () => void }[],

}) {

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
            width="1fr"
            size={32}
            radius={16}
            background="#FFFFFF"
        >
            {props.label}
        </Framer.Frame>
        {props.iconButtons.map(value => (<Framer.Frame
            size={32}
            radius={16}
            background="#FFFFFF"
            onClick={value.function}
        >
            <Framer.Frame
                size={24}
                radius={12}
                center
                background="#FFFFFF"
            >
                <Icon
                    name={value.name}
                    color="black"
                    size={24}
                />
            </Framer.Frame>
        </Framer.Frame>

        ))}

    </Framer.Stack>)
}
