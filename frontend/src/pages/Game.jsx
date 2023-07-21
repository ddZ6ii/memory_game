import { useEffect, useState } from "react";

import { useGameContext } from "../contexts/GameContext";

import Stats from "../components/Stats";
import GridCards from "../components/GridCards";
import ModalEndGame from "../components/ModalEndGame";

export default function Game() {
  const { gameInfo, handleChangeGame } = useGameContext();

  const [moves, setMoves] = useState(0);
  const [hasGameEnded, setHasGameEnded] = useState(null);
  const [hasGameRestarted, setHasGameRestarted] = useState(null);

  const handleMoves = () => setMoves((prev) => prev + 1);
  const handleEndGame = () => setHasGameEnded(true);

  const updateGameContext = (currentGameInfo) => {
    const updatedStats = { ...currentGameInfo.stats, move: moves };
    const updatedGameInfo = { ...currentGameInfo, stats: updatedStats };
    handleChangeGame(updatedGameInfo);
  };

  const resetGameContext = (currentGameInfo) => {
    const updatedGameInfo = { ...currentGameInfo, stats: {} };
    handleChangeGame(updatedGameInfo);
  };

  const handleRestartGame = () => setHasGameRestarted(true);

  // save user stats (moves) on game end
  useEffect(() => {
    if (hasGameEnded) updateGameContext(gameInfo);
  }, [hasGameEnded]);

  // reset game
  useEffect(() => {
    if (hasGameRestarted) {
      /**
       * TODO: set new id for user_game...
       */
      resetGameContext(gameInfo);
      setMoves(0);
      setHasGameEnded(null);
      setHasGameRestarted(null);
    }
  }, [hasGameRestarted]);

  return (
    <section className="min-h-[calc(100dvh)] md:min-h-[calc(100dvh)]">
      <h1>Game</h1>

      <div className="grid__wrapper">
        <GridCards
          incrementMoves={handleMoves}
          endGame={handleEndGame}
          gameRestarted={hasGameRestarted}
        />
      </div>

      <Stats
        moves={moves}
        gameEnded={hasGameEnded}
        gameRestarted={hasGameRestarted}
      />

      {hasGameEnded ? <ModalEndGame restartGame={handleRestartGame} /> : null}

      <button type="button" onClick={handleRestartGame}>
        Restart
      </button>
    </section>
  );
}
