import PropTypes from "prop-types";

export default function RulesIcon({ customStyle }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={customStyle}
    >
      <g clipPath="url(#clip0_42_177)">
        <path
          d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM11.99 10C12.5478 10 13 10.4522 13 11.01V16.1338C13.2989 16.3067 13.5 16.6299 13.5 17C13.5 17.5523 13.0523 18 12.5 18H12.01C11.4521 18 11 17.5478 11 16.99V12C10.4477 12 10 11.5523 10 11C10 10.4477 10.4477 10 11 10H11.99ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
          fill="#FDFDFD"
        />
      </g>
      <defs>
        <clipPath id="clip0_42_177">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

RulesIcon.propTypes = {
  customStyle: PropTypes.string,
};

RulesIcon.defaultProps = {
  customStyle: "",
};
