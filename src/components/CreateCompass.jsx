import React from "react";

function CreateCompass(props) {
  const handleCompassTitleChange = (e) =>
    props.onCompassTitleChange(e.target.value);

  return (
    <div>
      <form className="create-yearcompass-form">
        <label>Fill out the title of your compass</label>
        <input
          type="text"
          name="compassTitle"
          onChange={handleCompassTitleChange}
          value={props.compassTitle}
          placeholder="YearCompass title"
        />
      </form>
    </div>
  );
}

export default CreateCompass;
