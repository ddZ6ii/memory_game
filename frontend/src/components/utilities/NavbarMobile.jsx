import { NavLink } from "react-router-dom";

export default function NavbarMobile() {
  return (
    <nav>
      {/* logo */}
      <NavLink to="/">Logo</NavLink>

      {/* navitems */}
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/game">Game</NavLink>
          </li>
          <li>
            <NavLink to="/game">Connection</NavLink>
          </li>
          <li>
            <NavLink to="/game">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
