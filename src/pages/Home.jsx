import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context.jsx";

function Home() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);
  return (
    <div>
      <h1>Welcome to the Home page!</h1>
      <p>
        It’s a YearCompass—your very own YearCompass, to be exact. It helps you
        reflect on the past year and plan the next one. With a set of carefully
        selected questions and exercises, YearCompass helps you uncover your
        patterns and design a great year for yourself.
      </p>
      <p>
        The app has two parts. The first half will help you review, learn from,
        and celebrate the year you’re leaving behind. The second half, on the
        other hand, is all about the future. You’ll be dreaming, planning, and
        preparing to get the most out of the new year.
      </p>
      {isLoggedIn && (
        <>
          <NavLink to="/my-compass/">
            <button>Show my compasses</button>
          </NavLink>
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
    </div>
  );
}

export default Home;
