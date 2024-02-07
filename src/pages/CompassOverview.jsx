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
  return (
    <div>
      <h1>THIS IS THE COMPASS OVERVIEW COMPONENT</h1>
      <p>
        These are the parts of your YearCompass:
        <ul>
          <li></li>
          <li>The Year Ahead</li>
        </ul>
      </p>
    </div>
  );
}

export default CompassOverview;
