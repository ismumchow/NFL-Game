import { BrowserRouter as Router, Route } from "react-router-dom";
import React,{ Component } from "react";

import Home from "../src/components/pages/Home";
import Navbar from "./components/Navbar";
import Col from "./components/Col/index";

import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import packers from "../images/packers.jpg";
import bears from "../images/bears.jpg";
import vikings from "../images/vikings.jpg";
import lions from "../images/lions.jpg";
import giants from "../images/giants.jpg";



class App extends Component {

  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  shuffleArray = () => {
    let imgArray = Image;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!");
    let picked = this.state.picked;

    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct!"
      })
      this.shuffleArray();
    } else {
      this.setState({
        message: "Already Selected - Game Over!",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "packers":
        return `${packers}`
      case "vikings":
        return `${vikings}`
      case "bears":
        return `${bears}`
      case "lions":
        return `${lions}`
      case "giants":
        return `${giants}`
      default:
        return `${giants}`
    }
  } 

  render () { 
    return (
    <div> 
    <Router>
       <div>
        <Navbar />
         <Wrapper>
           <Route exact path="/" component={Home} />
           <Route exact path="/home" component={Home} />
         </Wrapper>
         <Footer />
      </div>
     </Router>
    </div>
    );
  }
}

export default App;