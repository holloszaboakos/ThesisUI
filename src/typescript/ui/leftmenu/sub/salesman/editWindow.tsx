import * as React from "react"
import * as Framer from "framer"
import { CheckBoxLine } from "../lines/CheckBoxLine"
import { ButtonLine } from "../lines/ButtonLine"
import { LabelAndIconButtons } from "../lines/LabelAndIconButtons"
import * as DataCenter from "../../../../data/dataCenter"
import { SetDataLine } from "../lines/SetDataLine"
import { Objective } from "../../../../data/web/objective"
import { Salesman } from "../../../../data/web/salesman"

export function EditWindow(props: { name: string, setSalesmanName: (text) => void, onEnded: () => void }) {
    let salesman: Salesman = props.name === "" ? {
        id: "",
        name: "",
        basePriceEuro: 0,
        fuelConsuptionLiterPerMeter: 0,
        fuelPriceEuroPerLiter: 0,
        paymentEuroPerSecond: 0,
        vechicleSpeedMeterPerSecond: 0,
        volumeCapacityStere: 0,
        weightCapacityGramm: 0,
        workTimeSecondPerDay: 0
    } : DataCenter.getSalesmanByName(props.name)

    function ok() {
        if (props.name == "")
            DataCenter.addSalesman(salesman)
        else
            DataCenter.setSalesmanByOldName(props.name, salesman)
        props.setSalesmanName("")
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
                    startText={salesman.name}
                    placefolder="name"
                    validate={(text) => true}
                    sendValue={(text) => {
                        salesman.name = text
                    }}
                />
                <SetDataLine
                    label="base price (€)"
                    startText={salesman.basePriceEuro.toString()}
                    placefolder="basePriceEuro"
                    validate={(text) => true}
                    sendValue={(text) => {
                        salesman.basePriceEuro = JSON.parse(text)
                        console.log(JSON.stringify(salesman))
                        console.log(JSON.stringify(DataCenter.getSalesmanByName(props.name)))
                        console.log(props.name)
                    }}
                />
                <SetDataLine
                    label="fuel consuption (l/m)"
                    startText={salesman.fuelConsuptionLiterPerMeter.toString()}
                    placefolder="fuelConsuption"
                    validate={(text) => true}
                    sendValue={(text) => {
                        salesman.fuelConsuptionLiterPerMeter = JSON.parse(text)
                    }}
                />
                <SetDataLine
                    label="fuel price (€/l)"
                    startText={salesman.fuelPriceEuroPerLiter.toString()}
                    placefolder="fuelPrice"
                    validate={(text) => true}
                    sendValue={(text) => {
                        salesman.fuelPriceEuroPerLiter = JSON.parse(text)
                    }}
                />
                <SetDataLine
                    label="payment (€/s)"
                    startText={salesman.paymentEuroPerSecond.toString()}
                    placefolder="payment"
                    validate={(text) => true}
                    sendValue={(text) => {
                        salesman.paymentEuroPerSecond = JSON.parse(text)
                    }}
                />
                <SetDataLine
                    label="vechicle speed (m/s)"
                    startText={salesman.vechicleSpeedMeterPerSecond.toString()}
                    placefolder="vechicleSpeed"
                    validate={(text) => true}
                    sendValue={(text) => {
                        salesman.vechicleSpeedMeterPerSecond = JSON.parse(text)
                    }}
                />
                <SetDataLine
                    label="volume capacity (m^3)"
                    startText={salesman.volumeCapacityStere.toString()}
                    placefolder="volumeCapacity"
                    validate={(text) => true}
                    sendValue={(text) => {
                        salesman.volumeCapacityStere = JSON.parse(text)
                    }}
                />
                <SetDataLine
                    label="weight capacity (g)"
                    startText={salesman.weightCapacityGramm.toString()}
                    placefolder="weightCapacity"
                    validate={(text) => true}
                    sendValue={(text) => {
                        salesman.weightCapacityGramm = JSON.parse(text)
                    }}
                />
                <SetDataLine
                    label="work time (s/d)"
                    startText={salesman.workTimeSecondPerDay.toString()}
                    placefolder="workTime"
                    validate={(text) => true}
                    sendValue={(text) => {
                        salesman.workTimeSecondPerDay = JSON.parse(text)
                    }}
                />
            </Framer.Stack>
            <ButtonLine label="OK" functionality={ok} />
            <ButtonLine label="Cancle" functionality={cancle} />
        </Framer.Stack>
    )
}