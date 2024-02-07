import React from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useEffect, useState, useContext } from "react";
import MyCompass from "./MyCompass";

const API_URL = import.meta.env.VITE_SERVER_URL;

function CompassOverview() {
  const storedToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const { compassId } = useParams();

  const [compass, setCompass] = useState({
    lastYearInMonths: "",
    lastYearPersonal: "",
    lastYearCareer: "",
    lastYearFriends: "",
    lastYearHobbies: "",
    lastYearPhysical: "",
    lastYearMental: "",
    lastYearHabits: "",
    lastYearsBetterTomorrow: "",
  });

  const getOneCompass = () => {
    axios
      .get(`${API_URL}/api/compass/overview/${compassId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((resp) => {
        console.log("the compass is retrieved", resp);
        setCompass(resp.data);
      });
  };

  useEffect(() => {
    getOneCompass();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setCompass({
      ...compass,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Compass Overview</h1>
      <p>
        These are the parts of your YearCompass:
        <form className="yearcompassquestions">
          <label>Going through your Calendar</label>
          <p>
            Go through last year’s calendar week by week. If you see an
            important event, family gathering, friendly get-together or a
            significant project, write it down here.
          </p>
          <input
            type="text"
            name="lastYearInMonths"
            value={compass.lastYearInMonths}
            onChange={handleInputChange}
          ></input>
        </form>
        <button onClick={saveChanges}></button>
      </p>
    </div>
  );
}

export default CompassOverview;
