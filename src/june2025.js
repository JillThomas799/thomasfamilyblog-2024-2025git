import React from "react";
import { Link } from "react-router-dom";
import "./june2025.css";
import GardenCatAnimation10062025V4 from "./imagesresized/GardenCatAnimation10062025V4.jpg";
import DoveCottageGrasmere from "./imagesresized/DoveCottageGrasmere.jpg";
import RhodedendraInBloom from "./imagesresized/RhodedendraInBloom.JPG";
import PrettyViewsGrasmere from "./imagesresized/PrettyViewsGrasmere.jpg";
import LoughriggTerrace from "./imagesresized/LoughriggTerrace.JPG";
import FoxglovesGrasmere from "./imagesresized/FoxglovesGrasmere.JPG";
import GrasmereLake1 from "./imagesresized/GrasmereLake1.jpg";
import GrasmereLake2 from "./imagesresized/GrasmereLake2.JPG";
import BandJGrasmere from "./imagesresized/BandJGrasmere.JPG";
import HeidisCafeGrasmere from "./imagesresized/HeidisCafeGrasmere.jpg";

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
              src={GardenCatAnimation10062025V4}
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
        <div className="datenewsDivJune2025">
          <section className="dateJune2025">7th June 2025, Saturday</section>
          <section className="newsHeaderJune2025">
            Day in Grasmere (long time no see...)
          </section>
          <section className="newsJune2025">
            Today we decided, despite the very poor weather forecast, to head
            over to Grasmere. Despite living so close to the National Park, we
            tend not to stop in Grasmere very often because it can be{" "}
            <em>soooo.......</em> busy. So, it was fortunate today because, due
            to the poor weather forecast (absolutely pouring with rain until
            just after lunch), there were plenty people but not so many that it
            was not enjoyable. Grasmere is one of the smaller lakes of the Lake
            District National Park and it is after this lake that the village of
            Grasmere is named. It lies next to Rydal Water. It is also on the
            section of Wainwright's Coast to Coast (C2C) path lying between
            Rosthwaite and Patterdale.
            <br />
            <br />
            There was another driving force behind this trip in that Elena
            wanted to obtain some gingerbread from the well-known{" "}
            <Link
              to="https://www.grasmeregingerbread.co.uk/"
              target="_blank"
              className="linkJune2025"
            >
              {" "}
              Sarah Nelson's Grasmere Gingerbread shop{" "}
            </Link>{" "}
            so we called there first, upon our arrival, before the queues built
            up for the day! .
            <br />
            <br />
            Grasmere is famously associated with the poet William Wordsworth and
            his sister Dorothy Wordsworth. For any Wordsworth fans, William and
            Dorothy's erstwhile home{" "}
            <Link
              to="https://wordsworth.org.uk/"
              target="_blank"
              className="linkJune2025"
            >
              {" "}
              Dove Cottage{" "}
            </Link>{" "}
            is situated just to the North of the village and is a very popular
            visitor's attraction. William Wordsworth arrived in Grasmere in 1799
            when he was 29 years old. He was largely unknown and writing poetry
            in a new style. He wrote many of his greatest poems whilst living at
            Dove Cottage with his family and his sister Dorothy kept her
            Grasmere journal.
            <br />
            <br />
            As the weather was unpredictable and the mist low over the hills, we
            decided to undertake the lovely
            <Link
              to="https://www.walklakes.co.uk/walk_75.html"
              target="_blank"
              className="linkJune2025"
            >
              {" "}
              Circuit of Grasmere{" "}
            </Link>
            walk which is just under 5 miles in length if you do as we did and
            climb up and walk along Loughrigg Terrace rather than dropping down
            to the lake but you can do either depending on your preference.
          </section>
        </div>
        <div className="blogPhotoDivJune2025">
          <figure>
            <section className="blogPhotoJune2025">
              <img src={BandJGrasmere} alt="" />
              <div className="june2025FigCaption">
                <strong>
                  Jill and Bernard leaving Grasmere <br /> at the start of the
                  walk...
                </strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune2025">
              <img src={PrettyViewsGrasmere} alt="" />
              <div className="june2025FigCaption">
                <strong>
                  Grasmere is considered to be <br /> one of the prettiest{" "}
                  <br /> villages in England.
                </strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune2025">
              <img src={RhodedendraInBloom} alt="" />
              <div className="june2025FigCaption">
                <strong>
                  The rhodedendra were in bloom... <br />
                </strong>
              </div>
            </section>
          </figure>
        </div>
        <div className="blogPhotoDivJune2025">
          <figure>
            <section className="blogPhotoJune2025">
              <img src={FoxglovesGrasmere} alt="" />
              <div className="june2025FigCaption">
                <strong>There were lots of foxgloves...</strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune2025">
              <img src={GrasmereLake1} alt="" />
              <div className="june2025FigCaption">
                <strong>and excellent views down to Grasmere village...</strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune2025">
              <img src={GrasmereLake2} alt="" />
              <div className="june2025FigCaption">
                <strong>... and Grasmere Lake</strong>
              </div>
            </section>
          </figure>
        </div>
        <div className="blogPhotoDivJune2025">
          <figure>
            <section className="blogPhotoJune2025">
              <img src={LoughriggTerrace} alt="" />
              <div className="june2025FigCaption">
                <strong>
                  We climbed up to walk <br /> along Loughrigg Terrace ...
                </strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune2025">
              <img src={DoveCottageGrasmere} alt="" />
              <div className="june2025FigCaption">
                <strong>
                  Dove Cottage Grasmere, <br /> the home of William Wordsworth{" "}
                  <br /> and his sister Dorothy.
                </strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune2025">
              <img src={HeidisCafeGrasmere} alt="" />
              <div className="june2025FigCaption">
                <strong>
                  Finally of course, we <br /> had to take advantage of <br />{" "}
                  the many cafés in Grasmere....
                </strong>
              </div>
            </section>
          </figure>
        </div>
      </div>
    </div>
  );
}
