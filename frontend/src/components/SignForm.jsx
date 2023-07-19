import PropTypes from "prop-types";

import useThemeContext from "../hooks/useThemeContext";

export default function SignForm({ isLogin, toggleSignIn }) {
  const { isDarkMode } = useThemeContext();
  return (
    <form className="relative flex flex-col gap-2 rounded-lg border px-2 py-4">
      {/* <h3 className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 bg-neutral-lightest px-2 py-2"> */}
      <h3
        className={`absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 px-2 py-2 ${
          isDarkMode ? "bg-neutral-darkest" : "bg-neutral-lightest "
        }`}
      >
        {isLogin ? "Log In" : "Sign Up"}
      </h3>

      {!isLogin ? (
        <label htmlFor="pseudo">
          Pseudo
          <input
            id="pseudo"
            type="text"
            placeholder="Enter your pseudo..."
            required
          />
        </label>
      ) : null}
      <label htmlFor="email">
        Email
        <input
          id="email"
          type="email"
          placeholder="Enter your email..."
          required
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          id="password"
          type="password"
          placeholder="Enter your password..."
          required
        />
      </label>
      {!isLogin ? (
        <label htmlFor="confirm-password">
          Confirm Password
          <input
            id="confirm-password"
            type="password"
            placeholder="Enter your password..."
            required
          />
        </label>
      ) : null}

      <div className="flex flex-col gap-4">
        <p className="px-4 text-right">
          {!isLogin ? "Already have an account?" : "New player?"}{" "}
          <button
            type="button"
            className="primary__default cursor-pointer"
            onClick={toggleSignIn}
          >
            {!isLogin ? "Log in now." : "Sign up now."}
          </button>
        </p>
        <button type="button" className="btn btn__primary__default ml-auto">
          {!isLogin ? "Create Account" : "Log in"}
        </button>
      </div>
    </form>
  );
}

SignForm.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  toggleSignIn: PropTypes.func.isRequired,
};
