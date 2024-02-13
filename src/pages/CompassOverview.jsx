import React from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Questions from "../components/Questions";
import questions from "../assets/QuestionsData";

const API_URL = import.meta.env.VITE_SERVER_URL;

function CompassOverview() {
  const storedToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const { compassId } = useParams();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const initialState = questions.reduce((acc, curr) => {
    acc[curr.questionName] = "";
    return acc;
  }, {});

  const [compass, setCompass] = useState(initialState);

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

  const toFormerQuestion = (e) => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex].question;
  const currentName = questions[currentQuestionIndex].questionName;
  const value = compass[currentName] || "";
  const time = questions[currentQuestionIndex].time;
  const filledOutPercentage = Math.round(currentQuestionIndex * 0.42);

  const saveChanges = (e) => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    const requestBody = {};
    questions.forEach((question) => {
      requestBody[question.questionName] = compass[question.questionName];
    });
    console.log("Request Body", requestBody);

    axios
      .put(`${API_URL}/api/compass/edit/${compassId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(`saved changes to ${requestBody}`);
      });

    if (currentQuestionIndex >= questions.length - 1) {
      setCurrentQuestionIndex(0);
      navigate("/my-compass");
    }
  };

  return (
    <div>
      <Questions
        question={currentQuestion}
        currentName={currentName}
        value={value}
        handleInputChange={handleInputChange}
      />
      {currentQuestionIndex === 0 ? (
        ""
      ) : (
        <button className="save-button" onClick={toFormerQuestion}>
          back
        </button>
      )}

      <button onClick={saveChanges} className="save-button">
        save & to next question
      </button>
      <p>Progress: {filledOutPercentage}%</p>
    </div>
  );
}

export default CompassOverview;
