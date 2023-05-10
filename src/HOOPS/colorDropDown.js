import React, { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Communicator from "communicator";

const ColorDropDown = (props) => {
    const toolBarHmv = props.toolBarHmv.hmv;
    const viewList = props.viewList;
    //const mode = props.mode;
    //const firstMode = props.firstMode;
    //console.log(firstMode);
  const [Color, setColor] = useState("red");
  
  const handleChange = (event) => {
    console.log(event.target.value);
    setColor(event.target.value);
   
        }

  return (
            <Box sx={{ minWidth: 12 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Color</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Color}
                label={Color}
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

export default ColorDropDown;
