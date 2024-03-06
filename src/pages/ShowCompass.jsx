import React from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_SERVER_URL;

const ShowCompass = () => {
  const { compassId } = useParams();

  const [compass, setCompass] = useState({
    compassTitle: "",
    lastYearInMonths: "",
    pastPersonal: "",
    pastCareer: "",
    pastFriends: "",
    pastHobby: "",
    pastHealth: "",
    pastMental: "",
    pastHabits: "",
    pastBetterTomorrow: "",
    sixSentPast_decision: "",
    sixSentPast_lesson: "",
    sixSentPast_risk: "",
    sixSentPast_surprise: "",
    sixSentPast_impThing: "",
    sixSentPast_completed: "",
    sixQuestPast_proud: "",
    sixQuestPast_influencedme: "",
    sixQuestPast_influencedbyme: "",
    sixQuestPast_notaccomplished: "",
    sixQuestPast_discovered: "",
    sixQuestPast_grateful: "",
    theBestMoments: "",
    threeBigAcc_list: "",
    threeBigAcc_achieved: "",
    threeBigChall_list: "",
    threeBigChall_overcome: "",
    threeBigChall_learn: "",
    forgiveness: "",
    lettingGo: "",
    wordsPast: "",
    bookPast: "",
    goodbyePast: "",
  });

  const showCompass = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/compass/show/${compassId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setCompass(response.data));
  };

  console.log(compass);

  useEffect(() => {
    showCompass();
  }, []);

  return (
    <div>
      <h1>Last year's compass</h1>

      <div className="print-page">
        <div className="show-question">
          <p>
            Last year's calendar week by week. What were important events &
            moments?
          </p>
        </div>
        <div className="show-answer">
          <p className="answer">{compass.lastYearInMonths}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCompass;
