import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context.jsx";

function Navbar() {
  const { isLoggedIn, user } = useContext(AuthContext); // tap into the AuthContext to use the value from the Provider

  return (
    <nav>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink to="/my-compass/">
            <button>My Compass</button>
          </NavLink>
          <button>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <NavLink to="/signup">
            <button>Sign up</button>
          </NavLink>
          <NavLink to="login">
            <button>Log in</button>
          </NavLink>
        </>
      )}
    </nav>
  );
}

export default Navbar;
