import React, { useContext } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const API_URL = import.meta.env.VITE_SERVER_URL;

function Account() {
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const { userId } = useParams();

  const deleteUser = async (userId) => {
    const secureDelete = confirm(
      "Are you sure you want to delete your account? You can't undo and you'll delete all your YearCompass data as well."
    );

    if (!secureDelete) {
      console.log("compass is not deleted");
      return;
    }

    try {
      await axios.delete(`${API_URL}/api/user/delete/${userId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div key={user._id} className="account-view">
      <h1>Your Account</h1>
      <p>Edit, change or delete your account here: </p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <button onClick={() => deleteUser(user._id)}> delete account </button>
    </div>
  );
}

export default Account;
