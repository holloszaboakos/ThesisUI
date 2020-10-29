
multywindow
import { Override, Data, ColorÂ } from "framer"

conststateÂ = Data({
    viewIndex: 0,
    viewIds: ["IconMap", "IconTimeLine", "IconTable"],
    dataIndex: 0,
    dataIds: ["IconTransportGroup", "IconTransport", "IconPath"],
})

exportfunctionViewFrame(props): Override{
    return {
        visible: state.viewIds.indexOf("Icon" + props.name) === state.viewIndex,
        disabled:
            state.viewIds.indexOf("Icon" + props.name) !== state.viewIndex,
    }
}

exportfunctionPreviosViewIcon(props): Override{
    return {
        visible:
            (state.viewIds.indexOf(props.name) + 1) % 3 === state.viewIndex,
        disabled:
            (state.viewIds.indexOf(props.name) + 1) % 3 !== state.viewIndex,
    }
}

exportfunctionNextViewIcon(props): Override{
    return {
        visible:
            (state.viewIds.indexOf(props.name) + 2) % 3 === state.viewIndex,
        disabled:
            (state.viewIds.indexOf(props.name) + 2) % 3 !== state.viewIndex,
    }
}

exportfunctionPreviosDataIcon(props): Override{
    return {
        visible:
            (state.dataIds.indexOf(props.name) + 1) % 3 === state.dataIndex,
        disabled:
            (state.dataIds.indexOf(props.name) + 1) % 3 !== state.dataIndex,
    }
}

exportfunctionNextDataIcon(props): Override{
    return {
        visible:
            (state.dataIds.indexOf(props.name) + 2) % 3 === state.dataIndex,
        disabled:
            (state.dataIds.indexOf(props.name) + 2) % 3 !== state.dataIndex,
    }
}

exportfunctionNextViewButton(): Override{
    return {
        onClick: function () {
            state.viewIndex = (state.viewIndex + 1) % 3
        },
    }
}

exportfunctionPreviousViewButton(): Override{
    return {
        onClick: function () {
            state.viewIndex = (state.viewIndex + 2) % 3
        },
    }
}

exportfunctionNextDataButton(): Override{
    return {
        onClick: function () {
            state.dataIndex = (state.dataIndex + 1) % 3
        },
    }
}

exportfunctionPreviousDataButton(): Override{
    return {
        onClick: function () {
            state.dataIndex = (state.dataIndex + 2) % 3
        },
    }
}

data:
import *asReactÂ from "react"
import { Frame, addPropertyControls, ControlTypeÂ } from "framer"

/**
*
*Â @export
*Â @interfaceAddress
*/
exportinterfaceAddress{
    /**
    *
    *Â @type{string}
    *Â @memberofAddress
    */
    id: string
    /**
    *
    *Â @type{string}
    *Â @memberofAddress
    */
    name: string
    /**
    *
    *Â @type{number}
    *Â @memberofAddress
    */
    latitude: number
    /**
    *
    *Â @type{number}
    *Â @memberofAddress
    */
    longitude: number
    /**
    *
    *Â @type{string}
    *Â @memberofAddress
    */
    zipcode: string
    /**
    *
    *Â @type{string}
    *Â @memberofAddress
    */
    country: string
    /**
    *
    *Â @type{string}
    *Â @memberofAddress
    */
    publicLand: string
    /**
    *
    *Â @type{string}
    *Â @memberofAddress
    */
    publicLandType: string
    /**
    *
    *Â @type{string}
    *Â @memberofAddress
    */
    houseNumber: string
    /**
    *
    *Â @type{string}
    *Â @memberofAddress
    */
    region: string
    /**
    *
    *Â @type{string}
    *Â @memberofAddress
    */
    locality: string
}

/**
*
*Â @export
*Â @interfaceCompany
*/
exportinterfaceCompany{
    /**
    *
    *Â @type{string}
    *Â @memberofCompany
    */
    id: string
    /**
    *
    *Â @type{string}
    *Â @memberofCompany
    */
    name: string
    /**
    *
    *Â @type{Array<string>}
    *Â @memberofCompany
    */
    partnerId: Array<string>
}

/**
*
*Â @export
*Â @interfaceDriver
*/
exportinterfaceDriver{
    /**
    *
    *Â @type{string}
    *Â @memberofDriver
    */
    id: string
    /**
    *
    *Â @type{string}
    *Â @memberofDriver
    */
    name: string
    /**
    *
    *Â @type{string}
    *Â @memberofDriver
    */
    siteId ?: string
    /**
    *
    *Â @type{number}
    *Â @memberofDriver
    */
    fixNetWage: number
    /**
    *
    *Â @type{string}
    *Â @memberofDriver
    */
    licenceType: string
}

/**
*
*Â @export
*Â @interfaceGPS
*/
exportinterfaceGPS{
    /**
    *
    *Â @type{number}
    *Â @memberofGPS
    */
    lattitude: number
    /**
    *
    *Â @type{number}
    *Â @memberofGPS
    */
    longitude: number
}

/**
*
*Â @export
*Â @interfaceGPSPair
*/
exportinterfaceGPSPair{
    /**
    *
    *Â @type{GPS}
    *Â @memberofGPSPair
    */
    from: GPS
    /**
    *
    *Â @type{GPS}
    *Â @memberofGPSPair
    */
    to: GPS
}

/**
*
*Â @export
*Â @interfaceLimit
*/
exportinterfaceLimit{
    /**
    *
    *Â @type{string}
    *Â @memberofLimit
    */
    ownerId ?: string
    /**
    *
    *Â @type{number}
    *Â @memberofLimit
    */
    order ?: number
    /**
    *
    *Â @type{string}
    *Â @memberofLimit
    */
    name ?: string
    /**
    *
    *Â @type{string}
    *Â @memberofLimit
    */
    typeId ?: string
    /**
    *
    *Â @type{number}
    *Â @memberofLimit
    */
    value: number
}

/**
*
*Â @export
*Â @interfaceLimitType
*/
exportinterfaceLimitType{
    /**
    *
    *Â @type{string}
    *Â @memberofLimitType
    */
    id: string
    /**
    *
    *Â @type{string}
    *Â @memberofLimitType
    */
    name: string
    /**
    *
    *Â @type{boolean}
    *Â @memberofLimitType
    */
    maximum: boolean
    /**
    *
    *Â @type{string}
    *Â @memberofLimitType
    */
    unit: string
}

/**
*
*Â @export
*Â @interfaceOrder
*/
exportinterfaceOrder{
    /**
    *
    *Â @type{string}
    *Â @memberofOrder
    */
    id: string
    /**
    *
    *Â @type{string}
    *Â @memberofOrder
    */
    name: string
    /**
    *
    *Â @type{Site}
    *Â @memberofOrder
    */
    center: Site
    /**
    *
    *Â @type{Store}
    *Â @memberofOrder
    */
    target: Store
    /**
    *
    *Â @type{string}
    *Â @memberofOrder
    */
    date: string
    /**
    *
    *Â @type{number}
    *Â @memberofOrder
    */
    volume: number
    /**
    *
    *Â @type{number}
    *Â @memberofOrder
    */
    weight: number
}

/**
*
*Â @export
*Â @interfacePartner
*/
exportinterfacePartner{
    /**
    *
    *Â @type{string}
    *Â @memberofPartner
    */
    id: string
    /**
    *
    *Â @type{string}
    *Â @memberofPartner
    */
    name: string
    /**
    *
    *Â @type{string}
    *Â @memberofPartner
    */
    centralAddress ?: string
    /**
    *
    *Â @type{Array<string>}
    *Â @memberofPartner
    */
    ownerId: Array<string>
}

/**
*
*Â @export
*Â @interfaceProgress
*/
exportinterfaceProgress{
    /**
    *
    *Â @type{string}
    *Â @memberofProgress
    */
    id: string
    /**
    *
    *Â @type{string}
    *Â @memberofProgress
    */
    name: string
    /**
    *
    *Â @type{string}
    *Â @memberofProgress
    */
    ownerId ?: string
    /**
    *
    *Â @type{number}
    *Â @memberofProgress
    */
    order ?: number
    /**
    *
    *Â @type{number}
    *Â @memberofProgress
    */
    value: number
}

/**
*
*Â @export
*Â @interfaceProgressStat
*/
exportinterfaceProgressStat{
    /**
    *
    *Â @type{string}
    *Â @memberofProgressStat
    */
    id: string
    /**
    *
    *Â @type{string}
    *Â @memberofProgressStat
    */
    name: string
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofProgressStat
    */
    bestCost: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofProgressStat
    */
    worstCost: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofProgressStat
    */
    medianCost: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofProgressStat
    */
    actualCost: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofProgressStat
    */
    twinCount: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofProgressStat
    */
    ageOfBest: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofProgressStat
    */
    geneCount: StatisticOverview
}

/**
*
*Â @export
*Â @interfaceSetup
*/
exportinterfaceSetup{
    /**
    *
    *Â @type{string}
    *Â @memberofSetup
    */
    id: string
    /**
    *
    *Â @type{string}
    *Â @memberofSetup
    */
    name: string
    /**
    *
    *Â @type{Array<Limit>}
    *Â @memberofSetup
    */
    limits: Array < Limit >
        /**
        *
        *Â @type{string}
        *Â @memberofSetup
        */
        centerId: string
    /**
    *
    *Â @type{string}
    *Â @memberofSetup
    */
    date: string
}

/**
*
*Â @export
*Â @interfaceSite
*/
exportinterfaceSite{
    /**
    *
    *Â @type{string}
    *Â @memberofSite
    */
    id: string
    /**
    *
    *Â @type{string}
    *Â @memberofSite
    */
    name: string
    /**
    *
    *Â @type{string}
    *Â @memberofSite
    */
    companyId ?: string
    /**
    *
    *Â @type{Address}
    *Â @memberofSite
    */
    shippingAddress: Address
}

/**
*
*Â @export
*Â @interfaceStatisticOverview
*/
exportinterfaceStatisticOverview{
    /**
    *
    *Â @type{string}
    *Â @memberofStatisticOverview
    */
    id: string
    /**
    *
    *Â @type{string}
    *Â @memberofStatisticOverview
    */
    name: string
    /**
    *
    *Â @type{number}
    *Â @memberofStatisticOverview
    */
    max: number
    /**
    *
    *Â @type{number}
    *Â @memberofStatisticOverview
    */
    min: number
    /**
    *
    *Â @type{number}
    *Â @memberofStatisticOverview
    */
    med: number
    /**
    *
    *Â @type{number}
    *Â @memberofStatisticOverview
    */
    avg: number
    /**
    *
    *Â @type{number}
    *Â @memberofStatisticOverview
    */
    maxQuad: number
    /**
    *
    *Â @type{number}
    *Â @memberofStatisticOverview
    */
    minQuad: number
    /**
    *
    *Â @type{number}
    *Â @memberofStatisticOverview
    */
    spread: number
    /**
    *
    *Â @type{Array<number>}
    *Â @memberofStatisticOverview
    */
    values: Array<number>
}

/**
*
*Â @export
*Â @interfaceStore
*/
exportinterfaceStore{
    /**
    *
    *Â @type{string}
    *Â @memberofStore
    */
    id: string
    /**
    *
    *Â @type{string}
    *Â @memberofStore
    */
    name: string
    /**
    *
    *Â @type{string}
    *Â @memberofStore
    */
    siteId: string
    /**
    *
    *Â @type{Address}
    *Â @memberofStore
    */
    shippingAddress: Address
    /**
    *
    *Â @type{boolean}
    *Â @memberofStore
    */
    isWaprom: boolean
}

/**
*
*Â @export
*Â @interfaceTimeStat
*/
exportinterfaceTimeStat{
    /**
    *
    *Â @type{string}
    *Â @memberofTimeStat
    */
    id: string
    /**
    *
    *Â @type{string}
    *Â @memberofTimeStat
    */
    name: string
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofTimeStat
    */
    sum: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofTimeStat
    */
    cycle: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofTimeStat
    */
    generate: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofTimeStat
    */
    calcCost: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofTimeStat
    */
    initialization: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofTimeStat
    */
    orderByCost: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofTimeStat
    */
    birth: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofTimeStat
    */
    mutation: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofTimeStat
    */
    pairing: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofTimeStat
    */
    select4Mutation: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofTimeStat
    */
    limit: StatisticOverview
    /**
    *
    *Â @type{StatisticOverview}
    *Â @memberofTimeStat
    */
    selection: StatisticOverview
}

/**
*
*Â @export
*Â @interfaceTransport
*/
exportinterfaceTransport{
    /**
    *
    *Â @type{string}
    *Â @memberofTransport
    */
    id: string
    /**
    *
    *Â @type{string}
    *Â @memberofTransport
    */
    name: string
    /**
    *
    *Â @type{Site}
    *Â @memberofTransport
    */
    site: Site
    /**
    *
    *Â @type{string}
    *Â @memberofTransport
    */
    driverId ?: string
    /**
    *
    *Â @type{string}
    *Â @memberofTransport
    */
    vehicleId ?: string
    /**
    *
    *Â @type{string}
    *Â @memberofTransport
    */
    driverStartDate: string
    /**
    *
    *Â @type{string}
    *Â @memberofTransport
    */
    driverCloseDate: string
    /**
    *
    *Â @type{string}
    *Â @memberofTransport
    */
    transportCloseDate: string
    /**
    *
    *Â @type{number}
    *Â @memberofTransport
    */
    startMileage: number
    /**
    *
    *Â @type{number}
    *Â @memberofTransport
    */
    endMileage: number
    /**
    *
    *Â @type{Array<TransportItem>}
    *Â @memberofTransport
    */
    itemL: Array<TransportItem>
}

/**
*
*Â @export
*Â @interfaceTransportConclusion
*/
exportinterfaceTransportConclusion{
    /**
    *
    *Â @type{string}
    *Â @memberofTransportConclusion
    */
    id: string
    /**
    *
    *Â @type{string}
    *Â @memberofTransportConclusion
    */
    name: string
    /**
    *
    *Â @type{string}
    *Â @memberofTransportConclusion
    */
    transportPlaned ?: string
    /**
    *
    *Â @type{string}
    *Â @memberofTransportConclusion
    */
    transportFact ?: string
}

/**
*
*Â @export
*Â @interfaceTransportItem
*/
exportinterfaceTransportItem{
    /**
    *
    *Â @type{string}
    *Â @memberofTransportItem
    */
    ownerId ?: string
    /**
    *
    *Â @type{number}
    *Â @memberofTransportItem
    */
    orderInOwner ?: number
    /**
    *
    *Â @type{string}
    *Â @memberofTransportItem
    */
    name: string
    /**
    *
    *Â @type{Store}
    *Â @memberofTransportItem
    */
    targetWarehouse: Store
    /**
    *
    *Â @type{number}
    *Â @memberofTransportItem
    */
    volume: number
    /**
    *
    *Â @type{number}
    *Â @memberofTransportItem
    */
    weight: number
    /**
    *
    *Â @type{string}
    *Â @memberofTransportItem
    */
    deliveryStartDate: string
    /**
    *
    *Â @type{string}
    *Â @memberofTransportItem
    */
    deliveryEndDate: string
    /**
    *
    *Â @type{string}
    *Â @memberofTransportItem
    */
    actualDeliveryDate: string
    /**
    *
    *Â @type{string}
    *Â @memberofTransportItem
    */
    requestedShippingDate: string
    /**
    *
    *Â @type{string}
    *Â @memberofTransportItem
    */
    shippingDate: string
}

/**
*
*Â @export
*Â @interfaceVehicle
*/
exportinterfaceVehicle{
    /**
    *
    *Â @type{string}
    *Â @memberofVehicle
    */
    id: string
    /**
    *
    *Â @type{string}
    *Â @memberofVehicle
    */
    name: string
    /**
    *
    *Â @type{string}
    *Â @memberofVehicle
    */
    siteId ?: string
    /**
    *
    *Â @type{number}
    *Â @memberofVehicle
    */
    fuelConsumption: number
    /**
    *
    *Â @type{number}
    *Â @memberofVehicle
    */
    fuelTankCapacity: number
    /**
    *
    *Â @type{number}
    *Â @memberofVehicle
    */
    loadHeight: number
    /**
    *
    *Â @type{number}
    *Â @memberofVehicle
    */
    loadLength: number
    /**
    *
    *Â @type{number}
    *Â @memberofVehicle
    */
    loadWidth: number
    /**
    *
    *Â @type{number}
    *Â @memberofVehicle
    */
    loadMax: number
    /**
    *
    *Â @type{number}
    *Â @memberofVehicle
    */
    payLoad: number
    /**
    *
    *Â @type{boolean}
    *Â @memberofVehicle
    */
    isRoadFriendlyAxis: boolean
    /**
    *
    *Â @type{string}
    *Â @memberofVehicle
    */
    enginePower: string
    /**
    *
    *Â @type{number}
    *Â @memberofVehicle
    */
    maxiTotalWeight: number
    /**
    *
    *Â @type{number}
    *Â @memberofVehicle
    */
    netWeight: number
    /**
    *
    *Â @type{number}
    *Â @memberofVehicle
    */
    liftCapacity: number
    /**
    *
    *Â @type{string}
    *Â @memberofVehicle
    */
    vehicleType: string
}

timelinevertex:

import *asReactÂ from "react"
import { Frame, addPropertyControls, ControlTypeÂ } from "framer"

// Learn more: https://framer.com/api

exportfunctionTimeLineVertex(props){
    const { text, tint, onTap, ...restÂ } = props

    return (
        <Frame
{ ...rest }
background = { tint }
    onTap = { onTap }
    whileHover = {{
        scale: 1.1,
}
}
style = {{
    color: "#fff",
        fontSize: 16,
            fontWeight: 600,
}}
>
    { text }
    < /Frame>
)
}

TimeLineVertex.defaultProps = {
    height: 128,
    width: 240,
    text: "Get started!",
    tint: "#0099ff",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(TimeLineVertex, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Hello Framer!",
    },
    tint: {
        title: "Tint",
        type: ControlType.Color,
        defaultValue: "#0099ff",
    },
    onTap: {
        type: ControlType.EventHandler,
    },
})

timelineline:
import *asReactÂ from "react"
import *asFramerÂ from "framer"

// Learn more: https://framer.com/api

exportfunctionTimeLineLine(props){
    const { startTime, endTime, time, lengthÂ } = props

    return (
        <Framer.Stack
width= "1fr"
    height = "100%"
    direction = "vertical"
    distribution = "start"
    alignment = "center"
    overflow = "hidden"
        >
        <Framer.Stack
width="100%"
    height = "1fr"
    direction = "horizontal"
    distribution = "space-evenly"
    alignment = "end"
    paddingTop = { 0}
    paddingLeft = { 13}
    paddingRight = { 13}
    paddingBottom = { 0}
    overflow = "hidden"
        >
        <Framer.Frame
width="1fr"
    height = "100%"
    style = {{
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
    { " "}
{ startTime } { " " }
</Framer.Frame>
    < Framer.Frame
width = "1fr"
height = "100%"
style = {{
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
    { time }
    < /Framer.Frame>
    < Framer.Frame
width = "1fr"
height = "100%"
style = {{
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
    { endTime }
    < /Framer.Frame>
    < /Framer.Stack>
    < Framer.Frame
width = "100%"
height = { 8}
overflow = "hidden"
backgroundColor = "#050505"
borderRadius = { 4}
shadow = "0px 4px 8px 0px rgba(0, 0, 0, 0.5)"
    > </Framer.Frame>
    < Framer.Frame
width = "100%"
height = "1fr"
style = {{
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
    { length }
    < /Framer.Frame>
    < /Framer.Stack>
)
}

TimeLineLine.defaultProps = {
    height: 128,
    width: 240,
    text: "Get started!",
    tint: "#0099ff",
}

// Learn more: https://framer.com/api/property-controls/
Framer.addPropertyControls(TimeLineLine, {
    text: {
        title: "Text",
        type: Framer.ControlType.String,
        defaultValue: "Hello Framer!",
    },
    tint: {
        title: "Tint",
        type: Framer.ControlType.Color,
        defaultValue: "#0099ff",
    },
    onTap: {
        type: Framer.ControlType.EventHandler,
    },
})

timelinecontainer:
import *asReactÂ from "react"
import { Frame, addPropertyControls, ControlTypeÂ } from "framer"

// Learn more: https://framer.com/api

exportfunctionTimeLineContainer(props){
    const { text, tint, onTap, ...restÂ } = props

    return (
        <Frame
{ ...rest }
background = { tint }
    onTap = { onTap }
    whileHover = {{
        scale: 1.1,
}
}
style = {{
    color: "#fff",
        fontSize: 16,
            fontWeight: 600,
}}
>
    { text }
    < /Frame>
)
}

TimeLineContainer.defaultProps = {
    height: 128,
    width: 240,
    text: "Get started!",
    tint: "#0099ff",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(TimeLineContainer, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Hello Framer!",
    },
    tint: {
        title: "Tint",
        type: ControlType.Color,
        defaultValue: "#0099ff",
    },
    onTap: {
        type: ControlType.EventHandler,
    },
})

timelinecolumn:
import *asReactÂ from "react"
import *asFramerÂ from "framer"

// Learn more: https://framer.com/api

exportfunctionTimeLineColumn(texts){
    return (
        <Framer.Stack
width= { 1}
    height = "100%"
    direction = "vertical"
    distribution = "start"
    alignment = "center"
    overflow = "hidden"
    backgroundColor = "#A0A0a0"
    borderRadius = "0 0 32px 32px"
    shadow = "8px 8px 8px 0px rgba(160, 160, 160, 0.5)"
    style = {{
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
        <Framer.Frameheight="1fr"width = "100%"background = "#00000000" >
        it
        < /Framer.Frame>
    )
}
    < /Framer.Stack>
)
}

TimeLineColumn.defaultProps = {
    height: 128,
    width: 240,
    text: "Get started!",
    tint: "#0099ff",
}

// Learn more: https://framer.com/api/property-controls/
Framer.addPropertyControls(TimeLineColumn, {
    text: {
        title: "Text",
        type: Framer.ControlType.String,
        defaultValue: "Hello Framer!",
    },
    tint: {
        title: "Tint",
        type: Framer.ControlType.Color,
        defaultValue: "#0099ff",
    },
    onTap: {
        type: Framer.ControlType.EventHandler,
    },
})

timeline.
    import * asReactÂ from"react"
import *asFramerÂ from "framer"
import { TimeLineLineÂ } from "./TimeLineLine"
import { TimeLineVertexÂ } from "./TimeLineVertex"
import { TimeLineColumnÂ } from "./TimeLineColumn"

exportfunctionTimeLine(props){
    const { text, tint, onTap, ...restÂ } = props

    return (
        <Framer.Stack
width= { 2412}
    height = { 324}
    direction = "vertical"
    distribution = "space-evenly"
    alignment = "center"
    overflow = "hidden"
        >
        <Framer.Stack
width="100%"
    height = "67%"
    direction = "horizontal"
    distribution = "start"
    alignment = "center"
    overflow = "hidden"
    backgroundColor = "rgba(255, 255, 255, 0)"
        > </Framer.Stack>
        < Framer.Stack
    width = "100%"
    height = "34%"
    direction = "horizontal"
    distribution = "start"
    alignment = "center"
    padding = { 4}
    overflow = "hidden"
    backgroundColor = "rgba(255, 255, 255, 0)"
        > </Framer.Stack>
        < /Framer.Stack>
)
}

TimeLine.defaultProps = {
    height: 128,
    width: 240,
    text: "Get started!",
    tint: "#0099ff",
}

// Learn more: https://framer.com/api/property-controls/
Framer.addPropertyControls(TimeLine, {
    text: {
        title: "Text",
        type: Framer.ControlType.String,
        defaultValue: "Hello Framer!",
    },
    tint: {
        title: "Tint",
        type: Framer.ControlType.Color,
        defaultValue: "#0099ff",
    },
    onTap: {
        type: Framer.ControlType.EventHandler,
    },
})

MAP:
import *asReactÂ from "react"
import { Frame, addPropertyControls, ControlTypeÂ } from "framer"
import *asmapboxglÂ from "mapbox-gl"
import { stateÂ } from "../../Overrides/Run"

// Learn more: https://framer.com/api

constpublicKeyÂ =
    "pk.eyJ1IjoiaG9sbG8wMDciLCJhIjoiY2tjMjc2OHFoMDFwazMxcXRxczVrYmUxciJ9.aXkMyO-37U4gaScXDnzwnw"
conststyleÂ = "mapbox://styles/hollo007/ckc23mj4c10vf1ioabsb1cq9t"

exportclassMapextendsReact.Component <
    { text; tint; onTap; width; height; rest },
    {}
    > {
        stateÂ ={
            routes: state.mapRoots,
            latitude: 47.462851,
            longitude: 19.088509,
            zoom: 10,
            width: this.props.width,
            height: this.props.height,
        }

mapContainer
map

componentDidMount() {
            mapboxgl.accessToken = publicKey
            constmapÂ = newmapboxgl.Map({
                container: this.mapContainer,
                style: style,
                height: this.props.height,
                width: this.props.width,
                center: [this.state.longitude, this.state.latitude],
                zoom: this.state.zoom,
            })
            this.map = map
            map.on("move", () => Â {
                this.setState({
                    latitude: map.getCenter().lat.toFixed(4),
                    longitude: map.getCenter().lng.toFixed(4),
                    zoom: map.getZoom().toFixed(2),
                })
            })
            map.on("load", function () {
                state.mapRoots.forEach((rout, index) => Â {
                    map.addSource("route" + index, {
                        type: "geojson",
                        data: {
                            type: "Feature",
                            properties: {},
                            geometry: {
                                type: "LineString",
                                coordinates: rout,
                            },
                        },
                    })
map.addLayer({
                        id: "route" + index,
                        type: "line",
                        source: "route" + index,
                        layout: {
                            "line-join": "round",
                            "line-cap": "round",
                        },
                        paint: {
                            "line-color": "#E71A80",
                            "line-width": 4,
                        },
                    })
                })
            })
        }

componentDidUpdate() {
            this.map.center = [this.state.longitude, this.state.latitude]
            this.map.zoom = this.state.zoom
            this.map.widthÂ = this.props.width
            this.map.heightÂ = this.props.height
        }

componentWillUnmount() {
            this.map.remove()
        }

render() {
            return (
                <Frame
width= { this.props.width }
            height = { this.props.height }
            style = {{
                width: "100%",
                    height: "100%",
}
        }
ref={(el)=> Â(this.mapContainer = el)
    }
className = "mapContainer"
    > </Frame>
)
}
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Map, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Hello Framer!",
    },
    tint: {
        title: "Tint",
        type: ControlType.Color,
        defaultValue: "#0099ff",
    },
    onTap: {
        type: ControlType.EventHandler,
    },
})

staticlist:
import *asReactÂ from "react"
import *asFramerÂ from "framer"
import { StaticLimitLineÂ } from "./Line"
import *asCÂ from "../../canvas"
import { state, limitUpdateÂ } from "../../../Overrides/Run"
import { Limit, ProgressÂ } from "../../../Model/Data"

exportfunctionStaticLimitList(props){
    const { radius, fill, ...restÂ } = props

    const [limitList, setLimitList] = React.useState(state.limitList)
    const [active, setActive] = React.useState(true)

    functionupdateLimitList(ll: Limit[]){
        setLimitList(ll)
        setActive(false)
    }

    React.useEffect(() => Â {
        console.log("mount")
state.limitDataUpdateCallBacks.push(updateLimitList)
console.log("mount done")
    }, [])

    React.useEffect(() => Â {
        if(!active)setActive(true)
    }, [active])

    React.useEffect(() => Â {
        // componentWillUnmount
        return()=> Â {
        console.log("unmount")
letlducbÂ =[]
state.limitDataUpdateCallBacks.forEach((it) => Â {
            if(itÂ != updateLimitList){
        lducb.push(it)
    }
})

state.limitDataUpdateCallBacks = lducb
console.log("unmount done")
}
}, [])

return (
    <Framer.Stack
{ ...rest }
height = { limitList.lengthÂ * 96 + "px" }
radius = { radius }
background = { fill }
gap = { 32}
padding = { 16}
style = {{
    color: "#fff",
        fontSize: 16,
            fontWeight: 600,
}}
>
    { activeÂ &&
    limitList.map((line, index) => Â(
        <StaticLimitLine
key={ line.order }
name = { "lineLF"+(indexÂ + 1) }
width = "100%"
type = {
            state.limitTypeList.find((it) => Â {
                returnit.idÂ == line.typeId
            }).name
        }
value = { line.value }
unit = {
            state.limitTypeList.find((it) => Â {
                returnit.idÂ == line.typeId
            }).unit
        }
        />
))}
</Framer.Stack>
)
}

/*
<Framer.Stack
onClick={() => {
const navigation = Framer.useNavigation()
navigation.modal(<C.CreateLimit />, {
backdropColor: "rgba(4,4,15,0.4)",
})
}}
width="100%"
height={48}
overflow="hidden"
distribution="center"
alignment="center"
backgroundColor="#E02080"
borderRadius="100px 0 0 100px"
shadow="0px 8px 8px 0px rgba(112, 16, 64, 0.5)"
>
<C.P />
</Framer.Stack>
*/

// Learn more: https://framer.com/api/property-controls/
Framer.addPropertyControls(StaticLimitList, {
    radius: {
        title: "radius",
        type: Framer.ControlType.Number,
    },
    fill: {
        title: "fill",
        type: Framer.ControlType.Color,
    },
})


staticline:
import *asReactÂ from "react"
import *asFramerÂ from "framer"

// Learn more: https://framer.com/api
exportfunctionStaticLimitLine(props){
    const { name, width, type, value, unitÂ } = props
    return (
        <Framer.Stack
name= { props.name }
    height = { "64px"}
    width = { props.width }
    radius = "100px 0px 0px 100px"
    background = { "#A0A0A0"}
    shadow = "0px 8px 8px 0px rgba(64, 64, 64, 0.5)"
    direction = { "horizontal"}
    distribution = { "start"}
    alignment = "center"
    gap = { 22}
    paddingTop = { 16}
    paddingRight = { 0}
    paddingBottom = { 16}
    paddingLeft = { 16}
    overflow = "hidden"
    style = {{
        fontWeight: "bold",
            color: "#fff",
                fontSize: 24,
}
}
>
    <Framer.Stack
height="100%"
width = "1fr"
background = "#00000000"
direction = { "horizontal"}
distribution = { "end"}
    >
    <Framer.Frame
height="100%"
width = "fit-content"
background = "#00000000"
    >
    { props.type }:
</Framer.Frame>
    < /Framer.Stack>
    < Framer.Stack
height = "100%"
width = "0.5fr"
background = "#00000000"
direction = { "horizontal"}
distribution = { "end"}
    >
    <Framer.Frame
height="100%"
width = "fit-content"
background = "#00000000"
    >
    { props.value }
    < /Framer.Frame>
    < /Framer.Stack>
    < Framer.Stack
height = "100%"
width = "0.5fr"
background = "#00000000"
direction = { "horizontal"}
distribution = { "start"}
    >
    <Framer.Frame
height="100%"
width = "fit-content"
background = "#00000000"
    >
    { props.unit }
    < /Framer.Frame>
    < /Framer.Stack>
    < /Framer.Stack>
)
}

// Learn more: https://framer.com/api/property-controls/
Framer.addPropertyControls(StaticLimitLine, {
    name: {
        title: "name",
        type: Framer.ControlType.String,
    },
    type: {
        title: "type",
        type: Framer.ControlType.String,
    },
    value: {
        title: "value",
        type: Framer.ControlType.Number,
    },
    unit: {
        title: "unit",
        type: Framer.ControlType.String,
    },
})

progressline:
import *asReactÂ from "react"
import { Frame, addPropertyControls, ControlType, StackÂ } from "framer"

exportfunctionLimitProgressLine(props){
    const {
        ownerId,
        order,
        value,
        baseValue,
        unit,

        updatePercent,

        backgroundColor,
        progressBarBackgroundColor,
        progressBarColor,
        ...rest
    } = props

    functiongetPercent(){
        if (valueÂ > baseValue)
            return ((baseValueÂ / value) * 100).toString() + "%"
        return ((valueÂ / baseValue) * 100).toString() + "%"
    }

    return (
        <Stack
{ ...rest }
width = "100%"
    height = "64px"
    direction = { "horizontal"}
    distribution = { "start"}
    alignment = { "center"}
    paddingTop = { 16}
    paddingRight = { 32}
    paddingBottom = { 16}
    paddingLeft = { 32}
    radius = "0 32px 32px 0"
    shadow = "0px 8px 8px 0px rgba(64, 64, 64, 0.5)"
    background = { backgroundColor }
        >
        <Frame
height="100%"
    width = "fit-content"
    background = "#00000000"
    style = {{
        color: "#ffffff",
            fontFamily: `"Inter-ExtraBold", "Inter", sans-serif`,
                fontSize: 20,
                    fontWeight: 800,
                        letterSpacing: 0,
                            lineHeight: 1.2,
}
}
>
    {(Math.round(valueÂ * 100) / 100.0).toString() + " " + unit}
</Frame>
    < Stack
height = "8px"
width = "3fr"
direction = "horizontal"
distribution = "start"
alignment = "start"
overflow = "visible"
background = { progressBarBackgroundColor }
radius = "4px"
    >
    <Frame
height="100%"
width = { getPercent() }
overflow = "hidden"
background = { progressBarColor }
radius = "4px"
    > </Frame>
    < /Stack>
    < /Stack>
)
}

LimitProgressLine.defaultProps = {
    height: 128,
    width: 240,
    text: "Get started!",
    tint: "#0099ff",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(LimitProgressLine, {
    value: {
        title: "Value",
        type: ControlType.Number,
        defaultValue: 0,
    },
    baseValue: {
        title: "Base value",
        type: ControlType.Number,
        defaultValue: 0,
    },
    unit: {
        title: "Unit",
        type: ControlType.String,
        defaultValue: "s!",
    },
    backgroundColor: {
        title: "BackgroundColor",
        type: ControlType.Color,
        defaultValue: "#000000",
    },
    progressBarBackgroundColor: {
        title: "ProgressBarBackgroundColor",
        type: ControlType.Color,
        defaultValue: "#777777",
    },
    progressBarColor: {
        title: "ProgressBarColor",
        type: ControlType.Color,
        defaultValue: "#ffffff",
    },
})


progresslist:
import *asReactÂ from "react"
import *asFramerÂ from "framer"
import { state, progressUpdate, resumeUpdateÂ } from "../../../Overrides/Run"
import { LimitProgressLineÂ } from "./Line"
import { ProgressÂ } from "../../../Model/Data"

exportfunctionLimitProgressList(props){
    const { fill, ...restÂ } = props

    const [progressList, setProgressList] = React.useState(state.progressList)
    const [active, setActive] = React.useState(true)
    const [resumed, setResumed] = React.useState(state.resumed)

    functionupdateProgressList(ProgressList: Progress[]){
        console.log("PROGRESS UPDATE")
        setProgressList(ProgressList)
        setActive(false)
        console.log("PROGRESS UPDATED")
    }

    functionupdateResumed(resumed: boolean){
        console.log("RESUME UPDATE")
        setResumed(resumed)
        console.log("RESUME UPDATED")
    }

    React.useEffect(() => Â {
        state.progressUpdateCallBacks.push(updateProgressList)
state.resumedUpdateCallBacks.push(updateResumed)
    }, [])

    React.useEffect(() => Â {
        if(!active)setActive(true)
    }, [active])

    React.useEffect(() => Â {
        return()=> Â {
        letpucbÂ =[]
state.progressUpdateCallBacks.forEach((it) => Â {
            if(itÂ != updateProgressList){
        pucb.push(it)
    }
})
state.progressUpdateCallBacks = pucb

letrucbÂ = []
state.resumedUpdateCallBacks.forEach((it) => Â {
    if(itÂ != updateResumed){
    rucb.push(it)
}
})
state.resumedUpdateCallBacks = rucb
}
}, [])

return (
    <Framer.Stack
{ ...rest }
height = { progressList.lengthÂ * 96 + "px" }
background = { fill }
distribution = { "start"}
gap = { 32}
padding = { 16}
style = {{
    color: "#fff",
        fontSize: 16,
            fontWeight: 600,
}}
>
    { activeÂ &&
    progressList.map((line, index) => Â(
        <LimitProgressLine
key={ line.id }
id = { line.id }
baseValue = {
            state.limitList.find((limit) => Â {
                console.log(
                    "BASE" +
                    JSON.stringify(limit) +
                    "-" +
                    JSON.stringify(line)
                )
return(
                    limit.order == line.order &&
                        limit.ownerId == line.ownerId
)
        }).value
}
        value = { line.value }
unit = {
            state.limitTypeList.find((type) => Â {
                console.log("UNIT")
return(
                    state.limitList.find((limit) => Â {
                        return(
                            limit.order == line.order &&
                                limit.ownerId == line.ownerId
)
            }).typeId == type.id
)
}).unit
}
width = "100%"
backgroundColor = { "#A0A0A0"}
progressBarBackgroundColor = { "#606060"}
progressBarColor = { "#E0E0E0"}
    />
))}
</Framer.Stack>
)
}

// Learn more: https://framer.com/api/property-controls/
Framer.addPropertyControls(LimitProgressList, {
    fill: {
        title: "Fill",
        type: Framer.ControlType.Color,
        defaultValue: "#00000000",
    },
})

dynamiclist:
import *asReactÂ from "react"
import *asFramerÂ from "framer"
import { LimitLineÂ } from "./Line"
import *asCÂ from "../../canvas"
import { state, limitUpdate, progressUpdateÂ } from "../../../Overrides/Run"
import { Limit, LimitType, ProgressÂ } from "../../../Model/Data"
exportfunctionLimitList(props){
    const { radius, fill, ...restÂ } = props

    const [progressList, setProgressList] = React.useState(state.progressList)
    const [limitList, setLimitList] = React.useState(state.limitList)
    const [active, setActive] = React.useState(true)

    functionupdateLimitList(ll: Limit[]){
        setLimitList(ll)
        setActive(false)
    }

    functionupdateProgressList(pl: Progress[]){
        setProgressList(pl)
    }

    React.useEffect(() => Â {
        state.limitDataUpdateCallBacks.push(updateLimitList)
state.progressUpdateCallBacks.push(updateProgressList)
    }, [])

    React.useEffect(() => Â {
        if(!active)setActive(true)
    }, [active])

    React.useEffect(() => Â {
        // componentWillUnmount
        return()=> Â {
        letlducbÂ =[]
state.limitDataUpdateCallBacks.forEach((it) => Â {
            if(itÂ != updateLimitList){
        lducb.push(it)
    }
})

state.limitDataUpdateCallBacks = lducb

letpucbÂ = []
state.progressUpdateCallBacks.forEach((it) => Â {
    if(itÂ != updateProgressList){
    pucb.push(it)
}
})

state.progressUpdateCallBacks = pucb
}
}, [])

functionsetValue(ownerId: string, order: number, value: string): number{
    if (!/^([1-9][0-9]*)?$/.test(value)) {
        returnlimitList.find((it) => Â {
            it.ownerId == ownerIdÂ && it.order == order
        }).value
    }

    letpairOfProgress: Limit
    letlinesÂ = [...limitList]
    lines.forEach((item) => Â {
        if(item.ownerId == ownerIdÂ && item.order == order){
        item.valueÂ = JSON.parse(value)
        pairOfProgressÂ = item
    }
})
limitUpdate(lines)

letprogressLinesÂ = [...progressList]
progressLines.forEach((item, index) => Â {
    if(indexÂ == lines.indexOf(pairOfProgress)){
    console.log("Itten 1")
    if (
        item.valueÂ == 0 &&
        !state.limitTypeList.find((it) => Â {
            returnit.idÂ == pairOfProgress.typeId
        }).maximum
    )
        item.valueÂ = 2 * JSON.parse(value)
}
})
progressUpdate(progressLines)

returnJSON.parse(value)
}

functiondeleteLine(ownerId: string, order: number){
    letlinesÂ = []asLimit[]
    limitList.forEach((value) => Â {
        if(value.ownerId != ownerIdÂ || value.order != order)
    lines.push(value)
})
limitUpdate(lines)

letprogressLinesÂ = []asProgress[]
progressList.forEach((value) => Â {
    if(value.ownerId != ownerIdÂ || value.order != order)
progressLines.push(value)
})
progressUpdate(progressLines)
}

return (
    <Framer.Stack
{ ...rest }
height = { limitList.lengthÂ * 96 + "px" }
radius = { radius }
background = { fill }
gap = { 32}
padding = { 16}
style = {{
    color: "#fff",
        fontSize: 16,
            fontWeight: 600,
}}
>
    { activeÂ &&
    limitList.map((line, index) => Â(
        <LimitLine
name={ "lineLF"+(indexÂ + 1) }
key = { line.order }
width = "100%"
type = {
            state.limitTypeList.find((type) => Â {
                returntype.idÂ == line.typeId
            }).name
        }
value0 = { line.value }
unit = {
            state.limitTypeList.find((type) => Â {
                returntype.idÂ == line.typeId
            }).unit
        }
ownerId = { line.ownerId }
order = { line.order }
updateValue = { setValue }
deleteLine = { deleteLine }
        />
))}
</Framer.Stack>
)
}

/*
<Framer.Stack
onClick={() => {
const navigation = Framer.useNavigation()
navigation.modal(<C.CreateLimit />, {
backdropColor: "rgba(4,4,15,0.4)",
})
}}
width="100%"
height={48}
overflow="hidden"
distribution="center"
alignment="center"
backgroundColor="#E02080"
borderRadius="100px 0 0 100px"
shadow="0px 8px 8px 0px rgba(112, 16, 64, 0.5)"
>
<C.P />
</Framer.Stack>
*/

// Learn more: https://framer.com/api/property-controls/
Framer.addPropertyControls(LimitList, {
    radius: {
        title: "radius",
        type: Framer.ControlType.Number,
    },
    fill: {
        title: "fill",
        type: Framer.ControlType.Color,
    },
})

DYNAMICLINE::
import *asReactÂ from "react"
import *asFramerÂ from "framer"
import *asRÂ from "framer/resource"
import *asCÂ from "../../../canvas"

exportfunctionLimitLine({
    ownerId,
    order,
    name,
    width,
    type,
    value0,
    unit,
    updateValue,
    deleteLine,
}){
    const [value, setValue] = React.useState(value0)

    return (
        <Framer.Stack
name= { name }
    height = { "64px"}
    width = { width }
    radius = "100px 0px 0px 100px"
    background = { "#A0A0A0"}
    shadow = "0px 8px 8px 0px rgba(64, 64, 64, 0.5)"
    direction = { "horizontal"}
    distribution = { "start"}
    alignment = "center"
    gap = { 22}
    paddingTop = { 16}
    paddingRight = { 0}
    paddingBottom = { 16}
    paddingLeft = { 16}
    overflow = "hidden"
    style = {{
        fontWeight: "bold",
            color: "#fff",
                fontSize: 24,
}
}
>
    <C.X
onClick={
    () => Â {
        deleteLine(ownerId, order)
    }
}
/>
    < Framer.Stack
height = "100%"
width = "1fr"
background = "#00000000"
direction = { "horizontal"}
distribution = { "end"}
    >
    <Framer.Frame
height="100%"
width = "fit-content"
background = "#00000000"
    >
    { type }:
</Framer.Frame>{" "}
    < /Framer.Stack>
    < input
height = "100%"
width = "1fr"
background - color="#00000000"
style = {{
    backgroundColor: "hsl(0, 0%, 100%)",
        border: "hsl(0, 0%, 100%)",
            borderWidth: 4,
                fontSize: 24,
                    padding: "3px 16px 3px 16px",
                        borderRadius: 100,
}}
onChange = {(e)=> Â {
    setValue(e.target.value)
}}
onBlur = {()=> Â {
    letresponseÂ = updateValue(ownerId, order, value)
    setValue(response)
}}
placeholder = { "Ã‰rtÃ©k"}
value = { value }
    />
    <Framer.Stack
height="100%"
width = "0.5fr"
background = "#00000000"
direction = { "horizontal"}
distribution = { "start"}
    >
    <Framer.Frame
height="100%"
width = "fit-content"
background = "#00000000"
    >
    { unit }
    < /Framer.Frame>{" "}
    < /Framer.Stack>
    < /Framer.Stack>
)
}

// Learn more: https://framer.com/api/property-controls/
Framer.addPropertyControls(LimitLine, {
    type: {
        title: "type",
        type: Framer.ControlType.String,
    },
    value0: {
        title: "value",
        type: Framer.ControlType.String,
    },
    unit: {
        title: "unit",
        type: Framer.ControlType.String,
    },
})

