import { GPS } from "./web/gps"
import { Objective } from "./web/objective"
import { Salesman } from "./web/salesman"
import { Setup } from "./web/setup"
import { State } from "./web/state"

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
    setupChangedCallBacks = setupChangedCallBacks.filter((it) => { it != callBack })
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
export function removeObjectives(data: String[]) {
    setup.objectives = setup.objectives.filter((it: Objective) => { it.name! in data })
    updateSetup(setup)
}
export function viewObjectives(): String[] {
    return setup.objectives
}



export function addSalesman(data: Salesman) {
    setup.salesmen.push(data)
    updateSetup(setup)
}
export function removeSalesmen(data: String[]) {
    setup.salesmen = setup.salesmen.filter((it: Salesman) => { it.name! in data })
    updateSetup(setup)
}
export function viewSalesman(): String[] {
    return setup.salesmen
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
    stateChangedCallBacks = stateChangedCallBacks.filter((it) => { it != callBack })
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