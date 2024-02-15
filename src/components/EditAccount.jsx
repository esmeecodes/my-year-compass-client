import React from "react";

function EditAccount(props) {
  const handleUserNameChange = (e) => props.onUserNameChange(e.target.value);

  return (
    <div>
      <h2>Edit your account</h2>
      <form className="form-edit-account">
        <input
          className="edit-username"
          type="text"
          name="userName"
          onChange={handleUserNameChange}
          value={props.userName}
        />
      </form>
    </div>
  );
}

export default EditAccount;
