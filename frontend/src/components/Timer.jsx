import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { useGameContext } from "../contexts/GameContext";

import displayTime from "../helpers/formatTime";

export default function Timer({ gameEnded, gameRestarted }) {
  const { gameInfo, handleChangeGame } = useGameContext();
  const [time, setTime] = useState(0);

  const TIMER_INTERVAL = 50; // time in milliseconds

  const updateGameContext = (currentGameInfo) => {
    const updatedStats = { ...currentGameInfo.stats, time };
    const updatedGameInfo = { ...currentGameInfo, stats: updatedStats };
    handleChangeGame(updatedGameInfo);
  };

  // increment timer and pauses when game ends
  useEffect(() => {
    const timerID = null;
    if (gameEnded) {
      updateGameContext(gameInfo); // save user stats (time) on game end
      clearInterval(timerID); // clear timer
    }
    if (!gameEnded)
      setTimeout(
        () => setTime((prev) => prev + TIMER_INTERVAL),
        TIMER_INTERVAL
      );
    return () => clearInterval(timerID);
    // }, [time]);
  }, [time, gameEnded]);

  // save user stats (time) on game end
  // useEffect(() s=> {
  // if (Object.keys(gameInfo).length && gameEnded) {
  // console.log("time", time);
  // if (gameEnded) {
  //   updateGameContext(gameInfo);
  // }
  // }, [gameEnded]);

  // reset timer on game restart
  useEffect(() => {
    setTime(0);
  }, [gameRestarted]);

  return (
    <>
      <h3 className="font-normal">Time</h3>
      <span className="text-xl tracking-wider">{displayTime(time)}</span>
    </>
  );
}

Timer.propTypes = {
  gameEnded: PropTypes.bool,
  gameRestarted: PropTypes.bool,
};

Timer.defaultProps = {
  gameEnded: null,
  gameRestarted: null,
};
