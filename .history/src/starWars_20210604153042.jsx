import React, {useEffect, useState} from 'react';
import _ from 'lodash'
import "./App.css";




function renderList(data){
  _.forEach(data, (inside) => {
    console.log((inside)); 
    return (
      "cheese"
    )
  })
  
  
}
function PullData() {
  const [appState, setAppState] = useState({
      repos: [],
    });
      useEffect(() => {
        const user = `http://swapi.dev/api/planets/`;
        fetch(user)
          .then((res) => res.json())
          .then((repos) => {
            console.log(repos)
            renderList(repos.results)
            // setAppState({ repos: repos.results});
          });
          
      }, [setAppState]);
      return(appState);
    }

var info = PullData(); 
class PlanetName extends React.Component {
  
  state = {
    content: renderList(info)
  }

 
  render() {
      return (
        <>
          <div>
          <div dangerouslySetInnerHTML={this.state.content} />
          </div>
        </>
      );
    }
  }
  
  export { PlanetName };
  









