import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { Modal } from "antd";

import { useGameContext } from "../contexts/GameContext";
import { useThemeContext } from "../contexts/ThemeContext";

import displayTime from "../helpers/formatTime";

export default function ModalEndGame({ restartGame }) {
  const { isDarkMode } = useThemeContext();
  const { gameInfo } = useGameContext();

  const darkTheme = isDarkMode ? "is__dark" : "is__ligth";
  const modalStyle = isDarkMode ? "modalStyleDark" : "";
  const modalOverlayStyle = isDarkMode
    ? { backgroundColor: "var(--color-neutral-darkest)" }
    : { backgroundColor: "var(--color-overlay)" };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /**
     * TODO: save user_game stats to database..
     * TODO: save user_game stats to database...
     */
    restartGame();
  };

  return (
    <Modal
      centered
      open
      onOk={handleSubmit}
      destroyOnClose
      footer={null}
      zIndex={10}
      wrapClassName={modalStyle}
      maskStyle={modalOverlayStyle}
    >
      <form className="flex w-full max-w-2xl flex-col gap-6 self-center">
        <div>
          <h1 className="text-center">You Did It!</h1>
          <h2
            className={`mt-2 text-center text-base ${
              isDarkMode ? "text-neutral-default" : "text-neutral-dark"
            }`}
          >
            Let's see how well your performed...
          </h2>
        </div>

        <div className={`modal__item ${darkTheme}`}>
          <span className="text-base">Time</span>
          <span className="text-xl tracking-wider">
            {displayTime(gameInfo.stats.time) || "-"}
          </span>
        </div>

        <div className={`modal__item ${darkTheme}`}>
          <span className="text-base">Moves</span>
          <span className="text-xl tracking-wider">
            {gameInfo.stats.move || "-"}
          </span>
        </div>

        <div>
          <button
            type="submit"
            className="btn btn__primary__default m-auto min-w-[80%] md:min-w-[50%]"
            onClick={handleSubmit}
          >
            Play Again
          </button>

          <NavLink to="/settings">
            <button
              type="button"
              className="btn btn__secondary__default m-auto mt-6 min-w-[80%] md:min-w-[50%]"
            >
              Setup New Game
            </button>
          </NavLink>
        </div>
      </form>
    </Modal>
  );
}

ModalEndGame.propTypes = {
  restartGame: PropTypes.func.isRequired,
};
