import React, {} from 'react'
//import IconButton from '@mui/material/IconButton';
import DropDown from './dropDown';
import ColorDropDown from './colorDropDown';
import ColorPicker from './colorPicker';

const FeatureButtons=(props)=> {
 var viewList = ["Top VIEW","Bottom VIEW","Front VIEW","Back VIEW","Left VIEW","Right VIEW","Isometric VIEW","Home VIEW"];
 var renderList = ["Gooch","HiddenLine","Shaded","Toon","Wireframe","WireframeOnShaded","XRay"];
 var colorList = ["Orange","White","Green","Blue","light Blue","WireframeOnShaded","XRay"];
 var modeView = "View";
 var modeRender = "Render";
 var modeColor = "Color";
 var viewFirst = "Home Mode";
 var renderFirst = "reset Mode";
 
  return (
    <React.Fragment>
      <div id ="drop-down"> 
        <DropDown toolBarHmv={props} viewList={viewList} mode={modeView} firstMode={viewFirst}></DropDown>
        <DropDown toolBarHmv={props} viewList={renderList} mode={modeRender} firstMode={renderFirst}></DropDown>
        {/* <ColorDropDown toolBarHmv={props} viewList={renderList} mode={modeColor} firstMode={renderFirst}></ColorDropDown> */}
         <ColorPicker toolBarHmv={props}></ColorPicker> 
        </div>
      </React.Fragment>
  )
}
export default FeatureButtons;