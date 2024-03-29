import { useState, useContext } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = import.meta.env.VITE_SERVER_URL;

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        storeToken(response.data.authToken);

        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };
  return (
    <div className="login-page">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit} className="form-login">
        <input
          className="form-login-input"
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
          placeholder="email"
        />

        <input
          className="form-login-input"
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          placeholder="password"
        />

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>You don't have an account yet?</p>
      <NavLink to={"/signup"}> Sign Up</NavLink>
    </div>
  );
}

export default Login;
