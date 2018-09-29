import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
import Particles from 'react-particles-js';

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
        <ImageLinkForm/>
        {/*<FaceRecognition/>}*/}
      </div>
    );
  }
}

export default App;
