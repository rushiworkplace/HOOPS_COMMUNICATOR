import React, { useEffect, useState } from "react";
import ViewerManager from "./viewerManger";

const HOOPS = ()=> {
    const [_hwv, set_hwv] = useState(undefined);
 

const fetchViewerData = () => {
    set_hwv(_hwv);
}

        return(
            <div id = "External"> 
            <ViewerManager fetchData={fetchViewerData}></ViewerManager>
            </div>
        )
}

export default HOOPS;