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
    imageUrl: null,
    faceBoxes: [
    
    ]
  };
  
  calculateFaceLocation = data => {
    const {bounding_box} = data.regions[0].region_info;
    console.log(bounding_box);
    const image = document.getElementById('inputImage');
    const width = +image.width;
    const height = +image.height;
    console.log(width, height);
    return {
      left: bounding_box.left_col * width,
      top: bounding_box.top_row * height,
      right: width - (bounding_box.right_col * width),
      bottom: height - (bounding_box.bottom_row * height)
    }
  };
  
  displayFaceFor = box => {
    console.log(box);
    this.setState({box});
  };
  handleInputChange = event => {
    const { value: input } = event.target;
    this.setState({input});
  };
  
  handleSubmit = event => {
    this.setState(prev => ({imageUrl: prev.input}));
    
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
       .then(({outputs}) => this.displayFaceFor(this.calculateFaceLocation(outputs[0].data)))
       .catch(err => console.log(err));
  };
  
  render() {
    const {box, imageUrl} = this.state;
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
        <FaceRecognition box={box} imageUrl={imageUrl}/>
      </div>
    );
  }
}

export default App;
