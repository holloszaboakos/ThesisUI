import * as WebInterface from "../web/webinterface"
import { Objective } from "./web/objective"
import { Salesman } from "./web/salesman"
import { Task } from "./web/task"
import { Result } from "./web/result"
import { Progress } from "./web/progress"
import { Edge } from "./web/edge"
import { Setting } from "./web/setting"
import { GPS } from "./web/gps"


//TASK CONTAINER
let savedTasks: Task[] = []
export function viewTasks(): string[] {
    return savedTasks.map(it => { return it.name })
}
export function saveTask(name: string) {
    let clone = { ...task }
    clone.name = name
    savedTasks.push(clone)
}
export function loadTask(name: string) {
    let newsetup = savedTasks.find(it => { return it.name === name })
    let tmp = newsetup ? newsetup as Task : task
    updateTask(tmp)
}

//ALGORITHM CONTAINER
let savedSetups: Setting[] = []
export function viewSetups(): string[] {
    return savedSetups.map(it => { return it.name })
}
export function saveSetup(name: string) {
    let clone = { ...setup }
    clone.name = name
    savedSetups.push(clone)
}
export function loadSetup(name: string) {
    let newSetup = savedSetups.find(it => { return it.name === name })
    let tmp = newSetup ? newSetup as Setting : setup
    updateSetup(tmp)
}

//TASK
let task: Task = {
    id: "",
    name: "",
    center: {
        lattitude: 0,
        longitude: 0
    },
    costGraph: {
        id: "",
        name: "",
        objectives: [] as Objective[],
        edges: [] as Edge[][]
    },
    salesmen: [] as Salesman[]
}
let taskChangedCallBacks = [] as ((data: Task) => void)[]
export function addTaskChangeCallBack(callBack: ((data: Task) => void)) {
    taskChangedCallBacks.push(callBack)
}
export function removeTaskChangeCallBack(callBack: ((data: Task) => void)) {
    taskChangedCallBacks = taskChangedCallBacks.filter((it) => { return it !== callBack })
}
export function updateTask(data: Task) {
    task = data
    taskChangedCallBacks.forEach(it => { it(data) })
}
export function getTask(): Task {
    return { ...task }
}



//OBJECTIVE
export function addObjective(data: Objective) {
    WebInterface.addObjective(data).then((id) => {
        data.id = id
        task.costGraph.objectives.push(data)
        updateTask(task)
    })
}
export function removeObjectives(data: string[]) {
    data.forEach(name => {
        let objective = task.costGraph.objective.find(() => it.name === name)
        WebInterface.removeObjective(objective.id)
    })
    task.costGraph.objectives = task.costGraph.objectives
        .filter(objective => objective.name! in data)
    updateTask(task)
}
export function viewObjectives(): string[] {
    return task.costGraph.objectives.map(objective => objective.name)
}
export function getObjectiveByName(name: string): Objective {
    return { ...task.costGraph.objectives.find(objective => { return objective.name === name }) }
}
export function setObjectiveByOldName(oldName: string, objective: Objective) {
    let oldObjective = task.costGraph.objectives.find(objective => { return objective.name === oldName })
    let index = task.costGraph.objectives.indexOf(oldObjective)
    task.costGraph.objectives[index] = objective
    updateTask(task)
}



//SALESMAN
export function addSalesman(data: Salesman) {
    WebInterface.addSalesman(data).then((id) => {
        data.id = id
        task.salesmen.push(data)
        updateTask(task)
    })
}
export function removeSalesmen(data: string[]) {
    task.salesmen = task.salesmen.filter((it: Salesman) => { return it.name! in data })
    updateTask(task)
}
export function viewSalesman(): string[] {
    return task.salesmen.map(salesman => salesman.name)
}
export function getSalesmanByName(name: string): Salesman {
    return { ...task.salesmen.find(salesman => { return salesman.name === name }) }
}
export function setSalesmanByOldName(oldName: string, salesman: Salesman) {
    let oldSalesman = task.salesmen.find(salesman => { return salesman.name === oldName })
    let index = task.salesmen.indexOf(oldSalesman)
    task.salesmen[index] = salesman
    updateTask(task)
}



//SETUP
let setup: Setting = {
    id: "",
    name: "",
    algorithm: "",
    iterLimit: 0,
    timeLimitSecond: 0
}
let setupChangedCallBacks = [] as ((data: Setting) => void)[]
export function addSetupChangeCallBack(callBack: ((data: Setting) => void)) {
    setupChangedCallBacks.push(callBack)
}
export function removeSetupChangeCallBack(callBack: ((data: Setting) => void)) {
    setupChangedCallBacks = setupChangedCallBacks.filter((it) => { return it !== callBack })
}
export function updateSetup(data: Setting) {
    setup = data
    setupChangedCallBacks.forEach(it => { it(data) })
}
export function getSetup(): Setting {
    return { ...setup }
}



//RESULT
let result: Result = {
    id: "",
    name: "",
    bestCostEuro: 0,
    bestRout: [] as GPS[],
    maxCostEuro: 0,
    minCostEuro: 0,
}
let resultChangedCallBacks = [] as ((data: Result) => void)[]
export function addResultChangeCallBack(callBack: ((data: Result) => void)) {
    resultChangedCallBacks.push(callBack)
}
export function removeResultChangeCallBack(callBack: ((data: Result) => void)) {
    resultChangedCallBacks = resultChangedCallBacks.filter((it) => { return it !== callBack })
}
export function updateResult(data: Result) {
    result = data
    resultChangedCallBacks.forEach(it => { it(data) })
}
export function getResult(): Result {
    return { ...result }
}



//RUN
let run: Result
let runChangedCallBacks = [] as ((data: Result) => void)[]
export function addRunChangeCallBack(callBack: ((data: Result) => void)) {
    runChangedCallBacks.push(callBack)
}
export function removeRunChangeCallBack(callBack: ((data: Result) => void)) {
    runChangedCallBacks = runChangedCallBacks.filter((it) => { return it !== callBack })
}
export function updateRun(data: Result) {
    run = data
    runChangedCallBacks.forEach(it => { it(data) })
}
export function getRun(): Result {
    return { ...run }
}


export const publicKey = "pk.eyJ1IjoiaG9sbG8wMDciLCJhIjoiY2tjMjc2OHFoMDFwazMxcXRxczVrYmUxciJ9.aXkMyO-37U4gaScXDnzwnw"
export const style = "mapbox://styles/hollo007/ckc23mj4c10vf1ioabsb1cq9t"