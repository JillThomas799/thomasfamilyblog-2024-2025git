import React from "react";
import { Link } from "react-router-dom";
import "./june2025.css";
import GardenCatAnimation10062025 from "./imagesresized/GardenCatAnimation10062025.jpg";
import DoveCottageGrasmere from "./imagesresized/DoveCottageGrasmere.jpg";
import RhodedendraInBloom from "./imagesresized/RhodedendraInBloom.JPG";
import PrettyViewsGrasmere from "./imagesresized/PrettyViewsGrasmere.jpg";
import LoughriggTerrace from "./imagesresized/LoughriggTerrace.JPG";
import FoxglovesGrasmere from "./imagesresized/FoxglovesGrasmere.JPG";
import GrasmereLake1 from "./imagesresized/GrasmereLake1.jpg";
import GrasmereLake2 from "./imagesresized/GrasmereLake2.JPG";
import BandJGrasmere from "./imagesresized/BandJGrasmere.JPG";
import HeidisCafeGrasmere from "./imagesresized/HeidisCafeGrasmere.jpg";
import Rain140622025V2 from "./imagesresized/Rain140622025V1.jpg";
import Rain140622025V1 from "./imagesresized/Rain140622025V2.jpg";
import PollokPark14062025 from "./imagesresized/PollokPark14062025.jpg";
import PollokHouse14062025 from "./imagesresized/PollokHouse14062025.jpg";
import BurrellCollection from "./imagesresized/BurrellCollection.jpg";
import StoneBridgeWilliamandJohnAdam from "./imagesresized/StoneBridgeWilliamandJohnAdam.jpg";
import RestaurantBurrellCollection from "./imagesresized/RestaurantBurrellCollection.jpg";
import GuidedTourSign from "./imagesresized/GuidedTourSign.jpg";
import strawberries062025titled from "./imagesresized/strawberries062025titled.jpg";

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
        <div className="datenewsDivJune2025">
          <section className="dateJune2025">12th June 2025, Saturday</section>
          <section className="newsHeaderJune2025">
            All about gardens both here and in the South East and it is the time
            again for lots of ducklings at the tarn.
          </section>
        </div>
        <div className="SlideshowHostPhotoJune2025">
          <div className="slideshowinstructionsJune2025">
            {" "}
            <strong>
              Click on the image below to open the album of some of our garden
              photos here in Cumbria this month. <br />
              Staying on the subject of gardens, Phil and Claire's landscaping
              project on their garden in the South East has finally reached its
              conclusion and its is lovely to see that all the months of work
              have been well worth it, so we have included a couple of photos of
              their completed garden. It is also that time of year again for all
              the ducklings at the tarn, so how could we resist including some
              photos of some of them.....? <br />
              <br /> It has been quite the job getting the strawberries to
              maturity successfully and has involved getting the straw-laid down
              at the correct time together with the netting, mouse-control (mice
              like strawberries and do not see the netting as a deterrent...)
              and blackbird-control as the blackbird managed to find a way under
              the netting. However, we made it in the end and they taste
              delicious so it has been worth all the hard work.{" "}
            </strong>
            <br />
            <Link
              to="https://photos.app.goo.gl/KYKPjs24bNXS8jLJ6"
              target="_blank"
              className="linkJune2025"
            >
              <img
                className="slideshowentryJune2025"
                src={strawberries062025titled}
                alt=""
              />
            </Link>
          </div>{" "}
          {/*Closing div slideshowinstructionsJune2025*/}
        </div>
        {/*Closing div slideshowHostJune2025*/}
        <div className="datenewsDivJune2025">
          <section className="dateJune2025">14th June 2025, Saturday</section>
          <section className="newsHeaderJune2025">
            Visit to Glasgow: The Burrell Collection, Pollok House, Park and
            Gardens.
          </section>
          <section className="newsJune2025">
            We had the opportunity today to finally get up to Glasgow to visit
            the city as Bernard's brother was there on retreat and we had agreed
            to meet him there. Our intention had originally been to travel up by
            train, but due to a number of adverse experiences with train travel
            of recent times, it was decided car would be the far better option
            and indeed, this proved to be the case as we were heading for the
            day towards the south of the city, which is easily accessible by the
            M74 and M8 motorways.
            <br />
            <br />
            There was only a limited amount of time available and heavy rain was
            forecast, so we decided to visit the exceptional{" "}
            <Link
              to="https://burrellcollection.com/"
              target="_blank"
              className="linkJune2025"
            >
              Burrell Collection
            </Link>{" "}
            , together with{" "}
            <Link
              to="https://burrellcollection.com/visit/pollok-country-park-glasgows-largest-green-space/"
              target="_blank"
              className="linkJune2025"
            >
              Pollok House, Gardens and Park.
            </Link>{" "}
            If you click on these prior links, they will take you to the
            respective sites for the Burrell Collection and Pollok House, Park
            and Gardens where there is a lot more information.
            <br />
            <br />
            The{" "}
            <Link
              to="https://burrellcollection.com/"
              target="_blank"
              className="linkJune2025"
            >
              Burrell Collection
            </Link>{" "}
            is located 3 miles out of the city centre, in Pollok Park and is one
            of Glasgow's top attractions. It opened in 1983 and is considered to
            be one of the most significant civic museum collections in the UK,
            comparable to the National Gallery and the V&A in London. Some of
            the highlights we saw there included one of the most important
            collections of Chinese art in the UK and one of the casts of Auguste
            Rodin's 'The Thinker' 1880-1881 which started out as the crowning
            element of{" "}
            <Link
              to="https://www.musee-rodin.fr/en/musee/collections/oeuvres/gates-hell"
              target="_blank"
              className="linkJune2025"
            >
              The Gates of Hell
            </Link>{" "}
            (when, instead of 'The Thinker' it was entitled 'The Poet'). He
            represented Dante, author of the Divine Comedy which had inspired
            The Gates, leaning forward to observe the circles of Hell, while
            meditating on his work.
            <br />
            <br />
            We also saw 'Self Portrait of Rembrandt van Rijn' 1632. Rembrandt
            van Rijn was 26 when he created this self portrait, one of the first
            paintings he made when he moved to Amsterdam in search of work. We
            also saw a painting of Saskia, Rembrandt's wife, which was
            originally thought to have been painted by Rembrandt himself but is
            now thought to be the work of one of his most talented pupils.
            <br />
            <br />
            Particularly impressive were six panels from the huge seven-window
            stained glass window, Life of Jesus Christ and the Virgin Mary from
            about 1444. Other sections of this stained glass survive in museums
            all over the world. Germany, Boppard on Rhine, Carmelite Church
            (place associated); Germany, Rhine Region (place of manufacture);
            Jesse Tree Window (place of use).
            <br />
            <br />
            Amidst the collection there are also 2 very important Tudor items
            from the time of Henry VIII. There is a rare valance (1532-1536)
            which was made for Henry VIII of England and his second wife, Anne
            Boleyn. The design includes their initials ‘HA’, acorns symbolizing
            Henry’s royalty and honeysuckles for Anne. This is a rare piece of
            surviving Tudor embroidery. There is also a headboard from bed of
            Henry VIII and Anne of Cleves. Although dating back to 2014, this
            <Link
              to="https://www.theguardian.com/uk-news/2014/dec/07/headboard-henry-viii-anne-cleves-london-glasgow-scottish-parliament"
              target="_blank"
              className="linkJune2025"
            >
              {" "}
              Guardian newspaper article about the headboard
            </Link>{" "}
            provides some very interesting background information.
            <br />
            <br />
            <Link
              to="https://burrellcollection.com/visit/pollok-country-park-glasgows-largest-green-space/"
              target="_blank"
              className="linkJune2025"
            >
              Pollok House, Gardens and Park
            </Link>{" "}
            : Pollok park is the largest park in Glasgow and the only one which
            lies within the city limits. It is part of the old Pollok estate,
            ancestral home of the Maxwell family for 7 centuries. It was
            eventually gifted to the city in 1966. Pollok House was built in
            1752 as a stately home for the Maxwells, who were patrons of art and
            learning. It is here the National Trust for Scotland was conceived
            in 1931 by a group led by Sr John Stirling-Maxwell. Unfortunately,
            Pollok House closed temporarily on 20 November 2023 for
            approximately two years for a major conservation project led by
            Glasgow City Council, so it is not possible to go in the house
            currently. However, it should be a great place to visit when it
            eventually reopen and Pollok Park is meanwhile open for everyone to
            enjoy....
          </section>
        </div>
        <div className="blogPhotoDivJune2025">
          <figure>
            <section className="blogPhotoJune2025">
              <img src={PollokPark14062025} alt="" />
              <div className="june2025FigCaption">
                <strong>
                  Pollok Park, Glasgow, a great <br /> place to visit for the 3{" "}
                  <br /> of us, but <em>very</em> rainy today....
                </strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune2025">
              <img src={Rain140622025V2} alt="" />
              <div className="june2025FigCaption">
                <strong>
                  Eventually, we reached the Burrell <br /> Collection and were
                  glad to be <br /> inside out of the rain....
                </strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune2025">
              <img src={Rain140622025V1} alt="" />
              <div className="june2025FigCaption">
                <strong>
                  It was time for some lunch, so <br /> we found a table in the
                  restaurant <br /> and watched the rain from inside ......
                </strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune2025">
              <img src={RestaurantBurrellCollection} alt="" />
              <div className="june2025FigCaption">
                <strong>
                  However, the restaurant was great, <br /> with a good menu and{" "}
                  <br /> plenty of tables...
                </strong>
              </div>
            </section>
          </figure>
        </div>
        <div className="blogPhotoDivJune2025">
          <figure>
            <section className="blogPhotoJune2025">
              <img src={GuidedTourSign} alt="" />
              <div className="june2025FigCaption">
                <strong>
                  After lunch we joined a guided tour <br /> of the Burrell
                  Collection which was
                  <br /> excellent and well-worth doing.{" "}
                </strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune2025">
              <img src={BurrellCollection} alt="" />
              <div className="june2025FigCaption">
                <strong>
                  By the time we had finished at the museum <br /> it had
                  stopped raining so we went outside <br /> for the mandatory
                  photo.....
                </strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune2025">
              <img src={PollokHouse14062025} alt="" />
              <div className="june2025FigCaption">
                <strong>
                  ...then we went for a walk <br /> down to Pollok house and
                  gardens....
                </strong>
              </div>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune2025">
              <img src={StoneBridgeWilliamandJohnAdam} alt="" />
              <div className="june2025FigCaption">
                <strong>
                  ...which include this stone bridge built in 1750 <br /> by
                  William and John Adam.
                </strong>
              </div>
            </section>
          </figure>
        </div>
      </div>
    </div>
  );
}
