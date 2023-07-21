import PropTypes from "prop-types";
import { useThemeContext } from "../contexts/ThemeContext";

export default function Stats({ moves }) {
  const { isDarkMode } = useThemeContext();

  const darkTheme = isDarkMode ? "is__dark" : "";

  return (
    <div className="stats">
      <div className={`stats__item ${darkTheme}`}>
        <h3 className="font-normal">Time</h3>
        <span className="text-xl tracking-wider">01:35</span>
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
};
