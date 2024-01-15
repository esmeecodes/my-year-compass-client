import { useState } from "react";

function MyCompass() {
  const [year, setYear] = useState("2022");

  return (
    <div>
      <h2>Your Compass</h2>
      Here you can create your own compass and look into the ones you've been
      filling out in the past.
      <h3>Create a new YearCompass</h3>
      <form>
        <label>Year</label>
        <input
          type="text"
          name="year"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />

        <button type="submit">Create New YearCompass</button>
      </form>
    </div>
  );
}

export default MyCompass;
