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
        <div className="datenewsDivJune2025">
          <section className="dateJune2025">1st - 30th June 2025</section>
          <section className="newsHeaderJune2025">
            Welcome to our June 2025 blog
          </section>
          <section className="newsJune2025">
            This month's header shows an animated cat (representing either our
            cat Lennie, or our next door's black cat, who we call 'Blackie '
            walking across our lawn, you can take your pick). Creating this
            header has been good fun as it has meant learning how to run a more
            complex animation moving through 'tiles' on a png file in steps.
            However, it has also meant rather more complexity in scripting the
            adjustments so it displays accurately on all devices.
            <br />
            <br />
            Speaking of which, it has been tested on all the usual developers
            test screens but your device may be different. Therefore, if it is
            not displaying sensibly (for example the cat may be walking in
            mid-air etc.), it does not mean the cat has developed super-human
            qualities (although our cat Lennie already thinks he has those!) but
            that I need to adjust the settings for your device!
            <br />
            <br />
            Therefore could you <em>please</em> left me know via the{" "}
            <Link to="/" className="linkJune2025">
              {" "}
              Problem Feedback Link{" "}
            </Link>{" "}
            at the bottom of the home page of the blog including your device
            type and dimensions if that is the case, in order that I can adjust
            it for your device then it displays accurately.
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
            Grasmere because it can be <em>so.......</em> busy.
          </section>
        </div> */}
      </div>
    </div>
  );
}
