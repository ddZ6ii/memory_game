import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useThemeContext } from "../contexts/ThemeContext";
import { useAuthContext } from "../contexts/AuthContext";

import * as Auth from "../services/auth";

import SwitchMode from "./SwitchMode";
import LogInIcon from "./utilities/LogInIcon";
import LogOutIcon from "./utilities/LogOutIcon";
import MenuOpen from "./utilities/MenuOpen";
import MenuClose from "./utilities/MenuClose";

import navitems from "../data/navitems.json";

export default function Navbar() {
  const navigate = useNavigate();
  const { isDarkMode } = useThemeContext();
  const { isAuthenticated, clearAccount } = useAuthContext();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => setIsMenuOpened((prev) => !prev);

  const handleLogIn = () => {
    toggleMenu();
    navigate("/");
  };

  const handleLogOut = async () => {
    try {
      toggleMenu(); // close menu
      await Auth.logout(); // clear JWT from cookie
      clearAccount(); // clear both user context and local storage
      navigate("/"); // re-direct to HomePage
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="navbar">
      {/* logo */}
      <NavLink to="/" className="z-10">
        <img
          src="../assets/icon/favicon.svg"
          alt="logo"
          width="40"
          height="40"
        />
      </NavLink>

      {/* navitems */}
      <ul className={`navlist ${isMenuOpened ? "navlist__isOpen" : ""}`}>
        {isMenuOpened ? (
          <>
            {navitems.map((navitem) => (
              <li key={navitem.id}>
                <NavLink
                  to={navitem.route}
                  className={({ isActive }) =>
                    `navitem ${
                      isActive ? "navitem__isActive text-accent-default" : ""
                    }`
                  }
                >
                  {navitem.name}
                </NavLink>
              </li>
            ))}

            {/* log in/out item */}
            {isAuthenticated ? (
              <li>
                <NavLink to="/">
                  <button
                    type="button"
                    className="navitem btn btn__primary__default"
                    onClick={handleLogOut}
                  >
                    <LogOutIcon />
                    Log Out
                  </button>
                </NavLink>
              </li>
            ) : (
              <li>
                <button
                  type="button"
                  className="navitem btn btn__primary__default"
                  onClick={handleLogIn}
                >
                  <LogInIcon />
                  Log In
                </button>
              </li>
            )}
          </>
        ) : null}
      </ul>

      {/* burger menu buttons */}
      <div className="flex gap-8">
        <button type="button" className="flex items-center">
          <SwitchMode />
        </button>
        {/* burger menu */}
        <button type="button" className="navbar__btn" onClick={toggleMenu}>
          {isMenuOpened ? <MenuClose /> : <MenuOpen isDarkMode={isDarkMode} />}
        </button>
      </div>
    </nav>
  );
}
