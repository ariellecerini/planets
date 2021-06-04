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
          <div className="cardBox">
            
              {
                  planet.map(planet => (
                      <div key={planet.id} className="card"  align="start">
                              <h2 key={planet.id} id={planet.climate}>{planet.name}</h2>
                              <table>
                                <tr style="display: flex; justify-content:  space-between>
                                  <td> 
                                  Rotation Period: {planet.rotation_period}
                                  </td>
                                
                                  <td> 
                                  Orbital Period: {planet.orbital_period}
                                  </td>
                               
                                  <td> 
                                  Population: 
                                 
                                  {planet.population}
                                  </td>
                                </tr>
                              </table>
                            

                      </div>
                  ))
              }
             
          </div>
      );
     
}
  
}
  
  export { PlanetName };
  









