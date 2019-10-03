
import React from 'react';
import ScoreBoard from './../scoreboard/scoreboard.component'

const Main = (props) => {
  const { score, highScore } = props;
  return (
  <div className="main-container">
    <div className="main-rules">
      <h3>Clicky</h3>
      <p>See how many images you can click before clicking any one image twice.</p>
    </div>
    <div className="score-board">
      <ScoreBoard Score={score} Top-Score={highScore} />
    </div>
  </div>
  )
}

export default Main;