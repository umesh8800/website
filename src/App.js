import React from 'react'
import AboutUs from './AboutUs'
import OurValues  from './OurValues';
import Main from './Main';
import './App.css';
import './index.css';
import Main1 from './Main1';
import Mobile from './Mobile'
import Cloud from './Cloud'
import Database from './Database';
import Aws from './Aws';

function App() {
  return (
    <div className="App">
      <AboutUs/>
      <OurValues/>
      <Main/>
      <Main1/>
      <Mobile/>
      <Cloud/>
      <Database/>
      <Aws/>
    </div>
  );
}

export default App;
