import React from 'react';

import ScoreBoard from './../score-board/score-board.component'

import './intro.styles.scss';

const Intro = (props) => {
  const { score, topScore } = props;
  return (
  <div className="intro-container">
    <div className="intro-details">
      <h2>Clicky Game</h2>
      <p>Click on an image to earn points, but don't click on any more than once!</p>
    </div>
    <div className="score-board">
      <ScoreBoard Score={score} Top-Score={topScore} />
    </div>
  </div>
  )
}

export default Intro;