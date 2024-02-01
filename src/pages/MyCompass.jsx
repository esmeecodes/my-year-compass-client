import axios from "axios";
import { useState } from "react";

function MyCompass() {
  const [compassTitle, setCompassTitle] = useState("");

  const createCompass = async (e) => {
    try {
      const requestbody = {
        compassTitle,
        userId: user._id,
      };

      await axios.post(`${API_URL}/api/mycompasses`, requestbody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      setResumeTitle("");
    } catch (e) {
      console.error("Error creating compass", e);
    }
  };

  return (
    <div>
      <h2>Your Compass</h2>
      Here you can create your own compass and look into the ones you've been
      filling out in the past.
      <h3>Create a new YearCompass</h3>
      <form>
        <label>Fill out the title of your compass</label>
        <input
          type="text"
          name="compassTitle"
          onChange={(e) => setCompassTitle(e.target.value)}
          value={year}
        />

        <button type="submit" onClick={createCompass}>
          Create YearCompass
        </button>
      </form>
    </div>
  );
}

export default MyCompass;
