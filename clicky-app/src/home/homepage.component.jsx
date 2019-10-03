import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar.component';
import Main from '../components/main/main.component';
import GameImages from '../components/game-images/game-images.component';
import images from '../data/imageData';
// import shuffleArray from '../randomizer/randomizer';


class HomePage extends Component {
    state = {
    images: images,
    clickedImageIds: [],
    score: 0,
    highScore: 0
  };

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  componentDidMount() {
    this.setState({ images: this.shuffleArray(images)});
  }

  handleImageClick = (event) => {
    this.setState({ images: this.shuffleArray(this.state.images)});
    let index = event.target.dataset.id;
    console.log(index)
    if(!this.state.clickedImageIds.includes(index)) {
      this.setState({
        clickedImageIds: [this.state.clickedImageIds, index],
        score: this.state.score + 1
      }, () => {
        if(this.state.highScore < this.state.score) this.setState({ highScore: this.state.score})
      })
    } else this.setState({ score: 0 , clickedImageIds: []});
  };

  render() {
    const { images, score, highScore } = this.state;
    return (
      <div className="home-page">
        <Navbar />
        <Main score={score} highScore={highScore} />
        <GameImages images={images} handleImageCLick={this.handleImageClick} />
      </div>
      )
  }
}

export default HomePage;