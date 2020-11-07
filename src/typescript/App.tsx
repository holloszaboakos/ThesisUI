import * as Framer from 'framer'
import * as React from 'react'
import { SetupWindow } from './ui/leftmenu/SettingWindow'
import { StartedWindow } from './ui/leftmenu/StartedWindow'
import { RunningWindow } from './ui/leftmenu/RunningWindow'
import { RoutingWindow } from './ui/leftmenu/RoutingWindow';
import { TaskWindow } from './ui/leftmenu/TaskWindow';
import { Map } from "./ui/map/MapWithEditableTargets"
import '../css/index.css';
import * as DataCenter from "./data/dataCenter"
import * as WebInterface from "./web/webinterface"

export default function App() {
  enum States {
    task,
    routing,
    setting,
    started,
    running
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
        {(state === States.task) ? (
          <TaskWindow
            next={() =>
              WebInterface.defineTask(DataCenter.getTask())
                .then(id => {
                  let task = DataCenter.getTask()
                  task.id = id
                  DataCenter.updateTask(task)
                  WebInterface.prepare()
                    .then(response => setState(States.routing))
                })
            }
          />
        ) : (state === States.routing) ? (
          <RoutingWindow
            previous={() =>
              WebInterface.clean().then(response => setState(States.task))
            }
            next={() =>
              WebInterface.start().then(response => setState(States.setting))
            }
          />
        ) : (state === States.setting) ? (
          <SetupWindow
            previous={() =>
              WebInterface.clean().then(response => setState(States.routing))
            }
            next={() =>
              WebInterface.start().then(response => setState(States.started))
            }
          />
        ) : (state === States.started) ? (
          <StartedWindow
            previous={() =>
              WebInterface.stop().then(response => setState(States.setting))
            }
            next={() =>
              WebInterface.resume().then(response => setState(States.running))
            }
          />
        ) : (state === States.running) && (
          <RunningWindow
            previous={() =>
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