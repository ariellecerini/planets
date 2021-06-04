import React, {useEffect, useState} from 'react';
import _ from 'lodash'
import "./App.css";
import {planetName} from './starWars'

function renderList(data){
  _.forEach(data, (inside) => {
    console.log((inside)); 
    return (
      "cheese"
    )
  })
  
  
}


function App() {
  
    

  return (
    <div className="App">
      <header className="App-header">
        {appState.repos}
      </header>

      <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        
      </div>
    </div>
    </div>
  );
}

export default App;
