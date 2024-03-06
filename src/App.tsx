import React from 'react';
import logo from './logo.svg';
import './App.css';
import Work1 from './Components/UseState/Work1';
import Work2 from './Components/UseState/Work2';
import Work3 from './Components/UseState/Work3';
import Work4 from './Components/UseState/Work4';
import Work5 from './Components/UseState/Work5';
import Charts from './Components/Mui/Charts';


function App() {
  const FormData = [
    {
      name: "name",
      label: "Name",
      placeholder: "Name",
      type: "text",
    },
    {
      name: "Age",
      label: "Age",
      placeholder: "Age ",
      type: "number",
    },
    {
      name: "Email",
      label: "Email",
      placeholder: "abc@gmail.com",
      type: "email", // Corrected from "Email" to "email"
    },
    {
      name: "Password",
      label: "Password",
      placeholder: " enter your Password",
      type: "password",
    },
    {
      name: "Phone No.",
      label: "Phone No.",
      placeholder: " enter your Phone No.",
      type: "number",
    },
  ];
  return (
    <>
  {/* <Work1/>  */}
  {/* <Work2 data={FormData} /> 
    <Work3/> */}
   {/* <Work4/> */}
    {/* <Work5/> */}
    <Charts/>
    </>
  )
}

export default App;
