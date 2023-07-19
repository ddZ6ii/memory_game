import PropTypes from "prop-types";

export default function MenuOpen({ isDarkMode }) {
  return (
    <svg
      width="34"
      height="24"
      viewBox="0 0 34 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12H32M2 2H32M12 22H32"
        className={
          isDarkMode ? "stroke-neutral-lightest" : "stroke-neutral-darkest"
        }
        strokeWidth="2.57143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

MenuOpen.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
