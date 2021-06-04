import React from 'react';

import logo from "./logo.svg";
import "./App.css";

function App() {
    fetch('http://swapi.dev/api/planets/')
    .then(response => response.json())
    .then(data => console.log(data));
  //   this.setState({
  //     data: resoponseArray.map(item => {: item.description, timeM: item.timeM})
  // })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          <p>{data.name}</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
