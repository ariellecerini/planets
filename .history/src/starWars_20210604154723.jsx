import React from 'react';
import "./App.css";


class PlanetName extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
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
    
  }
  render() {
    const { items } = this.state;
    if (this.isLoaded) {
      return <div>Loading ... </div>;
    } else {
    return (
      <>
              <h3>{items.name}</h3>
      </>
      );
    }
  }
}
  
  export { PlanetName };
  









