import * as React from "react"
import * as Framer from "framer"
import { ButtonLine } from "../lines/ButtonLine"
import * as DataCenter from "../../../../data/dataCenter"
import { RadioButtonLine } from "../lines/RadioButtonLine"

export function LoadWindow(props: { onEnded: () => void }) {
    const names = DataCenter.viewProgress()
    const [chosenName, setChosenName] = React.useState(names[0])

    function ok() {
        DataCenter.loadProgress(chosenName)
        props.onEnded()
    }

    function cancle() {
        props.onEnded()
    }

    return (<Framer.Stack
        width="100%"
        height="100%"
        direction="vertical"
        distribution="start"
        alignment="center"
        padding={8}
        gap={8}
    ><Framer.Scroll>
            <Framer.Stack
                width="100%"
                height={names.length * 56}
                direction="vertical"
                distribution="start"
                alignment="center"
                gap={8}
            >
                {names.map(name => (
                    <RadioButtonLine label={name} groupName="setup" />
                ))}
            </Framer.Stack>
        </Framer.Scroll>
        <ButtonLine label="OK" functionality={ok} />
        <ButtonLine label="Cancle" functionality={cancle} />
    </Framer.Stack>
    )
}