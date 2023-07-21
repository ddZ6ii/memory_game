import PropTypes from "prop-types";

export default function StatsIcon({ customStyle }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={customStyle}
    >
      <path
        d="M2 1C1.44772 1 1 1.44772 1 2V21C1 22.1046 1.89543 23 3 23H22C22.5523 23 23 22.5523 23 22C23 21.4477 22.5523 21 22 21H4C3.44772 21 3 20.5523 3 20V2C3 1.44772 2.55228 1 2 1Z"
        fill="#FDFDFD"
      />
      <path
        d="M6 14C6 13.4477 6.44771 13 7 13C7.55229 13 8 13.4477 8 14V17C8 17.5523 7.55229 18 7 18C6.44771 18 6 17.5523 6 17V14Z"
        fill="#FDFDFD"
      />
      <path
        d="M11 10C10.4477 10 10 10.4477 10 11V17C10 17.5523 10.4477 18 11 18C11.5523 18 12 17.5523 12 17V11C12 10.4477 11.5523 10 11 10Z"
        fill="#FDFDFD"
      />
      <path
        d="M14 8C14 7.44771 14.4477 7 15 7C15.5523 7 16 7.44772 16 8V17C16 17.5523 15.5523 18 15 18C14.4477 18 14 17.5523 14 17V8Z"
        fill="#FDFDFD"
      />
      <path
        d="M19 4C18.4477 4 18 4.44772 18 5V17C18 17.5523 18.4477 18 19 18C19.5523 18 20 17.5523 20 17V5C20 4.44772 19.5523 4 19 4Z"
        fill="#FDFDFD"
      />
    </svg>
  );
}

StatsIcon.propTypes = {
  customStyle: PropTypes.string,
};

StatsIcon.defaultProps = {
  customStyle: "",
};
