import React, { Component } from 'react';
import ReactDOM from "react-dom";
import SnowStorm from 'react-snowstorm';


const Snowflake = (props) =>{
    return(
      <p className='Snowflake' id={`item${props.id}`} style={props.style}>
        *
      </p>
    )
}

class Snow extends React.Component {


render(){
  return(
  <div>
<SnowStorm />
  </div>
  )
}
}


export default Snow;