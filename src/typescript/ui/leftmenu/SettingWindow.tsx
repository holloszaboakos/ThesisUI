import * as React from "react"
import * as Framer from "framer"
import { DisplayDataLine } from "./sub/lines/DisplayDataLine"
import { ButtonLine } from "./sub/lines/ButtonLine"
import { ChooseWindow } from "./sub/algorithm/ChooseWindow"
import * as WebInterface from "../../web/webinterface"
import { SetDataLine } from "./sub/lines/SetDataLine"
import * as DataCenter from "../../data/dataCenter"
import { Setting } from "../../data/web/setting"

export function SetupWindow(props: { clean: () => void, start: () => void }) {
    enum States {
        main,
        algorithmChooser,
    }

    const [state, setState] = React.useState(States.main)
    const [timeLimit, setTimeLimit] = React.useState(DataCenter.getSetup().timeLimitSecond)
    const [iterationLimit, setIterationLimit] = React.useState(DataCenter.getSetup().iterLimit)

    function onSetupChange(setup: Setting) {
        setTimeLimit(setup.timeLimitSecond)
        setIterationLimit(setup.iterLimit)
    }

    //TODO rooting
    //onAttach
    React.useEffect(() => {
        DataCenter.addSetupChangeCallBack(onSetupChange)
    }, [])
    //onDetach
    React.useEffect(() => {
        return () => {
            DataCenter.removeSetupChangeCallBack(onSetupChange)
        }
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
                <SetDataLine
                    label="run time limit (s)"
                    startText={timeLimit.toString()}
                    placefolder="number in seconds"
                    validate={(text) => { return true }}
                    sendValue={(text) => {
                        let setup = DataCenter.getSetup()
                        setup.timeLimitSecond = JSON.parse(text)
                        DataCenter.updateSetup(setup)
                    }}
                />
                <SetDataLine
                    label="iterations limit"
                    startText={iterationLimit.toString()}
                    placefolder="number in seconds"
                    validate={(text) => { return true }}
                    sendValue={(text) => {
                        let setup = DataCenter.getSetup()
                        setup.iterLimit = JSON.parse(text)
                        DataCenter.updateSetup(setup)
                    }}
                />
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