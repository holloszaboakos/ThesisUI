import { gzipSync } from "zlib"
import { GPS } from "../data/web/gps"
import * as Api from "./api"
import { Configuration } from "./configuration"
let basePath = "http://localhost:1234/".replace(/\/+$/, "")
export function setBasepath(data: string) {
    basePath = data
}

export let lifecicleApi = Api.LifecicleApiFactory(new Configuration(), fetch, basePath)
export let setupApi = Api.SetupApiFactory(new Configuration(), fetch, basePath)
export let updateApi = Api.UpdateApiFactory(new Configuration(), fetch, basePath)



export let prepare = lifecicleApi.prepare
export let start = lifecicleApi.start
export let resume = lifecicleApi.resume
export let pause = lifecicleApi.pause
export let stop = lifecicleApi.stop
export let clean = lifecicleApi.clean
export let step = lifecicleApi.step
export let cycle = lifecicleApi.cycle



export let addObjective = setupApi.addObjective
export let removeObjective = setupApi.removeObjective
export let addSalesman = setupApi.addSalesman
export let removeSalesman = setupApi.removeSalesman

export let loadTask = setupApi.loadTask
export let defineTask = setupApi.defineTask
export let saveTask = setupApi.saveTask
export let listTaskNames = setupApi.listTaskNames

export let loadSetting = setupApi.loadSetting
export let defineSetting = setupApi.defineSetting
export let saveSetting = setupApi.saveSetting
export let listSettingsNames = setupApi.listSettingsNames

export let listAlgorithms = setupApi.listAlgorithms

export let getProgress = updateApi.getProgress
export let getResult = updateApi.getResult
export let getRootBetween = async function getRootBetween(from: GPS, to: GPS): Promise<GPS[]> {
    return await updateApi
        .getRootBetween(from.lattitude, from.longitude, to.lattitude, to.longitude)
        .then(response => { return response })
}
