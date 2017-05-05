import React, { Component } from "react";
import githubLogo from "./images/portfolio/github-logo.png"
import twitterLogo from "./images/portfolio/twitter-logo.png"

class App extends Component {
  render() {
    let urls = [
      githubLogo,
      twitterLogo
    ]
    let images = urls.map((image, index) => <img key={index} src={image} alt={"image number " + index}></img>)

    return (
      <div className="App">
      {images}
      </div>
    );
  }
}

export default App;
