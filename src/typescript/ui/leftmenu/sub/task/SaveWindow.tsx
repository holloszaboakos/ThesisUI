import * as React from "react"
import * as Framer from "framer"
import { ButtonLine } from "../lines/ButtonLine"
import * as DataCenter from "../../../../data/dataCenter"
import { SetDataLine } from "../lines/SetDataLine"

export function SaveWindow(props: { onEnded: () => void }) {

    const [name,setName] = React.useState("")

    function ok() {
        DataCenter.saveTask(name)
        props.onEnded()
    }

    function cancle() {
        props.onEnded()
    }

    return (
        <Framer.Stack
            width="100%"
            height="100%"
            direction="vertical"
            distribution="start"
            alignment="center"
            padding={8}
            gap={8}
        >
            <Framer.Stack
                width="100%"
                height="1fr"
                direction="vertical"
                distribution="start"
                alignment="center"
                gap={8}
            >
                <SetDataLine
                    label="name"
                    startText={name}
                    placefolder="name"
                    validate={() => true}
                    sendValue={(text) => {
                        setName(text)
                    }}
                />
            </Framer.Stack>
            <ButtonLine label="OK" functionality={ok} />
            <ButtonLine label="Cancle" functionality={cancle} />
        </Framer.Stack>
    )
}