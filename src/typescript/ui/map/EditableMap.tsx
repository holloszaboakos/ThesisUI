import * as React from "react"
import * as Framer from "framer"
import * as mapboxgl from "mapbox-gl"
import * as DataCenter from "../../data/dataCenter"
import { Graph } from "../../data/web/graph"
import { Objective } from "../../data/web/objective"
import { GPS } from "../../data/web/gps"

let mapContainer: HTMLDivElement | null
let map

export function EditableMap(props: { width: string, height: string, radius: number, margin: number }) {

    let layerIds = [] as string[]
    const [loaded, setLoaded] = React.useState(false)
    const [task, setTask] = React.useState(DataCenter.getTask())
    const [mapView, setMapView] = React.useState(DataCenter.getMapView())

    function getCostGraph(): Graph {
        return task.costGraph
    }

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
            DataCenter.updatePos({ longitude: e.lngLat.lng, lattitude: e.lngLat.lat })
        });

        map.on("load", function () {
            map.addSource("center", {
                'type': 'geojson',
                'data': {
                    'type': 'Point',
                    'coordinates': [getCostGraph().center.longitude, getCostGraph().center.lattitude]
                }
            })
            map.addLayer({
                'id': "center",
                'source': "center",
                'type': 'circle',
                'paint': {
                    'circle-radius': 10,
                    'circle-color': '#ff0000'
                }
            })
            getCostGraph().objectives.forEach((objective: Objective, index) => {
                let position = objective.location
                map.addSource("point" + index, {
                    'type': 'geojson',
                    'data': {
                        'type': 'Point',
                        'coordinates': [position.longitude, position.lattitude]
                    }
                })
                map.addLayer({
                    'id': "point" + index,
                    'source': "point" + index,
                    'type': 'circle',
                    'paint': {
                        'circle-radius': 10,
                        'circle-color': '#007cbf'
                    }
                })

                layerIds.push("point" + index)
            })
            setLoaded(true)
            console.log("loaded")
        })
    }, [])

    // componentWillUnmount
    React.useEffect(() => {
    }, [])

    React.useEffect(() => {
        map.center = [mapView.location.longitude, mapView.location.lattitude]
        map.zoom = mapView.zoom
    }, [mapView])

    React.useEffect(() => {
        if (loaded) {

            let temporaryMap = map
            temporaryMap = temporaryMap.removeLayer("center")
            temporaryMap = temporaryMap.removeSource("center")
            layerIds.forEach((id) => {
                temporaryMap = temporaryMap.removelayer(id)
                temporaryMap = temporaryMap.removeSource(id)
            })
            map = temporaryMap
            layerIds = []

            map.addSource("center", {
                'type': 'geojson',
                'data': {
                    'type': 'Point',
                    'coordinates': [getCostGraph().center.longitude, getCostGraph().center.lattitude]
                }
            })
            map.addLayer({
                'id': "center",
                'source': "center",
                'type': 'circle',
                'paint': {
                    'circle-radius': 10,
                    'circle-color': '#ff0000'
                }
            })
            getCostGraph().objectives.forEach((objective: Objective, index) => {
                let position = objective.location
                if (!map.getSource("point" + index))
                    map.addSource("point" + index, {
                        'type': 'geojson',
                        'data': {
                            'type': 'Point',
                            'coordinates': [position.longitude, position.lattitude]
                        }
                    })
                else
                    map.getSource("point" + index).setData({
                        'type': 'Point',
                        'coordinates': [position.longitude, position.lattitude]
                    })
                map.addLayer({
                    'id': "point" + index,
                    'source': "point" + index,
                    'type': 'circle',
                    'paint': {
                        'circle-radius': 10,
                        'circle-color': '#007cbf'
                    }
                })
                layerIds.push("point" + index)
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
            />
        </Framer.Frame>)
}