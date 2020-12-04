import * as React from "react"
import * as Framer from "framer"
import * as mapboxgl from "mapbox-gl"
import * as DataCenter from "../../data/dataCenter"
import { Graph } from "../../data/web/graph"
import { Edge } from "../../data/web/edge"
import { RoutingWindow } from "../leftmenu/RoutingWindow"
import { Gps } from "../../data/web/gps"
import { Objective } from "../../data/web/objective"

let mapContainer: HTMLDivElement | null
let map: mapboxgl.Map

export function LoaderMap(props: { width: string, height: string, radius: number, margin: number }) {

    const [task, setTask] = React.useState(DataCenter.getTask())
    const [mapView, setMapView] = React.useState(DataCenter.getMapView())
    const [active, setActive] = React.useState(true)
    const [loaded, setLoaded] = React.useState(false)

    //ComponentDidMount
    React.useEffect(() => {
        DataCenter.addTaskChangeCallBack(setTask)
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
                        ...(task.costGraph as Graph).edgesBetween.flat().map((edge: Edge, index) => {
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

    // componentWillUnmount
    React.useEffect(() => {
        return () => {
            DataCenter.removeTaskChangeCallBack(setTask)
            DataCenter.removeMapViewChangeCallBack(setMapView)
        }
    }, [])

    //ComponentWasActivated
    React.useEffect(() => {
        map.center = [mapView.location.longitude, mapView.location.lattitude]
        map.zoom = mapView.zoom
        map.width = props.width
        map.height = props.height
        if (!active) setActive(true)
    }, [active])

    //ComponentWasActivated
    React.useEffect(() => {
        if (loaded) {
            map.getSource("routSource").setData({
                'type': 'FeatureCollection',
                'features': [
                    ...(task.costGraph as Graph).edgesFromCenter.map((edge: Edge, index) => {
                        return edge.rout && {
                            type: "Feature",
                            properties: {
                                'color': '#000077'
                            },
                            geometry: {
                                type: "LineString",
                                coordinates: edge.rout.map(GPS => [GPS.longitude, GPS.lattitude]),
                            }
                        }
                    }).filter((it)=>it),
                    ...(task.costGraph as Graph).edgesToCenter.map((edge: Edge, index) => {
                        return edge.rout && {
                            type: "Feature",
                            properties: {
                                'color': '#000077'
                            },
                            geometry: {
                                type: "LineString",
                                coordinates: edge.rout.map(GPS => [GPS.longitude, GPS.lattitude]),
                            }
                        }
                    }).filter((it)=>it),
                    ...(task.costGraph as Graph).edgesBetween.flat().map((edge: Edge, index) => {
                        return edge.rout && {
                            type: "Feature",
                            properties: {
                                'color': '#000077'
                            },
                            geometry: {
                                type: "LineString",
                                coordinates: edge.rout.map(GPS => [GPS.longitude, GPS.lattitude]),
                            }
                        }
                    }).filter((it)=>it),
                ]
            })
            setMapView(mapView)
        }
    }, [task])

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
