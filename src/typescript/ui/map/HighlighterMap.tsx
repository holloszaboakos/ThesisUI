import * as React from "react"
import * as Framer from "framer"
import * as mapboxgl from "mapbox-gl"
import * as DataCenter from "../../data/dataCenter"
import { Gps } from "../../data/web/gps"
import { Objective } from "../../data/web/objective"
import { Graph } from "../../data/web/graph"
import { Edge } from "../../data/web/edge"
import { GpsArray } from "../../data/web/gpsArrray"
import { EdgeArray } from "../../data/web/edgeArray"

let mapContainer: HTMLDivElement | null
let map

export function HighlighterMap(props: { width: string, height: string, radius: number, margin: number }) {

    const [task, setTask] = React.useState(DataCenter.getTask)
    const [mapView, setMapView] = React.useState(DataCenter.getMapView)
    const [result, setResult] = React.useState(DataCenter.getResult)
    const [loaded, setLoaded] = React.useState(false)


    //ComponentDidMount
    React.useEffect(() => {
        DataCenter.addTaskChangeCallBack(setTask)
        DataCenter.addResultChangeCallBack(setResult)
        DataCenter.addMapViewChangeCallBack(setMapView)
        mapboxgl.accessToken = DataCenter.publicKey
        map = new mapboxgl.Map({
            container: mapContainer,
            style: DataCenter.style,
            height: props.height,
            width: props.width,
            center: [mapView.location.longitude, mapView.location.lattitude],
            zoom: mapView.zoom,
        })

        map.on("move", () => {
            mapView.location.lattitude = map.getCenter().lat
            mapView.location.longitude = map.getCenter().lng
            mapView.zoom = map.getZoom()
            setMapView(mapView)
            DataCenter.updateMapView(mapView)
        })

        map.on("load", function () {
            let center = task.costGraph.center as Gps
            let objectives = task.costGraph.objectives as Objective[]
            map.addSource("routSource", {
                type: "geojson",
                data: {
                    'type': 'FeatureCollection',
                    'features': [
                        ...(task.costGraph as Graph).edgesFromCenter.map((edge: Edge, index) => {
                            return {
                                type: "Feature",
                                properties: {
                                    'color': '#000077'
                                },
                                geometry: {
                                    type: "LineString",
                                    coordinates: edge.rout.map(GPS => [GPS.longitude, GPS.lattitude]),
                                }
                            }
                        }),
                        ...(task.costGraph as Graph).edgesToCenter.map((edge: Edge, index) => {
                            return {
                                type: "Feature",
                                properties: {
                                    'color': '#000077'
                                },
                                geometry: {
                                    type: "LineString",
                                    coordinates: edge.rout.map(GPS => [GPS.longitude, GPS.lattitude]),
                                }
                            }
                        }),
                        ...(task.costGraph as Graph).edgesBetween.map((edgeArray: EdgeArray, indexArray) => {
                            return edgeArray.values.map((edge: Edge, indexEdge) => {
                                return {
                                    type: "Feature",
                                    properties: {
                                        'color': '#000077'
                                    },
                                    geometry: {
                                        type: "LineString",
                                        coordinates: edge.rout && edge.rout.map(GPS => [GPS.longitude, GPS.lattitude]),
                                    }
                                }
                            })
                        }).flat().filter((it) => it),
                    ]
                }
            })
            map.addLayer({
                id: "routLayer",
                type: "line",
                source: "routSource",
                paint: {
                    'line-width': 3,
                    'line-color': ['get', 'color']
                }
            })
            map.addSource('pointSource', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'properties': {
                                'color': '#ff0000'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [center.longitude, center.lattitude]
                            }
                        },
                        ...objectives.map(objective => {
                            return {
                                'type': 'Feature',
                                'properties': {
                                    'color': '#007700'
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [objective.location.longitude, objective.location.lattitude]
                                }
                            }
                        })
                    ]
                }
            })
            map.addLayer({
                'id': "pointsLayer",
                'source': "pointSource",
                'type': 'circle',
                'paint': {
                    'circle-radius': 5,
                    'circle-color': ['get', 'color']
                }
            })
            setLoaded(true)
        })
    }, [])

    //ComponentWasActivated
    React.useEffect(() => {
        if (loaded) {
            //let colors: string[] = ['#000077', '#007700', '#770000', '#007777', '#770077', '#770000', '#777777', '#000000']
            let objectives: Objective[] = task.costGraph.objectives
            let fromCenterIndexes = [] as number[]
            let toCenterIndexes = [] as number[]
            let betweenObjectivesIndexes = [] as { from: number, to: number }[]
            result.bestRout.forEach((rout: GpsArray) => {

                if (rout.values.length !== 0) {

                    fromCenterIndexes.push(objectives.findIndex(objective =>
                        objective.location.lattitude === rout.values[0].lattitude
                        && objective.location.longitude === rout.values[0].longitude
                    ))

                    toCenterIndexes.push(objectives.findIndex(objective =>
                        objective.location.lattitude === rout.values[rout.values.length - 1].lattitude
                        && objective.location.longitude === rout.values[rout.values.length - 1].longitude
                    ))

                    if (rout.values.length > 1) {
                        rout.values.forEach((stopFrom: Gps, indexFrom: number, rout: Gps[]) => {
                            if (indexFrom !== rout.length - 1) {
                                let stopTo = rout[indexFrom + 1]
                                let fromIndex = objectives.findIndex(objective =>
                                    objective.location.lattitude === stopFrom.lattitude
                                    && objective.location.longitude === stopFrom.longitude
                                )
                                let toIndex = objectives.findIndex(objective =>
                                    objective.location.lattitude === stopTo.lattitude
                                    && objective.location.longitude === stopTo.longitude
                                )

                                fromIndex > toIndex ?
                                    betweenObjectivesIndexes.push({ from: fromIndex, to: toIndex }) :
                                    betweenObjectivesIndexes.push({ from: fromIndex, to: toIndex - 1 })
                            }
                        })
                    }
                }
            })
            map.getSource("routSource").setData({
                'type': 'FeatureCollection',
                'features': [
                    ...fromCenterIndexes.map(index => {
                        return {
                            type: "Feature",
                            properties: {
                                'color': '#000077'
                            },
                            geometry: {
                                type: "LineString",
                                coordinates: (task.costGraph as Graph).edgesFromCenter[index].rout.map(GPS => [GPS.longitude, GPS.lattitude]),
                            }
                        }
                    }),
                    ...betweenObjectivesIndexes.map((pair: { from: number, to: number }) => {
                        return {
                            type: "Feature",
                            properties: {
                                'color': '#000077'
                            },
                            geometry: {
                                type: "LineString",
                                coordinates: (task.costGraph as Graph).edgesBetween[pair.from].values[pair.to].rout.map(GPS => [GPS.longitude, GPS.lattitude]),
                            }
                        }

                    }),
                    ...toCenterIndexes.map(index => {
                        return {
                            type: "Feature",
                            properties: {
                                'color': '#000077'
                            },
                            geometry: {
                                type: "LineString",
                                coordinates: (task.costGraph as Graph).edgesToCenter[index].rout.map(GPS => [GPS.longitude, GPS.lattitude]),
                            }
                        }
                    }),
                ]
            })
            setMapView(mapView)
        }
    }, [result])

    // componentWillUnmount
    React.useEffect(() => {
        return () => {
            DataCenter.removeTaskChangeCallBack(setTask)
            DataCenter.removeMapViewChangeCallBack(setMapView)
            DataCenter.removeResultChangeCallBack(setResult)
        }
    }, [])

    //ComponentWasActivated
    React.useEffect(() => {
        map.center = [mapView.location.longitude, mapView.location.lattitude]
        map.zoom = mapView.zoom
        map.width = props.width
        map.height = props.height
    }, [mapView])


    return (
        <Framer.Frame
            height={props.height}
            width={props.width}
            radius={props.radius}
            margin={props.margin}
            background="#00000000"
        >
            <div
                style={{
                    height: "95%",
                    margin: "16px",
                    border: "none",
                }}
                ref={(el) => (mapContainer = el)}
                className="mapContainer"
            > </div>
        </Framer.Frame>
    )
}
