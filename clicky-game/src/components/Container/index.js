import React from "react";
import '../Container/style.css'

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Container;


// simply makes all of the containers fluid
