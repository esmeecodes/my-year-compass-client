import React from "react";

function CreateCompass(props) {
  const handleCompassTitleChange = (e) =>
    props.onCompassTitleChange(e.target.value);

  const handleCompassYearChange = (e) =>
    props.onCompassYearChange(e.target.value);

  return (
    <div>
      <h3>Create a new YearCompass</h3>
      <form className="form-create-yearcompass">
        <input
          className="form-create-compass-input"
          type="text"
          name="compassTitle"
          onChange={handleCompassTitleChange}
          value={props.compassTitle}
          placeholder="Give your compass a title"
        />
        <input
          className="form-create-compass-input"
          type="number"
          min="2015"
          max="2099"
          step="1"
          name="compassYear"
          onChange={handleCompassYearChange}
          value={props.compassYear}
          placeholder="Which year are you reflecting on?"
        />
      </form>
    </div>
  );
}

export default CreateCompass;
