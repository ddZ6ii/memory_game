import PropTypes from "prop-types";

export default function LockIcon({ customStyle }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={customStyle}
    >
      <path
        d="M13.075 7.27187H12.3469V4.3625C12.3469 1.95313 10.3938 0 7.9844 0C5.57502 0 3.6219 1.95313 3.6219 4.3625V7.27187H2.89377C2.49377 7.27187 2.16565 7.59688 2.16565 8V15.2719C2.16565 15.675 2.49065 16 2.89377 16H13.075C13.475 16 13.8032 15.675 13.8032 15.2719V8C13.8032 7.59688 13.475 7.27187 13.075 7.27187ZM10.8938 7.27187H5.07502V4.3625C5.07502 2.75625 6.37815 1.45312 7.9844 1.45312C9.59065 1.45312 10.8938 2.75625 10.8938 4.3625V7.27187Z"
        fill="#FDA214"
      />
    </svg>
  );
}

LockIcon.propTypes = {
  customStyle: PropTypes.string,
};

LockIcon.defaultProps = {
  customStyle: "",
};
