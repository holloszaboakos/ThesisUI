import * as WebInterface from "../web/webinterface"
import { Objective } from "./web/objective"
import { Salesman } from "./web/salesman"
import { Task } from "./web/task"
import { Result } from "./web/result"
import { Progress } from "./web/progress"
import { Edge } from "./web/edge"
import { Setting } from "./web/setting"
import { Gps } from "./web/gps"
import { MapView } from "./map/mapview"
import { EdgeArray } from "./web/edgeArray"
import { GpsArray } from "./web/gpsArrray"


//TASK CONTAINER
const savedTaskNames = [] as string[]
export function viewTasks(setNames: (names: string[]) => void) {
    if (savedTaskNames.length === 0)
        WebInterface.listTaskNames().then(names => {
            setNames(names)
            names.forEach(name => {
                savedTaskNames.push(name)
            })
        })
    else
        setNames(savedTaskNames)
}
export function saveTask(name: string) {
    let clone = { ...task }
    clone.name = name
    WebInterface.defineTask(clone)
        .then(id => {
            clone.id = id
            WebInterface.saveTask(name)
            savedTaskNames.push(name)
        })
}
export function loadTask(name: string) {
    WebInterface.loadTask(name).then(task => {
        updateTask(task)
    })
}

//ALGORITHM CONTAINER
let savedSettingNames: string[] = []
export function viewSettings(setNames: (names: string[]) => void) {
    if (savedSettingNames.length === 0)
        WebInterface.listSettingsNames().then(names => {
            setNames(names)
            names.forEach(name => {
                savedSettingNames.push(name)
            })
        })
    else
        setNames(savedSettingNames)
}
export function saveSetting(name: string) {
    let clone = { ...setting }
    clone.name = name
    WebInterface.defineSetting(clone)
        .then(id => {
            clone.id = id
            WebInterface.saveSetting(name)
            savedSettingNames.push(name)
        })
}
export function loadSetting(name: string) {
    WebInterface.loadSetting(name).then(setting => {
        updateSetting(setting)
    })
}

//TASK
let task: Task = {
    id: "",
    name: "",
    costGraph: {
        id: "",
        name: "",
        objectives: [] as Objective[],
        center: {
            lattitude: 0,
            longitude: 0
        },
        edgesBetween: [] as EdgeArray[],
        edgesFromCenter: [] as Edge[],
        edgesToCenter: [] as Edge[]
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
    taskChangedCallBacks.forEach(it => { it({ ...data }) })
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
    console.log(JSON.stringify(data))
    task.costGraph.objectives = task.costGraph.objectives.filter(objective => {
        let contains = false
        data.forEach(name => {
            if (name === objective.name)
                contains = true
        })
        return !contains
    })
    updateTask(task)
}
export function viewObjectives(): string[] {
    return task.costGraph.objectives.map(objective => objective.name)
}
export function getObjectiveByName(name: string): Objective {
    return { ...task.costGraph.objectives.find(objective => { return objective.name === name }) }
}
export function setObjectiveByOldName(oldName: string, objective: Objective) {
    let index = task.costGraph.objectives.findIndex(objective => { return objective.name === oldName })
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
    console.log(JSON.stringify(data))
    task.salesmen = task.salesmen.filter(salesman => {
        let contains = false
        data.forEach(name => {
            if (name === salesman.name)
                contains = true
        })
        return !contains
    })
    updateTask(task)
}
export function viewSalesman(): string[] {
    return task.salesmen.map(salesman => salesman.name)
}
export function getSalesmanByName(name: string): Salesman {
    return { ...task.salesmen.find(salesman => { return salesman.name === name }) }
}
export function setSalesmanByOldName(oldName: string, salesman: Salesman) {
    let index = task.salesmen.findIndex(salesman => { return salesman.name === oldName })
    task.salesmen[index] = salesman
    updateTask(task)
}



//SETUP
let setting: Setting = {
    id: "",
    name: "",
    algorithm: "",
    iterLimit: 0,
    timeLimit_Second: 0
}
let settingChangedCallBacks = [] as ((data: Setting) => void)[]
export function addSettingChangeCallBack(callBack: ((data: Setting) => void)) {
    settingChangedCallBacks.push(callBack)
}
export function removeSettingChangeCallBack(callBack: ((data: Setting) => void)) {
    settingChangedCallBacks = settingChangedCallBacks.filter((it) => { return it !== callBack })
}
export function updateSetting(data: Setting) {
    setting = data
    settingChangedCallBacks.forEach(it => { it(data) })
}
export function getSetting(): Setting {
    return { ...setting }
}



//RESULT
let result: Result = {
    id: "",
    name: "",
    bestRout: [] as GpsArray[],
    maxCost_Euro: 0,
    minCost_Euro: 0,
    bestCost_Euro: 0,
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
export function loadResult(setResult: (r: Result) => void) {
    WebInterface.getResult().then(result => {
        setResult(result)
    })
}



//RUN
let progress: Progress = {
    id: "",
    name: "",
    iteration: 0,
    runtime_Second: 0
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
    WebInterface.getProgress().then(progress => {
        updateProgress(progress)
    })
    return { ...progress }
}

const algorithmNames: string[] = []
export function listAlgorithms(setNames: (names: string[]) => void) {
    if (algorithmNames.length === 0)
        WebInterface.listAlgorithms(names => {
            setNames(names)
            names.forEach(name => {
                algorithmNames.push(name)
            })
        })
    else
        setNames(algorithmNames)
}

//MAPVIEW
let mapview: MapView = {
    location: {
        lattitude: 47.15,
        longitude: 19.43
    },
    zoom: 7.1
}
let mapviewChangedCallBacks = [] as ((data: MapView) => void)[]
export function addMapViewChangeCallBack(callBack: ((data: MapView) => void)) {
    mapviewChangedCallBacks.push(callBack)
}
export function removeMapViewChangeCallBack(callBack: ((data: MapView) => void)) {
    mapviewChangedCallBacks = mapviewChangedCallBacks.filter((it) => { return it !== callBack })
}
export function updateMapView(data: MapView) {
    mapview = data
    mapviewChangedCallBacks.forEach(it => it({ ...data }))
}
export function getMapView(): MapView {
    return { ...mapview }
}

let pos: Gps = {
    id: "",
    orderInOwner: 0,
    lattitude: 0,
    longitude: 0
}
let posChangedCallBacks = [] as ((data: Gps) => void)[]
export function addPosChangeCallBack(callBack: ((data: Gps) => void)) {
    posChangedCallBacks.push(callBack)
}
export function removePosChangeCallBack(callBack: ((data: Gps) => void)) {
    posChangedCallBacks = posChangedCallBacks.filter((it) => { return it !== callBack })
}
export function updatePos(data: Gps) {
    pos = data
    posChangedCallBacks.forEach(it => it({ ...data }))
}
export function getPos(): Gps {
    return { ...pos }
}

export const publicKey = "pk.eyJ1IjoiaG9sbG8wMDciLCJhIjoiY2tjMjc2OHFoMDFwazMxcXRxczVrYmUxciJ9.aXkMyO-37U4gaScXDnzwnw"
export const style = "mapbox://styles/hollo007/ckc23mj4c10vf1ioabsb1cq9t"