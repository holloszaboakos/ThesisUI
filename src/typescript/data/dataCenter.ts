import * as WebInterface from "../web/webinterface"
import { Objective } from "./web/objective"
import { Salesman } from "./web/salesman"
import { Task } from "./web/task"
import { Progress } from "./web/progress"
import { Run } from "./web/run"
import { Edge } from "./web/edge"
import { Setup } from "./web/setup"
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
    let newSetup = savedSetups.find(it => { return it.name === name })
    let tmp = newSetup ? newSetup as Setup : setup
    updateSetup(tmp)
}

//PROGRESSCONTAINER
let savedProgress: Progress[] = []
export function viewProgress(): string[] {
    return savedProgress.map(it => { return it.name })
}
export function saveProgress(name: string) {
    let clone = { ...progress }
    clone.name = name
    savedProgress.push(clone)
}
export function loadProgress(name: string) {
    let newProgress = savedProgress.find(it => { return it.name === name })
    let tmp = newProgress ? newProgress as Progress : progress
    updateProgress(tmp)
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
let setup: Setup = {
    id: "",
    name: "",
    algorithm: "",
    iterLimit: 0,
    timeLimitSecond: 0
}
let setupChangedCallBacks = [] as ((data: Setup) => void)[]
export function addSetupChangeCallBack(callBack: ((data: Setup) => void)) {
    setupChangedCallBacks.push(callBack)
}
export function removeSetupChangeCallBack(callBack: ((data: Setup) => void)) {
    setupChangedCallBacks = setupChangedCallBacks.filter((it) => { return it !== callBack })
}
export function updateSetup(data: Setup) {
    setup = data
    setupChangedCallBacks.forEach(it => { it(data) })
}
export function getSetup(): Setup {
    return { ...setup }
}



//PROGRESS
let progress: Progress = {
    id: "",
    name: "",
    bestCostEuro: 0,
    bestRout: [] as GPS[],
    maxCostEuro: 0,
    minCostEuro: 0,
}
let progressChangedCallBacks = [] as ((data: Progress) => void)[]
export function addProgressChangeCallBack(callBack: ((data: Progress) => void)) {
    progressChangedCallBacks.push(callBack)
}
export function removeProgressChangeCallBack(callBack: ((data: Progress) => void)) {
    progressChangedCallBacks = progressChangedCallBacks.filter((it) => { return it !== callBack })
}
export function updateProgress(data: Progress) {
    progress = data
    progressChangedCallBacks.forEach(it => { it(data) })
}
export function getProgress(): Progress {
    return { ...progress }
}



//RUN
let run: Run
let runChangedCallBacks = [] as ((data: Run) => void)[]
export function addRunChangeCallBack(callBack: ((data: Run) => void)) {
    runChangedCallBacks.push(callBack)
}
export function removeRunChangeCallBack(callBack: ((data: Run) => void)) {
    runChangedCallBacks = runChangedCallBacks.filter((it) => { return it !== callBack })
}
export function updateRun(data: Run) {
    run = data
    runChangedCallBacks.forEach(it => { it(data) })
}
export function getRun(): Run {
    return { ...run }
}


export const publicKey = "pk.eyJ1IjoiaG9sbG8wMDciLCJhIjoiY2tjMjc2OHFoMDFwazMxcXRxczVrYmUxciJ9.aXkMyO-37U4gaScXDnzwnw"
export const style = "mapbox://styles/hollo007/ckc23mj4c10vf1ioabsb1cq9t"