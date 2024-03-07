import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_SERVER_URL;

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { username, email, password };

    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="signup-page">
      <div className="signup-intro">
        <h1>
          Sign up <br />
        </h1>
        <span className="subtitle">and start reviewing</span>
      </div>
      <form onSubmit={handleSignupSubmit} className="form-signup">
        <input
          type="text"
          name="userName"
          value={username}
          onChange={handleUsername}
          className="form-signup-input"
          placeholder="username"
        />

        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
          className="form-signup-input"
          placeholder="email"
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          className="form-signup-input"
          placeholder="password"
        />
        <button type="submit" className="signup-button">
          Sign up!
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Do you already have an account?</p>
      <NavLink to={"/login"}>Login</NavLink>
    </div>
  );
}

export default Signup;
