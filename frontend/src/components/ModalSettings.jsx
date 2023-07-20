import { Modal } from "antd";

import LockIcon from "./utilities/LockIcon";

import capitalizeText from "../helpers/capitalize";

import modes from "../data/settingsModes.json";
import players from "../data/settingsNumberOfPlayers.json";
import gridSizes from "../data/settingsGridSize.json";

export default function ModalSettings() {
  const modalOverlayStyle = { backgroundColor: "var(--color-overlay)" };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submit");
  };

  return (
    <Modal
      centered
      open
      onOk={handleSubmit}
      destroyOnClose
      footer={null}
      maskStyle={modalOverlayStyle}
      zIndex={10}
    >
      <form
        className=" flex w-full max-w-2xl flex-col gap-6 self-center px-2 py-4"
        onSubmit={handleSubmit}
      >
        <h3>Game Settings</h3>

        <label htmlFor="#">
          Select Mode
          <div className="modalSettings__group">
            {modes.map(({ value, id, title }, index) => {
              return (
                <label
                  key={`${value}-${id}`}
                  htmlFor={value}
                  className="modalSettings__label"
                >
                  <input
                    id={value}
                    type="radio"
                    name="mode"
                    data-attribute={value}
                    title={title}
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
          Number of Players
          <div className="modalSettings__group">
            {players.map(({ value, id }, index) => {
              return (
                <label
                  key={`${value}-${id}`}
                  htmlFor={`${value}-player`}
                  className="modalSettings__label"
                >
                  <input
                    id={`${value}-player`}
                    type="radio"
                    name="is_multiplayer"
                    data-attribute={value}
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
            {gridSizes.map(({ value, id }, index) => {
              return (
                <label
                  key={`${value}-${id}`}
                  htmlFor={`${value}-grid`}
                  className="modalSettings__label"
                >
                  <input
                    id={`${value}-grid`}
                    type="radio"
                    name="grid_size"
                    data-attribute={value}
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

        <button type="submit" className="btn btn__primary__default m-auto">
          Start Game
        </button>
      </form>
    </Modal>
  );
}
