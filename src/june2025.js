import React from "react";
import { Link } from "react-router-dom";
import "./june2025.css";
import GardenCatAnimation10062025 from "./imagesresized/GardenCatAnimation10062025.jpg";

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
              src={GardenCatAnimation10062025}
              alt=""
              className="headerPhotoJune2025"
            />
            <div className="containerWalkingCat move ">
              <div className="catWalking walkThenSit"></div>
            </div>
          </div>
        </div>
        <div className="datenewsDivJune2025">
          <section className="dateJune2025">1st - 30th June 2025</section>
          <section className="newsHeaderJune2025">
            Welcome to our June 2025 blog
          </section>
          <section className="newsJune2025">
            This month's header shows an animated cat (representing either our
            cat Lennie, or our next door's black cat, who we call 'Blackie '
            walking across our lawn, you can take your pick). Creating this
            header has been good fun but challenging as it has meant learning
            how to run a more complex animation moving through 'tiles' on a png
            file in steps. However, it has also meant rather more complexity in
            scripting the adjustments so it displays as accurately as possible
            on all devices.
            <br />
            <br />
            Other than that, it should be a good month because summer is here{" "}
            <em>(Yeah!).....</em>.
          </section>
        </div>
        {/* <div className="datenewsDivJune2025">
          <section className="dateJune2025">7th June 2025</section>
          <section className="newsHeaderJune2025">
            Day in Grasmere (long time no see...)
          </section>
          <section className="newsJune2025">
            Today we decided, despite the very poor weather forecast, to head
            over to Grasmere.
            <br />
            <br />
            Despite living so close to the National Park, we tend not to stop in
            Grasmere because it can be <em>so.......</em> busy. So, it was fortunate today because, due to the poor weather forecast, 
            there were plenty people but not so many that it was not enjoyable.
          </section>
        </div> */}
      </div>
    </div>
  );
}
