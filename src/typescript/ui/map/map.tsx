import * as React from "react"
import * as Framer from "framer"
import * as mapboxgl from "mapbox-gl"
import { getState, publicKey, style } from "../../data/dataCenter"

let mapContainer: HTMLDivElement | null
let map

export function Map(text, tint, onTap, width, height, rest) {

    const [routes, setRoutes] = React.useState(getState().bestRout)
    const [latitude, setLatitude] = React.useState(47.462851)
    const [longitude, setLongitude] = React.useState(19.088509)
    const [zoom, setZoom] = React.useState(10)
    const [active, setActive] = React.useState(true)

    let result = (
        <Framer.Frame
            width={width}
            height={height}
            style={{
                width: "100%",
                height: "100%",
            }}
            ref={(el) => (mapContainer = el)}
            className="mapContainer"
        > </Framer.Frame>
    )

    //ComponentDidMount
    React.useEffect(() => {
        mapboxgl.accessToken = publicKey
        map = new mapboxgl.Map({
            container: mapContainer,
            style: style,
            height: height,
            width: width,
            center: [longitude, latitude],
            zoom: zoom,
        })
        map.on("move", () => {
            setLatitude(map.getCenter().lat.toFixed(4))
            setLongitude(map.getCenter().lng.toFixed(4))
            setZoom(map.getZoom().toFixed(2))
        })
        map.on("load", function () {
            getState().bestRout.forEach((rout, index) => {
                map.addSource("route" + index, {
                    type: "geojson",
                    data: {
                        type: "Feature",
                        properties: {},
                        geometry: {
                            type: "LineString",
                            coordinates: rout,
                        },
                    },
                })
                map.addLayer({
                    id: "route" + index,
                    type: "line",
                    source: "route" + index,
                    layout: {
                        "line-join": "round",
                        "line-cap": "round",
                    },
                    paint: {
                        "line-color": "#E71A80",
                        "line-width": 4,
                    },
                })
            })
        })
    }, [])

    //ComponentWasActivated
    React.useEffect(() => {
        map.center = [longitude, latitude]
        map.zoom = zoom
        map.width = width
        map.height = height
        if (!active) setActive(true)
    }, [active])

    // componentWillUnmount
    React.useEffect(() => {
        return () => {
            map.remove()
        }
    }, [])

    return result
}
