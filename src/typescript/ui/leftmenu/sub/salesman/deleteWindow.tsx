import * as React from "react"
import * as Framer from "framer"
import { CheckBoxLine } from "../lines/CheckBoxLine"
import { ButtonLine } from "../lines/ButtonLine"
import { LabelAndIconButtons } from "../lines/LabelAndIconButtons"
import * as DataCenter from "../../../../data/dataCenter"

export function DeleteWindow(props: { labels: string[], onEnded: () => void }) {

    let checked = [] as string[]
    function onCheckChange(salesmanName: string) {
        if (salesmanName in checked)
            checked = checked.filter(name => { return name !== salesmanName })
        else
            checked.push(salesmanName)
    }

    function ok() {
        DataCenter.removeSalesmen(checked)
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
            <Framer.Scroll
                width="100%"
                height="1fr">
                <Framer.Stack
                    width="100%"
                    height={56 * LabelAndIconButtons.length}
                    direction="vertical"
                    distribution="start"
                    alignment="center"
                    gap={8}
                >
                    {props.labels.map(label => (
                        <CheckBoxLine label={label} groupName={"salesman"} onCheckChange={onCheckChange} />
                    ))}
                </Framer.Stack>
            </Framer.Scroll>
            <ButtonLine label="OK" functionality={ok} />
            <ButtonLine label="Cancle" functionality={cancle} />

        </Framer.Stack>
    )
}