import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>

      <NavLink to="/my-compass/">
        <button>My Compass</button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
