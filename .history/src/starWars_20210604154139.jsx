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
    fetch('http://swapi.dev/api/planets/')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result
        });
      });
  }
  render() {
    const { items } = this.state;
    if (this.isLoaded) {
      return <div>Loading ... </div>;
    } else {
    return (
      <>
      
          
              <h3>{this.name}</h3>
          
      </>
      );
    }
  }
}
  
  export { PlanetName };
  









