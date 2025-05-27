import React from "react";
import { Link } from "react-router-dom";
import "./November2024.css";
import BonfireAnimation from "components/BonfireAnimation";
import SycamoreExhibition1 from "./imagesresized/SycamoreExhibition1.jpg";
import SycamoreExhibition2 from "./imagesresized/SycamoreExhibition2.jpg";
import SycamoreExhibition3 from "./imagesresized/SycamoreExhibition3.jpg";
import SycamoreExhibition4 from "./imagesresized/SycamoreExhibition4.jpg";
import Birdoswald1Nov2nd2024 from "./imagesresized/Birdoswald1Nov2nd2024.jpg";
import Birdoswald2Nov2nd2024 from "./imagesresized/Birdoswald2Nov2nd2024.jpg";
import Birdoswald3Nov2nd2024 from "./imagesresized/Birdoswald3Nov2nd2024.jpg";
import Birdoswald4Nov2nd2024 from "./imagesresized/Birdoswald4Nov2nd2024.jpg";
import BlacksmithsMeal1Nov4th2024 from "./imagesresized/BlacksmithsMeal1Nov4th2024.jpg";
import BlacksmithsMeal2Nov4th2024 from "./imagesresized/BlacksmithsMeal2Nov4th2024.jpg";
import BlacksmithsEandH4112024 from "./imagesresized/BlacksmithsEandH4112024.jpg";
import BlacksmithsBernard4112024 from "./imagesresized/BlacksmithsBernard4112024.jpg";
import Bonniesmenu from "./imagesresized/Bonniesmenu.jpg";
import Bonniescafé from "./imagesresized/Bonniescafé.jpg";
import BonniesAbout from "./imagesresized/BonniesAbout.jpg";
import ParkingHaltwhistle from "./imagesresized/ParkingHaltwhistle.jpg";
import AccommodationHaltwhistle from "./imagesresized/AccommodationHaltwhistle.jpg";
import HaltwhistleBurn1 from "./imagesresized/HaltwhistleBurn1.jpg";
import HaltwhistleBurn2 from "./imagesresized/HaltwhistleBurn2.jpg";
import HaltwhistleBurn3 from "./imagesresized/HaltwhistleBurn3.jpg";
import HaltwhistleBurn4 from "./imagesresized/HaltwhistleBurn4.jpg";
import HaltwhistleBurn5 from "./imagesresized/HaltwhistleBurn5.jpg";
import CawfieldNov2024 from "./imagesresized/CawfieldNov2024.jpg";
import CawfieldVallum from "./imagesresized/CawfieldVallum.jpg";
import CliffsHaltwhistleGorge from "./imagesresized/CliffsHaltwhistleGorge.jpg";
import CawfieldsMilecastle42Mist from "./imagesresized/CawfieldsMilecastle42Mist.jpg";
import impassablepathCawfields from "./imagesresized/impassablepathCawfields.jpg";
import BernardUnimpressedCawfields from "./imagesresized/BernardUnimpressedCawfields.jpg";
import WeatherGood16112024 from "./imagesresized/WeatherGood16112024.jpg";
import BernardHarryMiltonRigg16112024 from "./imagesresized/BernardHarryMiltonRigg16112024.jpg";
import JillBernardMiltonRigg16112024 from "./imagesresized/JillBernardMiltonRigg16112024.jpg";
import Naworth16112024 from "./imagesresized/Naworth16112024.jpg";
import LanercostMenu16112024 from "./imagesresized/LanercostMenu16112024.jpg";
import LanercostFoodJill16112024 from "./imagesresized/LanercostFoodJill16112024.jpg";
import LanercostFoodHarry16112024 from "./imagesresized/LanercostFoodHarry16112024.jpg";
import NaworthBernard16112024 from "./imagesresized/NaworthBernard16112024.jpg";
import QuarryBeck1_16112024 from "./imagesresized/QuarryBeck1_16112024.jpg";
import QuarryBeck2_16112024 from "./imagesresized/QuarryBeck2_16112024.jpg";
import RidgewoodHarry16112024 from "./imagesresized/RidgewoodHarry16112024.jpg";
import RidgewoodBernard16112024 from "./imagesresized/RidgewoodBernard16112024.jpg";
import EamontWay22112024Title from "./imagesresized/EamontWay22112024Title.jpg";
import NaworthRear29112024Titled from "./imagesresized/NaworthRear29112024Titled.jpg";

export default function November2024() {
  return (
    <div>
      <div className="November2024header">
        <div className="FireworkContainer">
          <div className="pyro">
            {" "}
            <div className="titleNovember">November 2024</div>
            <div className="before"></div>
            <div className="after"></div>
          </div>{" "}
          {/*Closing div pyro*/}
          <button id="backbuttonNovember">
            <Link to="/" className="backbuttonLink" style={{ color: "black" }}>
              Back
            </Link>
          </button>
          <BonfireAnimation title="November 2024" />
        </div>{" "}
        {/*Closing div FireworkContainer*/}
        <div className="earth"></div>
        <section className="dateNovember" style={{ marginTop: "0%" }}>
          November 1st - 30th 2024
        </section>
        <section className="newsheaderNovember">
          {" "}
          WELCOME TO OUR GUY FAWKE'S BONFIRE AND FIREWORKS PARTY!
        </section>
        <section className="newsNovember" style={{ textAlign: "center" }}>
          Welcome to our November blog. This month we have created a virtual,
          animated bonfire and firework display for our Guy Fawke's party. This
          way, Lennie can be included too as he hates the noise of real
          fireworks. He has already organised for us to put on{" "}
          <Link
            to="https://www.classicfm.com/radio/shows-presenters/pet-classics/"
            target="_blank"
            title="Click here to discover more about the annual Pet's Classics programme on Classic FM"
            className="LinkNovember"
          >
            Pet's Classics on Classic FM{" "}
          </Link>
          at 17.00 on the 2nd and 5th of November 2024, to help keep him
          relaxed. He loves this programme.
          <br />
          <br />
          For the winter months we have also included a colour scheme taken once
          again from an autumnal russet pallet in hex color coding. The display
          is created by amalgamating 3 separate container elements: the burning
          bonfire animation, the animated firework display, and the earth which
          forms the ground. We hope you enjoy it...
          <br />
          <br />
        </section>
        <section className="dateNovember">November 1st, 2024</section>
        <section className="newsheaderNovember">
          {" "}
          VISIT TO THE SYCAMORE GAP EXHIBITION AT THE SILL
        </section>
        <section className="newsNovember" style={{ textAlign: "center" }}>
          {" "}
          We took the time today to go to see the temporary exhibition entitled
          'Sycamore Gap: One Year On' by the artist Charlie Whinney which is
          being hosted at 'The Sill' between the 28th September and the 3rd
          November 2024. The Guardian newspaper recently published an article
          regarding this exhibition which can be read here:{" "}
          <Link
            to="https://www.theguardian.com/uk-news/2024/sep/27/sycamore-gap-tree-exhibition-opens-to-mark-a-year-since-its-felling"
            target="_black"
            title="Click here ot open Guardian article re the Sycamore Gap tree exhibition 27th September 2027"
            className="LinkNovember"
          >
            Sycamore Gap Tree Exhibition opens to mark a year since its felling
          </Link>
          .
          <br />
          <br />
          The felling of the Sycamore Gap Tree in the early hours of the morning
          on the 28th September 2023 gained widespread media coverage with
          people from all over the world adding their contributions as to the
          significance of this particular tree to their lives and experiences.
          As a result of this and in order to try and gain something hopeful and
          positive out of such a destructive event, the artist Charlie Whinney
          and Creative Communities CIC, have created the Sycamore Gap: One Year
          On exhibition.
          <br />
          <br />
          This exhibition encourages contemplation of events and features the
          largest remaining section of the original tree. As part of the
          exhibition, it seeks the participation of the public with visitors
          being invited to make promises to nature, which will be incorporated
          into the second and final phase of the commission, set to open by
          Easter 2025. It is the first part of a 2 part exhibition in which the
          second and final part will see the wood installed permanently into The
          Sill and this will open by Easter 2025.
          <br />
          <br />
          As part of the Trees of Hope initiative, all 15 UK National Parks will
          also receive a sapling that will find new homes in some of the most
          beautiful landscapes in the UK.
          <br />
          <br />
          For all the information about our Hadrian's Wall Path trek this
          Summer, please come and join us at our
          <Link to="/hwp2024" className="LinkNovember">
            {" "}
            Hadrian's Wall Path Expedition page.{" "}
          </Link>
        </section>
        <div className="blogPhotoDivNovember">
          <fig>
            <section className="blogPhotoNovember">
              <img src={SycamoreExhibition1} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  The largest section of the original <br /> tree’s wood forms
                  the centre piece <br /> of the exhibition display, as can{" "}
                  <br /> be seen here.
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={SycamoreExhibition2} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  It is framed by the artwork <br /> of the wood behind....
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={SycamoreExhibition3} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  There are additional alcoves to the exhibition <br />{" "}
                  containing galleries where people have sent in <br /> their
                  own pictures of the Sycamore Gap tree
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={SycamoreExhibition4} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  As well as the pictures shown here, <br /> there are also
                  books of people's <br /> descriptions of what they were doing{" "}
                  <br /> when they heard about the tree's <br /> abrupt and
                  unexpected demise.
                </strong>
              </figcaption>
            </section>
          </fig>
        </div>
        <section className="dateNovember">2nd November 2024, Saturday</section>
        <section className="newsheaderNovember">
          <strong>ADDITIONAL DAY - CATCH-UP VISIT TO BIRDOSWALD FORT</strong>
        </section>
        <section className="newsNovember" style={{ textAlign: "center" }}>
          When we walked the Birdowswald Fort section of Hadrian's Wall on the
          28th July 2024, there was not time to call in and explore the fort
          more fully, so we promised that sometime over the quieter Winter
          months we would pay Birdoswald Fort a visit, especially as Harry had
          never had the opportunity to visit.
          <br />
          <br />
          It was lovely and quiet at the fort, so there was plenty of
          opportunity and time to study the information boards and findings
          carefully. It is an interesting fort and well worth a visit if you are
          in the area! It is probably worthwhile obtaining a copy of the English
          Heritage guidebook though as it contains some additional helpful
          information to provide further clarification.
          <br />
          <br />
          For all the information about our Hadrian's Wall Path trek this
          Summer, please come and join us at our
          <Link to="/hwp2024" className="LinkNovember">
            {" "}
            Hadrian's Wall Path Expedition page.{" "}
          </Link>
        </section>
        <div className="blogPhotoDivNovember">
          <fig>
            <section className="blogPhotoNovember">
              <img src={Birdoswald1Nov2nd2024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  Birdoswald Farmhouse, which <br /> stands on the site of the
                  old Roman Fort Banna.
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={Birdoswald2Nov2nd2024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  We are standing here on the Via Principalis, <br /> about to
                  enter what was the West Gate.
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={Birdoswald3Nov2nd2024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  There are helpful information boards, <br /> this one
                  concerning the West Gate.
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={Birdoswald4Nov2nd2024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  It is well worth purchasing this <br /> English Heritage
                  guidebook <br /> about the fort as it provides <br /> more
                  detailed information.
                </strong>
              </figcaption>
            </section>
          </fig>
        </div>
        <section className="dateNovember">November 4th 2024, Monday</section>
        <section className="newsheaderNovember">
          {" "}
          BLACKSMITH'S ARMS FOR DINNER
        </section>
        <section className="newsNovember" style={{ textAlign: "center" }}>
          {" "}
          The whole family met up today to go out for dinner at the Blacksmith's
          Arms. It was lovely, being relatively quiet and there was an open
          fire. The food was great also and reasonably priced. <br /> A great
          time was had by all.
        </section>
        <div className="blogPhotoDivNovember">
          <fig>
            <section className="blogPhotoNovember">
              <img src={BlacksmithsMeal1Nov4th2024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>Cumberland Sausage and mash</strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={BlacksmithsMeal2Nov4th2024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>Trout, new potatoes and vegetables</strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={BlacksmithsEandH4112024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>The 'A' team - Elena and Harry</strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={BlacksmithsBernard4112024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  <br />
                  Bernard enjoying the most important <br /> thing .... the
                  beer.
                </strong>
              </figcaption>
            </section>
          </fig>
        </div>
        <section className="dateNovember">November 14th 2024, Thursday</section>
        <section className="newsheaderNovember">
          {" "}
          HALTWHISTLE MYSTERY TOUR WALK , 5.25 miles: <br /> Haltwhistle,
          Haltwhistle Burn, Cawfields Quarry and return.{" "}
        </section>
        <section className="newsNovember" style={{ textAlign: "center" }}>
          {" "}
          We went over to Haltwhistle today to undertake a walk which actually
          forms part of the optional 'Haltwhistle Detour' of the Hadrian's Wall
          Path, usually used by people walking Hadrian's Wall who have overnight
          accommodation booked in Haltwhistle. This is one of the additional,
          optional add-ons to our Hadrian's Wall walk in the Summer, which we
          did not have chance to complete at the time, so what better time to do
          it than now? Whilst it was misty, when the sun periodically broke
          through, it turned into a lovely day. It also made it appropriately
          spooky, given it had just been halloween a few days previously....
          <br />
          <br />
          There is free parking available on Fair Hill, behind Sainsbury's
          supermarket. On arrival, as it was still quite misty, we called in at
          <Link
            to="https://www.tripadvisor.com/ShowUserReviews-g616269-d25569987-r955107966-Bonnie_s-Haltwhistle_Northumberland_England.html"
            target="_blank"
            title="Click here to discover more about 'Bonnie's'"
            className="LinkNovember"
          >
            {" "}
            Bonnie's Café{" "}
          </Link>{" "}
          to have some coffees prior to starting our walk.
          <Link
            to="https://www.tripadvisor.com/ShowUserReviews-g616269-d25569987-r955107966-Bonnie_s-Haltwhistle_Northumberland_England.html"
            target="_blank"
            title="Click here to discover more about 'Bonnie's'"
            className="LinkNovember"
          >
            {" "}
            Bonnie's
          </Link>{" "}
          is a quirky, friendly, reasonably-priced café on Haltwhistle Main
          Street. It seemed to be popular with local people, which is always a
          good sign. Coffees complete, we set off on our walk up Haltwhistle
          Burn towards Cawfield's Quarry, which sits on the Hadrian's Wall Path.
          <br />
          <br />
          Haltwhistle Burn Gorge was formed millions of years ago. It contains
          large cliffs containing sandstone. It was an important source of coal,
          which was mined, and limestone, which was burnt to form lime, used in
          buildings and had an important role in improving the acid soil of the
          upland farms. The remains of 2 lime kilns are still visible as you
          climb the path. The footpath you walk on was, during the early 20th
          century, the narrow-gauge railway tank which transported road-stone
          from Cawfields Quarry on Hadrian's Wall, where we were walking today,
          to the railway sidings at Town Foot. Earlier, in the 18th century,
          there were 2 mills in the gorge which had been set up by the Quakers
          to created jobs for local people and which were used to produce wool.
          The gorge looks very peaceful today but it was once the industrial
          centre of Haltwhistle producing woollen fabric, coal, stone, lime and
          ceramics.
          <br />
          <br />
        </section>
        <div className="blogPhotoDivNovember">
          <fig>
            <section className="blogPhotoNovember">
              <img src={Bonniesmenu} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  Bonnie's menu had a wide range of choice, <br /> including:
                  all day breakfasts, jacket potatoes, <br /> paninis,
                  sandwiches and burgers with vegetarian <br /> and vegan
                  options. There were also jacket <br /> potatoes, soup, paninis
                  and sandwiches etc.
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={Bonniescafé} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  A good place to stop for refreshments; <br />{" "}
                  <Link
                    to="https://www.tripadvisor.com/ShowUserReviews-g616269-d25569987-r955107966-Bonnie_s-Haltwhistle_Northumberland_England.html"
                    target="_blank"
                    title="Click here to discover more about 'Bonnie's'"
                    className="LinkNovember"
                  >
                    {" "}
                    Bonnie's Café{" "}
                  </Link>
                  , 16 Westgate, Haltwhistle.
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={BonniesAbout} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  On the blackboard, the owners <br /> have written a small
                  piece all about <br />
                  themselves which adds to the <br /> personal feel.
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={ParkingHaltwhistle} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  Free parking can be found on Fair Hill, <br /> just behind
                  Sainsbury's supermarket.
                </strong>
              </figcaption>
            </section>
          </fig>
        </div>
        <div className="blogPhotoDivNovember">
          <fig>
            <section className="blogPhotoNovember">
              <img src={AccommodationHaltwhistle} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  <Link
                    to="https://www.oldschoolhousehaltwhistle.com/"
                    target="_blank"
                    title="Click here to discover more about the Old School House B and B"
                    className="LinkNovember"
                  >
                    The Old School House Bed and Breakfast
                  </Link>{" "}
                  <br />
                  in Haltwhistle, is a popular overnight stop, <br /> especially
                  for walkers on the Hadrian's Wall <br /> Path and Pennine Way.
                  It is adjoined by <br /> the aptly-named 'Eleven Plus'
                  Cottage. <br />
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={HaltwhistleBurn1} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  Haltwhistle Burn Gorge: <br /> First information board:
                  Formation of the gorge, geology and flora and fauna..
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={HaltwhistleBurn2} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  Haltwhistle Burn Gorge: <br /> Second information board: Coal
                  mining, <br /> narrow-gauge railway and the woollen mills.
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={HaltwhistleBurn3} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  <br /> Haltwhistle Burn Gorge: <br /> Third information board:
                  More coal.., <br /> the corn mill and the Gas Light Company.
                </strong>
              </figcaption>
            </section>
          </fig>
        </div>
        <div className="blogPhotoDivNovember">
          <fig>
            <section className="blogPhotoNovember">
              <img src={HaltwhistleBurn4} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>Bernard in Haltwhistle Burn Gorge.</strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={HaltwhistleBurn5} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>The tumbling waters of the burn.</strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={CliffsHaltwhistleGorge} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  The ancient, jagged, sandstone-containing <br /> cliffs of the
                  gorge.
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={CawfieldVallum} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  <br /> The Roman Vallum, which lies just <br /> South of
                  Hadrian's Wall. Here <br /> near Cawfields Quarry.
                </strong>
              </figcaption>
            </section>
          </fig>
        </div>
        <div className="blogPhotoDivNovember">
          <fig>
            <section className="blogPhotoNovember">
              <img src={CawfieldNov2024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  Cawfield Quarry in the mist ...
                  <br />
                  a little different to when we <br /> were last here in the
                  Summer.{" "}
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={CawfieldsMilecastle42Mist} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  Cawfields Milecastle 42 lying <br /> in the mist, deserted.
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={impassablepathCawfields} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  Leaving Cawfields Quarry we ran <br /> into problems.....the
                  path <br />
                  was totally flooded....
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={BernardUnimpressedCawfields} alt="" />
              <figcaption className="Novemberfigcaption">
                Bernard was not too impressed....,
                <br /> however we quickly found an <br /> adjacent alternative
                path <br /> we could use.
                <strong>
                  <br />
                </strong>
              </figcaption>
            </section>
          </fig>
        </div>
        <section className="dateNovember">November 16th 2024, Saturday</section>
        <section className="newsheaderNovember">
          {" "}
          Miltonrigg Wood, Lanercost, Quarry Beck, Ridgewood and Brampton
          Circular Walk, 15.11km = 9.45 miles, 3hr 24, elevation gained 253
          metres{" "}
        </section>
        <section className="newsNovember" style={{ textAlign: "center" }}>
          Today, was the first of a series of longer range walks which we will
          be undertaking over the forthcoming months. The aim is to increase our
          fitness and resilience so that we can comfortably walk 10-15 miles a
          day over successive days. The challenges of this over the winter
          period of course are the shorter daylight hours and risk of inclement
          weather, so a prompt start and flexibility in consideration of the
          best routes will be important. The walk today was just under 10 miles,
          on mixed terrain, along small country roads, and through several
          woods.
          <br />
          <br />
          Some highlights of the walk included:
          <br />
          <ul
            style={{ textAlign: "center", marginLeft: "5%", marginRight: "5%" }}
          >
            <li style={{ textDecoration: "underline" }}>Milton Rigg Wood:</li>{" "}
            <div className="leftAlignli">
              Owned and managed by the Woodland Trust and containing a variety
              of interesting trees including many oak and birch, many of which
              date back over 100 years. Oak from this wood was used in
              rebuilding the roof of York Minster after it was destroyed by fire
              in 1984. The wildlife pond was created in 1990 as a habitat for
              toads, newts and dragonflies. There are birds such as wood warbler
              and willow tit which can be spotted.
            </div>
            <br />
            <li style={{ textDecoration: "underline" }}>Naworth Castle:</li>
            <div className="leftAlignli">
              Naworth Castle, belonging to the Dacre and Howard families, was
              built in 1335 to defend England’s borderlands against the Scots
              and Border Reivers. It is a private home, which is only available
              for private hire, and so it is not open to the general public.
              Nevertheless, it forms an impressive site as you descend the hill
              and it is easy to see why it was chosen for this location during
              the time of the borderland conflicts.
            </div>
            <br />
            <li style={{ textDecoration: "underline" }}>Lanercost tea room:</li>
            <div className="leftAlignli">
              Lanercost tea room is adjacent to the fascinating 12th century
              Lanercost Priory and lies only 0.5 mile from the World Heritage
              Site of Hadrian’s Wall. They serve a good range of
              freshly-prepared food. As you may have realised by now, for those
              of you who follow the blog, it is a favourite location of ours....
            </div>
            <br />
            <li style={{ textDecoration: "underline" }}>Quarrybeck:</li>
            <div className="leftAlignli">
              A stream and falls running through woodland down towards
              Lanercost. This is an extremely pleasant walk, especially in the
              month of May when the bluebells are out. It can be very muddy
              underfoot though, so adequate footwear is necessary. Our May 2024
              header features the bluebells in Quarrybeck wood.....
            </div>
            <br />
            <li style={{ textDecoration: "underline" }}>Ridgewood:</li>
            <div className="leftAlignli">
              This also is an area of woodland owned and managed by the Woodland
              Trust. It has lots of wildlife including roe deer, red squirrel
              and foxes being seen. There is a large ancient beech with a girth
              of 4.2m can be found to the east together with other species such
              as sycamore and lime. There are some lovely views from up here.
            </div>
          </ul>
          <br />
          The photos below show some of the territory we covered....
        </section>
        <div className="blogPhotoDivNovember">
          <fig>
            <section className="blogPhotoNovember">
              <img src={WeatherGood16112024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  A 10am start, and the weather is looking good.....
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={BernardHarryMiltonRigg16112024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>Bernard and Harry, Miltonrigg Wood</strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={JillBernardMiltonRigg16112024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  Jill and Bernard, by the pond in Miltonrigg Wood. <br />
                  Note the essential piece of kit....wellingtons!
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={NaworthBernard16112024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  Bernard, on the road leading <br /> down to Naworth Castle
                </strong>
              </figcaption>
            </section>
          </fig>
        </div>
        <div className="blogPhotoDivNovember">
          <fig>
            <section className="blogPhotoNovember">
              <img src={Naworth16112024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>Naworth Castle</strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={LanercostMenu16112024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  Menu, Lanercost café: <br /> there is usually a good range{" "}
                  <br /> of choice, such as...
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={LanercostFoodJill16112024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>Baked potato with beans and salad.....</strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={LanercostFoodHarry16112024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  Cheesy chips.... <br /> because lots of calories are needed{" "}
                  <br /> for the walk...
                </strong>
              </figcaption>
            </section>
          </fig>
        </div>
        <div className="blogPhotoDivNovember">
          <fig>
            <section className="blogPhotoNovember">
              <img src={QuarryBeck1_16112024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>
                  A pleasant climb up <br /> through Quarrybeck Falls
                </strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={QuarryBeck2_16112024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>Quarrybeck again....</strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={RidgewoodHarry16112024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong>Harry, entering the Ridegwood</strong>
              </figcaption>
            </section>
          </fig>
          <fig>
            <section className="blogPhotoNovember">
              <img src={RidgewoodBernard16112024} alt="" />
              <figcaption className="Novemberfigcaption">
                <strong></strong>Bernard homeward bound in the Ridgewood,
                <br /> (well, maybe not quite yet)...{" "}
              </figcaption>
            </section>
          </fig>
        </div>
        <section className="dateNovember">22nd November 2024, Friday</section>
        <section className="newsheaderNovember">
          Walk Eamont Bridge and Penrith: distance 13.5 miles; ascent 253
          metres, 830 feet.{" "}
        </section>
        <div className="componentWalkDetailsNovember">
          <strong className="headTitlesNovember">Details of the Walk </strong>
          <ul className="hwpIntroList">
            <li>
              <strong className="titlesNovember">Parking:</strong>
              <br />
              We parked at Elena's house and walked from there. This added about
              2.5 miles on to the walk in total. If going from Penrith station,
              there is paid parking available at the station.
            </li>
            <br />
            <li>
              <strong className="titlesNovember">Paths: </strong>
              <br /> Good, clear, well-signposted paths. A mixture of pavement,
              country bridleway and footpaths and field walking.{" "}
            </li>
            <br />
            <li>
              <strong className="titlesNovember">Distance:</strong>
              <br /> 13.5 miles from Elena's house. 11 miles if starting at
              Penrith station. <strong> Ascent: 253 metres, 830 feet.</strong>
            </li>
            <br />
            <li>
              <strong className="titlesNovember">Refreshments:</strong>
              <br /> There are plenty of pubs and cafés at Pooley Bridge, so
              take your pick. We chose one of our favourites, which is Granny
              Dowbekin's.{" "}
            </li>
            <br />
          </ul>

          <strong className="headTitlesNovember">Good</strong>
          <ul className="hwpIntroList">
            <div className="listItemsAlign">
              <li>
                <strong className="titlesNovember">Variety : </strong>This is a
                walk with lots of variety both in the types of foot path, the
                historical features to see en route and the beautiful
                countryside.
                <br />{" "}
              </li>
              <br />
              <li>
                <strong className="titlesNovember">Walk :</strong>
                <br /> This is a great longer distance walk which forms a good
                staging post for training for longer distance treks where this
                kind of distance needs to be walked day after day. It can also
                be added on to walks such as the{" "}
                <Link
                  to="https://www.ullswater.org/the-ullswater-way/"
                  target="_blank"
                  className="LinkNovember"
                >
                  Ullswater Way
                </Link>
                , which is a 20 mile walk around Ullswater Lake.
              </li>
              <br />
              <li>
                <strong className="titlesNovember">Refreshments : </strong>
                <br /> There was plenty of opportunity for refreshments in
                Pooley Bridge and Penrith.
              </li>
              <br />
              <li>
                <strong className="titlesNovember">
                  Environmentally-friendly :{" "}
                </strong>
                <br /> One of the reasons this walk has been developed has been
                a means of connecting Penrith station to Ullswater Lake on foot,
                in order to reduce the need to use the car. We worked out it
                would be quite feasible to catch an early train from Manchester,
                Liverpool or further a field and walk the whole walk, whilst
                still having time to return the same day.
              </li>
              <br />
              <li>
                <strong className="titlesNovember">Weather: </strong>
                <br />
                Good weather, icy in parts.
              </li>
            </div>
            <br />
          </ul>

          <strong className="headTitlesNovember">Not so good</strong>
          <ul className="hwpIntroList">
            <li>
              <strong className="titlesNovember">
                Depends what you are looking for :
              </strong>{" "}
              This is a longish but fairly straightforward low-level walk with
              plenty of interest and variety along the way. For some people,
              especially with the proximity of the spectacular high level
              walking in the surrounding Lake District hills, this might seem a
              bit too tame. It does have the definite advantage though that it
              can be undertaken at all times of year and in almost all weather
              conditions.
              <br />
            </li>
            <br />
          </ul>

          <strong className="headTitlesNovember">Hike Rating</strong>
          <ul className="hwpIntroList">
            <li>
              <strong className="titlesNovember">9.6 (out of 10):</strong> An
              enjoyable days walking which, despite the length, did not seem too
              challenging.
            </li>
          </ul>
        </div>{" "}
        {/* Closing tag ComponentWalkDetails Class*/}
        <br />
        <section className="newsNovember" style={{ textAlign: "left" }}>
          Today's walk was the second of a series of longer range walks which we
          will be undertaking over the forthcoming months. The Eamont Way was
          opened on the 14th April 2023 and is a 5.5 mile walk linking Penrith
          Station to Pooley Bridge, on Ullswater Lake. Volunteers from Friends
          of the Ullswater Way and SITU (Sustainable and Integrated Transport
          for Ullswater) had a role in designing the trail. The logo chosen for
          the sign-posted way is the eel, so it is a case of keeping a lookout
          for the eel signs.
          <br />
          <br />
          The footpaths are good and clear and the walk is fairly low level with
          only some gentle undulations. The route is a really interesting mix of
          town and roadside walking, countryside foot paths, pretty cumbrian
          villages, several crossings of the river Eamont and a number of
          historic landmarks.
          <br />
          <br />
          Some historic highlights of the Eamont Way path from Penrith station
          to Pooley Bridge include:
          <br />
          <br />
          <ul
            style={{ textAlign: "left", marginLeft: "5%", marginRight: "5%" }}
          >
            <li style={{ textDecoration: "underline" }}>Penrith Station:</li>{" "}
            Penrith station was built by the Lancaster and Carlisle railway and
            opened on the 17th December 1846. The station was designed by Sir
            William Tite, designer of a number of early railway stations in
            Britain during the construction of the Lancaster and Carlisle line.
            It is recorded in the National Heritage List for England as a
            designated Grade II listed building. More about its interesting
            history can be found on the{" "}
            <Link
              to="https://www.ullswaterheritage.org/eamont-way/penrith-station"
              target="_blank"
              title="Click here to discover more about the history of Penrith station"
              className="LinkNovember"
            >
              Friends of the Ullswater Way website-Penrith station.
            </Link>
            <br />
            <li style={{ textDecoration: "underline" }}>Penrith Castle:</li>
            <div className="leftAlignli">
              Lying almost opposite Penrith station, although not so much
              remains of Penrith Castle remains today, it has a very interesting
              history. More about this history can be found on the
              <Link
                to="https://www.ullswaterheritage.org/eamont-way/penrith-castle"
                target="_blank"
                title="Click here to discover more about the history of Penrith castle"
                className="LinkNovember"
              >
                {" "}
                Friends of the Ullswater Way website-Penrith Castle
              </Link>
              .
            </div>
            <br />
            <li style={{ textDecoration: "underline" }}>Yanwath Hall:</li>
            <div className="leftAlignli">
              Yanwath Hall is privately owned but is of note because it has one
              of the best surviving pele towers in Cumbria. More information
              about Yanwath Hall and its pele tower can be found on the
              <Link
                to="https://www.ullswaterheritage.org/eamont-way/yanwath-hall"
                target="_blank"
                title="Click here to discover more about Yanwath Hall"
                className="LinkNovember"
              >
                {" "}
                Friends of the Ullswater Way website-Yanwath Hall
              </Link>
            </div>
            <br />
            <li style={{ textDecoration: "underline" }}>Kirkbarrow Hall:</li>
            <div className="leftAlignli">
              Today Kirkbarrow Hall is a dairy farm but it has a history dating
              back to the late 16th or early 17th century. It once belonged to
              Leonard Dacre. Information concerning the fascinating history of
              Kirkbarrow Hall can be found on the
              <Link
                to="https://www.ullswaterheritage.org/eamont-way/kirkbarrow-hall"
                target="_blank"
                title="Click here to discover more about the history of Kirkbarrow Hall"
                className="LinkNovember"
              >
                {" "}
                Friends of the Ullswater Way website-Kirkbarrow Hall
              </Link>
              .
            </div>
            <br />
            <li style={{ textDecoration: "underline" }}>
              St Michael's Church, Barton:
            </li>
            Information about the history and people involved in this church,
            which is adjacent to the route, can be found on the{" "}
            <Link
              to="https://www.ullswaterheritage.org/locations/barton-church"
              target="_blank"
              title="Click here to discover more about the history of St Michael's Church, Barton"
              className="LinkNovember"
            >
              Friends of the Ullswater Way website-St Michael's Church, Barton.
            </Link>
            <div className="leftAlignli"></div>
            <br />
            <li style={{ textDecoration: "underline" }}>
              Wordsworth House, Sockbridge:
            </li>
            <div className="leftAlignli">
              We passed Wordsworth House in Sockbridge village. Information on
              the{" "}
              <Link
                to="https://www.ullswaterheritage.org/eamont-way/wordsworth-house-sockbridge"
                target="_blank"
                title="Click here to discover more about the history of William Wordsworth's grandfather and Sockbridge"
                className="LinkNovember"
              >
                Friends of the Ullswater Way website-Wordsworth House,
                Sockbridge
              </Link>{" "}
              tells us that it was built in 1699 and was formerly called
              Sockbridge House. The house was sold to Richard Wordsworth, who
              was both Viscount Lowther's agent and William Wordsworth's
              grandfather. In the Jacobite rebellion of 1745 he fled to
              Patterdale with the "county treasure" to save it from the rebels
              while Mrs Wordsworth entertained Jacobite officers at their home.
              We also passed a barn conversion named Wordsworth Cottage which
              was apparently formerly part of the estate once owned by
              Wordsworth’s grandfather.{" "}
            </div>
          </ul>
          <br />
        </section>
        <div className="SlideshowHostPhotoNovember">
          <Link
            to="https://photos.app.goo.gl/iEZLUTSjCPUBeWEz9"
            target="_blank"
            title="Click on the link and read the full comments on 
            each photo to accompany us on our Eamont Way and Pooley Bridge Walk."
          >
            <strong>
              <div className="slideshowinstructionsNovember">
                {" "}
                Click on the image below to open the photo album of our Eamont
                Way and Pooley Bridge walk.
                <br /> <br />
                The individual comments on the photos will take you through the
                full story of our walk.
              </div>{" "}
              {/*Closing div slideshowinstructionsNovember*/}
              <img
                className="slideshowentryNovember"
                src={EamontWay22112024Title}
                alt=""
              />
            </strong>
          </Link>
        </div>
        {/*Closing div SlideshowHostPhotoNovemberr*/}
        <section className="dateNovember">29th November 2024, Friday</section>
        <section className="newsheaderNovember">
          Walk Walton Village via Miltonrigg Wood and Lanercost: distance 14.4
          miles; ascent 333 metres, 1092.52 feet.{" "}
        </section>
        <div className="componentWalkDetailsNovember">
          <strong className="headTitlesNovember">Details of the Walk </strong>
          <ul className="hwpIntroList">
            <li>
              <strong className="titlesNovember">Parking:</strong>
              <br />
              We did not need to take the car for this walk.
            </li>
            <br />
            <li>
              <strong className="titlesNovember">Paths: </strong>
              <br /> Good, clear, paths. A mixture of quiet, minor country roads
              and footpaths.
            </li>
            <br />
            <li>
              <strong className="titlesNovember">Distance:</strong>
              <br /> 14.4 miles<strong> Ascent 333 metres, 1092.52.</strong>
            </li>
            <br />
            <li>
              <strong className="titlesNovember">Refreshments:</strong>
              <br /> Lanercost Tea room.{" "}
            </li>
            <br />
          </ul>

          <strong className="headTitlesNovember">Good</strong>
          <ul className="hwpIntroList">
            <div className="listItemsAlign">
              <li>
                <strong className="titlesNovember">All-weather : </strong>This
                is a walk which can be undertaken in almost all weathers and
                seasons.
                <br />{" "}
              </li>
              <br />
              <li>
                <strong className="titlesNovember">Walk :</strong>
                <br /> This is a great longer distance walk which again, forms a
                good staging post for training for longer distance treks where
                this kind of distance needs to be walked day after day.
              </li>
              <br />
              <li>
                <strong className="titlesNovember">Refreshments : </strong>
                <br /> There were refreshments available at Lanercost Tea room.
              </li>
              <br />
              <li>
                <strong className="titlesNovember">
                  Environmentally-friendly :{" "}
                </strong>
                <br /> We did not need to use the car at all for the walk today.
              </li>
              <br />
              {/* <li><strong className="titlesNovember">Weather: </strong><br />Good weather, icy in parts.</li> */}
            </div>
            <br />
          </ul>

          <strong className="headTitlesNovember">Not so good</strong>
          <ul className="hwpIntroList">
            <li>
              <strong className="titlesNovember">
                Walton Tea room was closed for December:
                <br />
              </strong>{" "}
              We had been looking forward to having our lunch at Walton Tea room
              which, according to the website and the sign board on Walton Green
              was open for business. Unfortunately, when we arrived, we learnt
              they were closed until the end of December. Luckily, in case of
              encountering such an eventuality, we had packed some back-up
              sandwiches and snacks, which kept us going until we reached
              Lanercost Tea room, which fortunately was open for lunch.
              <br />
            </li>
            <br />
          </ul>

          <strong className="headTitlesNovember">Hike Rating</strong>
          <ul className="hwpIntroList">
            <li>
              <strong className="titlesNovember">9.6 (out of 10):</strong> An
              enjoyable days walking.
            </li>
          </ul>
        </div>{" "}
        {/* Closing tag ComponentWalkDetails Class*/}
        <br />
        <section className="newsNovember" style={{ textAlign: "left" }}>
          Today's walk to Walton Village and back via Miltonrigg wood and
          Lanercost was the third of a series of longer range walks which we we
          are undertaking over the forthcoming months.
          <br />
          There are good, clear, paths with a mixture of quiet, minor country
          roads and footpaths. Whilst the country roads were very quiet, it is
          very important to keep a watch out as whilst there is only an
          occasional vehicle they can be traveling very quickly and not be
          expecting to meet anyone en route!
          <br />
        </section>
        <div className="SlideshowHostPhotoNovember">
          <Link
            to="https://photos.app.goo.gl/E6Arq4B9U6Uedudd7"
            target="_blank"
            title="Click on the link and read the full comments on 
            each photo to accompany us on our Walton Village Walk."
          >
            <strong>
              <div className="slideshowinstructionsNovember">
                {" "}
                Click on the image below to open the photo album of our walk
                over to Walton Village and back via Miltonrigg wood and
                Lanercost.
                <br /> <br />
                The individual comments on the photos will take you through the
                full story of our walk.
              </div>{" "}
              {/*Closing div slideshowinstructionsNovember*/}
              <img
                className="slideshowentryNovember"
                src={NaworthRear29112024Titled}
                alt=""
              />
            </strong>
          </Link>
        </div>
        {/*Closing div SlideshowHostPhotoNovemberr*/}
      </div>
    </div>
  );
}
