import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

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
      <h1>Sign up here and start reviewing</h1>
      <form onSubmit={handleSignupSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="userName"
          value={username}
          onChange={handleUsername}
        />
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit">Sign up!</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Do you already have an account?</p>
      <NavLink to={"/login"}>Login</NavLink>
    </div>
  );
}

export default Signup;
