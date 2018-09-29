import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Logo from './components/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        {/*<ImageLinkForm/>*/}
        {/*<FaceRecognition/>}*/}
      </div>
    );
  }
}

export default App;
