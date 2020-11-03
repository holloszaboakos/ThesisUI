import * as React from "react"
import * as Framer from "framer"
import { SetDataLine } from "./sub/lines/SetDataLine"
import { LabelAndIconButtons } from "./sub/lines/LabelAndIconButtons"
import { ButtonLine } from "./sub/lines/ButtonLine"
import { EditWindow as SalesmanEditWindow } from "./sub/salesman/EditWindow"
import { DeleteWindow as SalesmanDeleteWindow } from "./sub/salesman/DeleteWindow"
import { ListWindow as SalesmanListWindow } from "./sub/salesman/ListWindow"
import { EditWindow as ObjectiveEditWindow } from "./sub/objective/EditWindow"
import { DeleteWindow as ObjectiveDeleteWindow } from "./sub/objective/DeleteWindow"
import { ListWindow as ObjectiveListWindow } from "./sub/objective/ListWindow"
import { LoadWindow as SetupLoadWindow } from "./sub/setup/LoadWindow"
import { SaveWindow as SetupSaveWindow } from "./sub/setup/SaveWindow"
import { LoadWindow as StateLoadWindow } from "./sub/state/LoadWindow"
import { SaveWindow as StateSaveWindow } from "./sub/state/SaveWindow"
import * as DataCenter from "../../data/dataCenter"
import * as WebInterface from "../../web/webinterface"
import { Setup } from "../../data/web/setup"


export function SetupWindow(props: { set: () => void }) {
    enum States {
        main,
        salesmanView,
        salesmanEdit,
        salesmanAdd,
        salesmanRemove,
        objectiveView,
        objectiveEdit,
        objectiveAdd,
        objectiveRemove,
        setupLoad,
        setupSave,
        stateLoad,
        stateSave,
    }

    const [salesmanName, setSalesmanName] = React.useState("")
    const [objectiveName, setObjectiveName] = React.useState("")
    const [state, setState] = React.useState(States.main)
    const [timeLimit, setTimeLimit] = React.useState(DataCenter.getSetup().timeLimitSecond)
    const [iterationLimit, setIterationLimit] = React.useState(DataCenter.getSetup().iterLimit)

    function onSetupChange(setup: Setup) {
        setTimeLimit(setup.timeLimitSecond)
        setIterationLimit(setup.iterLimit)
    }

    //onAttach
    React.useEffect(() => {
        DataCenter.addAlgorithmChangeCallBack(onSetupChange)
    }, [])
    //onDetach
    React.useEffect(() => {
        return () => {
            DataCenter.removeAlgorithmChangeCallBack(onSetupChange)
        }
    }, [])

    return (<>
        {
            state === States.main ?
                (<Framer.Stack
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
                        <LabelAndIconButtons
                            label="salesmen"
                            iconButtons={[
                                {
                                    name: "eye",
                                    function: () => { setState(States.salesmanView) }
                                },
                                {
                                    name: "plus",
                                    function: () => { setState(States.salesmanAdd) }
                                },
                                {
                                    name: "trash",
                                    function: () => { setState(States.salesmanRemove) }
                                },
                            ]}
                        />
                        <LabelAndIconButtons
                            label="objectives"
                            iconButtons={[
                                {
                                    name: "eye",
                                    function: () => { setState(States.objectiveView) }
                                },
                                {
                                    name: "plus",
                                    function: () => { setState(States.objectiveAdd) }
                                },
                                {
                                    name: "trash",
                                    function: () => { setState(States.objectiveRemove) }
                                },
                            ]}
                        />
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
                        <LabelAndIconButtons
                            label="setup"
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
                        <LabelAndIconButtons
                            label="state"
                            iconButtons={[
                                {
                                    name: "upload",
                                    function: () => { setState(States.stateLoad) }
                                },
                                {
                                    name: "save",
                                    function: () => { setState(States.stateSave) }
                                },
                            ]}
                        />
                    </Framer.Stack>
                    <ButtonLine label="Set" functionality={props.set} />
                </Framer.Stack>
                )
                : state === States.salesmanView ? (
                    <SalesmanListWindow
                        setSalesmanName={setSalesmanName}
                        onChosen={() => { setState(States.salesmanEdit) }}
                        onEnded={() => { setState(States.main) }}
                    />
                ) : state === States.salesmanEdit ? (
                    <SalesmanEditWindow
                        name={salesmanName}
                        setSalesmanName={setSalesmanName}
                        onEnded={() => { setState(States.salesmanView) }}
                    />
                ) : state === States.salesmanAdd ? (
                    <SalesmanEditWindow
                        name=""
                        setSalesmanName={setSalesmanName}
                        onEnded={() => { setState(States.main) }} />
                ) : state === States.salesmanRemove ? (
                    <SalesmanDeleteWindow
                        labels={DataCenter.viewSalesman()}
                        onEnded={() => { setState(States.main) }}
                    />
                ) : state === States.objectiveView ? (
                    <ObjectiveListWindow
                        setObjectiveName={setObjectiveName}
                        onChosen={() => { setState(States.objectiveEdit) }}
                        onEnded={() => { setState(States.main) }}
                    />
                ) : state === States.objectiveEdit ? (
                    <ObjectiveEditWindow
                        name={objectiveName}
                        setObjectiveName={setObjectiveName}
                        onEnded={() => { setState(States.objectiveView) }} />
                ) : state === States.objectiveAdd ? (
                    <ObjectiveEditWindow
                        name=""
                        setObjectiveName={setObjectiveName}
                        onEnded={() => { setState(States.main) }} />
                ) : state === States.objectiveRemove ? (
                    <ObjectiveDeleteWindow
                        labels={DataCenter.viewObjectives()}
                        onEnded={() => { setState(States.main) }}
                    />
                ) : state === States.setupLoad ? (
                    <SetupLoadWindow
                        onEnded={() => { setState(States.main) }}
                    />
                ) : state === States.setupSave ? (
                    <SetupSaveWindow
                        onEnded={() => { setState(States.main) }}
                    />
                ) : state === States.stateLoad ? (
                    <StateLoadWindow
                        onEnded={() => { setState(States.main) }}
                    />
                ) : state === States.stateSave && (
                    <StateSaveWindow
                        onEnded={() => { setState(States.main) }}
                    />
                )
        }</>)
}