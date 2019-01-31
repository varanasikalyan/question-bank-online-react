import React, { Component } from 'react'
import "./Splash.css";

class Splash extends Component {
  render() {
    var x1 = 1;
    var y1 = 2;
    var x2 = 1;
    var y2 = 9;
    var imageUrl = require("../../../static/images/welcome/welcome" +
      Math.floor(Math.random() * (y1 - x1 + 1) + x1) +
      "_" +
      Math.floor(Math.random() * (y2 - x2 + 1) + x2) +
      ".jpg");
    var bgImage = {
      backgroundImage: `url(${imageUrl})`
    };
    return (
      <div
        id="splashScreen"
        style={bgImage}
        className="container-fluid splash-screen"
      >
        <p className="display-4 splash-message">
          Welcome to <span className="text-primary">q u e s t i o n . b a n k</span>
        </p>
      </div>
    );
  }
}

export default Splash;