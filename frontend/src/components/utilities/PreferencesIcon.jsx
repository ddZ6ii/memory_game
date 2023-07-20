import PropTypes from "prop-types";

export default function PreferencesIcon({ customStyle }) {
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
        d="M15.2218 12.4893L14.8547 11.8864C14.6171 12.0311 14.4867 12.3017 14.5216 12.5777C14.5563 12.8536 14.7499 13.0834 15.016 13.1646L15.2218 12.4893ZM8.62449 12.4893L8.83036 13.1646C9.09643 13.0834 9.28999 12.8536 9.32486 12.5777C9.35959 12.3017 9.22915 12.0311 8.99153 11.8864L8.62449 12.4893ZM17.5703 7.05882C17.5703 9.10304 16.4845 10.8943 14.8547 11.8864L15.5889 13.0923C17.6218 11.8547 18.982 9.61595 18.982 7.05882H17.5703ZM11.9232 1.41176C15.0419 1.41176 17.5703 3.94004 17.5703 7.05882H18.982C18.982 3.16035 15.8217 0 11.9232 0V1.41176ZM6.2761 7.05882C6.2761 3.94004 8.80437 1.41176 11.9232 1.41176V0C8.02468 0 4.86433 3.16035 4.86433 7.05882H6.2761ZM8.99153 11.8864C7.36186 10.8943 6.2761 9.10306 6.2761 7.05882H4.86433C4.86433 9.61595 6.22451 11.8547 8.25746 13.0923L8.99153 11.8864ZM8.41862 11.8141C3.96203 13.173 0.605888 17.0547 0.0156004 21.7979L1.41655 21.9723C1.93693 17.7908 4.89801 14.3636 8.83036 13.1646L8.41862 11.8141ZM0.0156004 21.7979C-0.140414 23.0516 0.898109 24 2.04081 24V22.5882C1.62412 22.5882 1.37999 22.2662 1.41655 21.9723L0.0156004 21.7979ZM2.04081 24H21.8056V22.5882H2.04081V24ZM21.8056 24C22.9483 24 23.9867 23.0516 23.8307 21.7979L22.4297 21.9723C22.4663 22.2662 22.2222 22.5882 21.8056 22.5882V24ZM23.8307 21.7979C23.2405 17.0547 19.8843 13.173 15.4276 11.8141L15.016 13.1646C18.9483 14.3636 21.9093 17.7908 22.4297 21.9723L23.8307 21.7979Z"
        fill="#FDFDFD"
      />
    </svg>
  );
}

PreferencesIcon.propTypes = {
  customStyle: PropTypes.string,
};

PreferencesIcon.defaultProps = {
  customStyle: "",
};