import microengiene from '../models/microengine.scs'
import React, { useEffect, useState,useRef } from "react";
import Communicator from "communicator";

const ViewerManager = (props)=>{
    const [viewBegin, setViewBegin] = useState(false);
  let hmv = useRef(undefined);
  useEffect(() => {
    hmv.current = createView("canvas");
    setViewBegin(true);
    console.log(hmv.current);
  }, []);
  function createView(DivId) {
    let viewer = new Communicator.WebViewer({
      containerId: DivId,
      endpointUri: microengiene,
    });
    viewer.start();
    viewer.setCallbacks({
      sceneReady: () => {
        viewer.view.setBackgroundColor(
          Communicator.Color.red(),
          Communicator.Color.white()
        );
        viewer.view.getAxisTriad().enable();
        viewer.view.getNavCube().enable();
      },
    });
    return viewer;
  }
  if (viewBegin) {
    console.log("I am in viewbegin");
    props.fetchData(hmv.current);
    console.log(hmv.current);
    //props.allowMenubar();
  }
  return (
    <div id="hoops-container">
      <div id="canvas"></div>
    </div>
  );
    }
export default ViewerManager;