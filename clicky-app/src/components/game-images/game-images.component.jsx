import React from 'react';

import './game-images.styles.css';

const GameImages = (props) => (
  <div className="gameImagesContainer">
    <div className="wholeGameWrapper">
      { props.images.map((image) => {
            const { id, imageUrl } = image;
            return (
            <div className="individualWrapper" key={id}> 
              <div className="game-image" data-id={id} onClick={props.handleImageCLick} 
              style={{backgroundImage: `url(${imageUrl})`}} >
              </div>
            </div>
            );
      })}
    </div>  
  </div>
);


export default GameImages;