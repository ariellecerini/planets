import React from 'react';
import "./App.css";


class PlanetName extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        error : null,
        isLoaded : false,
        planet : []        
    };
}
  componentDidMount() {
    fetch("http://swapi.dev/api/planets/")
    .then( response => response.json())
    .then(
        // handle the result
        (result) => {
            this.setState({
                planet : result.results
            });
            console.log(result)
        },

    )
}

    
  
render() {
  const {planet} = this.state;
      return(
          <div>
            
              {
                  planet.map(planet => (
                      <div key={planet.id} align="start">
                              <h2 key={planet.id}>{planet.name}</h2>
                      </div>
                  ))
              }
             
          </div>
      );
     
}
  
}
  
  export { PlanetName };
  









