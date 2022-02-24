import * as React from "react"
import * as Framer from "framer"
import { ButtonLine } from "../lines/ButtonLine"
import * as DataCenter from "../../../../data/dataCenter"
import { SetDataLine } from "../lines/SetDataLine"
import { Salesman } from "../../../../data/web/salesman"

export function EditWindow(props: { name: string, setSalesmanName: (text) => void, onEnded: () => void }) {
    const [salesman] = React.useState(props.name === "" ? {
        id: "",
        name: "",
        orderInOwner: 0,
        basePrice_Euro: 0,
        fuelConsuption_LiterPerMeter: 0,
        fuelPrice_EuroPerLiter: 0,
        payment_EuroPerSecond: 0,
        vechicleSpeed_MeterPerSecond: 0,
        volumeCapacity_Stere: 0,
        weightCapacity_Gramm: 0,
        workTime_SecondPerDay: 0
    }as Salesman : DataCenter.getSalesmanByName(props.name))

    function ok() {
        if (props.name === "")
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
                    startText={salesman.basePrice_Euro.toString()}
                    placefolder="basePriceEuro"
                    validate={(text) => !isNaN(Number(text)) && Number(text) < 1000000000 && Number(text) >= 0}
                    sendValue={(text) => {
                        salesman.basePrice_Euro = Number(text)
                    }}
                />
                <SetDataLine
                    label="fuel consuption (l/m)"
                    startText={salesman.fuelConsuption_LiterPerMeter.toString()}
                    placefolder="fuelConsuption"
                    validate={(text) => !isNaN(Number(text)) && Number(text) < 1000000000 && Number(text) >= 0}
                    sendValue={(text) => {
                        salesman.fuelConsuption_LiterPerMeter = Number(text)
                    }}
                />
                <SetDataLine
                    label="fuel price (€/l)"
                    startText={salesman.fuelPrice_EuroPerLiter.toString()}
                    placefolder="fuelPrice"
                    validate={(text) => !isNaN(Number(text)) && Number(text) < 1000000000 && Number(text) >= 0}
                    sendValue={(text) => {
                        salesman.fuelPrice_EuroPerLiter = Number(text)
                    }}
                />
                <SetDataLine
                    label="payment (€/s)"
                    startText={salesman.payment_EuroPerSecond.toString()}
                    placefolder="payment"
                    validate={(text) => !isNaN(Number(text)) && Number(text) < 1000000000 && Number(text) >= 0}
                    sendValue={(text) => {
                        salesman.payment_EuroPerSecond = Number(text)
                    }}
                />
                <SetDataLine
                    label="vechicle speed (m/s)"
                    startText={salesman.vechicleSpeed_MeterPerSecond.toString()}
                    placefolder="vechicleSpeed"
                    validate={(text) => !isNaN(Number(text)) && Number(text) < 1000000000 && Number(text) >= 0}
                    sendValue={(text) => {
                        salesman.vechicleSpeed_MeterPerSecond = Number(text)
                    }}
                />
                <SetDataLine
                    label="volume capacity (m^3)"
                    startText={salesman.volumeCapacity_Stere.toString()}
                    placefolder="volumeCapacity"
                    validate={(text) => !isNaN(Number(text)) && Number(text) < 1000000000 && Number(text) >= 0}
                    sendValue={(text) => {
                        salesman.volumeCapacity_Stere = Number(text)
                    }}
                />
                <SetDataLine
                    label="weight capacity (g)"
                    startText={salesman.weightCapacity_Gramm.toString()}
                    placefolder="weightCapacity"
                    validate={(text) => !isNaN(Number(text)) && Number(text) < 1000000000 && Number(text) >= 0}
                    sendValue={(text) => {
                        salesman.weightCapacity_Gramm = Number(text)
                    }}
                />
                <SetDataLine
                    label="work time (s/d)"
                    startText={salesman.workTime_SecondPerDay.toString()}
                    placefolder="workTime"
                    validate={(text) => !isNaN(Number(text)) && Number(text) < 1000000000 && Number(text) >= 0}
                    sendValue={(text) => {
                        salesman.workTime_SecondPerDay = Number(text)
                    }}
                />
            </Framer.Stack>
            <ButtonLine label="OK" functionality={ok} />
            <ButtonLine label="Cancle" functionality={cancle} />
        </Framer.Stack>
    )
}