import React from 'react';
import './FaceRecognition.css';

const styleForBox = box => {
  if (!box) { return null }
  return {
    ...box
  };
};
const FaceRecognition = ({box, imageUrl}) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputImage" src={imageUrl} alt="face-detect" width='500px' height='auto'/>
        <div className="bounding-box"
             style={styleForBox(box)}
        />
      </div>
    </div>
  );
};

export default FaceRecognition;