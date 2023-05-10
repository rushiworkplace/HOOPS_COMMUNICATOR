import React, { useEffect, useState,useRef } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Communicator from "communicator";

const DropDown=(props)=> {
    const toolBarHmv = props.toolBarHmv.hmv;
    const viewList = props.viewList;
    const mode = props.mode;
    const firstMode = props.firstMode;
    console.log(firstMode);
  const [VIEW, setVIEW] = useState(firstMode);
  let view = useRef({});

  useEffect(() => {
    if (toolBarHmv !== undefined) {
      toolBarHmv.setCallbacks({
        camera: () => {
          view.current = toolBarHmv.view.getCamera().toJson();
        },
      });
    }
  }); 
  
  const handleChange = (event) => {
    console.log(event.target.value);
    setVIEW(event.target.value);
    if(mode === "View"){
    switch(event.target.value) {
        case "Top VIEW":
            toolBarHmv.view.setViewOrientation(
                Communicator.ViewOrientation.Top,
                Communicator.DefaultTransitionDuration
              );
          break;
        case "Bottom VIEW":
            toolBarHmv.view.setViewOrientation(
                Communicator.ViewOrientation.Bottom,
                Communicator.DefaultTransitionDuration
              );
          break;
          case "Front VIEW":
            toolBarHmv.view.setViewOrientation(
                Communicator.ViewOrientation.Front,
                Communicator.DefaultTransitionDuration
              );
          break;
          case "Back VIEW":
            toolBarHmv.view.setViewOrientation(Communicator.ViewOrientation.Back);
          break;
          case "Left VIEW":
            toolBarHmv.view.setViewOrientation(
                Communicator.ViewOrientation.Left,
                Communicator.DefaultTransitionDuration
              );
          break;
          case "Right VIEW":
            toolBarHmv.view.setViewOrientation(
                Communicator.ViewOrientation.Right,
                Communicator.DefaultTransitionDuration
              );
          break;
          case "Isometric VIEW":
            toolBarHmv.view.setViewOrientation(
                Communicator.ViewOrientation.Iso,
                Communicator.DefaultTransitionDuration
              );
          break;
          case "Home VIEW":
            toolBarHmv.view.resetCamera(750);
          break;
          default : console.log("Unknown view: " + event.target.value); 
          break;
         };
        }
        else if (mode === "Render"){
            switch(event.target.value) {
                case "Gooch":
                    toolBarHmv.view.setDrawMode(Communicator.DrawMode.Gooch);
                  break;
                case "HiddenLine":
                    toolBarHmv.view.setDrawMode(Communicator.DrawMode.HiddenLine);
                  break;
                  case "Shaded":
                    toolBarHmv.view.setDrawMode(Communicator.DrawMode.Shaded);
                  break;
                  case "Toon":
                    toolBarHmv.view.setDrawMode(Communicator.DrawMode.Toon);
                  break;
                  case "Wireframe":
                    toolBarHmv.view.setDrawMode(Communicator.DrawMode.Wireframe);
                  break;
                  case "WireframeOnShaded":
                    toolBarHmv.view.setDrawMode(Communicator.DrawMode.WireframeOnShaded);
                  break;
                  case "XRay":
                    toolBarHmv.view.setDrawMode(Communicator.DrawMode.XRay);
                  break;
                  default : console.log("Unknown Render: " + event.target.value); 
                  break;
                 }; 
        }
    }
  return (
            <Box sx={{ minWidth: 12 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{mode}</InputLabel>
             
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={(VIEW)?(VIEW):("Home View")}
                label={(VIEW)?(VIEW):("Home View")}
                onChange={handleChange}
              >
                  {viewList && viewList.map((e, i) => {
                    return(
                    <MenuItem value={e}>{e}</MenuItem>
                    );
                 })}
                
              </Select>
            </FormControl>
          </Box>
  );
}

export default DropDown;