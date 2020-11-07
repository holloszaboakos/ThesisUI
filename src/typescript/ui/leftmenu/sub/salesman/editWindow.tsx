import * as React from "react"
import * as Framer from "framer"
import { ButtonLine } from "../lines/ButtonLine"
import * as DataCenter from "../../../../data/dataCenter"
import { SetDataLine } from "../lines/SetDataLine"
import { Salesman } from "../../../../data/web/salesman"

export function EditWindow(props: { name: string, setSalesmanName: (text) => void, onEnded: () => void }) {
    let salesman: Salesman = props.name === "" ? {
        id: "",
        name: "",
        basePrice_Euro: 0,
        fuelConsuption_LiterPerMeter: 0,
        fuelPrice_EuroPerLiter: 0,
        paymentEuroPer_Second: 0,
        vechicleSpeed_MeterPerSecond: 0,
        volumeCapacity_Stere: 0,
        weightCapacity_Gramm: 0,
        workTime_SecondPerDay: 0
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
                    validate={() => true}
                    sendValue={(text) => {
                        salesman.name = text
                    }}
                />
                <SetDataLine
                    label="base price (€)"
                    startText={salesman.basePrice_Euro.toString()}
                    placefolder="basePriceEuro"
                    validate={() => true}
                    sendValue={(text) => {
                        salesman.basePrice_Euro = JSON.parse(text)
                        console.log(JSON.stringify(salesman))
                        console.log(JSON.stringify(DataCenter.getSalesmanByName(props.name)))
                        console.log(props.name)
                    }}
                />
                <SetDataLine
                    label="fuel consuption (l/m)"
                    startText={salesman.fuelConsuption_LiterPerMeter.toString()}
                    placefolder="fuelConsuption"
                    validate={() => true}
                    sendValue={(text) => {
                        salesman.fuelConsuption_LiterPerMeter = JSON.parse(text)
                    }}
                />
                <SetDataLine
                    label="fuel price (€/l)"
                    startText={salesman.fuelPrice_EuroPerLiter.toString()}
                    placefolder="fuelPrice"
                    validate={() => true}
                    sendValue={(text) => {
                        salesman.fuelPrice_EuroPerLiter = JSON.parse(text)
                    }}
                />
                <SetDataLine
                    label="payment (€/s)"
                    startText={salesman.paymentEuroPer_Second.toString()}
                    placefolder="payment"
                    validate={() => true}
                    sendValue={(text) => {
                        salesman.paymentEuroPer_Second = JSON.parse(text)
                    }}
                />
                <SetDataLine
                    label="vechicle speed (m/s)"
                    startText={salesman.vechicleSpeed_MeterPerSecond.toString()}
                    placefolder="vechicleSpeed"
                    validate={() => true}
                    sendValue={(text) => {
                        salesman.vechicleSpeed_MeterPerSecond = JSON.parse(text)
                    }}
                />
                <SetDataLine
                    label="volume capacity (m^3)"
                    startText={salesman.volumeCapacity_Stere.toString()}
                    placefolder="volumeCapacity"
                    validate={() => true}
                    sendValue={(text) => {
                        salesman.volumeCapacity_Stere = JSON.parse(text)
                    }}
                />
                <SetDataLine
                    label="weight capacity (g)"
                    startText={salesman.weightCapacity_Gramm.toString()}
                    placefolder="weightCapacity"
                    validate={() => true}
                    sendValue={(text) => {
                        salesman.weightCapacity_Gramm = JSON.parse(text)
                    }}
                />
                <SetDataLine
                    label="work time (s/d)"
                    startText={salesman.workTime_SecondPerDay.toString()}
                    placefolder="workTime"
                    validate={() => true}
                    sendValue={(text) => {
                        salesman.workTime_SecondPerDay = JSON.parse(text)
                    }}
                />
            </Framer.Stack>
            <ButtonLine label="OK" functionality={ok} />
            <ButtonLine label="Cancle" functionality={cancle} />
        </Framer.Stack>
    )
}