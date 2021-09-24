import './App.css';

import React from 'react'

import Routes from './Routes'

function App({colors}) {



  return (
    <div className="App">
      <Routes defaultVals={colors}/>
    </div>
  );
}

export const colors = [
  {
    name: 'green', 
    rgbValue: '#00FF00'
  },
  {
    name: 'red', 
    rgbValue: '#FF0000'
  },
  {
    name: 'blue', 
    rgbValue: '#0000FF'
  }
]

App.defaultProps = {colors}

export default App;
