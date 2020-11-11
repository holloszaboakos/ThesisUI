import * as React from "react"
import * as Framer from "framer"

import { DisplayDataLine } from "./sub/lines/DisplayDataLine"
import { ButtonLine } from "./sub/lines/ButtonLine"

import * as DataCenter from "../../data/dataCenter"
import * as WebInterface from "../../web/webinterface"

import { Graph } from "../../data/web/graph"
import { Edge } from "../../data/web/edge"
import { Objective } from "../../data/web/objective"
import { Salesman } from "../../data/web/salesman"


export function RoutingWindow(props: { previous: () => void, next: () => void }) {
    const [task, setTask] = React.useState(DataCenter.getTask())
    const [result, setResult] = React.useState(DataCenter.getResult())
    const [routingDone, setRoutingDone] = React.useState(false)
    const [refresher, setRefresher] = React.useState(true)

    async function routing() {
        //graph to complete
        let costGraph: Graph = task.costGraph
        //clear graph
        costGraph.edgesBetween = [] as Edge[][]
        costGraph.edgesFromCenter = [] as Edge[]
        costGraph.edgesToCenter = [] as Edge[]
        //cache edges for easy access
        let edgesBetween: Edge[][] = costGraph.edgesBetween as Edge[][]
        let edgesFromCenter: Edge[] = costGraph.edgesFromCenter as Edge[]
        let edgesToCenter: Edge[] = costGraph.edgesToCenter as Edge[]
        //save cleared graph
        DataCenter.updateTask(task)
        //cache objectives for easy access
        let objectives: Objective[] = costGraph.objectives
        //calculate time of packing
        let objectivesTime = 0
        objectives.forEach(objective => objectivesTime += objective.time_Second)
        //calculate edge independent and edge dependent costs of salesman
        let salesmen_Euro: {
            perMeter: number,
            const: number
        }[] = (task.salesmen as Salesman[]).map(salesman => {
            return {
                perMeter:
                    (
                        salesman.fuelPrice_EuroPerLiter
                        * salesman.fuelConsuption_LiterPerMeter
                    ) + (
                        salesman.payment_EuroPerSecond
                        / salesman.vechicleSpeed_MeterPerSecond
                    ),
                const: salesman.basePrice_Euro
                    + salesman.payment_EuroPerSecond
                    * objectivesTime,
            }
        })

        //costs
        let minCost_Euro = Infinity
        let maxCost_Euro = 0
        let maxLength_Meter = 0
        let minLength_Meter = 0

        console.log("ROUTING")
        //routing

        function recursiveRoutingTo(from: Objective, indexFrom: number, indexTo: number) {
            if (indexTo >= objectives.length) {

                //add rout length from and to center to max length
                maxLength_Meter += (
                    edgesFromCenter[indexFrom].length_Meter
                    + edgesToCenter[indexFrom].length_Meter
                )
                //search for salesman with minimal cost on maximal length
                maxCost_Euro = Infinity
                salesmen_Euro.forEach((item) => {
                    let cost = maxLength_Meter * item.perMeter + item.const
                    maxCost_Euro = cost < maxCost_Euro ? cost : maxCost_Euro
                })

                //search for shortest rout from actual location
                let minEdge = Infinity
                edgesBetween[indexFrom].forEach(edge => {
                    minEdge = minEdge > edge.length_Meter ? edge.length_Meter : minEdge
                })
                
                //add shortest rout to minimal length sum
                minLength_Meter += minEdge
                //search for salesman with minimal cost on minimal length
                minCost_Euro = Infinity
                salesmen_Euro.forEach((item) => {
                    let cost = minLength_Meter * item.perMeter + item.const
                    minCost_Euro = cost < minCost_Euro ? cost : minCost_Euro
                })
                //save maximal and minimal cost
                result.maxCost_Euro = maxCost_Euro
                result.minCost_Euro = minCost_Euro
                DataCenter.updateResult(result)
                setRefresher(false)
                recursiveRoutingFrom(indexFrom + 1)
            }
            else {
                let to = objectives[indexTo]
                if (from != to) {
                    WebInterface.getRootBetween(from.location, to.location)
                        .then(edge => {
                            edgesBetween[indexFrom].push(edge)
                            DataCenter.updateTask(task)
                            recursiveRoutingTo(from, indexFrom, indexTo + 1)
                        })
                }
                else{
                    recursiveRoutingTo(from, indexFrom, indexTo + 1)
                }
            }
        }

        function recursiveRoutingFrom(indexFrom: number) {
            if (indexFrom < objectives.length) {
                let from = objectives[indexFrom]

                WebInterface.getRootBetween(costGraph.center, from.location)
                    .then(edge => {
                        edgesFromCenter.push(edge)
                        DataCenter.updateTask(task)
                        //rout from actual location to center
                        WebInterface.getRootBetween(from.location, costGraph.center)
                            .then(edge => {
                                edgesToCenter.push(edge)
                                DataCenter.updateTask(task)

                                //rout from actual location to every other locations
                                edgesBetween.push([] as Edge[])
                                recursiveRoutingTo(from, indexFrom, 0)

                            })
                    })
            }
            else {
                setRoutingDone(true)
            }
        }
        recursiveRoutingFrom(0)
    }

    //TODO rooting
    //onAttach
    React.useEffect(() => {
        DataCenter.addResultChangeCallBack(setResult)
        DataCenter.addTaskChangeCallBack(setTask)
        routing()
    }, [])
    //onDetach
    React.useEffect(() => {
        return () => {
            DataCenter.removeResultChangeCallBack(setResult)
            DataCenter.removeTaskChangeCallBack(setTask)
        }
    }, [])

    React.useEffect(() => {
        !refresher && setRefresher(!refresher)
    }, [refresher])

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
                {refresher && (<>
                    <DisplayDataLine label="Maximum cost (€)" value={result.maxCost_Euro.toFixed(2).toString()} />
                    <DisplayDataLine label="Minimum cost (€)" value={result.minCost_Euro.toFixed(2).toString()} />
                </>)}
            </Framer.Stack>
            {routingDone &&
                <ButtonLine label="Next" functionality={props.next} />
            }
            <ButtonLine label="Clean" functionality={props.previous} />
        </Framer.Stack>)
}