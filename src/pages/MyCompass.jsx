import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useState, useContext, useEffect } from "react";

const API_URL = "http://localhost:5005";

function MyCompass() {
  const [compassTitle, setCompassTitle] = useState("");
  const [compasses, setCompasses] = useState([]);
  const { user, logOutUser } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");
  console.log(storedToken);
  console.log(compassTitle);

  const createCompass = async (e) => {
    try {
      const requestBody = {
        compassTitle,
        userId: user._id,
      };

      await axios.post(`${API_URL}/api/mycompasses`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      getAllResumes();
      setCompassTitle("");
    } catch (e) {
      console.error("Error creating compass", e);
    }
  };

  const getAllCompasses = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/mycompasses/${user._id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setCompasses(response.data.compasses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllCompasses();
  }, [user.id]);

  return (
    <div className="userpage">
      <div className="create-compass">
        <h2>These are your YearCompasses, {user.username}!</h2>
        <p>Here you can create your own YearCompass.</p>
        <p>
          Review, learn from, and celebrate the year you’re leaving behind.
          After that, your YearCompass is all about the future. You’ll be
          dreaming, planning, and preparing to get the most out of the new year.
        </p>
        <h3>Create a new YearCompass</h3>
        <form>
          <label>Fill out the title of your compass</label>
          <input
            type="text"
            name="compassTitle"
            onChange={(e) => setCompassTitle(e.target.value)}
            value={compassTitle}
          />

          <button type="submit" onClick={createCompass}>
            Create YearCompass
          </button>
        </form>
      </div>
      <div className="your-compasses">
        {compasses &&
          compasses.map((compass) => {
            return (
              <div>
                <h2>Your Compasses</h2>
                <div key={compass._id} className="compass-card">
                  <h3 className="compass-card-title">{compass.compassTitle}</h3>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MyCompass;
