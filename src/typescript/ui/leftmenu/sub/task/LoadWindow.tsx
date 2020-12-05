import * as React from "react"
import * as Framer from "framer"
import { ButtonLine } from "../lines/ButtonLine"
import * as DataCenter from "../../../../data/dataCenter"
import { RadioButtonLine } from "../lines/RadioButtonLine"

export function LoadWindow(props: { onEnded: () => void }) {


    const [names, setNames] = React.useState([] as string[])
    const [chosenName, setChosenName] = React.useState("")

    React.useEffect(() => {
        DataCenter.viewTasks(setNames)
    }, [])
    React.useEffect(() => {
        if (names.length !== 0)
            setChosenName(names[0])
        else
            setChosenName("")
    }, [names])

    function ok() {
        DataCenter.loadTask(chosenName)
        props.onEnded()
    }

    function cancle() {
        props.onEnded()
    }

    function onChosen(event) {
        setChosenName(event.target.value)
    }

    return (<Framer.Stack
        width="100%"
        height="100%"
        direction="vertical"
        distribution="start"
        alignment="center"
        padding={8}
        gap={8}
    ><Framer.Scroll
        width="100%"
        height="1fr">
            <Framer.Stack
                width="100%"
                height={names.length * 56}
                direction="vertical"
                distribution="start"
                alignment="center"
                gap={8}
                onChange={onChosen}
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