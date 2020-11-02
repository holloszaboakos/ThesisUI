import * as Framer from 'framer'
import * as React from 'react'
import { Setted } from './ui/leftmenu/Setted'
import { Started } from './ui/leftmenu/Started'
import { Running } from './ui/leftmenu/Running'
import { Setup } from './ui/leftmenu/Setup';
import { Map } from "./ui/map/Map"
import '../css/index.css';

export default function App() {
  enum States {
    created,
    prepared,
    started,
    resumed
  }
  const [state, setstate] = React.useState(0)

  return (
    < Framer.Stack
      height="100%"
      width="100%"
      gap={8}
      padding={8}
      background="#777777"
      direction={"horizontal"}
      distribution={"end"}
      style={{
        fontWeight: "bold",
        color: "#000",
        fontSize: 24,
      }}
    >
      <Framer.Frame
        height="100%"
        width="0.2fr"
        background="#999999"
        radius={32}
      >
        {(state === States.created) ? (
          <Setup
            setStateSatted={() => { setstate(States.prepared) }}
          />
        ) : (state === States.prepared) ? (
          <Setted />
        ) : (state === States.started) ? (
          <Started />
        ) : (state === States.resumed) && (
          <Running />
        )
        }
      </Framer.Frame>
      <Framer.Frame
        height="100%"
        width="0.8fr"
        radius={32}
        padding={16}
        background="#999999"
      >
        <Map
          height="100%"
          width="100%"
          radius={32}
          margin={16}
        />
      </Framer.Frame>
    </Framer.Stack >
  );
}