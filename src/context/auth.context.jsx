import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:5005";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  }; // store the token in localstorage

  const authenticateUser = () => {
    const storedToken = localStorage.getItem("authToken");

    // if token is found, send a request to the server's endpoint to verify
    // the token is sent through the request's Authorization Headers
    if (storedToken) {
      axios
        .get(`${API_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          // If the server verifies that the JWT token is valid

          const user = response.data;
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
        })
        .catch((error) => {
          // if the server sends an error response (invalid token, update the state variables)
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      // if the store is not available/removed
      setIsLoading(false);
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  // with logging out, remove the token from the localstorage

  const logoutUser = () => {
    removeToken();
    authenticateUser();
  };

  // log out the user means remove token & states van de user-authentication

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logoutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export { AuthProviderWrapper, AuthContext };
