import React from "react";
import { AuthContext } from "../context/auth.context";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import axios, { all } from "axios";
import { useEffect, useState, useContext } from "react";
import Questions from "../components/Questions";
import questions from "../assets/QuestionsData";

const API_URL = import.meta.env.VITE_SERVER_URL;

function CompassOverview() {
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const { compassId } = useParams();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [currentCompass, setCurrentCompass] = useState({});
  const [lastYearCompass, setLastYearCompass] = useState(null);

  const initialState = questions.reduce((acc, curr) => {
    acc[curr.questionName] = "";
    return acc;
  }, {});

  const [compass, setCompass] = useState(initialState);

  // useEffect to log when component re-renders
  useEffect(() => {
    console.log("Component re-rendered");
  });

  const getCurrentCompass = (compassId) => {
    axios
      .get(`${API_URL}/api/compass/overview/${compassId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((resp) => {
        console.log("the compass is retrieved", resp);
        setCompass(resp.data);
      });
  };

  // const getOldCompasses = async (e) => {
  //   try {
  //     const response = await axios.get(
  //       `${API_URL}/api/mycompasses/${user._id}`,
  //       {
  //         headers: { Authorization: `Bearer ${storedToken}` },
  //       }
  //     );

  //     const allOldCompasses = response.data.compasses;
  //     console.log(`old compasses ${allOldCompasses}`);

  //     const lastYearCompass = allOldCompasses.reduce((acc, compass) => {
  //       const currentYear = new Date().getFullYear();
  //       const compassYear = new Date(compass.year).getFullYear();
  //       return compassYear === currentYear - 1 &&
  //         compassYear > (acc ? new Date(acc.year).getFullYear() : 0)
  //         ? compass
  //         : acc;
  //     }, null);

  //     console.log(`last year compass ${lastYearCompass}`);

  //     if (lastYearCompass) {
  //       getLastYearCompass(lastYearCompass);
  //     } else {
  //       console.log("no compass found for the last year");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const getLastYearCompass = (lastYearCompassId) => {
  //   axios
  //     .get(`${API_URL}/api/compass/overview/${lastYearCompassId}`, {
  //       headers: { Authorization: `Bearer ${storedToken}` },
  //     })
  //     .then((resp) => {
  //       setLastYearCompass(resp.data._id);
  //     });
  // };

  useEffect(() => {
    getCurrentCompass(compassId);
    // if (lastYearCompass) {
    //   getLastYearCompass(lastYearCompass);
    // }
  }, [compassId]);

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

  const saveChanges = (navigateToMyCompass = false) => {
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
    } else {
      if (navigateToMyCompass) {
        navigate("/my-compass");
      }
    }
  };

  return (
    <div>
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
        <button className="save-button" onClick={() => saveChanges(true)}>
          save & close
        </button>
        <button className="save-button" onClick={() => saveChanges()}>
          save & next
        </button>

        <p>Progress: {filledOutPercentage}%</p>
      </div>
    </div>
  );
}

export default CompassOverview;
