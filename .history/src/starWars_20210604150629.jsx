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

let PullData = () => {
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
    };


class planetName extends React.Component {
  state = {
    data: PullData, 
    content: renderList(data)
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
  
  export { planetName };
  













    return (

        <ul>
        <li dangerouslySetInnerHTML={renderList(appState.results)}/>
        {/* {renderList(appState)} */}
        </ul>
    )

}