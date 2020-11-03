import * as React from "react"
import * as Framer from "framer"
import { ButtonLine } from "../lines/ButtonLine"
import * as DataCenter from "../../../../data/dataCenter"
import { SetDataLine } from "../lines/SetDataLine"
import { Objective } from "../../../../data/web/objective"

export function EditWindow(props: { name: string, setObjectiveName: (text) => void, onEnded: () => void }) {
    let objective: Objective = props.name == "" ?
        {
            id: "",
            name: "",
            location: { longitude: 0, lattitude: 0 },
            timeSecond: 0,
            volumeStere: 0,
            weightGramm: 0,
        } :
        DataCenter.getObjectiveByName(props.name)

    function ok() {
        if (props.name == "")
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
                validate={() => true}
                sendValue={(text) => {
                    objective.location.longitude = JSON.parse(text)
                }}
            />
            <SetDataLine
                label="location lattitude"
                startText={objective.location.lattitude.toString()}
                placefolder="lattitude"
                validate={() => true}
                sendValue={(text) => {
                    objective.location.lattitude = JSON.parse(text)
                }}
            />
            <SetDataLine
                label="time (s)"
                startText={objective.timeSecond.toString()}
                placefolder="time"
                validate={() => true}
                sendValue={(text) => {
                    objective.timeSecond = JSON.parse(text)
                }}
            />
            <SetDataLine
                label="volume (m^3)"
                startText={objective.volumeStere.toString()}
                placefolder="volume"
                validate={() => true}
                sendValue={(text) => {
                    objective.volumeStere = JSON.parse(text)
                }}
            />
            <SetDataLine
                label="weight (g)"
                startText={objective.weightGramm.toString()}
                placefolder="weight"
                validate={() => true}
                sendValue={(text) => {
                    objective.weightGramm = JSON.parse(text)
                }}
            />
        </Framer.Stack>
        <ButtonLine label="OK" functionality={ok} />
        <ButtonLine label="Cancle" functionality={cancle} />

    </Framer.Stack>
    )
}