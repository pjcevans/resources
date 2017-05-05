import React, { Component } from "react";
import githubLogo from "./images/portfolio/githubLogo.png"
import twitterLogo from "./images/portfolio/twitterLogo.png"
import screenPreview from "./images/portfolio/screenPreview.png"
import phonePreview from "./images/portfolio/phonePreview.png"

class App extends Component {
  render() {
    let urls = [
      githubLogo,
      twitterLogo,
      phonePreview,
      screenPreview
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
