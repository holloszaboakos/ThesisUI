import *as  React from "react"
import *as Framer from "framer"

//multywindow:

const state = Framer.Data({
    viewIndex: 0,
    viewIds: ["IconMap", "IconTimeLine", "IconTable"],
    dataIndex: 0,
    dataIds: ["IconTransportGroup", "IconTransport", "IconPath"],
})

export function ViewFrame(props): Framer.Override {
    return {
        visible: state.viewIds.indexOf("Icon" + props.name) === state.viewIndex,
        disabled:
            state.viewIds.indexOf("Icon" + props.name) !== state.viewIndex,
    }
}

export function PreviosViewIcon(props): Framer.Override {
    return {
        visible:
            (state.viewIds.indexOf(props.name) + 1) % 3 === state.viewIndex,
        disabled:
            (state.viewIds.indexOf(props.name) + 1) % 3 !== state.viewIndex,
    }
}

export function NextViewIcon(props): Framer.Override {
    return {
        visible:
            (state.viewIds.indexOf(props.name) + 2) % 3 === state.viewIndex,
        disabled:
            (state.viewIds.indexOf(props.name) + 2) % 3 !== state.viewIndex,
    }
}

export function PreviosDataIcon(props): Framer.Override {
    return {
        visible:
            (state.dataIds.indexOf(props.name) + 1) % 3 === state.dataIndex,
        disabled:
            (state.dataIds.indexOf(props.name) + 1) % 3 !== state.dataIndex,
    }
}

export function NextDataIcon(props): Framer.Override {
    return {
        visible:
            (state.dataIds.indexOf(props.name) + 2) % 3 === state.dataIndex,
        disabled:
            (state.dataIds.indexOf(props.name) + 2) % 3 !== state.dataIndex,
    }
}

export function NextViewButton(): Framer.Override {
    return {
        onClick: function () {
            state.viewIndex = (state.viewIndex + 1) % 3
        },
    }
}

export function PreviousViewButton(): Framer.Override {
    return {
        onClick: function () {
            state.viewIndex = (state.viewIndex + 2) % 3
        },
    }
}

export function NextDataButton(): Framer.Override {
    return {
        onClick: function () {
            state.dataIndex = (state.dataIndex + 1) % 3
        },
    }
}

export function PreviousDataButton(): Framer.Override {
    return {
        onClick: function () {
            state.dataIndex = (state.dataIndex + 2) % 3
        },
    }
}

timelinevertex:

// Learn more: https://framer.com/api

export function TimeLineVertex(props) {
    const { text, tint, onTap, ...rest } = props

    return (
        <Framer.Frame
            background={tint}
            onTap={onTap}
            whileHover={{
                scale: 1.1,
            }}
            style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
            }}
        >
            { text}
        </Framer.Frame>
    )
}

TimeLineVertex.defaultProps = {
    height: 128,
    width: 240,
    text: "Get started!",
    tint: "#0099ff",
}

timelineline:

// Learn more: https://framer.com/api

export function TimeLineLine(props) {
    const { startTime, endTime, time, length } = props

    return (
        <Framer.Stack
            width="1fr"
            height="100%"
            direction="vertical"
            distribution="start"
            alignment="center"
            overflow="hidden"
        >
            <Framer.Stack
                width="100%"
                height="1fr"
                direction="horizontal"
                distribution="space-evenly"
                alignment="end"
                paddingTop={0}
                paddingLeft={13}
                paddingRight={13}
                paddingBottom={0}
                overflow="hidden"
            >
                <Framer.Frame
                    width="1fr"
                    height="100%"
                    style={{
                        flex: 1,
                        width: 1,
                        height: "100%",
                        overflow: "hidden",
                        fontFamily: `"Inter-ExtraBold", "Inter", sans-serif`,
                        color: "#000000",
                        fontSize: 16,
                        letterSpacing: 0,
                        lineHeight: 1.2,
                        fontWeight: 800,
                        textAlign: "left",
                    }
                    }
                >
                    {" "}
                    {startTime} {" "}
                </Framer.Frame>
                <Framer.Frame
                    width="1fr"
                    height="100%"
                    style={{
                        flex: 1,
                        width: 1,
                        height: "100%",
                        overflow: "hidden",
                        fontFamily: `"Inter-ExtraBold", "Inter", sans-serif`,
                        color: "#000000",
                        fontSize: 16,
                        letterSpacing: 0,
                        lineHeight: 1.2,
                        fontWeight: 800,
                        textAlign: "center",
                    }}
                >
                    {time}
                </Framer.Frame>
                < Framer.Frame
                    width="1fr"
                    height="100%"
                    style={{
                        flex: 1,
                        width: 1,
                        height: "100%",
                        overflow: "hidden",
                        fontFamily: `"Inter-ExtraBold", "Inter", sans-serif`,
                        color: "#000000",
                        fontSize: 16,
                        letterSpacing: 0,
                        lineHeight: 1.2,
                        fontWeight: 800,
                        textAlign: "right",
                    }}
                >
                    {endTime}
                </Framer.Frame>
            </Framer.Stack>
            < Framer.Frame
                width="100%"
                height={8}
                overflow="hidden"
                backgroundColor="#050505"
                borderRadius={4}
                shadow="0px 4px 8px 0px rgba(0, 0, 0, 0.5)"
            > </Framer.Frame>
            < Framer.Frame
                width="100%"
                height="1fr"
                style={{
                    width: "100%",
                    flex: 1,
                    height: 1,
                    overflow: "hidden",
                    fontFamily: `"Inter-Bold", "Inter", sans-serif`,
                    color: "#000000",
                    fontSize: 16,
                    letterSpacing: 0,
                    lineHeight: 1.2,
                    fontWeight: 700,
                    textAlign: "center",
                }}
            >
                {length}
            </Framer.Frame>
        </Framer.Stack>
    )
}

timelinecontainer:

// Learn more: https://framer.com/api

export function TimeLineContainer(props) {
    const { text, tint, onTap, ...rest } = props

    return (
        <Framer.Frame
            {...rest}
            background={tint}
            onTap={onTap}
            whileHover={{
                scale: 1.1,
            }
            }
            style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
            }}
        >
            {text}
        </Framer.Frame>
    )
}

TimeLineContainer.defaultProps = {
    height: 128,
    width: 240,
    text: "Get started!",
    tint: "#0099ff",
}

timelinecolumn:

// Learn more: https://framer.com/api

export function TimeLineColumn(texts) {
    return (
        <Framer.Stack
            width={1}
            height="100%"
            direction="vertical"
            distribution="start"
            alignment="center"
            overflow="hidden"
            backgroundColor="#A0A0a0"
            borderRadius="0 0 32px 32px"
            shadow="8px 8px 8px 0px rgba(160, 160, 160, 0.5)"
            style={{
                width: "100%",
                flex: 1,
                height: 1,
                overflow: "hidden",
                fontFamily: `"Inter-ExtraBold", "Inter", sans-serif`,
                color: "#ffffff",
                fontSize: 16,
                letterSpacing: 0,
                lineHeight: 1.2,
                fontWeight: 800,
                textAlign: "center",
            }
            }
        >
            {
                texts.map(
                    <Framer.Frame height="1fr" width="100%" background="#00000000" >
                        it
                    </Framer.Frame>
                )
            }
        </Framer.Stack >
    )
}

TimeLineColumn.defaultProps = {
    height: 128,
    width: 240,
    text: "Get started!",
    tint: "#0099ff",
}

//timeline:

export function TimeLine(props) {
    const { text, tint, onTap, ...rest } = props

    return (
        <Framer.Stack
            width={2412}
            height={324}
            direction="vertical"
            distribution="space-evenly"
            alignment="center"
            overflow="hidden"
        >
            <Framer.Stack
                width="100%"
                height="67%"
                direction="horizontal"
                distribution="start"
                alignment="center"
                overflow="hidden"
                backgroundColor="rgba(255, 255, 255, 0)"
            > </Framer.Stack>
            < Framer.Stack
                width="100%"
                height="34%"
                direction="horizontal"
                distribution="start"
                alignment="center"
                padding={4}
                overflow="hidden"
                backgroundColor="rgba(255, 255, 255, 0)"
            > </Framer.Stack>
        </Framer.Stack>
    )
}

TimeLine.defaultProps = {
    height: 128,
    width: 240,
    text: "Get started!",
    tint: "#0099ff",
}



//staticlist:

export function StaticLimitList(props) {
    const { radius, fill, ...rest } = props

    const [limitList, setLimitList] = React.useState(state.limitList)
    const [active, setActive] = React.useState(true)

    function updateLimitList(ll: Limit[]) {
        setLimitList(ll)
        setActive(false)
    }

    React.useEffect(() => {
        console.log("mount")
        state.limitDataUpdateCallBacks.push(updateLimitList)
        console.log("mount done")
    }, [])

    React.useEffect(() => {
        if (!active) setActive(true)
    }, [active])

    React.useEffect(() => {
        // componentWillUnmount
        return () => {
            console.log("unmount")
            let lducb = []
            state.limitDataUpdateCallBacks.forEach((it) => {
                if (it != updateLimitList) {
                    lducb.push(it)
                }
            })

            state.limitDataUpdateCallBacks = lducb
            console.log("unmount done")
        }
    }, [])

    return (
        <Framer.Stack
            {...rest}
            height={limitList.length * 96 + "px"}
            radius={radius}
            background={fill}
            gap={32}
            padding={16}
            style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
            }
            }
        >
            {active &&
                limitList.map((line, index) => (
                    <StaticLimitLine
                        key={line.order}
                        name={"lineLF" + (index + 1)}
                        width="100%"
                        type={
                            state.limitTypeList.find((it) => {
                                returnit.id == line.typeId
                            }).name
                        }
                        value={line.value}
                        unit={
                            state.limitTypeList.find((it) => {
                                returnit.id == line.typeId
                            }).unit
                        }
                    />
                ))}
        </Framer.Stack>
    )
}


staticline:

// Learn more: https://framer.com/api
export function StaticLimitLine(props) {
    const { name, width, type, value, unit } = props
    return (
        <Framer.Stack
            name={props.name}
            height={"64px"}
            width={props.width}
            radius="100px 0px 0px 100px"
            background={"#A0A0A0"}
            shadow="0px 8px 8px 0px rgba(64, 64, 64, 0.5)"
            direction={"horizontal"}
            distribution={"start"}
            alignment="center"
            gap={22}
            paddingTop={16}
            paddingRight={0}
            paddingBottom={16}
            paddingLeft={16}
            overflow="hidden"
            style={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: 24,
            }
            }
        >
            <Framer.Stack
                height="100%"
                width="1fr"
                background="#00000000"
                direction={"horizontal"}
                distribution={"end"}
            >
                <Framer.Frame
                    height="100%"
                    width="fit-content"
                    background="#00000000"
                >
                    {props.type}:
</Framer.Frame>
            </Framer.Stack>
            < Framer.Stack
                height="100%"
                width="0.5fr"
                background="#00000000"
                direction={"horizontal"}
                distribution={"end"}
            >
                <Framer.Frame
                    height="100%"
                    width="fit-content"
                    background="#00000000"
                >
                    {props.value}
                </Framer.Frame>
            </Framer.Stack>
            < Framer.Stack
                height="100%"
                width="0.5fr"
                background="#00000000"
                direction={"horizontal"}
                distribution={"start"}
            >
                <Framer.Frame
                    height="100%"
                    width="fit-content"
                    background="#00000000"
                >
                    {props.unit}
                </Framer.Frame>
            </Framer.Stack>
        </Framer.Stack>
    )
}

progressline:

export function LimitProgressLine(props) {
    const {
        ownerId,
        order,
        value,
        b as eValue,
        unit,

        updatePercent,

        backgroundColor,
        progressBarBackgroundColor,
        progressBarColor,
        ...rest
    } = props

    function getPercent() {
        if (value > b as eValue)
            return ((b as eValue / value) * 100).toString() + "%"
        return ((value / b as eValue) * 100).toString() + "%"
    }

    return (
        <Framer.Stack
            {...rest}
            width="100%"
            height="64px"
            direction={"horizontal"}
            distribution={"start"}
            alignment={"center"}
            paddingTop={16}
            paddingRight={32}
            paddingBottom={16}
            paddingLeft={32}
            radius="0 32px 32px 0"
            shadow="0px 8px 8px 0px rgba(64, 64, 64, 0.5)"
            background={backgroundColor}
        >
            <Framer.Frame
                height="100%"
                width="fit-content"
                background="#00000000"
                style={{
                    color: "#ffffff",
                    fontFamily: `"Inter-ExtraBold", "Inter", sans-serif`,
                    fontSize: 20,
                    fontWeight: 800,
                    letterSpacing: 0,
                    lineHeight: 1.2,
                }
                }
            >
                {(Math.round(value * 100) / 100.0).toString() + " " + unit}
            </Framer.Frame>
            < Framer.Stack
                height="8px"
                width="3fr"
                direction="horizontal"
                distribution="start"
                alignment="start"
                overflow="visible"
                background={progressBarBackgroundColor}
                radius="4px"
            >
                <Framer.Frame
                    height="100%"
                    width={getPercent()}
                    overflow="hidden"
                    background={progressBarColor}
                    radius="4px"
                > </Framer.Frame>
            </Framer.Stack>
        </Framer.Stack>
    )
}


progresslist:

export function LimitProgressList(props) {
    const { fill, ...rest } = props

    const [progressList, setProgressList] = React.useState(state.progressList)
    const [active, setActive] = React.useState(true)
    const [resumed, setResumed] = React.useState(state.resumed)

    function updateProgressList(ProgressList: Progress[]) {
        console.log("PROGRESS UPDATE")
        setProgressList(ProgressList)
        setActive(false)
        console.log("PROGRESS UPDATED")
    }

    function updateResumed(resumed: boolean) {
        console.log("RESUME UPDATE")
        setResumed(resumed)
        console.log("RESUME UPDATED")
    }

    React.useEffect(() => {
        state.progressUpdateCallBacks.push(updateProgressList)
        state.resumedUpdateCallBacks.push(updateResumed)
    }, [])

    React.useEffect(() => {
        if (!active) setActive(true)
    }, [active])

    React.useEffect(() => {
        return () => {
            let pucb = []
            state.progressUpdateCallBacks.forEach((it) => {
                if (it != updateProgressList) {
                    pucb.push(it)
                }
            })
            state.progressUpdateCallBacks = pucb

            let rucb = []
            state.resumedUpdateCallBacks.forEach((it) => {
                if (it != updateResumed) {
                    rucb.push(it)
                }
            })
            state.resumedUpdateCallBacks = rucb
        }
    }, [])

    return (
        <Framer.Stack
            {...rest}
            height={progressList.length * 96 + "px"}
            background={fill}
            distribution={"start"}
            gap={32}
            padding={16}
            style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
            }
            }
        >
            {active &&
                progressList.map((line, index) => (
                    <LimitProgressLine
                        key={line.id}
                        id={line.id}
                        bas eValue={
                            state.limitList.find((limit) => {
                                console.log(
                                    "Bas E" +
                                    JSON.stringify(limit) +
                                    "-" +
                                    JSON.stringify(line)
                                )
                                return (
                                    limit.order == line.order &&
                                    limit.ownerId == line.ownerId
                                )
                            }).value
                        }
                        value={line.value}
                        unit={
                            state.limitTypeList.find((type) => {
                                console.log("UNIT")
                                return (
                                    state.limitList.find((limit) => {
                                        return (
                                            limit.order == line.order &&
                                            limit.ownerId == line.ownerId
                                        )
                                    }).typeId == type.id
                                )
                            }).unit
                        }
                        width="100%"
                        backgroundColor={"#A0A0A0"}
                        progressBarBackgroundColor={"#606060"}
                        progressBarColor={"#E0E0E0"}
                    />
                ))}
        </Framer.Stack>
    )
}

dynamiclist:
export function LimitList(props) {
    const { radius, fill, ...rest } = props

    const [progressList, setProgressList] = React.useState(state.progressList)
    const [limitList, setLimitList] = React.useState(state.limitList)
    const [active, setActive] = React.useState(true)

    function updateLimitList(ll: Limit[]) {
        setLimitList(ll)
        setActive(false)
    }

    function updateProgressList(pl: Progress[]) {
        setProgressList(pl)
    }

    React.useEffect(() => {
        state.limitDataUpdateCallBacks.push(updateLimitList)
        state.progressUpdateCallBacks.push(updateProgressList)
    }, [])

    React.useEffect(() => {
        if (!active) setActive(true)
    }, [active])

    React.useEffect(() => {
        // componentWillUnmount
        return () => {
            let lducb = []
            state.limitDataUpdateCallBacks.forEach((it) => {
                if (it != updateLimitList) {
                    lducb.push(it)
                }
            })

            state.limitDataUpdateCallBacks = lducb

            let pucb = []
            state.progressUpdateCallBacks.forEach((it) => {
                if (it != updateProgressList) {
                    pucb.push(it)
                }
            })

            state.progressUpdateCallBacks = pucb
        }
    }, [])

    function setValue(ownerId: string, order: number, value: string): number {
        if (!/^([1-9][0-9]*)?$/.test(value)) {
            return limitList.find((it) => {
                it.ownerId == ownerId && it.order == order
            }).value
        }

        letpairOfProgress: Limit
        let lines = [...limitList]
        lines.forEach((item) => {
            if (item.ownerId == ownerId && item.order == order) {
                item.value = JSON.parse(value)
                pairOfProgress = item
            }
        })
        limitUpdate(lines)

        let progressLines = [...progressList]
        progressLines.forEach((item, index) => {
            if (index == lines.indexOf(pairOfProgress)) {
                console.log("Itten 1")
                if (
                    item.value == 0 &&
                    !state.limitTypeList.find((it) => {
                        return it.id == pairOfProgress.typeId
                    }).maximum
                )
                    item.value = 2 * JSON.parse(value)
            }
        })
        progressUpdate(progressLines)

        return JSON.parse(value)
    }

    function deleteLine(ownerId: string, order: number) {
        let lines = [] as Limit[]
        limitList.forEach((value) => {
            if (value.ownerId != ownerId || value.order != order)
                lines.push(value)
        })
        limitUpdate(lines)

        let progressLines = [] as Progress[]
        progressList.forEach((value) => {
            if (value.ownerId != ownerId || value.order != order)
                progressLines.push(value)
        })
        progressUpdate(progressLines)
    }

    return (
        <Framer.Stack
            {...rest}
            height={limitList.length * 96 + "px"}
            radius={radius}
            background={fill}
            gap={32}
            padding={16}
            style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
            }
            }
        >
            {active &&
                limitList.map((line, index) => (
                    <LimitLine
                        name={"lineLF" + (index + 1)}
                        key={line.order}
                        width="100%"
                        type={
                            state.limitTypeList.find((type) => {
                                return type.id == line.typeId
                            }).name
                        }
                        value0={line.value}
                        unit={
                            state.limitTypeList.find((type) => {
                                return type.id == line.typeId
                            }).unit
                        }
                        ownerId={line.ownerId}
                        order={line.order}
                        updateValue={setValue}
                        deleteLine={deleteLine}
                    />
                ))}
        </Framer.Stack>
    )
}

//DYNAMICLINE:

export function LimitLine({
    ownerId,
    order,
    name,
    width,
    type,
    value0,
    unit,
    updateValue,
    deleteLine,
}) {
    const [value, setValue] = React.useState(value0)

    return (
        <Framer.Stack
            name={name}
            height={"64px"}
            width={width}
            radius="100px 0px 0px 100px"
            background={"#A0A0A0"}
            shadow="0px 8px 8px 0px rgba(64, 64, 64, 0.5)"
            direction={"horizontal"}
            distribution={"start"}
            alignment="center"
            gap={22}
            paddingTop={16}
            paddingRight={0}
            paddingBottom={16}
            paddingLeft={16}
            overflow="hidden"
            style={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: 24,
            }
            }
        >
            <button
                onClick={
                    () => {
                        deleteLine(ownerId, order)
                    }
                }
            />
            < Framer.Stack
                height="100%"
                width="1fr"
                background="#00000000"
                direction={"horizontal"}
                distribution={"end"}
            >
                <Framer.Frame
                    height="100%"
                    width="fit-content"
                    background="#00000000"
                >
                    {type}:
            </Framer.Frame>
                {" "}
            </Framer.Stack>
            < input
                height="100%"
                width="1fr"
                background-color="#00000000"
                style={{
                    backgroundColor: "hsl(0, 0%, 100%)",
                    border: "hsl(0, 0%, 100%)",
                    borderWidth: 4,
                    fontSize: 24,
                    padding: "3px 16px 3px 16px",
                    borderRadius: 100,
                }}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
                onBlur={() => {
                    let response = updateValue(ownerId, order, value)
                    setValue(response)
                }}
                placeholder={"Ã‰rtÃ©k"}
                value={value}
            />
            <Framer.Stack
                height="100%"
                width="0.5fr"
                background="#00000000"
                direction={"horizontal"}
                distribution={"start"}
            >
                <Framer.Frame
                    height="100%"
                    width="fit-content"
                    background="#00000000"
                >
                    {unit}
                </Framer.Frame>{" "}
            </Framer.Stack>
        </Framer.Stack>
    )
}

