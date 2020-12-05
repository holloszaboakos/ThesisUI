import * as React from "react"
import * as Framer from "framer"
import { DisplayDataLine } from "./sub/lines/DisplayDataLine"
import { ButtonLine } from "./sub/lines/ButtonLine"
import { ChooseWindow } from "./sub/algorithm/ChooseWindow"
import { SetDataLine } from "./sub/lines/SetDataLine"
import * as DataCenter from "../../data/dataCenter"
import { LoadWindow as SetupLoadWindow } from "./sub/setting/LoadWindow"
import { SaveWindow as SetupSaveWindow } from "./sub/setting/SaveWindow"
import { LabelAndIconButtons } from "./sub/lines/LabelAndIconButtons"
import { Settings } from "ts-react-feather-icons"

export function SetupWindow(props: { previous: () => void, next: () => void }) {
    enum States {
        main,
        algorithmChooser,
        setupLoad,
        setupSave
    }

    const [state, setState] = React.useState(States.main)
    const [setting, setSetting] = React.useState(DataCenter.getSetting)
    const [result, setResult] = React.useState(DataCenter.getResult)
    const [refresher, setRefresher] = React.useState(true)

    //TODO rooting
    //onAttach
    React.useEffect(() => {
        DataCenter.loadResult(setResult)
        DataCenter.addSettingChangeCallBack(setSetting)
        DataCenter.addResultChangeCallBack(setResult)
    }, [])
    //onDetach
    React.useEffect(() => {
        return () => {
            DataCenter.removeSettingChangeCallBack(setSetting)
            DataCenter.removeResultChangeCallBack(setResult)
        }
    }, [])

    React.useEffect(() => {
        setRefresher(false)
    }, [setting])

    React.useEffect(() => {
        !refresher && setRefresher(true)
    }, [refresher])

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
                {refresher && <>
                    <SetDataLine
                        label="run time limit (s)"
                        startText={setting.timeLimit_Second.toString()}
                        placefolder="number in seconds"
                        validate={(text) => { return !isNaN(Number(text)) }}
                        sendValue={(text) => {
                            setting.timeLimit_Second = Number(text)
                            DataCenter.updateSetting(setting)
                        }}
                    />
                    <SetDataLine
                        label="iterations limit"
                        startText={setting.iterLimit.toString()}
                        placefolder="number in seconds"
                        validate={(text) => { return !isNaN(Number(text)) }}
                        sendValue={(text) => {
                            setting.iterLimit = Number(text)
                            DataCenter.updateSetting(setting)
                        }}
                    />
                </>}
                <LabelAndIconButtons
                    label="Setting"
                    iconButtons={[
                        {
                            name: "upload",
                            function: () => { setState(States.setupLoad) }
                        },
                        {
                            name: "save",
                            function: () => { setState(States.setupSave) }
                        },
                    ]}
                />
                {refresher && <>
                    <DisplayDataLine label="Maximum cost (€)" value={result.maxCost_Euro.toFixed(2).toString()} />
                    <DisplayDataLine label="Minimum cost (€)" value={result.minCost_Euro.toFixed(2).toString()} />
                </>}
                <ButtonLine label="Algorithm" functionality={() => {
                    setState(States.algorithmChooser)
                }} />
            </Framer.Stack>
            <ButtonLine label="Start" functionality={() => {
                DataCenter.updateSetting(setting)
                props.next()
            }
            } />
            <ButtonLine label="Clean" functionality={
                props.previous
            } />
        </Framer.Stack>
        : state === States.algorithmChooser ? (
            <ChooseWindow
                onEnded={() => { setState(States.main) }}
            />
        ) : state === States.setupLoad ? (
            <SetupLoadWindow
                onEnded={() => { setState(States.main) }}
            />
        ) : state === States.setupSave && (
            <SetupSaveWindow
                onEnded={() => { setState(States.main) }}
            />
        )
    }
    </>)
}