import React from "react";
import { Link } from "react-router-dom";
import "./july2025.css";

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
          <div className="roseTiles"> </div>
        </div>{" "}
        {/*Closing div for July2025header */}
        <div className="datenewsDivJuly2025">
          <section className="dateJuly2025">1st - 31st July 2025</section>
          <section className="newsHeaderJuly2025">
            Welcome to our July 2025 blog
          </section>
          <section className="newsJuly2025">
            Welcome to our July blog. Thankfully so far this year, the weather
            has been good so let's hope that continues this month as there is
            lots going on. The pink shrub roses in the header photo this month
            are from our garden.
            <br />
            <br />
            It is a very exciting month this month as we will be travelling down
            to Cardiff for Harry's PhD graduation ceremony, then having friends
            to stay and finally, we are off to the South East of England for a
            few days including a visit to{" "}
            <Link
              to="https://www.glyndebourne.com/"
              target="_blank"
              className="linkJuly2025"
            >
              Glyndebourne
            </Link>{" "}
            in East Sussex to see Verdi's opera Falstaff, the last of his 26
            operas, which we have never seen before.
          </section>
        </div>
      </div>
      {/*Closing div for backgroundColorJuly2025 */}
    </div>
  );
}
