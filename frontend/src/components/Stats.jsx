import PropTypes from "prop-types";

import { useThemeContext } from "../contexts/ThemeContext";

import Timer from "./Timer";

export default function Stats({ moves, gameEnded, gameRestarted }) {
  const { isDarkMode } = useThemeContext();

  const darkTheme = isDarkMode ? "is__dark" : "";

  return (
    <div className="stats">
      <div className={`stats__item ${darkTheme}`}>
        <Timer gameEnded={gameEnded} gameRestarted={gameRestarted} />
      </div>
      <div className={`stats__item ${darkTheme}`}>
        <h3 className="font-normal">Moves</h3>
        <span className="text-xl tracking-wider">{moves}</span>
      </div>
    </div>
  );
}

Stats.propTypes = {
  moves: PropTypes.number.isRequired,
  // gameEnded: PropTypes.bool.isRequired,
  // gameRestarted: PropTypes.bool.isRequired,
  gameEnded: PropTypes.bool,
  gameRestarted: PropTypes.bool,
};

Stats.defaultProps = {
  gameEnded: null,
  gameRestarted: null,
};
