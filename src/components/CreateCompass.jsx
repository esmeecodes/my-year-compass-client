import React from "react";

function CreateCompass(props) {
  const handleCompassTitleChange = (e) =>
    props.onCompassTitleChange(e.target.value);

  return (
    <div>
      <h2>Create a new YearCompass</h2>
      <form className="form-create-yearcompass">
        <input
          className="form-create-compass-input"
          type="text"
          name="compassTitle"
          onChange={handleCompassTitleChange}
          value={props.compassTitle}
          placeholder="Give your compass a title"
        />
      </form>
    </div>
  );
}

export default CreateCompass;
