import React from 'react'
import { MuiColorInput } from 'mui-color-input'
import Communicator from "communicator";
const ColorPicker = (props) => {
  const [value, setValue] = React.useState('yellow')
  
  const sendRGBNo=(newValue)=>{
   let newValue1 = newValue.slice(3);
   let arr1 = newValue1.slice(1,newValue1.length-1);
   let arr2 =arr1.slice(0,arr1.length).split(",");
   return arr2;
  }

  const handleChange = (newValue) => {
    setValue(newValue)
     let RGB =sendRGBNo(newValue);
    props.toolBarHmv.hmv.view.setBackgroundColor(
    new Communicator.Color(RGB[0],RGB[1],RGB[2]),
    new Communicator.Color(255,255,255)
    );
  }

  return <MuiColorInput value={value} onChange={handleChange} />
}

export default ColorPicker; 