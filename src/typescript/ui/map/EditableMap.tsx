import * as React from "react"
import * as Framer from "framer"
import * as mapboxgl from "mapbox-gl"
import * as DataCenter from "../../data/dataCenter"
import { Graph } from "../../data/web/graph"
import { Objective } from "../../data/web/objective"
import { Gps } from "../../data/web/gps"

let mapContainer: HTMLDivElement | null
let map 

export function EditableMap(props: { width: string, height: string, radius: number, margin: number }) {

    const [loaded, setLoaded] = React.useState(false)
    const [task, setTask] = React.useState(DataCenter.getTask)
    const [mapView, setMapView] = React.useState(DataCenter.getMapView)
    const [pos, setPos] = React.useState({ longitude: 0, lattitude: 0 } as Gps)

    function getCostGraph(): Graph {
        return task.costGraph
    }

    //ComponentDidMount
    React.useEffect(() => {
        DataCenter.addTaskChangeCallBack(setTask)
        DataCenter.addMapViewChangeCallBack(setMapView)
        DataCenter.addPosChangeCallBack(setPos)
        mapboxgl.accessToken = DataCenter.publicKey

        map = new mapboxgl.Map({
            container: mapContainer,
            style: DataCenter.style,
            height: props.height,
            width: props.width,
            center: [mapView.location.longitude, mapView.location.lattitude],
            zoom: mapView.zoom
        })

        map.on("move", () => {
            mapView.location.lattitude = map.getCenter().lat
            mapView.location.longitude = map.getCenter().lng
            mapView.zoom = map.getZoom()
            setMapView(mapView)
            DataCenter.updateMapView(mapView)
        })

        map.on('click', function (e) {
            DataCenter.updatePos({ id: "", orderInOwner: 0, longitude: e.lngLat.lng, lattitude: e.lngLat.lat })
        });

        map.on('load', function () {
            let center = getCostGraph().center as Gps
            let objectives = getCostGraph().objectives as Objective[]
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
            console.log("loaded")
        })
    }, [])

    // componentWillUnmount
    React.useEffect(() => {
        return () => {
            DataCenter.removeTaskChangeCallBack(setTask)
            DataCenter.removeMapViewChangeCallBack(setMapView)
            DataCenter.removePosChangeCallBack(setPos)
        }
    }, [])

    React.useEffect(() => {
        map.center = [mapView.location.longitude, mapView.location.lattitude]
        map.zoom = mapView.zoom
    }, [mapView])

    React.useEffect(() => {
        if (loaded) {
            let center = getCostGraph().center as Gps
            let objectives = getCostGraph().objectives as Objective[]
            map.getSource("pointSource").setData({
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'properties': {
                            'color': '#77FF77'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [pos.longitude, pos.lattitude]
                        }
                    },
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
                    }),
                ]
            })
            setMapView(mapView)
        }
    }, [task, pos])

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
            />
        </Framer.Frame>)
}