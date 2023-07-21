import PropTypes from "prop-types";

import { useThemeContext } from "../contexts/ThemeContext";

export default function Card({ card, isFlipped, isDisabled, onCardPick }) {
  const { isDarkMode } = useThemeContext();

  const darkTheme = isDarkMode ? "is__dark" : "is__light";
  const flipBackCard = isFlipped ? "is__flipped" : "";
  const flipFrondCard = isFlipped ? "" : "is__flipped";

  const handleCardPick = () => onCardPick(card);

  return (
    <div className="card">
      <button
        type="button"
        className={`card__front ${darkTheme} ${flipFrondCard}`}
      >
        {card.value}
      </button>
      <button
        type="button"
        className={`card__back ${darkTheme} ${flipBackCard}`}
        disabled={isDisabled}
        onClick={handleCardPick}
      >
        {" "}
      </button>{" "}
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.number,
    isMatched: PropTypes.bool,
  }).isRequired,
  isFlipped: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onCardPick: PropTypes.func.isRequired,
};
