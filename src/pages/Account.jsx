import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const API_URL = import.meta.env.VITE_SERVER_URL;

function Account() {
  const storedToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const { userId } = useParams();

  return (
    <div>
      <h1>Your Account</h1>
      <p>This is your account-data: </p>
    </div>
  );
}
