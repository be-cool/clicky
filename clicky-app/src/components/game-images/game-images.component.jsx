import React from 'react';

import './game-images.styles.css';

const GameImages = (props) => (
  <div className="gameImagesContainer">
    <div className="wholeGameWrapper">
      { props.images ? props.images.map((image, i) => {
            return (
            <div className="individualWrapper" key={i}> 
              <div className="game-image" data-id={image} style={{backgroundImage: `url(${image})`}} onClick={props.handleImageCLick} >
              </div>
            </div>
            );
      }):<div/>
    }
    </div>  
  </div>
);


export default GameImages;