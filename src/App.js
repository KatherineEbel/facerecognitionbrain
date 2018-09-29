import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
import FaceRecognition from './components/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '058e0c0c590044f6b54a6124e2a93db7'
});
const particlesOptions = {
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 5
                }
              }
            }
};

class App extends Component {
  state = {
    input: ''
  };
  
  handleInputChange = event => {
    const { value: input } = event.target;
    this.setState({input});
  };
  
  handleSubmit = event => {
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg")
       .then((response) => {
         console.log(response);
      })
       .catch(err => {
         console.log(err)
      });
  };
  
  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          params={particlesOptions}
        />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm
          submit={this.handleSubmit}
          change={this.handleInputChange}/>
        <FaceRecognition image={null}/>}
      </div>
    );
  }
}

export default App;
