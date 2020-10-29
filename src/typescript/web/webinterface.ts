import { gzipSync } from "zlib"
import { GPS } from "../data/web/gps"
import * as Api from "./api"
import { Configuration } from "./configuration"
let basePath = ""
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



export let addObjective = setupApi.addObjective
export let removeObjective = setupApi.removeObjective
export let addSalesman = setupApi.addSalesman
export let removeSalesman = setupApi.removeSalesman

export let loadSetup = setupApi.loadSetup
export let defineSetup = setupApi.defineSetup
export let getState = setupApi.getState

export let loadState = setupApi.loadState
export let saveSetup = setupApi.saveSetup

export let getBestCost = updateApi.getBestCost
export let getBestResult = updateApi.getBestResult
export let getRootBetween = async function getRootBetween(from: GPS, to: GPS): Promise<GPS[]> {
    return await updateApi
        .getRootBetween(from.lattitude, from.longitude, to.lattitude, to.longitude)
        .then(
            (response) => {
                return response.map((it) => {
                    return {
                        lattitude: it[1],
                        longitude: it[0]
                    } as GPS
                })

            }
        )
}
