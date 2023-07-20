import PropTypes from "prop-types";

import { useThemeContext } from "../contexts/ThemeContext";

export default function Card({ card, isCardFlipped, onCardPick }) {
  const { isDarkMode } = useThemeContext();

  const darkTheme = isDarkMode ? "is__dark" : "is__light";
  const hideBackCard = isCardFlipped ? "is__hidden" : "";
  const hideFrontCard = isCardFlipped ? "" : "is__hidden";

  const handleCardPick = () => onCardPick(card);

  return (
    <div className="card">
      <button
        type="button"
        className={`card__front ${darkTheme} ${hideFrontCard}`}
      >
        {card.value}
      </button>
      <button
        type="button"
        className={`card__back ${darkTheme} ${hideBackCard}`}
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
  isCardFlipped: PropTypes.bool.isRequired,
  onCardPick: PropTypes.func.isRequired,
};
