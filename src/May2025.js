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
import stBeesBeach25052025Titled from "./imagesresized/stBeesBeach25052025Titled.jpg";
import mirehouse31052025Titled from "./imagesresized/mirehouse31052025Titled.jpg";

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
              fontFamily="Serif"
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
              fontFamily="Serif"
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
              fontFamily="Serif"
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
              fontFamily="Serif"
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
              fontFamily="Serif"
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
              fontFamily="Serif"
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
              fontFamily="Serif"
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
              fontFamily="Serif"
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
              fontFamily="Serif"
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
              fontFamily="Serif"
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
        <div className="datenewsDivMay2025">
          <section className="dateMay2025">25th May 2025, Sunday</section>
          <section className="newsHeaderMay2025">
            Visit to West Cumbria to assess the feasibility <br /> of walking
            the Coast to Coast walk.
          </section>
          <div className="newsMay2025">
            There has been some debate as to whether, after the success of
            walking the Hadrian's Wall Path last year, we should undertake
            another UK-based long distance walk over a number of weekends.
            Today, we were looking at the feasibility of undertaking the Coast
            to Coast path in such a manner.
            <br />
            <br />
            <em>
              {" "}
              A bit of history about the Coast to Coast: <br />{" "}
            </em>
            The original idea was devised by the well-known walker{" "}
            <em>Alfred Wainwright</em> and stretches some 190 miles across
            England from the Cumbrian Coast to the North Sea. Unlike the
            Hadrian's Wall Path, it has not until now been an official National
            Trail. Whilst people tend to undertake the original walk chosen by
            Wainwright, there are actually any one of a number of routes
            following a series of footpaths which join the two coasts. It runs
            through 3 National Parks: the Lake District National Park, the
            Yorkshire Dales and the North York Moors. Traditionally, the route
            starts at the beach in St Bees on the west coast of Cumbria and runs
            across to Robin Hood's Bay on the East coast.
            <em>
              {" "}
              <br />
              <br />
              What did we discover on our reconnaissance mission?: <br />{" "}
            </em>
            In spite of the fact this was only a reconnaissance mission we had a
            great day. St Bees is always very atmospheric and whilst the weather
            forecast had not been great, when we got there it was lovely and
            sunny with some cloud albeit <em>very</em> windy. The waves crashing
            into the shore were very dramatic.
            <br />
            <br />
            We concluded that for the first day's walking, heading as far as
            Cleator would be the best option, which is a 9 mile walk via the
            cliff path, RSPB reserve and St Bees lighthouse before heading
            inland. There is parking either at Cleator village or at{" "}
            <Link
              to="https://www.westcumbriariverstrust.org/projects/longlands-lake"
              target="_blank"
              className="LinkMay2025"
            >
              Longlands Lake
            </Link>
            , which was an interesting discovery owned by West Cumbria Council
            and situated on the site of a previous iron ore mine which flooded.
            It is now a community space and wildlife haven. There is free
            parking on site. En route to Cleator we had passed a significant
            number of very tired-looking Coast to Coast walkers. It would have
            been tiring walking the initial stretch up on the cliffs though as
            it was so windy.
            <br />
            <br />
            Then it was on to the remote Ennerdale Water. It is many years since
            we have been here and the footpaths had been significantly improved.
            There was plenty of parking also which was helpful. Ennerdale Water
            is set deep in the heart fo the West Cumbrian fells and due to its
            relative inaccessibility, it tends to be quieter than for example
            Windermere, Derwentwater or Rydal Water.
            <br />
            <br />
            The other important thing we discovered today was that there is no
            prescribed route as such for the Coast to Coast. It is just a case
            of selecting a series of connecting footpaths across the country.
            This means that if any of the sections are too challenging or
            impracticable, or you just fancy taking a slightly different route
            to avoid the crowds, it is perfectly possible to do so and still to
            have undertaken the 'Coast to Coast'.
            <br />
            <br />
            Next time we will be exploring a different option which is the
            Cumbrian Way, which runs between Carlisle and Ulverston. This is a
            less challenging, more valley-based walk, although there are still
            some more difficult sections. It will all depend really on the
            feasibility and the transport logistics.
          </div>
          <div className="SlideshowHostPhotoMay2025">
            <div className="slideshowinstructionsMay2025">
              {" "}
              <strong>
                Click on the image below to open the album of our <br /> Coast
                to Coast reconnaissance exhibition to St Bees, <br /> Cleator
                and Ennerdale Water. <br />{" "}
              </strong>
              <br /> <br />
              <Link
                to="https://photos.app.goo.gl/NWo1SfZPsQcWFKQr6"
                target="_blank"
                className="LinkMay2025"
              >
                <img
                  className="slideshowentryMay2025"
                  src={stBeesBeach25052025Titled}
                  alt=""
                />
              </Link>
            </div>{" "}
            {/*Closing div slideshowinstructionsMay2025*/}
          </div>
          <div className="datenewsDivMay2025">
            <section className="dateMay2025">31st May 2025, Saturday</section>
            <section className="newsHeaderMay2025">
              Visit to Dodd's Wood and Mirehouse to check out the feasibility{" "}
              <br /> of the Cumbria Way.
            </section>
            <section className="newsMay2025">
              Today we decided to explore a different option for a long-distance
              walk which is the Cumbrian Way, which runs between Carlisle and
              Ulverston. This is a less challenging, more valley-based walk,
              although there are still some more difficult sections.
              <br />
              <br />
              So, we headed off down to Dodds Wood and Mirehouse Gardens on the
              Eastern shore of Lake Bassenthwaite. We were here last September
            </section>
          </div>
          <div className="SlideshowHostPhotoMay2025">
            <div className="slideshowinstructionsMay2025">
              {" "}
              <strong>
                Click on the image below to open the album of our <br /> Cumbria
                Way reconnaissance expedition to Mirehouse, <br /> Scarness and
                Dodd's Wood. <br />{" "}
              </strong>
              <br /> <br />
              <Link
                to="https://photos.app.goo.gl/8ghfPpkcKfhpet3Y9"
                target="_blank"
                className="LinkMay2025"
              >
                <img
                  className="slideshowentryMay2025"
                  src={mirehouse31052025Titled}
                  alt=""
                />
              </Link>
            </div>{" "}
            {/*Closing div slideshowinstructionsMay2025*/}
          </div>
        </div>
      </div>
    </div>
  );
}
