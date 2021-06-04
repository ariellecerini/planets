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

  let count = 1;
class planetName extends React.Component {
  state = {
    data: PullData, 
    content: renderList(data)
  }
  changePage = () => {
    count++;
    if (count <= 3) {
      const newStuff = parseStuff(count);
      this.setState({ content: newStuff });
    } else {
      this.props.parentCallback(false);
    }
  };
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
  









