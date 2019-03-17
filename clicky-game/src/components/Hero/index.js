import React from "react";
import "../Hero/style.css";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Hero;


//loads the main dog image on top, all of the info on the hero component is in app.js