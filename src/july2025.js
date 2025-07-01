import React from "react";
import { Link } from "react-router-dom";
import "./july2025.css";
// import Sunflowers2V3 from "./imagesresized/Sunflowers2V3.JPG";
// import Sunflowers1 from "./imagesresized/Sunflowers1.jpg";

export default function July2025() {
  return (
    <div className="backgroundColorJuly2025">
      {/*General div for July 2025 function export*/}{" "}
      <div>
        <div className="july2025Header">
          {/*div for July2025header */}{" "}
          <button id="backbuttonJuly2025">
            <Link to="/" className="backbuttonLink">
              Back
            </Link>
          </button>
          <div id="july2025Title">July 2025</div>
          <div className="sunflowerTiles"> </div>
        </div>{" "}
        {/*Closing div for July2025header */}
        <div className="datenewsDivJuly2025">
          <section className="dateJuly2025">1st - 31st July 2025</section>
          <section className="newsHeaderJuly2025">
            Welcome to our July 2025 blog
          </section>
          <section className="newsJuly2025"></section>
        </div>
      </div>
      {/*Closing div for backgroundColorJuly2025 */}
    </div>
  );
}
