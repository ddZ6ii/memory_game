import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import useThemeContext from "../hooks/useThemeContext";

import SwitchMode from "./SwitchMode";
import LogOutIcon from "./utilities/LogOutIcon";
import MenuOpen from "./utilities/MenuOpen";
import MenuClose from "./utilities/MenuClose";

import navitems from "../data/navitems.json";

export default function Navbar() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { isDarkMode } = useThemeContext();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpened((prev) => !prev);

  const handleLogOut = () => {
    // close burger menu
    toggleMenu();
    // request logout
    // await logoutUser();
    // update context
    // setAccount(undefined);
    // clear local storage
    // clearUserFromLocalStorage();
    // re-direction to HomePage
    navigate("/");
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

            {/* log out item */}
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
          </>
        ) : null}
      </ul>

      {/* buttons */}
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
