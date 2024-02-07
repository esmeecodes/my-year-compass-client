import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_SERVER_URL;

function CompassOverview() {
  const storedToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const { compassId } = useParams();
  return (
    <div>
      <h1>THIS IS THE COMPASS OVERVIEW COMPONENT</h1>
    </div>
  );
}

export default CompassOverview;
