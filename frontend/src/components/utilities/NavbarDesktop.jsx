import { NavLink } from "react-router-dom";

export default function NavBarDesktop() {
  return (
    <nav>
      {/* logo */}
      <NavLink to="/">Logo</NavLink>
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
