import React from "react";
import { Link } from "react-router-dom";
import "./june2025.css";
import CatWalkingAnimation from "components/catwalkinganimation";

export default function June2025() {
  return (
    <div className="backgroundJune2025">
      <div>
        {" "}
        June 2025
        <button id="backbuttonJune2025">
          <Link to="/" className="backbuttonLink" style={{ color: "black" }}>
            Back
          </Link>
        </button>
      </div>
      <div className="catWalkingDisplay">
        <CatWalkingAnimation />
      </div>
    </div>
  );
}
