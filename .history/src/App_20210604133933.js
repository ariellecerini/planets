import React from 'react';
import _ from 'lodash';

import logo from "./logo.svg";
import "./App.css";



function App() {
    useEffect(() => {
      setAppState({ loading: true });
      const user = `http://swapi.dev/api/planets/`;
      fetch(user)
        .then((res) => res.json())
        .then((repos) => {
          setAppState({ loading: false, repos: repos });
        });
    }, [setAppState]);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Shedrack Akintayo
        </div>
      </footer>
    </div>
    </div>
  );
}

export default App;
