import * as React from "react"
import * as Framer from "framer"
import * as mapboxgl from "mapbox-gl"
import * as DataCenter from "../../data/dataCenter"

let mapContainer: HTMLDivElement | null
let map: mapboxgl.Map

export function LoaderMap(props: { width: string, height: string, radius: number, margin: number }) {

    const [routes, setRoutes] = React.useState(DataCenter.getResult().bestRout)
    const [latitude, setLatitude] = React.useState(47.462851)
    const [longitude, setLongitude] = React.useState(19.088509)
    const [zoom, setZoom] = React.useState(7)
    const [active, setActive] = React.useState(true)

    let result = (
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

    //ComponentDidMount
    React.useEffect(() => {
        mapboxgl.accessToken = DataCenter.publicKey
        map = new mapboxgl.Map({
            container: mapContainer,
            style: DataCenter.style,
            height: props.height,
            width: props.width,
            center: [longitude, latitude],
            zoom: zoom,
            interactive: false
        })

        map.on("move", () => {
            setLatitude(map.getCenter().lat.toFixed(4))
            setLongitude(map.getCenter().lng.toFixed(4))
            setZoom(map.getZoom().toFixed(2))
        })

        map.on("load", function () {
            DataCenter.getResult().bestRout.forEach((rout, index) => {
                map.addSource("route" + index, {
                    type: "geojson",
                    data: {
                        type: "Feature",
                        properties: {},
                        geometry: {
                            type: "LineString",
                            coordinates: rout,
                        }
                    }
                })
                map.addLayer({
                    id: "route" + index,
                    type: "line",
                    source: "route" + index,
                    layout: {
                        "line-join": "round",
                        "line-cap": "round",

                        t: {
                            "line-color": "#E71A80",
                            "line-width": 4,
                        }
                    }
                })
            })
        })
    }, [])

    //ComponentWasActivated
    React.useEffect(() => {
        map.center = [longitude, latitude]
        map.zoom = zoom
        map.width = props.width
        map.height = props.height
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
