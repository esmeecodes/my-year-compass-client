import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
const API_URL = import.meta.env.VITE_SERVER_URL;

function Account() {
  const { logoutUser, user, setUser } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const [changeFormOpen, setChangeFormOpen] = useState(false);

  const [newEmail, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const openform = (e) => setChangeFormOpen(true);

  const handleAccountChange = (e) => {
    e.preventDefault();
    console.log(newEmail);
    const requestBody = {
      email: newEmail,
    };
    console.log(`this is the ${requestBody}`);
    axios
      .put(`${API_URL}/auth/account/edit/${user._id}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(`saved changes to ${requestBody}`);
        setChangeFormOpen(false);
        const updatedUser = response.data;
        setUser(updatedUser);
        navigate("/account");
      });
  };

  const deleteUser = async () => {
    const secureDelete = confirm(
      "Are you sure you want to delete your account? You can't undo and you'll delete all your YearCompass data as well."
    );

    if (!secureDelete) {
      console.log("compass is not deleted");
      return;
    }

    try {
      await axios.delete(`${API_URL}/auth/delete/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      console.log("user successfully deleted", user._id);
      logoutUser();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div key={user._id} className="account-view">
      <h1>Your Account</h1>
      <p>
        Hello {user.username}!
        <br />
        <br />
        Change or delete your account here:
        <br />
        <br />
      </p>
      <p>{user.email}</p>
      {changeFormOpen ? (
        <form className="form-change-account">
          <input
            className="new-email-input"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={newEmail}
            placeholder="new email"
          />
          <button onClick={handleAccountChange}>save</button>
        </form>
      ) : (
        <div>
          <a onClick={openform}>Change</a>
          <button onClick={() => deleteUser(user._id)}>delete account</button>
        </div>
      )}
    </div>
  );
}

export default Account;
