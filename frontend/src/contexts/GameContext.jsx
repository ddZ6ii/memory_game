import PropTypes from "prop-types";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

// Create context
const GameContext = createContext();

// Consumer custom Hook
const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGameContext was used outside of its Provider!");
  }
  return context;
};

// Context provider
function GameContextProvider({ children }) {
  const [currentGame, setCurrentGame] = useState({});

  const LOCAL_STORAGE_KEY = "game";

  const handleChangeGame = useCallback((gameinfo) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(gameinfo));
    setCurrentGame(gameinfo);
  }, []);

  // retrieve user info from local storage (if any)
  useEffect(() => {
    const storedGame = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedGame) setCurrentGame(JSON.parse(storedGame));
  }, []);

  // memoize the full context value
  const contextValue = useMemo(
    () => ({
      currentGame,
      handleChangeGame,
    }),
    [currentGame, handleChangeGame]
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}

export { GameContext, useGameContext, GameContextProvider };

GameContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

GameContextProvider.defaultProps = {
  children: null,
};
