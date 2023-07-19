import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import useThemeContext from "../hooks/useThemeContext";
import useAuthContext from "../hooks/useAuthContext";

import capitalizeText from "../helpers/capitalize";
import * as Auth from "../services/auth";

import TOAST_DEFAULT_CONFIG from "../data/toastConfig.json";

export default function SignForm() {
  const navigate = useNavigate();
  const { isDarkMode } = useThemeContext();
  const { handleChangeAccount } = useAuthContext();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // proceed to sign-in (check if account already exists)
        const credendtials = {
          email: e.target.email.value,
          password: e.target.password.value,
        };
        const { data: user } = await Auth.login(credendtials);

        if (Object.keys(user).length) {
          toast.success(`Welcome back ${capitalizeText(user.pseudo)}!`, {
            ...TOAST_DEFAULT_CONFIG,
            autoClose: 2000,
          });
          // update both user context and local storage
          handleChangeAccount(user);
          // re-direct to Game page
          setTimeout(() => {
            navigate("game");
          }, 2000);
        }
      }

      if (!isLogin) {
        const password = e.target.password.value;
        const confirmationPassword = e.target.confirmPassword.value;
        if (password !== confirmationPassword) {
          toast.warn(`Passwords do not match!`, TOAST_DEFAULT_CONFIG);
        } else {
          // register new user to database
          const user = {
            pseudo: e.target.pseudo.value,
            email: e.target.email.value,
            password: e.target.password.value,
          };
          const res = await Auth.register(user);

          // account with same email already existing
          if (res?.status === 200) {
            toast.warning(`${res.data}...`, TOAST_DEFAULT_CONFIG);
          }

          // signin succeeded, invite to sign-in
          if (res?.status === 201) {
            toast.success("Account created. Welcome to Memory Challenge!", {
              ...TOAST_DEFAULT_CONFIG,
              autoClose: 2000,
            });
            setIsLogin(true);
          }
        }
      }
    } catch (err) {
      console.error(err);
      const errorMessage = isLogin ? err?.response?.data : err.message;
      toast.warn(`${errorMessage}`, TOAST_DEFAULT_CONFIG);
    }
  };

  return (
    <form
      className="relative flex flex-col gap-2 rounded-lg border px-2 py-4"
      onSubmit={handleSubmit}
    >
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
          pattern="[A-z0-9._%+\-]+@[A-z0-9.\-]+\.[A-z]{2,4}$"
          title="example@test.com"
          required
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          id="password"
          type="password"
          placeholder="Enter your password..."
          pattern="[\w]{4,}"
          title="4 to 12 characters"
          required
        />
      </label>
      {!isLogin ? (
        <label htmlFor="confirmPassword">
          Confirm Password
          <input
            id="confirmPassword"
            type="password"
            placeholder="Enter your password..."
            pattern="[\w]{4,}"
            title="4 to 12 characters"
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
            onClick={() => setIsLogin((prev) => !prev)}
          >
            {!isLogin ? "Log in now." : "Sign up now."}
          </button>
        </p>
        <button type="submit" className="btn btn__primary__default ml-auto">
          {!isLogin ? "Create Account" : "Log in"}
        </button>
      </div>
    </form>
  );
}
