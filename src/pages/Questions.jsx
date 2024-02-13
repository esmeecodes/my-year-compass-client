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
    // console.log(name, value);
    setCompass({
      ...compass,
      [name]: value,
    });
  };

  const saveChanges = (e) => {
    const requestBody = {
      lastYearInMonths: compass.lastYearInMonths,
    };

    console.log("Request Body", requestBody);

    axios
      .put(`${API_URL}/api/compass/edit/${compassId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(`saved changes to ${requestBody}`);
      });
  };

  return (
    <div>
      <h1>Start reviewing</h1>
      <form className="yearcompassquestions">
        <h3>Going through your calendar</h3>
        <p>
          Go through last year’s calendar week by week. If you see an important
          event, family gathering, friendly get-together or a significant
          project, write it down here.
        </p>
        <textarea
          type="text"
          name="lastYearInMonths"
          value={compass.lastYearInMonths}
          onChange={handleInputChange}
          className="form-question-xxl-answer"
        ></textarea>
      </form>
      <button onClick={saveChanges} className="save-button">
        save changes
      </button>
    </div>
  );
}

export default CompassOverview;
