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
  apiKey: process.env.REACT_APP_CLARIFAI_KEY
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
    input: '',
    imageUrl: ''
  };
  
  handleInputChange = event => {
    const { value: input } = event.target;
    this.setState({input});
  };
  
  handleSubmit = event => {
    this.setState(prev => ({imageUrl: prev.input}));
    
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
       .then((response) => {
         const {bounding_box} = response.outputs[0].data.regions[0].region_info;
         console.log(bounding_box);
      })
       .catch(err => {
         console.log('INPUT: ', this.state.input);
         console.log(err)
      });
  };
  
  render() {
    const {imageUrl} = this.state;
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
        <FaceRecognition imageUrl={imageUrl}/>
      </div>
    );
  }
}

export default App;
