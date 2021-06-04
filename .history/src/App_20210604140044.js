import React, {useEffect, useState} from 'react';
import _ from 'lodash'
import "./App.css";


function renderList(data){
  _.forEach(data, (inside, outside) => {

    return (inside.name); 
  })
}


function App() {
  const [appState, setAppState] = useState({
    repos: [],
  });
    useEffect(() => {
      const user = `http://swapi.dev/api/planets/`;
      fetch(user)
        .then((res) => res.json())
        .then((repos) => {
          console.log(repos)
          setAppState({ repos: repos.results});
        });
        
    }, [setAppState]);


    

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
        <ul>
        <li  repos={appState.repos} />
        {renderList(appState)}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default App;
