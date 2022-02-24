import * as React from "react"
import * as Framer from "framer"
import { ButtonLine } from "../lines/ButtonLine"
import * as DataCenter from "../../../../data/dataCenter"
import { SetDataLine } from "../lines/SetDataLine"
import { Objective } from "../../../../data/web/objective"
import { Gps } from "../../../../data/web/gps"

export function EditWindow(props: { name: string, setObjectiveName: (text) => void, onEnded: () => void }) {
    const [objective, setObjective] = React.useState(
        props.name === "" ?
            {
                id: "",
                orderInOwner: 0,
                name: "",
                location: { longitude: 0, lattitude: 0 },
                time_Second: 0,
                volume_Stere: 0,
                weight_Gramm: 0,
            } as Objective
            : DataCenter.getObjectiveByName(props.name)
    )
    const [refresher, setRefresher] = React.useState(true)
    function setPos(pos: Gps) {
        objective.location = pos
        setObjective(objective)
        setRefresher(!refresher)
    }
    React.useEffect(() => {
        DataCenter.addPosChangeCallBack(setPos)
    }, [])
    React.useEffect(() => {
        return () => {
            DataCenter.removePosChangeCallBack(setPos)
        }
    }, [])
    React.useEffect(() => {
        !refresher && setRefresher(!refresher)
    }, [refresher])

    function ok() {
        if (props.name === "")
            DataCenter.addObjective(objective)
        else
            DataCenter.setObjectiveByOldName(props.name, objective)
        props.setObjectiveName("")
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
    >
        {refresher && (<>
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
                    startText={objective.name}
                    placefolder="name"
                    validate={() => true}
                    sendValue={(text) => {
                        objective.name = text
                    }}
                />
                <SetDataLine
                    label="location longitude"
                    startText={objective.location.longitude.toString()}
                    placefolder="longitude"
                    validate={(text) => !isNaN(Number(text)) && Number(text) <= 180 && Number(text) >= -180}
                    sendValue={(text) => {
                        objective.location.longitude = Number(text)
                    }}
                />
                <SetDataLine
                    label="location lattitude"
                    startText={objective.location.lattitude.toString()}
                    placefolder="lattitude"
                    validate={(text) => !isNaN(Number(text)) && Number(text) <= 90 && Number(text) >= -90}
                    sendValue={(text) => {
                        objective.location.lattitude = Number(text)
                    }}
                />
                <SetDataLine
                    label="time (s)"
                    startText={objective.time_Second.toString()}
                    placefolder="time"
                    validate={(text) => !isNaN(Number(text)) && Number(text) < 1000000000 && Number(text) >= 0}
                    sendValue={(text) => {
                        objective.time_Second = Number(text)
                    }}
                />
                <SetDataLine
                    label="volume (m^3)"
                    startText={objective.volume_Stere.toString()}
                    placefolder="volume"
                    validate={(text) => !isNaN(Number(text)) && Number(text) < 1000000000 && Number(text) >= 0}
                    sendValue={(text) => {
                        objective.volume_Stere = Number(text)
                    }}
                />
                <SetDataLine
                    label="weight (g)"
                    startText={objective.weight_Gramm.toString()}
                    placefolder="weight"
                    validate={(text) => !isNaN(Number(text)) && Number(text) < 1000000000 && Number(text) >= 0}
                    sendValue={(text) => {
                        objective.weight_Gramm = Number(text)
                    }}
                />
            </Framer.Stack>
            <ButtonLine label="OK" functionality={ok} />
            <ButtonLine label="Cancle" functionality={cancle} />
        </>)}
    </Framer.Stack>
    )
}