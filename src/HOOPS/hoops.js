import React, {  useState } from "react";
import ViewerManager from "./viewerManger";
import FeatureButtons from "./featureButtons";

const HOOPS = ()=> {
    const [menuBarvisibility, setMenuBarVisibility] = useState(false);
    const [_hwv, set_hwv] = useState();
 

const fetchViewerData = (_hwv) => {
    set_hwv(_hwv);
}

        return(
            <React.Fragment>
            <div id = "External"> 
            <ViewerManager fetchData={fetchViewerData}allowMenubar={() => setMenuBarVisibility(true)}>  </ViewerManager>
            </div>
             <div id = "FeatureUI"> <FeatureButtons hmv={_hwv}></FeatureButtons></div>
             </React.Fragment>
        )
}

export default HOOPS;