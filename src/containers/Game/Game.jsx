import { useEffect } from "react";

import "./Game.scss";

import ScoreBar from "component/ScoreBar/ScoreBar";

import PaperIcon from "assets/icons/PapaerIcon";
import ScissorsIcon from "assets/icons//ScissorsIcon";
import RockIcon from "assets/icons/RockIcon";
import Button from "component/Button/Button";
import { useState } from "react";

import getGameResult from "utils/getGameResult";

const choice = {
  paper: "paper",
  scissers: "scissers",
  rock: "rock",
};

const buttonMap = {
  paper: {
    icon: PaperIcon,
    className: "paper",
  },
  scissers: {
    icon: ScissorsIcon,
    className: "scissers",
  },
  rock: {
    icon: RockIcon,
    className: "rock",
  },
};
let timerG = 3;

const Game = () => {
  const [userSelection, setUserSelection] = useState(null);
  const [isTimeOn, setisTimeOn] = useState(false);
  const [randomSelection, setRandomSelection] = useState(null);
  const [winnerText, setWinnerText] = useState(null);
  const [timer, setTimer] = useState(timerG);
  const [currentScore, setCurrentScore] = useState(0);


  const restart = () => {
    setUserSelection(null)
    setRandomSelection(null)
    setisTimeOn(false)
    setWinnerText(null)
    timerG = 3
    setTimer(timerG)
  }

  const randomChoiceFunc = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    const randomChoice = Object.keys(choice)[randomIndex];
    return randomChoice;
  };

  const play = (selection) => {
    setUserSelection(selection);
    setisTimeOn(true);

    const randomChoice = randomChoiceFunc();
    const winnerText = getGameResult(selection, randomChoice);

    setRandomSelection(randomChoice);
    setWinnerText(winnerText);
  };

  useEffect(() => {
    let intervalId;
    if (timer === 3 && userSelection) {
      intervalId = setInterval(() => {
        if (timerG === 1) {
          let score = currentScore;
          if (winnerText === "You Win") {
            score++;
          } else if (winnerText === "You lose") {
            score--;
          }
          clearInterval(intervalId);
          setisTimeOn(false);
          setCurrentScore(score);
        }
        timerG--
        setTimer(timerG);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [userSelection]);

  return (
    <div className="app-game">
      <ScoreBar currentScore={currentScore}/>
      {!userSelection ? (
        <div className="app-game__button-main">
          {Object.keys(buttonMap).map((item, i) => (
            <Button
              key={i}
              className={buttonMap[item].className}
              Icon={buttonMap[item].icon}
              onClick={() => play(item)}
            ></Button>
          ))}
        </div>
      ) : (
        <div className="app-game__selection-main">
          <Button
            Icon={buttonMap[userSelection].icon}
            className={`play-selection ${buttonMap[userSelection].className}`}
            onClick={() => {}}
          />
          {isTimeOn ? (
            <div className="app-game__selection-main__timer">{timer}</div>
          ) : (
            <>
              <div className="app-game__selection-main__result">
                <h3>{winnerText}</h3>
                <button
                  onClick={restart}
                  className="app-game__selection-main__result__restart-btn"
                >
                  restart
                </button>
              </div>
              <div>
                <Button
                  Icon={buttonMap[randomSelection].icon}
                  className={`random-selection ${buttonMap[randomSelection].className}`}
                  onClick={() => {}}
                />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Game;
