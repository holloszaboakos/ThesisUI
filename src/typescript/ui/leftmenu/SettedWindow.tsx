import * as React from "react"
import * as Framer from "framer"
import { DisplayDataLine } from "./sub/lines/DisplayDataLine"
import { ButtonLine } from "./sub/lines/ButtonLine"
import { ChooseWindow } from "./sub/algorithm/ChooseWindow"
import * as WebInterface from "../../web/webinterface"

export function SettedWindow(props: { clean: () => void, start: () => void }) {
    enum States {
        main,
        algorithmChooser,
    }

    const [state, setState] = React.useState(States.main)

    //rooting
    //onAttach
    React.useEffect(() => {

    }, [])

    return (<>{state === States.main ?
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
                <DisplayDataLine label="Maximum cost (€)" value="1000" />
                <DisplayDataLine label="Minimum cost (€)" value="0" />
                <ButtonLine label="Algorithm" functionality={() => {
                    setState(States.algorithmChooser)
                }} />
            </Framer.Stack>
            <ButtonLine label="Clean" functionality={props.clean} />
            <ButtonLine label="Start" functionality={props.start} />
        </Framer.Stack>
        : <ChooseWindow
            onEnded={() => { setState(States.main) }}
        />}
    </>)
}