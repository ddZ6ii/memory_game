import { Modal } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../contexts/AuthContext";
import { useGameContext } from "../contexts/GameContext";
import { useThemeContext } from "../contexts/ThemeContext";

import LockIcon from "./utilities/LockIcon";

import * as GameSettings from "../services/gameSettings";
import * as Game from "../services/game";
import capitalizeText from "../helpers/capitalize";

import modes from "../data/settingsModes.json";
import gridSizes from "../data/settingsGridSize.json";
import players from "../data/settingsNumberOfPlayers.json";
import TOAST_DEFAULT_CONFIG from "../data/toastConfig.json";

export default function ModalSettings() {
  const navigate = useNavigate();
  const {
    userAccount: { id_user: userId },
  } = useAuthContext();
  const { isDarkMode } = useThemeContext();
  const { handleChangeGame } = useGameContext();

  const modalStyle = isDarkMode ? "modalStyleDark" : "";
  const modalOverlayStyle = isDarkMode
    ? { backgroundColor: "var(--color-neutral-darkest)" }
    : { backgroundColor: "var(--color-neutral-ligth)" };
  const darkTheme = isDarkMode ? "is__dark" : "is__ligth";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // retieve form data
      const settings = {
        mode: e.target.mode.value,
        is_multiplayer: e.target.is_multiplayer.value,
        grid_size: e.target.grid_size.value,
      };
      // create new game (if not already existing) and retrieve game ID from database response
      const {
        data: { id: settingsId },
      } = await GameSettings.create(settings);
      // create new user_game entry into database (store all user stats for current game)
      const game = {
        game_id: settingsId,
        user_id: userId,
      };
      const {
        data: { id: userGameId },
      } = await Game.create(game);
      // store game info into dedicated context
      const gameInfo = {
        id: userGameId,
        game_id: settingsId,
        user_id: userId,
        settings,
      };
      handleChangeGame(gameInfo);
      // re-direct to game page
      navigate("/game");
    } catch (err) {
      console.error(err);
      toast.error(`${err.message}`, TOAST_DEFAULT_CONFIG);
    }
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
      <form
        className="flex w-full max-w-2xl flex-col gap-6 self-center"
        onSubmit={handleSubmit}
      >
        <h3>Game Settings</h3>

        <label htmlFor="#">
          Select Mode
          <div className="modalSettings__group">
            {modes.map(({ id, type, value, title }, index) => {
              return (
                <label
                  key={`${type}-${id}`}
                  htmlFor={type}
                  className={`modalSettings__label ${darkTheme}`}
                >
                  <input
                    id={type}
                    type="radio"
                    name="mode"
                    data-attribute={type}
                    value={value}
                    title={title}
                    defaultChecked={index === 0}
                    disabled={index !== 0}
                    required
                  />
                  {capitalizeText(type)}
                  {index !== 0 ? (
                    <LockIcon customStyle="modalSettings__lock" />
                  ) : null}
                </label>
              );
            })}
          </div>
        </label>

        <label htmlFor="#">
          Number of Players
          <div className="modalSettings__group">
            {players.map(({ value, id }, index) => {
              return (
                <label
                  key={`player-${id}`}
                  htmlFor={value}
                  className={`modalSettings__label ${darkTheme}`}
                >
                  <input
                    id={value}
                    type="radio"
                    name="is_multiplayer"
                    value={value}
                    defaultChecked={index === 0}
                    disabled={index !== 0}
                    required
                  />
                  {capitalizeText(value)}
                  {index !== 0 ? (
                    <LockIcon customStyle="modalSettings__lock" />
                  ) : null}
                </label>
              );
            })}
          </div>
        </label>

        <label htmlFor="#">
          Grid Size
          <div className="modalSettings__group">
            {gridSizes.map(({ id, type, value }, index) => {
              return (
                <label
                  key={`${type}-${id}`}
                  htmlFor={type}
                  className={`modalSettings__label ${darkTheme}`}
                >
                  <input
                    id={type}
                    type="radio"
                    name="grid_size"
                    data-attribute={type}
                    value={value}
                    defaultChecked={index === 0}
                    disabled={index !== 0}
                    required
                  />
                  {capitalizeText(type)}
                  {index !== 0 ? (
                    <LockIcon customStyle="modalSettings__lock" />
                  ) : null}
                </label>
              );
            })}
          </div>
        </label>

        <button type="submit" className="btn btn__primary__default m-auto">
          Start Game
        </button>
      </form>
    </Modal>
  );
}
