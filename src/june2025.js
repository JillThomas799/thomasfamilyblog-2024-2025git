import React from "react";
import { Link } from "react-router-dom";
import "./june2025.css";
import fulbeckGarden28052025 from "./imagesresized/fulbeckGarden28052025.jpg";

export default function June2025() {
  return (
    <div>
      <div className="june2025Header">
        {" "}
        <div className="monthHeaderJune2025">June 2025</div>
        <button id="backbuttonJune2025">
          <Link to="/" className="backbuttonLink" style={{ color: "black" }}>
            Back
          </Link>
        </button>
        <div id="bodyWalkingCatAnimation">
          <div id="rootWalkingCat">
            <img
              src={fulbeckGarden28052025}
              alt=""
              className="headerPhotoJune2025"
            />
            <div className="containerWalkingCat move ">
              <div className="catWalking walkThenSit"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
