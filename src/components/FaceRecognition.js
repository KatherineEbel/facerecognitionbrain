import React from 'react';

const FaceRecognition = ({image}) => {
  return (
    <div className="center mt5">
      <img src={`https://samples.clarifai.com/face-det.jpg`} alt="face-detect photo"/>
    </div>
  );
};

export default FaceRecognition;