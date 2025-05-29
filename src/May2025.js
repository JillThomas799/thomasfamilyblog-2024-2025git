import React from "react";
import { Link } from "react-router-dom";
import "./May2025.css";
import tullieEntrance1 from "./imagesresized/tullieEntrance1.jpg";
import tullieEntrance2 from "./imagesresized/tullieEntrance2.jpg";
import tullieReceptionArea from "./imagesresized/tullieReceptionArea.jpg";
import tullieCakeBreak from "./imagesresized/tullieCakeBreak.jpg";
import faunusNicoleBishop1 from "./imagesresized/faunusNicoleBishop1.jpg";
import faunusNicoleBishop2 from "./imagesresized/faunusNicoleBishop2.jpg";
import tullieCourtyardView from "./imagesresized/tullieCourtyardView.jpg";
import tullieLunch1 from "./imagesresized/tullieLunch1.jpg";
import tullieLunch2 from "./imagesresized/tullieLunch2.jpg";

export default function May2025() {
  return (
    <div>
      <div className="may2025Background">
        <div className="backgroundMay2025">
          {/*div for may2025Background */}
          <button id="backButtonMay2025">
            <Link
              to="/"
              className="backbuttonLink"
              style={{ color: "#FFD700" }}
            >
              Back
            </Link>
          </button>
        </div>
        <div className="May2025Header"> May 2025 </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="CdSLogo_1"
          x="0px"
          y="-100px"
          width="1541.89px"
          height="695.276px"
          xmlSpace="preserve"
        >
          <g id="outboundJourney">
            <g id="lineOutbound">
              <line
                x1="0"
                y1="400"
                x2="770"
                y2="-140"
                stroke="#FFD700"
                strokeWidth="55"
              />{" "}
            </g>
            <g id="londonOutbound">
              <circle
                cx="30"
                cy="380"
                r="30"
                stroke="black"
                fill="navy"
              ></circle>
            </g>
            <text
              fill="white"
              fontSize="15"
              fontWeight="bold"
              font-family="Serif"
              fontStyle="italic"
              x="6"
              y="383"
            >
              London
            </text>
            <g id="parisOutbound">
              <circle
                cx="150"
                cy="295"
                r="30"
                stroke="black"
                fill="navy"
              ></circle>
            </g>
            <text
              fill="white"
              fontSize="15"
              fontWeight="bold"
              font-family="Serif"
              fontStyle="italic"
              x="134"
              y="295"
            >
              Paris
            </text>
            <g id="barcelonaOutbound">
              <circle
                cx="270"
                cy="210"
                r="30"
                stroke="black"
                fill="navy"
              ></circle>
            </g>
            <text
              fill="white"
              fontSize="15"
              fontWeight="bold"
              font-family="Serif"
              fontStyle="italic"
              x="238"
              y="210"
            >
              Barcelona
            </text>
            <g id="madridOutbound">
              <circle
                cx="390"
                cy="125"
                r="30"
                stroke="black"
                fill="navy"
              ></circle>
            </g>
            <text
              fill="white"
              fontSize="15"
              fontWeight="bold"
              font-family="Serif"
              fontStyle="italic"
              x="365"
              y="125"
            >
              Madrid
            </text>
            <g id="léonOutbound">
              <circle
                cx="510"
                cy="40"
                r="30"
                stroke="black"
                fill="navy"
              ></circle>
            </g>
            <text
              fill="white"
              fontSize="15"
              fontWeight="bold"
              font-family="Serif"
              fontStyle="italic"
              x="495"
              y="40"
            >
              Léon
            </text>
            {/* <g id="outboundArrow"><path d="M 500 -100 L 650 -80 L 675 70 Z" fill="#FFD700" /></g> */}
          </g>

          <g id="returnJourney">
            <g id="lineOutbound">
              {" "}
              <line
                x1="600"
                y1="-120"
                x2="1400"
                y2="400"
                stroke="#FFD700"
                strokeWidth="55"
              />{" "}
            </g>
            <g id="madridReturn">
              <circle
                cx="890"
                cy="70"
                r="30"
                stroke="black"
                fill="navy"
              ></circle>
            </g>
            <text
              fill="white"
              fontSize="15"
              fontWeight="bold"
              font-family="Serif"
              fontStyle="italic"
              x="867"
              y="70"
            >
              Madrid
            </text>
            <g id="barcelonaReturn">
              <circle
                cx="1010"
                cy="148"
                r="30"
                stroke="black"
                fill="navy"
              ></circle>
            </g>
            <text
              fill="white"
              fontSize="15"
              fontWeight="bold"
              font-family="Serif"
              fontStyle="italic"
              x="978"
              y="148"
            >
              Barcelona
            </text>
            <g id="parisReturn">
              <circle
                cx="1127"
                cy="224"
                r="30"
                stroke="black"
                fill="navy"
              ></circle>
            </g>
            <text
              fill="white"
              fontSize="15"
              fontWeight="bold"
              font-family="Serif"
              fontStyle="italic"
              x="1110"
              y="224"
            >
              Paris
            </text>
            <g id="londonReturn">
              <circle
                cx="1247"
                cy="300"
                r="30"
                stroke="black"
                fill="navy"
              ></circle>
            </g>
            <text
              fill="white"
              fontSize="15"
              fontWeight="bold"
              font-family="Serif"
              fontStyle="italic"
              x="1225"
              y="300"
            >
              London
            </text>
            <g id="homeReturn">
              <circle
                cx="1370"
                cy="380"
                r="30"
                stroke="black"
                fill="navy"
              ></circle>
            </g>
            <text
              fill="white"
              fontSize="15"
              fontWeight="bold"
              font-family="Serif"
              fontStyle="italic"
              x="1350"
              y="380"
            >
              Home
            </text>
            <g id="returnArrow">
              <path d="M 1360 450 L 1440 430 L 1430 350 Z" fill="#FFD700" />
            </g>
          </g>
        </svg>
      </div>
      <div className="May2025Santiago">
        {" "}
        Santiago de <br /> Compostela{" "}
      </div>
      <div className="datenewsDivMay2025">
        <section className="dateMay2025">1st-31st May 2025</section>
        <br />
        <section className="newsMay2025">
          Welcome to our May 2025 blog. It has been a very busy and quite
          challenging month. We started off the month with our Camino de
          Santiago trip, which was quite demanding but we are glad that we
          decided to do it. Elena and Harry were back home 'holding the fort'
          and looking after Lennie, so thank you to them both.
          <br />
          <br />
          Since returning home we have had some fantastic news as Harry has been
          offered and accepted a job with the local council in digital and
          technology solutions, which is what he has been wanting to do, so we
          are delighted for him. This means that the whole family will be based
          in Cumbria for the forthcoming few years at least. So congratulations
          Harry and we wish him all the best with this new post.
          <br />
          <br />
          For anyone who may be interested, this link to our{" "}
          <Link to="/caminodesantiago" target="_blank" className="LinkMay2025">
            {" "}
            Camino de Santiago Information page{" "}
          </Link>
          takes you to a little background information and history on the Camino
          de Santiago.
          <br />
          <br />
        </section>
        <section className="dateMay2025">28th May 2025</section>
        <section className="newsHeaderMay2025">
          Visit to the new and improved Tullie Museum, Carlisle
        </section>
        <section className="newsMay2025">
          {" "}
          It was a day out today to see the much awaited, new and improved
          <Link
            to="https://tullie.org.uk/"
            target="_blank"
            className="LinkMay2025"
          >
            {" "}
            Tullie Museum
          </Link>{" "}
          in Carlisle. Tullie House is Cumbria's largest museum and it recently
          underwent a major upgrade which was the second phase of a 10-15 year
          upgrade being completed in phases. The completion of phase 2 of the
          project has improved the entrance and vastly improved the atrium
          space. There is a new shop and a ground floor gallery dedicated to
          Carlisle. The café has also had a major refurbish and upgrade. It is
          well worth a visit if you are ever in Carlisle.
          <br />
          <br />
          There is a lot to see at the museum so this time we concentrated on
          the Winifred Nicholson Cumbrian rag rugs exhibition, the ground floor
          Gallery and the Roman Frontier Gallery downstairs. However, for a
          single entry adult ticket it was £8.00 but if you buy an annual
          ticket, with which you gain entry to all exhibitions, it is only
          £15.00. So armed with annual tickets we will be returning in the
          forthcoming weeks to see the dinosaur exhibition, which starts on the
          28th June and runs until the 14th September 2025 and to visit the
          Costume Collection and Reiver and Viking sections. The British Museum
          touring exhibition{" "}
          <Link
            to="https://www.britishmuseum.org/our-work/national/uk-touring-exhibitions-and-loans/current-tours/gladiators-britain"
            target="_blank"
            className="LinkMay2025"
          >
            {" "}
            'Gladiators in Britain'{" "}
          </Link>{" "}
          will also be at the Tullie between 7th February and the 19th April
          2025.
        </section>
        <div className="blogPhotoDivMay2025">
          <figure>
            <section className="blogPhotoMay2025">
              <img src={tullieEntrance1} alt="" />
              <div className="may2025FigCaption">
                <strong>
                  The entrance to Tullie House <br />
                </strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoMay2025">
              <img src={tullieEntrance2} alt="" />
              <div className="may2025FigCaption">
                <strong>
                  Harry, Elena and Bernard by the new, <br /> improved Tullie
                  entrance.
                </strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoMay2025">
              <img src={tullieReceptionArea} alt="" />
              <div className="may2025FigCaption">
                <strong>
                  The open, airy new atrium/ reception area <br />
                </strong>
              </div>
            </section>
          </figure>
        </div>
        <div className="blogPhotoDivMay2025">
          <figure>
            <section className="blogPhotoMay2025">
              <img src={tullieCakeBreak} alt="" />
              <div className="may2025FigCaption">
                <strong>
                  Having obtained our tickets and prior to visiting <br /> the
                  exhibitions, we required some refreshments...
                </strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoMay2025">
              <img src={faunusNicoleBishop1} alt="" />
              <div className="may2025FigCaption">
                <strong>'faunus' by Nicole Bishop from Brampton</strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoMay2025">
              <img src={faunusNicoleBishop2} alt="" />
              <div className="may2025FigCaption">
                <strong>Information board about creator of 'faunus'</strong>
              </div>
            </section>
          </figure>
        </div>
        <div className="blogPhotoDivMay2025">
          <figure>
            <section className="blogPhotoMay2025">
              <img src={tullieCourtyardView} alt="" />
              <div className="may2025FigCaption">
                <strong>
                  Harry in the café. <br /> A doorway leads out to the garden,{" "}
                  <br />
                  where you can also dine on a nice day.
                </strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoMay2025">
              <img src={tullieLunch1} alt="" />
              <div className="may2025FigCaption">
                <strong>
                  ...Even better, they have loaded chips <br /> as a tapas, so
                  Bernard and Harry <br />
                  are happy....
                </strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoMay2025">
              <img src={tullieLunch2} alt="" />
              <div className="may2025FigCaption">
                <strong>
                  Meanwhile, Jill is on the Mediterranean diet. <br />
                  They are quite large portions!
                </strong>
              </div>
            </section>
          </figure>
        </div>{" "}
        {/* Closing div datenewsDivMay2025 */}
      </div>
    </div>
  );
}
