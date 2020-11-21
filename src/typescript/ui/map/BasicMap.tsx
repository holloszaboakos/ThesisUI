import * as React from "react"
import * as Framer from "framer"
import * as DataCenter from "../../data/dataCenter"
import { Gps } from "../../data/web/gps";
import { Feature } from "react-mapbox-gl";

export function BasicMap(props: { width: string, height: string, radius: number, margin: number }) {
    var ReactMapboxGl = require('react-mapbox-gl');
    var Layer = ReactMapboxGl.Layer;
    var Feature = ReactMapboxGl.Feature;
    const Map = ReactMapboxGl.Map({
        accessToken: DataCenter.publicKey
    });

    const [position, setPosition] = React.useState({ longitude: 0, lattitude: 0 } as Gps)

    return (
        <Framer.Frame
            radius={16}
            width="100%"
            height="100%"
            background="#00000000"
        >
            <div
                style={{
                    height: "100%",
                    width: "100%"

                }}
            >
                <Map
                    style={DataCenter.style}
                    center={[0, 0]}
                    zoom={[1]}
                    containerStyle={{
                        height: "70%"
                    }}
                    onClick={(map, evt) => {
                        setPosition({ id: "", orderInOwner: 0, longitude: evt.lngLat.lng, lattitude: evt.lngLat.lat });
                    }}
                >
                    <Layer
                        type="circle"
                        id="point"
                        paint={{
                            'circle-stroke-width': 4,
                            'circle-radius': 10,
                            'circle-blur': 0.15,
                            'circle-color': '#3770C6',
                            'circle-stroke-color': 'white'
                        }}
                    >
                        <Feature key={1} coordinates={[0, 0]} />
                    </Layer>
                </Map>
            </div>
        </Framer.Frame >
    )
}
