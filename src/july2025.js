import React from "react";
import { Link } from "react-router-dom";
import "./july2025.css";
import waitingPatientlyFlightExperience from "./imagesresized/waitingPatientlyFlightExperience.jpg";
import ehbflightExperienceExterior from "./imagesresized/ehbflightExperienceExterior.jpg";
import b04072025flightExperience from "./imagesresized/b04072025flightExperience.jpg";
import eh04072025flightExperience from "./imagesresized/eh04072025flightExperience.jpg";
import pilotbAnxious from "imagesresized/pilotbAnxious.jpg";
import pilotbPassed from "imagesresized/pilotbPassed.jpg";
import departuresBoard from "imagesresized/departuresBoard.jpg";
import preflightEntertainment from "imagesresized/preflightEntertainment.jpg";
import flightTicket from "./imagesresized/flightTicket.jpg";

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
          <section className="newsHeaderJuly2025V1">
            Welcome to our July 2025 blog
          </section>
          <section className="newsJuly2025">
            Welcome to our July blog. Thankfully so far this year, the weather
            has been good so let's hope that continues this month as there is
            lots going on.
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

          <section className="dateJuly2025">4th July 2025, Friday</section>
          <section className="newsHeaderJuly2025">
            Magical Mystery Tour 2025 :
            <br />
            Bernard's <em>(slightly belated)</em> father's day present
            undertaking his first training session for his dreamt-of job as a
            commercial airline pilot......
            <br />
            or rather, coming back to reality, a visit to{" "}
            <Link
              to="https://theflightexperience.co.uk/"
              target="_blank"
              className="linkJuly2025"
            >
              Flight Experience
            </Link>{" "}
            Newcastle for a lesson on the flight-simulator of an Airbus 320...
          </section>
          <section className="newsJuly2025">
            It is that time of year again (or was on the 15th June anyway)
            .....the time for Father's day and the annual magical mystery tour
            outing arranged by Elena and Harry for Bernard. Last year, everyone
            had a surprise but very enjoyable and interesting fun day out at the
            Solway Aviation Museum including a visit inside a Vulcan bomber.
            <br />
            So this year, Elena and Harry decided to stay with the flying theme
            and arrange a surprise trip out for Bernard for a lesson at the{" "}
            <Link
              to="https://theflightexperience.co.uk/"
              target="_blank"
              className="linkJuly2025"
            >
              Flight Experience
            </Link>{" "}
            simulator in Newcastle.
            <br />
            <br />
            Bernard always wanted to be a commercial airline pilot when he was
            younger, however that route was not open to him at that time as he
            was colour blind. With advancements in color vision testing it is
            now possible to obtain a pilot license while color-blind and even
            become an airline pilot, depending on the degree of color vision
            impairment. So this was his chance to fulfill <em>(of a fashion</em>
            ) his lifelong ambition....
          </section>

          <div className="blogPhotoDivJuly2025">
            <figure>
              <section className="blogPhotoJuly2025">
                <img src={eh04072025flightExperience} alt="" />
                <div className="july2025FigCaption">
                  <strong>
                    Elena and Harry, the guardians of <br /> the magical mystery
                    tour <br /> secret destination ....
                  </strong>
                </div>
              </section>
            </figure>
            <figure>
              <section className="blogPhotoJuly2025">
                <img src={b04072025flightExperience} alt="" />
                <div className="july2025FigCaption">
                  <strong>Bernard .... all prepared for the day ahead.</strong>
                </div>
              </section>
            </figure>
            <figure>
              <section className="blogPhotoJuly2025">
                <img src={ehbflightExperienceExterior} alt="" />
                <div className="july2025FigCaption">
                  <strong>
                    A little while later, we have <br />
                    safely arrived at our destination: <br />{" "}
                    <Link
                      to="https://theflightexperience.co.uk/"
                      target="_blank"
                      className="linkJuly2025"
                    >
                      Flight Experience
                    </Link>{" "}
                    on
                    <br /> Invincible Drive, Newcastle.
                  </strong>
                </div>
              </section>
            </figure>
          </div>
          <div className="blogPhotoDivJuly2025">
            <figure>
              <section className="blogPhotoJuly2025">
                <img src={flightTicket} alt="" />
                <div className="july2025FigCaption">
                  <strong>Here is the flight ticket for the journey...</strong>
                </div>
              </section>
            </figure>
            <figure>
              <section className="blogPhotoJuly2025">
                <img src={waitingPatientlyFlightExperience} alt="" />
                <div className="july2025FigCaption">
                  <strong>
                    Bernard is getting into the zone ready for <br /> taking the
                    helm as captain <br />
                    for the first time. <br /> His trainer is going to be
                    Jarvis.
                  </strong>
                </div>
              </section>
            </figure>
            <figure>
              <section className="blogPhotoJuly2025">
                <img src={preflightEntertainment} alt="" />
                <div className="july2025FigCaption">
                  <strong>
                    Some pre-flight entertainment on live-feed .....
                    <br /> just to get everyone in the mood.
                  </strong>
                </div>
              </section>
            </figure>
          </div>
          <div className="blogPhotoDivJuly2025">
            <figure>
              <section className="blogPhotoJuly2025">
                <img src={departuresBoard} alt="" />
                <div className="july2025FigCaption">
                  <strong>
                    ... Bernard is taking the first departure slot....
                  </strong>
                </div>
              </section>
            </figure>
            <figure>
              <section className="blogPhotoJuly2025">
                <img src={pilotbAnxious} alt="" />
                <div className="july2025FigCaption">
                  <strong>
                    Bernard is not entirely sure about this .....
                    <br />
                    he is looking slightly anxious....
                  </strong>
                </div>
              </section>
            </figure>
            <figure>
              <section className="blogPhotoJuly2025">
                <img src={pilotbPassed} alt="" />
                <div className="july2025FigCaption">
                  <strong>
                    ...but after commandeering his first successful <br />{" "}
                    flight from Liverpool airport to Ronaldsway <br /> in the
                    Isle of Man <em>(route chosen for old times sake)</em>,{" "}
                    <br /> he is all smiles.
                  </strong>
                </div>
              </section>
            </figure>
          </div>
        </div>
      </div>
      {/*Closing div for backgroundColorJuly2025 */}
    </div>
  );
}
