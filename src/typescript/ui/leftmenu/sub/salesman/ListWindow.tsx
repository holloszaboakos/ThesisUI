import * as React from "react"
import * as Framer from "framer"
import { ButtonLine } from "../lines/ButtonLine"
import * as DataCenter from "../../../../data/dataCenter"

export function ListWindow(props: { setSalesmanName: (text: string) => void, onChosen: () => void, onEnded: () => void }) {

    const [labels] = React.useState(DataCenter.viewSalesman())

    function ok() {
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
                    height={56 * labels.length}
                    direction="vertical"
                    distribution="start"
                    alignment="center"
                    gap={8}
                >
                    {labels.map(label => (
                        <ButtonLine
                            label={label}
                            functionality={() => {
                                props.setSalesmanName(label)
                                console.log(label)
                                props.onChosen()
                            }}
                        />
                    ))}
                </Framer.Stack>
            </Framer.Scroll>
            <ButtonLine label="OK" functionality={ok} />

        </Framer.Stack>
    )
}