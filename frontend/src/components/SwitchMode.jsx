import PropTypes from "prop-types";

import useThemeContext from "../hooks/useThemeContext";

import SwitchLightIcon from "./utilities/SwitchLightIcon";
import SwitchDarkIcon from "./utilities/SwitchDarkIcon";

export default function SwitchMode({ showIcons = true }) {
  const { isDarkMode, handleChangeDarkMode } = useThemeContext();
  return (
    <label htmlFor="toggleSwitch" className="toggle">
      <input
        type="checkbox"
        id="toggleSwitch"
        checked={isDarkMode}
        onChange={() => handleChangeDarkMode(!isDarkMode)}
      />
      {showIcons && (
        <>
          <span className="toggle__icon toggle__icon_light">
            <SwitchLightIcon />
          </span>
          <span className="toggle__icon toggle__icon_dark">
            <SwitchDarkIcon />
          </span>
        </>
      )}
    </label>
  );
}

SwitchMode.propTypes = {
  showIcons: PropTypes.bool,
};

SwitchMode.defaultProps = {
  showIcons: true,
};
