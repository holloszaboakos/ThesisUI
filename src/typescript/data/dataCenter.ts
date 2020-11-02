import { GPS } from "./web/gps"
import { Objective } from "./web/objective"
import { Salesman } from "./web/salesman"
import { Setup } from "./web/setup"
import { State } from "./web/state"

let savedSetups: Setup[] = []
export function viewSetups(): string[] {
    return savedSetups.map(it => { return it.name })
}
export function saveSetup(name: string) {
    let clone = { ...setup }
    clone.name = name
    savedSetups.push(clone)
}
export function loadSetup(name: string) {
    let newsetup = savedSetups.find(it => { return it.name === name })
    let tmp = newsetup ? newsetup as Setup : setup
    updateSetup(tmp)
}
let savedStates: State[] = []
export function viewStates(): string[] {
    return savedStates.map(it => { return it.name })
}
export function saveState(name: string) {
    let clone = { ...state }
    clone.name = name
    savedStates.push(clone)
}
export function loadState(name: string) {
    let newstate = savedStates.find(it => { return it.name === name })
    let tmp = newstate ? newstate as State : state
    updateState(tmp)
}


const setup: Setup = {
    id: "",
    name: "",
    iterLimit: -1,
    timeLimitSecond: -1,
    center: {
        lattitude: 0,
        longitude: 0
    },
    objectives: [] as Objective[],
    salesmen: [] as Salesman[]
}



let setupChangedCallBacks = [] as ((data: Setup) => void)[]
export function addSetupChangeCallBack(callBack: ((data: Setup) => void)) {
    setupChangedCallBacks.push(callBack)
}
export function removeSetupChangeCallBack(callBack: ((data: Setup) => void)) {
    setupChangedCallBacks = setupChangedCallBacks.filter((it) => { return it !== callBack })
}
export function updateSetup(data: Setup) {
    setupChangedCallBacks.forEach(it => { it(data) })
}
export function getSetup(): Setup {
    return {
        id: setup.id,
        name: setup.id,
        iterLimit: setup.iterLimit,
        timeLimitSecond: setup.timeLimitSecond,
        center: setup.center,
        objectives: setup.objectives,
        salesmen: setup.salesmen
    }
}
export let isSetupActive = false



export function addObjective(data: Objective) {
    setup.objectives.push(data)
    updateSetup(setup)
}
export function removeObjectives(data: string[]) {
    setup.objectives = setup.objectives.filter((it: Objective) => { return it.name! in data })
    updateSetup(setup)
}
export function viewObjectives(): string[] {
    return setup.objectives.map(objective => objective.name)
}
export function getObjectiveByName(name: string): Objective {
    return { ...setup.objectives.find(objective => { return objective.name === name }) }
}
export function setObjectiveByOldName(oldName: string, objective: Objective) {
    let oldObjective = setup.objectives.find(objective => { return objective.name === oldName })
    let index = setup.objectives.indexOf(oldObjective)
    setup.objectives[index] = objective
}



export function addSalesman(data: Salesman) {
    setup.salesmen.push(data)
    updateSetup(setup)
}
export function removeSalesmen(data: string[]) {
    setup.salesmen = setup.salesmen.filter((it: Salesman) => { return it.name! in data })
    updateSetup(setup)
}
export function viewSalesman(): string[] {
    return setup.salesmen.map(salesman => salesman.name)
}
export function getSalesmanByName(name: string): Salesman {
    return { ...setup.salesmen.find(salesman => { return salesman.name === name }) }
}
export function setSalesmanByOldName(oldName: string, salesman: Salesman) {
    let oldSalesman = setup.salesmen.find(salesman => { return salesman.name === oldName })
    let index = setup.salesmen.indexOf(oldSalesman)
    setup.salesmen[index] = salesman
}

const state: State = {
    id: "",
    name: "",
    maxCostEuro: -1,
    minCostEuro: -1,
    iteration: -1,
    runtimeSecond: -1,
    setup: setup,
    bestRout: [] as GPS[]
}
let stateChangedCallBacks = [] as ((data: State) => void)[]
export function addStateChangeCallBack(callBack: ((data: State) => void)) {
    stateChangedCallBacks.push(callBack)
}
export function removeStateChangeCallBack(callBack: ((data: State) => void)) {
    stateChangedCallBacks = stateChangedCallBacks.filter((it) => { return it !== callBack })
}
export function updateState(data: State) {
    stateChangedCallBacks.forEach(it => { it(data) })
}
export function getState(): State {
    return {
        id: state.id,
        name: state.name,
        maxCostEuro: state.maxCostEuro,
        minCostEuro: state.minCostEuro,
        iteration: state.iteration,
        runtimeSecond: state.runtimeSecond,
        setup: state.setup,
        bestRout: state.bestRout
    }
}
export let isStateActive = false

export const publicKey = "pk.eyJ1IjoiaG9sbG8wMDciLCJhIjoiY2tjMjc2OHFoMDFwazMxcXRxczVrYmUxciJ9.aXkMyO-37U4gaScXDnzwnw"
export const style = "mapbox://styles/hollo007/ckc23mj4c10vf1ioabsb1cq9t"