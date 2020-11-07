import * as React from "react"
import * as Framer from "framer"
import { DisplayDataLine } from "./sub/lines/DisplayDataLine"
import { ButtonLine } from "./sub/lines/ButtonLine"
import { ChooseWindow } from "./sub/algorithm/ChooseWindow"
import * as WebInterface from "../../web/webinterface"
import { SetDataLine } from "./sub/lines/SetDataLine"
import * as DataCenter from "../../data/dataCenter"
import { Setting } from "../../data/web/setting"
import { isNumber } from "util"

export function SetupWindow(props: { clean: () => void, start: () => void }) {
    enum States {
        main,
        algorithmChooser,
    }

    const [state, setState] = React.useState(States.main)
    const [setting, setSetting] = React.useState(DataCenter.getSetting())

    //TODO rooting
    //onAttach
    React.useEffect(() => {
        DataCenter.addSettingChangeCallBack(setSetting)
    }, [])
    //onDetach
    React.useEffect(() => {
        return () => {
            DataCenter.removeSettingChangeCallBack(setSetting)
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
                    startText={setting.timeLimit_Second.toString()}
                    placefolder="number in seconds"
                    validate={(text) => { return isNaN(Number(text)) }}
                    sendValue={(text) => {
                        setting.timeLimit_Second = Number(text)
                        setSetting(setting)
                    }}
                />
                <SetDataLine
                    label="iterations limit"
                    startText={setting.iterLimit.toString()}
                    placefolder="number in seconds"
                    validate={(text) => { return isNaN(Number(text)) }}
                    sendValue={(text) => {
                        setting.iterLimit = Number(text)
                        setSetting(setting)
                    }}
                />
                <DisplayDataLine label="Maximum cost (€)" value="1000" />
                <DisplayDataLine label="Minimum cost (€)" value="0" />
                <ButtonLine label="Algorithm" functionality={() => {
                    setState(States.algorithmChooser)
                }} />
            </Framer.Stack>
            <ButtonLine label="Start" functionality={() => {
                DataCenter.updateSetting(setting)
                props.start()
            }
            } />
            <ButtonLine label="Clean" functionality={
                props.clean
            } />
        </Framer.Stack>
        : <ChooseWindow
            onEnded={() => { setState(States.main) }}
        />}
    </>)
}