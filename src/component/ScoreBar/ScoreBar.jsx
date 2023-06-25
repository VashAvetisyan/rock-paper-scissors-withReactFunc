import React from "react";

import './ScoreBar.scss'

const ScoreBar = ({
    currentScore
}) => {
  return (
    <div className="app-scorebar">
      <div className="app-scorebar__text">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="app-scorebar__scorebox">
        <h2 className="app-scorebar__scorebox__title">Score</h2>
        <div className="app-scorebar__scorebox__score">
            {currentScore}
        </div>
      </div>
    </div>
  );
};

export default ScoreBar;
