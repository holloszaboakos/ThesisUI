import * as React from "react"
import * as Framer from "framer"
import * as mapboxgl from "mapbox-gl"
import { getState, publicKey, style } from "../../data/dataCenter"

let mapContainer: HTMLDivElement | null
let map

export class Map extends React.Component<
    { text; tint; onTap; width; height; rest },
    {}
    > {

    state = {
        routes: getState().bestRout,
        latitude: 47.462851,
        longitude: 19.088509,
        zoom: 10,
        width: this.props.width,
        height: this.props.height,
    }

    componentDidMount() {
        mapboxgl.accessToken = publicKey
        map = new mapboxgl.Map({
            container: mapContainer,
            style: style,
            height: this.props.height,
            width: this.props.width,
            center: [this.state.longitude, this.state.latitude],
            zoom: this.state.zoom,
        })
        map.on("move", () => {
            this.setState({
                latitude: map.getCenter().lat.toFixed(4),
                longitude: map.getCenter().lng.toFixed(4),
                zoom: map.getZoom().toFixed(2),
            })
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
    }

    componentDidUpdate() {
        map.center = [this.state.longitude, this.state.latitude]
        map.zoom = this.state.zoom
        map.width = this.props.width
        map.height = this.props.height
    }

    componentWillUnmount() {
        map.remove()
    }

    render() {
        return (
            <Framer.Frame
                width={this.props.width}
                height={this.props.height}
                style={{
                    width: "100%",
                    height: "100%",
                }
                }
                ref={(el) => (mapContainer = el)
                }
                className="mapContainer"
            > </Framer.Frame>
        )
    }
}
