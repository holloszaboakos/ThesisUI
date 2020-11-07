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
import { LoadWindow as TaskLoadWindow } from "./sub/task/LoadWindow"
import { SaveWindow as TaskSaveWindow } from "./sub/task/SaveWindow"
import { LoadWindow as SetupLoadWindow } from "./sub/setting/LoadWindow"
import { SaveWindow as SetupSaveWindow } from "./sub/setting/SaveWindow"
import * as DataCenter from "../../data/dataCenter"
import { Setting } from "../../data/web/setting"


export function TaskWindow(props: { set: () => void }) {

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
        taskLoad,
        taskSave,
        setupLoad,
        setupSave,
        progressLoad,
        progressSave,
    }

    const [salesmanName, setSalesmanName] = React.useState("")
    const [objectiveName, setObjectiveName] = React.useState("")
    const [state, setState] = React.useState(States.main)

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
                        <LabelAndIconButtons
                            label="task"
                            iconButtons={[
                                {
                                    name: "upload",
                                    function: () => { setState(States.taskLoad) }
                                },
                                {
                                    name: "save",
                                    function: () => { setState(States.taskSave) }
                                },
                            ]}
                        />
                        <LabelAndIconButtons
                            label="setting"
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
                    </Framer.Stack>
                    <ButtonLine label="Set Task" functionality={props.set} />
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
                ) : state === States.taskLoad ? (
                    <TaskLoadWindow
                        onEnded={() => { setState(States.main) }}
                    />
                ) : state === States.taskSave ? (
                    <TaskSaveWindow
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
        }</>)
}