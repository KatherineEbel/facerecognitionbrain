import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-3" options={{ max : 55 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner pa3">
          <img className="pt5" src={brain} alt="Logo"/>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;