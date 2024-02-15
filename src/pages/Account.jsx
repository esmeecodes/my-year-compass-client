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
  const [usernameFormOpen, setUsernameFormOpen] = useState(false);

  const [formType, setFormType] = useState("");

  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const openForm = (type) => {
    setFormType(type);
  };

  const handleChange = (e) => {
    e.preventDefault();

    const requestBody = {
      username: newUsername,
      email: newEmail,
      oldpassword: oldPassword,
      password: newPassword,
    };
    console.log(requestBody);

    axios
      .put(`${API_URL}/auth/account/edit/${user._id}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(`saved changes to ${requestBody}`);
        setFormType("");

        const updatedUser = response.data;
        setUser(updatedUser);
        navigate("/account");
      })
      .catch((error) => {
        console.log(user._id);
        console.error("Error occurred while saving changes:", error);
        // Handle error if needed
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
    <div key={user._id}>
      <h1>Your Account</h1>
      <p>
        Hello {user.username}!
        <br />
        <br />
        Change or delete your account here:
        <br />
        <br />
      </p>
      <div className="account-list">
        <div className="account-part">
          <p>Username: {user.username}</p>

          {formType === "username" ? (
            <form className="form-change-account">
              <input
                className="new-username-input"
                type="text"
                name="username"
                onChange={(e) => setNewUsername(e.target.value)}
                value={newUsername}
                placeholder="new username"
              />
              <button onClick={handleChange}>save</button>
            </form>
          ) : (
            <a onClick={() => openForm("username")}>Change</a>
          )}
        </div>
        <div className="account-part">
          <p>Email: {user.email}</p>

          {formType === "email" ? (
            <form className="form-change-account">
              <input
                className="new-email-input"
                type="email"
                name="email"
                onChange={(e) => setNewEmail(e.target.value)}
                value={newEmail}
                placeholder="new email"
              />
              <button onClick={handleChange} className="small-save">
                save
              </button>
            </form>
          ) : (
            <div>
              <a onClick={() => openForm("email")}>Change</a>
            </div>
          )}
        </div>
        <div>
          <div className="account-part">
            <p>Password</p>
            {formType === "password" ? (
              <form className="form-change-account">
                <input
                  className="new-password-input"
                  type="password"
                  name="password"
                  onChange={(e) => setOldPassword(e.target.value)}
                  value={oldPassword}
                  placeholder="old password"
                />
                <input
                  className="new-password-input"
                  type="password"
                  name="password"
                  onChange={(e) => setNewPassword(e.target.value)}
                  value={newPassword}
                  placeholder="new password"
                />
                <button onClick={handleChange} className="small-save">
                  save
                </button>
              </form>
            ) : (
              <div>
                <a onClick={() => openForm("password")}>Change</a>
              </div>
            )}
          </div>
          <button onClick={() => deleteUser(user._id)}>delete account</button>
        </div>
      </div>
    </div>
  );
}

export default Account;
