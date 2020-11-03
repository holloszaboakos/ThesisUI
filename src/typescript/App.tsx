import * as Framer from 'framer'
import * as React from 'react'
import { SettedWindow } from './ui/leftmenu/SettedWindow'
import { StartedWindow } from './ui/leftmenu/StartedWindow'
import { RunningWindow } from './ui/leftmenu/RunningWindow'
import { SetupWindow } from './ui/leftmenu/SetupWindow';
import { Map } from "./ui/map/Map"
import '../css/index.css';
import * as DataCenter from "./data/dataCenter"
import * as WebInterface from "./web/webinterface"

export default function App() {
  enum States {
    created,
    prepared,
    started,
    resumed
  }
  const [state, setState] = React.useState(0)

  React.useEffect(() => {
    WebInterface.clean()
  }, [])

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
        fontSize: 20,
      }}
    >
      <Framer.Frame
        height="100%"
        width="0.2fr"
        background="#999999"
        radius={32}
      >
        {(state === States.created) ? (
          <SetupWindow
            set={() =>
              WebInterface.defineTask(DataCenter.getTask())
                .then(id => {
                  let task = DataCenter.getTask()
                  task.id = id
                  DataCenter.updateTask(task)
                  WebInterface.prepare()
                    .then(response => setState(States.prepared))
                })
            }
          />
        ) : (state === States.prepared) ? (
          <SettedWindow
            clean={() =>
              WebInterface.clean().then(response => setState(States.created))
            }
            start={() =>
              WebInterface.start().then(response => setState(States.started))
            }
          />
        ) : (state === States.started) ? (
          <StartedWindow
            stop={() =>
              WebInterface.stop().then(response => setState(States.prepared))
            }
            run={() =>
              WebInterface.resume().then(response => setState(States.resumed))
            }
          />
        ) : (state === States.resumed) && (
          <RunningWindow
            pause={() =>
              WebInterface.pause().then(response => setState(States.started))
            }
          />
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