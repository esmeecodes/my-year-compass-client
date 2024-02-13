import React from "react";

function Questions({
  question,
  currentName,
  value,
  timeDesc,
  handleInputChange,
}) {
  return (
    <div>
      <h1>{timeDesc}</h1>
      <form className="yearcompassquestions">
        <p>{question}</p>
        <textarea
          type="text"
          name={currentName}
          value={value}
          onChange={handleInputChange}
          className="form-question-xxl-answer"
        ></textarea>
      </form>
    </div>
  );
}

export default Questions;
