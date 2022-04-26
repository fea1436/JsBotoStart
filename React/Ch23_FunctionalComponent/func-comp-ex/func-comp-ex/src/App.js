import React from "react";
import Car from "./Car";

const App = () => {
  return (
    <>
      <Car model="Mercedes" color="Black"/>
      <Car model="Audi" color="Blue"/>
      <Car model="Bugatti" color="Red">This is a supercar</Car>
    </>
  )
}

export default App;