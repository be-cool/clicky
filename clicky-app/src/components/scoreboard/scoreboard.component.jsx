import React from 'react';

// import './score-board.styles.scss';

const ScoreBoard = (props) => (
  Object.keys(props).map((key, i) => <p className="score-board-score" key={i}><span className="width-150">{key.replace('-', ' ')}:</span><span className="score">{props[key]}</span></p>)
)

export default ScoreBoard;
