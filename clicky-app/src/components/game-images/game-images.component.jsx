import React from 'react';

import './game-images.styles.scss';

const GameImages = (props) => (
  <div className="game-images-container">
    <div className="game-images-wrapper">
      { props.images.slice(0,12).map((image) => {
            const { id, imageUrl } = image;
            return (
            <div className="game-image-wrapper" key={id}> 
              <div className="game-image" data-id={id} onClick={props.handleImageCLick} style={{backgroundImage: `url(${imageUrl})`}} ></div>
            </div>
            );
          }
        )
      }
    </div>  
  </div>
);


export default GameImages;