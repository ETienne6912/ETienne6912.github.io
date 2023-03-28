import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import React, { useState } from 'react';
import LBStoKG from './KG-LBS';
import MilestoKM from './MilestoKM';
import ETHtoZAR from './ETHtoZAR';




function App() {
  return (

    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <div className="LBStoKG">
        <LBStoKG />
      </div>
      <div className="milestoKM">
        <MilestoKM />
      </div>
      <div className="ethtoZar">
        <ETHtoZAR />
      </div>
    </div>

  );
}


export default App;
