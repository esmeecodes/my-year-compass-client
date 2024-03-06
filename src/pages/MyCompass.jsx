import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useState, useContext, useEffect } from "react";
import CreateCompass from "../components/CreateCompass";
import { NavLink } from "react-router-dom";

const API_URL = import.meta.env.VITE_SERVER_URL;

function MyCompass() {
  const [compassTitle, setCompassTitle] = useState("");
  const [compassYear, setCompassYear] = useState("");
  const [compasses, setCompasses] = useState([]);
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");

  const handleCompassTitleChange = (value) => {
    setCompassTitle(value);
  };

  const handleCompassYearChange = (value) => {
    setCompassYear(value);
  };

  const createCompass = async (e) => {
    try {
      const requestBody = {
        compassTitle,
        userId: user._id,
        compassYear,
      };

      await axios.post(`${API_URL}/api/mycompasses`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      getAllCompasses();
      setCompassTitle("");
      setCompassYear("");
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

  const deleteCompass = async (compassId) => {
    const secureDelete = confirm("Are you sure you want to delete?");

    if (!secureDelete) {
      console.log("compass is not deleted");
      return;
    }

    try {
      await axios.delete(`${API_URL}/api/compass/delete/${compassId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      const updatedCompasses = compasses.filter(
        (compass) => compass._id !== compassId
      );
      setCompasses(updatedCompasses);
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
        <h2>Hello {user.username}!</h2>
        <p>
          Here you can create your own YearCompass. Review, learn from, and
          celebrate the year you’re leaving behind. After that: dream, plan, and
          prepare to get the most out of next year.
        </p>

        <div>
          <CreateCompass
            compassTitle={compassTitle}
            onCompassTitleChange={handleCompassTitleChange}
            onCompassYearChange={handleCompassYearChange}
          />
          <button type="submit" onClick={createCompass}>
            Create Compass
          </button>
        </div>
        <div className="your-compasses">
          <h2>Your Compasses</h2>
          {compasses &&
            compasses.map((compass) => {
              return (
                <div>
                  <div key={compass._id} className="compass-card">
                    <h3 className="compass-card-title">
                      {compass.compassTitle}
                    </h3>
                    <NavLink
                      to={`/compass/overview/${compass._id}`}
                      className="link-to-compass"
                    >
                      open & edit
                    </NavLink>{" "}
                    <NavLink
                      to={`/compass/show/${compass._id}`}
                      className="link-to-printview"
                    >
                      print
                    </NavLink>{" "}
                    <button
                      onClick={() => deleteCompass(compass._id)}
                      id="link-to-delete"
                    >
                      delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MyCompass;
