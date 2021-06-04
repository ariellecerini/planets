import React from 'react';
import "./App.css";


class PlanetName extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        error : null,
        isLoaded : false,
        posts : []        
    };
}
  componentDidMount() {
    // I will use fake api from jsonplaceholder website
    // this return 100 posts 
    fetch("http://swapi.dev/api/planets/")
    .then( response => response.json())
    .then(
        // handle the result
        (result) => {
            this.setState({
                posts : result.results
            });
            console.log(result)
        },

        // Handle error 
        (error) => {
            this.setState({
                isLoaded: true,
                error
            })
        },
    )
}

    
  
render() {
  const {posts} = this.state;
      return(
          <div>
              <ol>
              {
                  posts.map(post => (
                      <li key={post.id} align="start">
                              <p>{post.name}</p>
                      </li>
                  ))
              }
              </ol>
          </div>
      );
     
}
  
}
  
  export { PlanetName };
  









