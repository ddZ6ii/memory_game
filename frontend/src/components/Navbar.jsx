import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useThemeContext } from "../contexts/ThemeContext";
import { useAuthContext } from "../contexts/AuthContext";

import * as Auth from "../services/auth";

import SwitchMode from "./SwitchMode";
import HomeIcon from "./utilities/HomeIcon";
import SettingsIcon from "./utilities/SettingsIcon";
import RulesIcon from "./utilities/RulesIcon";
import StatsIcon from "./utilities/StatsIcon";
import PreferencesIcon from "./utilities/PreferencesIcon";
import LogInIcon from "./utilities/LogInIcon";
import LogOutIcon from "./utilities/LogOutIcon";
import MenuOpen from "./utilities/MenuOpen";
import MenuClose from "./utilities/MenuClose";

export default function Navbar() {
  const navigate = useNavigate();
  const { isDarkMode } = useThemeContext();
  const { isAuthenticated, clearAccount } = useAuthContext();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const navitems = [
    {
      id: 1,
      name: "Home",
      component: <HomeIcon />,
      route: "",
    },
    {
      id: 2,
      name: "Settings",
      component: <SettingsIcon />,
      route: "/settings",
    },
    {
      id: 3,
      name: "Rules",
      component: <RulesIcon />,
      route: "/rules",
    },
    {
      id: 4,
      name: "Stats",
      component: <StatsIcon />,
      route: "/stats",
    },
    {
      id: 5,
      name: "Preferences",
      component: <PreferencesIcon />,
      route: "/preferences",
    },
  ];

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
                  onClick={toggleMenu}
                >
                  {navitem.component}
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
