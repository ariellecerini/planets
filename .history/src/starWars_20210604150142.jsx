import React, {useEffect, useState} from 'react';
import _ from 'lodash'
import "./App.css";


function parseStuff(count) {
  let mContent = "";
  if (count === 1) {
    mContent = ModalContent.pages[0].content;

    // if temp is on/above boiling, it's a gas
  } else if (count === 2) {
    mContent = ModalContent.pages[1].content;

    // otherwise it's just a liquid
  } else {
    mContent = ModalContent.pages[2].content;
  }

  let typeString = "";
  _.forEach(mContent, (inside) => {
    if (inside.type === "button") {
      const type = inside.type;
      const objclass = inside.class;
      const objContent = inside.content;
      const objClick = inside.OnClick;

      typeString = (
        typeString +
        "<button onClick = '" +
        objClick +
        "'>" +
        objContent +
        "<" +
        type +
        "/>"
      ).toString();
    } else {
      const type = inside.type;
      const objclass = inside.class;
      const objContent = inside.content;

      typeString = (
        typeString +
        "<" +
        type +
        " class = '" +
        objclass +
        "'>" +
        objContent +
        "<" +
        type +
        "/>"
      ).toString();
    }
  });
  // console.log(typeString);
  return { __html: typeString };
}




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
    data: pullData, 
    content: []
  };
  
   
        const newStuff = renderList(this.data);
        this.setState({ content: newStuff });
     
      return (
        <>
          <div>
          <div dangerouslySetInnerHTML={this.state.content} />
          </div>
        </>
      );
  
  }
  
  export { planetName };
  













    return (

        <ul>
        <li dangerouslySetInnerHTML={renderList(appState.results)}/>
        {/* {renderList(appState)} */}
        </ul>
    )

}