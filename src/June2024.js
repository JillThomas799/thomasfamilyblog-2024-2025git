import React from "react";
import { Link } from "react-router-dom";
import "./June2024.css";
import June2024HeaderPhoto1 from "./imagesresized/June2024HeaderPhoto1.jpg";
import CygnetSwans1 from "./imagesresized/CygnetSwans1.jpg";
import CygnetSwans2 from "./imagesresized/CygnetSwans2.jpg";
import CygnetSwans3 from "./imagesresized/CygnetSwans3.jpg";
import DuckDucklings1 from "./imagesresized/DuckDucklings1.jpg";
import DuckDucklings2 from "./imagesresized/DuckDucklings2.jpg";
import ChickMoorhen from "./imagesresized/ChickMoorhen.jpg";
import TalkinTarnView from "./imagesresized/TalkinTarnView.jpg";
import StrawberryBed from "./imagesresized/StrawberryBed.jpg";
import RaisedBed1 from "./imagesresized/RaisedBed1.jpg";
import RaisedBed2 from "./imagesresized/RaisedBed2.jpg";
import RaisedBed3 from "./imagesresized/RaisedBed3.jpg";
import RaisedBed4 from "./imagesresized/RaisedBed4.jpg";
import ProductiveGarden from "./imagesresized/ProductiveGarden.jpg";
import NepetaMichelmas from "./imagesresized/NepetaMichelmas.jpg";
import NepetaInBloom1 from "./imagesresized/NepetaInBloom2.jpg";
import Meadow2 from "./imagesresized/Meadow2.jpg";
import Meadow1 from "./imagesresized/Meadow1.jpg";
import GoatsbeardBorder from "./imagesresized/GoatsbeardBorder.jpg";
import GardenView from "./imagesresized/GardenView.jpg";
import FoxglovesPatio3 from "./imagesresized/FoxglovesPatio3.jpg";
import BlueTitNesting from "./imagesresized/BlueTitNesting.jpg";
import HeaderPhotoMysteryTour from "./imagesresized/HeaderPhotoMysteryTour.jpg";
import Charnock from "./imagesresized/Charnock.jpg";
import CharnockStarbucks from "./imagesresized/CharnockStarbucks.jpg";
import MiddletonJill1 from "./imagesresized/MiddletonJill1.jpg";
import MiddletonJill2 from "./imagesresized/MiddletonJill2.jpg";
import MiddletonBernard1 from "./imagesresized/MiddletonBernard1.jpg";
import MiddletonBernard2 from "./imagesresized/MiddletonBernard2.jpg";
import MiddletonBernard3 from "./imagesresized/MiddletonBernard3.jpg";
import MiddletonGarden1 from "./imagesresized/MiddletonGarden1.jpg";
import MiddletonGarden2 from "./imagesresized/MiddletonGarden2.jpg";
import MiddletonInterior from "./imagesresized/MiddletonInterior.jpg";
import Lennie30pieces from "./imagesresized/Lennie30pieces.jpg";
import OldBell from "./imagesresized/OldBell.jpg";
import JettiedBuilding from "./imagesresized/JettiedBuilding.jpg";
import MiddletonEntrance from "./imagesresized/MiddletonEntrance.jpg";
import MiddletonJillCourtyard from "./imagesresized/MiddletonJillCourtyard.jpg";
import MiddletonCat from "./imagesresized/MiddletonCat.jpg";
import LegionExhibitionEntrance from "./imagesresized/LegionExhibitionEntrance.jpg";
import GiraffesKnebworth from "./imagesresized/GiraffesKnebworth.jpg";
import GardensKnebworth1 from "./imagesresized/GardensKnebworth1.jpg";
import DinosaursKnebworth from "./imagesresized/DinosaursKnebworth.jpg";
import RosegardenKnebworth from "./imagesresized/RosegardenKnebworth.jpg";
import HerbgardenKnebworth from "./imagesresized/HerbgardenKnebworth.jpg";
import HouseKnebworth from "./imagesresized/HouseKnebworth.jpg";
import JillAlanKnebworth from "./imagesresized/JillAlanKnebworth.jpg";
import SunsetCumbria from "./imagesresized/SunsetCumbria.jpg";

export default function June2024() {
  return (
    <div>
      <div className="June2024header">
        <button id="backbutton">
          <Link to="/" className="backbuttonLink">
            Back
          </Link>
        </button>
      </div>
      <div className="newsCongratsJune">
        <h1
          style={{
            background: "#B0C4DE",
            borderRadius: "0",
            marginBottom: "0px",
          }}
          className="Juneh1"
        >
          <br />
          <img src={June2024HeaderPhoto1} alt="" className="headerPhotoJune" />
          <div className="CongratsMessageJune">COWS ON THE MOOOVE!....</div>
        </h1>
        <br />
      </div>
      <div className="datenewsDivJune">
        <section className="dateJune">1st - 30th June 2024</section>
        <section className="newsheaderJune">
          Welcome to our June 2024 blog
        </section>
        <section className="newsJune">
          Welcome to this, our June 2024 blog. We hope everyone is keeping well
          and happy in spite of the poor June weather so far.
          <br />
          <br />
          The header photo this month was taken returning along the Old Military
          Road which runs along Hadrian's Wall in Northumberland and Cumbria. We
          had been out in the car doing some route-planning for our Hadrian's
          Wall Expedition and this photograph just about sums up life up here.
          Everyone found the sign very amusing and, given this is usually a road
          which people tend to drive quite fast along, it was no mean
          achievement of the farmer's to get everyone sitting waiting quite
          patiently in their cars until all the cows had been successfully
          moved!
          <br />
          <br />
          From this month we have set up a separate page, the{" "}
          <Link to="/hwp2024" className="LinkJune">
            {" "}
            Hadrian's Wall Path Expedition page{" "}
          </Link>{" "}
          , narrating our 84 (or so) mile Hadrian's Wall Path expedition which
          we will be undertaking in day-long segments over the coming weeks and
          months. We are hoping we will be able to provide tips and guidance to
          anyone else thinking of walking the path in this manner, as the
          challenges are a little different to when doing it as one block over
          4-9 days. In part, this is why the blog will seem a little quieter
          this month as we have been busy planning out the{" "}
          <em>Great Expedition</em> .
          <br />
          <br />
          In addition, Jill and Elena have been making good progress with
          further developing the blog website so that it can run on a server
          hosted by ourselves and where everyone will be able to log in with
          their own password. The raspberry pi computer has been purchased and
          set up to act as the server. We now have to create the page to log in
          and a secure database and all the background security required. This
          has necessitated Jill having to learn Linux operating system with{" "}
          <Link
            to="https://www.futurelearn.com/courses/linux-operating-system-essentials"
            target="_blank"
            title="Click here to learn more about the Linux Operating System Essentials course"
          >
            {" "}
            Future Learn{" "}
          </Link>{" "}
          ( with rather a lot of tutting and eye-rolling from Elena at the same
          time......). However, the good news is that we are progressing slowly
          but surely. We will let everyone know in plenty of time when the
          change to a personalised log in will come into play.
          <br />
          <br />
        </section>
      </div>
      <div className="datenewsDivJune">
        <section className="dateJune">1st June 2024</section>
        <section className="newsheaderJune">
          {" "}
          Stage 1 of our Hadrian's Wall Path Expedition successfully completed
        </section>
        <br />
        <section className="newsJune">
          Today we successfully completed Stage 1 of our Hadrian's Wall Path
          Expedition. All the information about this trip for today and for the
          remaining stages over the forthcoming weeks and months, please come
          and join us at our{" "}
          <Link to="/hwp2024"> Hadrian's Wall Path Expedition page </Link>
        </section>
      </div>
      <div className="datenewsDivJune">
        <section className="dateJune">10th - 12th June 2024</section>
        <section className="newsheaderJune">
          Cygnets, ducklings and moorhen chicks - the tarn is a veritable
          nursery!
        </section>
        <br />
        <section className="newsJune">
          There has been lots of activity down at the tarn recently as many of
          the birds are having their families. Each time we visit there seem to
          have been more additions... All apart from the cygnets grow so quickly
          though and are soon adults. The cygnets are slower, taking 4-5 months
          to reach maturity.
        </section>
      </div>
      <div className="blogPhotoDivJune">
        <figure>
          <section className="blogPhotoJune">
            <img src={CygnetSwans1} alt="" />
            <figcaption className="juneFigCaption">
              <strong>
                The swans have had cygnets this year, <br /> seen here tucked
                under the trees <br /> on the far left of the photo{" "}
              </strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={CygnetSwans2} alt="" />
            <figcaption className="juneFigCaption">
              <strong>
                {" "}
                The two parents are <em>very</em> defensive of their young{" "}
                <br /> and keep hissing at all passers by...
              </strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={CygnetSwans3} alt="" />
            <figcaption className="juneFigCaption">
              <strong>
                They have to be defensive though. <br /> The first year we were
                here <br /> one of the little cygnets died...
              </strong>
            </figcaption>
          </section>
        </figure>
      </div>
      <div className="blogPhotoDivJune">
        <figure>
          <section className="blogPhotoJune">
            <img src={DuckDucklings2} alt="" />
            <figcaption className="juneFigCaption">
              <strong>
                {" "}
                Meanwhile, elsewhere on the tarn <br /> a number of the ducks
                have had ducklings...
              </strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={DuckDucklings1} alt="" />
            <figcaption className="juneFigCaption">
              <strong>
                The little ducklings grow very quickly <br /> and soon learn
                from their parents.{" "}
              </strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={ChickMoorhen} alt="" />
            <figcaption className="juneFigCaption">
              <strong>
                ...and tucked away undercover <br /> in another area of the tarn{" "}
                <br />
                out of sight is the moorhen with her chicks.
              </strong>
            </figcaption>
          </section>
        </figure>
      </div>
      <div className="datenewsDivJune">
        <section className="newsheaderJune">A June Garden Update </section>
        <br />
        <section className="newsJune">
          The productive garden is doing well. Following the success of the
          raised beds last year, we have added another 2 raised beds, so we are
          now growing: mixed lettuce, leeks, peas, rhubarb, courgettes,
          tomatoes, runner beans, strawberries, blackberries and raspberries.
          <br />
          <br />
          Meanwhile, in the main garden, with the weather having been so cold
          with average temperatures similar to those in April, the plants
          generally and particularly the bedding plants are some weeks behind in
          their growth and there has not been much opportunity for sitting
          outside.
          <br />
          <br />
          Bernard is creating a meadow at the bottom of the main lawn and in
          time, hopefully wild flowers and grasses will grow there, attracting
          wildlife. All the plants which have been planted along the border of
          the long wall are now starting to really get established, even the
          ferns!!... The Skimmia and the viburnum tinea plants are particularly
          doing well. The trailing aubretia which we planted last year have done
          really well and are expanding happily. Many people grow them in this
          area, so it seems they suit the climate and were a wise choice.
          <br />
          <br />
          It is easy to think sometimes that the garden is not achieving what is
          intended in some areas, but then, when a comparison is undertaken of
          photos taken this time last year and the year before, then it can be
          clearly seen that things actually are going to plan and everything has
          grown and filled out.
        </section>
      </div>
      ; ;{" "}
      <div className="datenewsDivJune">
        <div className="blogPhotoDivJune">
          <figure>
            <section className="blogPhotoJune">
              <img src={RaisedBed1} alt="" />
              <figcaption className="juneFigCaption">
                <strong> Raised bed 1 - Mixed lettuce and Leeks </strong>
              </figcaption>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune">
              <img src={RaisedBed2} alt="" />
              <figcaption className="juneFigCaption">
                <strong> Raised Bed 2 - Peas and rhubarb </strong>
              </figcaption>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune">
              <img src={RaisedBed3} alt="" />
              <figcaption className="juneFigCaption">
                <strong>Raised bed 3 - Courgettes and tomatoes</strong>
              </figcaption>
            </section>
          </figure>
        </div>
      </div>
      <div className="datenewsDivJune">
        <div className="blogPhotoDivJune">
          <figure>
            <section className="blogPhotoJune">
              <img src={RaisedBed4} alt="" />
              <figcaption className="juneFigCaption">
                <strong> Raised bed 4 - Runner beans</strong>
              </figcaption>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune">
              <img src={StrawberryBed} alt="" />
              <figcaption className="juneFigCaption">
                <strong> The strawberry beds </strong>
              </figcaption>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune">
              <img src={ProductiveGarden} alt="" />
              <figcaption className="juneFigCaption">
                <strong> The productive garden </strong>
              </figcaption>
            </section>
          </figure>
        </div>
      </div>
      ;{" "}
      <div className="datenewsDivJune">
        <div className="blogPhotoDivJune">
          <figure>
            <section className="blogPhotoJune">
              <img src={NepetaInBloom1} alt="" />
              <figcaption className="juneFigCaption">
                <strong>
                  The nepeta are currently in their first <br /> flowering of
                  the year. They look beautiful <br /> and the bees love them...{" "}
                </strong>
              </figcaption>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune">
              <img src={NepetaMichelmas} alt="" />
              <figcaption className="juneFigCaption">
                <strong>
                  Bernard has intermingled them with some <br /> michelmas
                  daisies and the contrasting <br /> white and blue works very
                  well.
                </strong>
              </figcaption>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune">
              <img src={TalkinTarnView} alt="" />
              <figcaption className="juneFigCaption">
                <strong>
                  There are some atmospheric views out <br /> towards the tarn.
                </strong>
              </figcaption>
            </section>
          </figure>
        </div>
      </div>
      ;
      <div className="datenewsDivJune">
        <div className="blogPhotoDivJune">
          <figure>
            <section className="blogPhotoJune">
              <img src={Meadow1} alt="" />
              <figcaption className="juneFigCaption">
                <strong>
                  {" "}
                  Bernard has created a meadow <br /> at the bottom of the main
                  lawn.{" "}
                </strong>
              </figcaption>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune">
              <img src={Meadow2} alt="" />
              <figcaption className="juneFigCaption">
                <strong>
                  {" "}
                  Hopefully, over time, wild flows will grow <br /> and it will
                  attract wildlife.
                </strong>
              </figcaption>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune">
              <img src={BlueTitNesting} alt="" />
              <figcaption className="juneFigCaption">
                <strong>
                  There are baby blue tits nesting in the nesting box.
                </strong>
              </figcaption>
            </section>
          </figure>
        </div>
      </div>
      <div className="datenewsDivJune">
        <div className="blogPhotoDivJune">
          <figure>
            <section className="blogPhotoJune">
              <img src={GoatsbeardBorder} alt="" />
              <figcaption className="juneFigCaption">
                <strong>
                  {" "}
                  The borders are <br /> filling out nicely....{" "}
                </strong>
              </figcaption>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune">
              <img src={FoxglovesPatio3} alt="" />
              <figcaption className="juneFigCaption">
                <strong>
                  {" "}
                  There are quite a lot of <br />
                  foxgloves growing in the <br /> borders this year.{" "}
                </strong>
              </figcaption>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJune">
              <img src={GardenView} alt="" />
              <figcaption className="juneFigCaption">
                <strong> View looking down the main garden </strong>
              </figcaption>
            </section>
          </figure>
        </div>
      </div>
      <div className="datenewsDivJune">
        <section className="dateJune">15th June 2024, Saturday</section>
        <section className="newsheaderJune">Father's Day Mystery Trip</section>
        <section className="newsJune">
          It is Father's Day time again and this year it is on Sunday 16th
          June,2024. Unfortunately, we will be meeting with friends on that
          date, so it has been agreed that Father's Day celebrations should be
          brought forward by a day. <br /> <br /> This year, Elena and Harry
          have bought Bernard 'The Uncharted Original Trilogy' computer game and
          arranged a mystery trip (in actual fact a trip to the{" "}
          <Link
            to="https://www.solway-aviation-museum.co.uk/"
            target="_blank"
            title="Click here to discover more about Solway Aviation Museum"
          >
            {" "}
            Solway Aviation Museum{" "}
          </Link>
          including tickets for a talk by Mac Craghill, who was navigator on
          Tornado GR1s on operation in the Gulf War and who was giving a talk
          about his experiences.) Bernard has always wanted to visit the Solway
          Aviation Museum, but had never until now fulfilled that wish, so it
          seemed a good opportunity to undertake this trip.
          <br />
          <br />
          There are an interesting selection of planes to see at the museum
          including the:
          <ul>
            <li>Avro Vulcan B.2 XJ823</li>
            <li>Hawker Hunter F51 XG190</li>
            <li>English Electric Canberra T4</li>
            <li>Percival Sea Prince T Mk. 1 WP314</li>
            <li>McDonnell-Douglas F4 Phantom GR2 XV406</li>
            <li>Armstrong Whitworth Meteor NF14, WS832</li>
            <li>Fairey Ganet ECM6 XA459</li>
            <li>English Electric Lightning F53 ZF583</li>
          </ul>
          A tour of the Vulcan bomber's cockpit is included in the ticket
          price.... you just need to be careful climbing into the aircraft and
          back out again! However, it is well worth the effort as it is very
          interesting.... In the evening, a meal at the{" "}
          <Link
            to="https://www.thebeltedwill.co.uk/"
            target="_blank"
            title="Click here to discover 
                more about the Belted Will Inn"
          >
            Belted Will Inn
          </Link>{" "}
          had been arranged.
        </section>
      </div>
      <div className="SlideshowHostPhotoJune">
        <Link
          to="https://photos.app.goo.gl/uPQbymKAUYbsEMJJ8"
          target="_blank"
          title="Click on the link and read the full comments on each photo to accompany us on our mystery Father's Day trip to Solway Aviation Museum"
        >
          <strong>
            <div className="slideshowinstructionsJune">
              <strong>
                {" "}
                Click on the image below to open the photo album of our mystery
                Father's Day trip to Solway Aviation Museum.
                <br /> <br />
                The individual comments on the photos will take you through the
                full story of our trip.
              </strong>
            </div>{" "}
            {/*Closing div slideshowinstructionsJune*/}
            <img
              className="slideshowentryJune"
              src={HeaderPhotoMysteryTour}
              alt=""
            />
          </strong>
        </Link>
      </div>
      {/*Closing div SlideshowHostPhotoJune*/}
      <div className="datenewsDivJune">
        <section className="dateJune">16th June 2024, Sunday</section>
        <section className="newsheaderJune">
          Visit to the World Caerlaverlock Wetland Centre, near Dumfries, to
          meet up with friends, who were on their way to Stranraer for the ferry
          to Belfast.
        </section>
        <section className="newsJune">
          Today we were journeying into Scotland to meet our friends at the{" "}
          <Link
            to="https://www.wwt.org.uk/wetland-centres/caerlaverock/"
            target="_blank"
            title="Click here to discover more about Caerlaverlock Wetland Centre"
          >
            Caerlaverlock Wetland Centre
          </Link>{" "}
          which is situated on the Solway coast, near to Dumfries. It also lies
          on the C2C cycle route. Our friends were traveling on holiday to
          Northern Ireland via the ferry from Stranraer so it was lovely to be
          able to have the opportunity to meet up and catch up on news and enjoy
          the birds and wildlife in the nature reserve at the Centre. It was
          mixed weather but fortunately extremely quiet and this section of the
          Solway Coast always holds a particular appeal for us.
        </section>
      </div>
      <div className="datenewsDivJune">
        <section className="dateJune">20th June 2024, Thursday</section>
        <section className="newsheaderJune">
          Off to London and environs for a few days to visit relatives - the
          journey down South.
        </section>
        <br />
        <section className="newsJune">
          Today, we set off to visit relatives in London, the South and
          South-East of England, so we had a long journey ahead of us. To
          provide light relief on the lengthy motorway journey, we stopped off
          for lunch at{" "}
          <Link
            to="https://www.middleton-hall.co.uk/"
            target="_blank"
            title="Click here to discover more about Middleton Hall and Gardens"
          >
            Middleton Hall and Gardens{" "}
          </Link>{" "}
          in North Warwickshire, which is run by an independent charitable trust
          and has an interesting{" "}
          <Link
            to="https://www.middleton-hall.co.uk/our-history"
            target="_blank"
          >
            history
          </Link>
          , with there having been evidence of a residence on this site as long
          ago as Norman times in the late 11th century.
          <br />
          <br />
          By 1977, the hall had fallen into severe disrepair and thanks to the
          tenacity and action of a group of ramblers from Tamworth Civic
          Society, in 1980 Middleton Hall Trust was founded. Thanks to the
          owners, Amey Roadstone, who granted a sum of £25,000 per year for ten
          years to be spent purely on materials, and by the tireless work of a
          fearless group of volunteers, Middleton Hall was saved . Volunteers
          continue to play a key role in the ongoing repair and maintenance of
          the hall and gardens today.
          <br />
          <br />
          There is an impressive jettied building, which was built in 1530. The
          term 'jettied' refers to the fact that the first floor juts out over
          the ground floor in order to take the weight of the windows and the
          living space. It is thought that when Queen Elizabeth I visited the
          hall in 1575 to knight Henry Willoughby in the Great Hall, this was
          the building in which her entourage stayed for the duration of their
          stay.
          <br />
          <br />
          The walled garden was built in 1717 by Thomas Willoughby and was
          originally a garden which contained just vegetable beds. It was a very
          early example of a heated walled garden, the effect being to lengthen
          the growing season. Today the garden is planted around a Georgian bed
          design with lots of colourful herbaceous perennials.
          <br />
          <br />
          Then it was time to be on our way again and several hours later we
          arrived safely at our destination.
        </section>
      </div>
      <div className="blogPhotoDivJune">
        <figure>
          <section className="blogPhotoJune">
            <img src={Charnock} alt="" />
            <figcaption className="juneFigCaption">
              <strong>
                First stop was Charnock Richard Services, <br /> where it was
                amazingly quiet...
              </strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={CharnockStarbucks} alt="" />
            <figcaption className="juneFigCaption">
              ..even more so in Starbucks.<strong></strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={MiddletonJill1} alt="" />
            <figcaption className="juneFigCaption">
              <strong>
                Having safely arrived at <br />{" "}
                <Link
                  to="https://www.middleton-hall.co.uk/"
                  target="_blank"
                  title="Click here to discover more about Middleton Hall and Gardens"
                >
                  Middleton Hall and Gardens,{" "}
                </Link>{" "}
                <br /> it is time for some lunch. <br />
              </strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={MiddletonJillCourtyard} alt="" />
            <figcaption className="juneFigCaption">
              <strong>
                There are picnic tables where you <br /> are allowed to bring
                and eat your own <br /> food, or there is a{" "}
                <Link to="https://bake180coffeeshop.co.uk/" target="_blank">
                  courtyard café
                </Link>{" "}
                . <br />
              </strong>
            </figcaption>
          </section>
        </figure>
      </div>
      <div className="blogPhotoDivJune">
        <figure>
          <section className="blogPhotoJune">
            <img src={MiddletonBernard1} alt="" />
            <figcaption className="juneFigCaption">
              <strong>Bernard enjoying the lunchtime sunshine.</strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={MiddletonBernard2} alt="" />
            <figcaption className="juneFigCaption">
              <strong>
                Then it is time to <br /> have a look around...
              </strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={MiddletonEntrance} alt="" />
            <figcaption className="juneFigCaption">
              <strong></strong>...past the entrance sign...
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={MiddletonBernard3} alt="" />
            <figcaption className="juneFigCaption">
              <strong>..across the bridge...</strong>
            </figcaption>
          </section>
        </figure>
      </div>
      <div className="blogPhotoDivJune">
        <figure>
          <section className="blogPhotoJune">
            <img src={MiddletonJill2} alt="" />
            <figcaption className="juneFigCaption">
              <strong></strong>...with a quick pause for <br /> a photo stop.
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={MiddletonCat} alt="" />
            <figcaption className="juneFigCaption">
              <strong>
                Under the watchful cat statues, <br /> on the archway roof...
              </strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={JettiedBuilding} alt="" />
            <figcaption className="juneFigCaption">
              <strong>The jettied building...on the left</strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={MiddletonInterior} alt="" />
            <figcaption className="juneFigCaption">
              <strong>The interior of the jettied building</strong>
            </figcaption>
          </section>
        </figure>
      </div>
      <div className="blogPhotoDivJune">
        <figure>
          <section className="blogPhotoJune">
            <img src={MiddletonGarden1} alt="" />
            <figcaption className="juneFigCaption">
              <strong>View of the lake in the garden.</strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={MiddletonGarden2} alt="" />
            <figcaption className="juneFigCaption">
              <strong>Bernard in the walled garden.</strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={OldBell} alt="" />
            <figcaption className="juneFigCaption">
              <strong></strong>Later in the day, having <br /> safely arrived at
              our destination <br />
              we decamped to one of the local pubs for our evening meal{" "}
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={Lennie30pieces} alt="" />
            <figcaption className="junFigCaption">
              Meanwhile, back at home <br /> Lennie has accidentally been fed{" "}
              <br /> more dried cat food than he was due <br /> to receive by
              Harry <br /> but is saying that
              <br /> he is not complaining...<strong></strong>
            </figcaption>
          </section>
        </figure>
      </div>
      <div className="datenewsDivJune">
        <section className="dateJune">21st June 2024, Friday</section>
        <section className="newsheaderJune">
          Visit to the South East of England to see Jill's relatives
        </section>
        <section className="newsJune">
          Traveled over to Essex today to visit Jill's relatives and catch up on
          the news of their on-going garden project. A restful day relaxing and
          catching up on news after the last few days and before tomorrow, and a
          chance to sit out in the garden.
        </section>
      </div>
      <div className="datenewsDivJune">
        <section className="dateJune">22nd June 2024, Saturday</section>
        <section className="newsheaderJune">
          Visit to London to see Bernard's relative and the 'Legion: Life in the
          Roman Army Exhibition' at the British Museum.
        </section>
        <section className="newsJune">
          Today was a great day. We took the train into London to meet up with
          Bernard's brother and visit the 'Legion:Life in the Roman Army'
          Exhibition at the British Museum. Then it was lunch at Gaia on Great
          Russell Street and in the afternoon, we took the tube via Piccadilly
          Circus to Regent's Park and St John's Lodge Park.
          <br />
          <br /> We then walked several miles across the city, exploring as we
          went along, to reach the
          <Link
            to="https://www.germangymnasium.com/"
            target="_blank"
            title="Click here to discover more about the German Gymnasium Restaurant"
            className="LinkJune"
          >
            {" "}
            German Gymnasium{" "}
          </Link>{" "}
          Restaurant on King's Boulevard, King's Cross, where we had a very
          enjoyable meal.
        </section>
      </div>
      <div className="SlideshowHostPhotoJune">
        <Link
          to="https://photos.app.goo.gl/ZQ7doyTucnoWWYmM7"
          target="_blank"
          title="Click on the link and read the full comments on each photo to accompany us on our visit to London"
          className="LinkJune"
        >
          <strong>
            <div className="slideshowinstructionsJune">
              <strong>
                {" "}
                Click on the image below to open the photo album of our visit to
                London.
                <br /> <br />
                The individual comments on the photos will take you through the
                full story of our trip.
                <br />
                <br />
              </strong>
            </div>{" "}
            {/*Closing div slideshowinstructionsJune*/}
            <img
              className="slideshowentryJune"
              src={LegionExhibitionEntrance}
              alt=""
            />
          </strong>
        </Link>
      </div>
      {/*Closing div SlideshowHostPhotoJune*/}
      <div className="datenewsDivJune">
        <section className="dateJune">23rd June 2024, Sunday</section>
        <section className="newsheaderJune">
          Visit to Knebworth House and Gardens, Stevenage
        </section>
        <br />
        <section className="newsJune">
          Today we decided on a visit out to{" "}
          <Link
            to="https://knebworthhouse.com/"
            target="_blank"
            title="Click here 
              to discover more about Knebworth House and Gardens"
            className="LinkJune"
          >
            Knebworth House and Gardens
          </Link>{" "}
          ; well the gardens really as it was a pleasant day and they are 28
          acres of formal gardens in total, which include a dinosaur trail. The
          house and gardens are situated 29 miles north of London, just off
          junction 7 of the A1(M) motorway. It is important to follow the SG1
          2AX postcode setting rather than google directions to accurately find
          the visitors entrance. It is the historic home of the Lyttons since
          1490 and for Historic Houses members, entrance is free. There is also
          plenty free parking and a large tea room.
          <br />
          <br />
          The architect Edward Lutyens was responsible for simplifying the
          ornate beds and statuary of the Victorian garden with lawns and
          avenues of pollarded lime trees. I thought the names 'Lutyens' and
          Gertrude Jekyll rang a bell from recently, and indeed it was Edward
          Lutyens together with Gertrude jekyll who refurbished Lindisfarne
          Castle, Holy Island, Northumbria for Edward Hudson of Country Life
          Magazine when Edward Hudson took on the lease in 1901.
          <br />
          <br />
          After an enjoyable few days away, we headed on the long journey north
          back to Cumbria, deftly avoiding a long hold-up on the M1 by taking a
          diversion remembered from decades ago when Jill used to drive this
          route daily and knew many quieter diversions when the motorway ground
          to a halt. Our later departure, to avoid the worst of the traffic
          hold-ups, meant we only arrived home about 23.30 but it was still just
          about light and we were welcomed by a beautiful Cumbrian sunset....
        </section>
      </div>
      <div className="blogPhotoDivJune">
        <figure>
          <section className="blogPhotoJune">
            <img src={GiraffesKnebworth} alt="" />
            <figcaption className="juneFigCaption">
              <strong>
                Giraffes wandering in the garden <br /> at Knebworth....well,
                models of <br /> giraffes anyway, not the real thing...
              </strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={GardensKnebworth1} alt="" />
            <figcaption className="juneFigCaption">
              <strong>Wandering through the gardens, Knebworth House</strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={DinosaursKnebworth} alt="" />
            <figcaption className="juneFigCaption">
              <strong>
                Model of Pteranodon <br /> Dinosaur - from the Cretaceous <br />{" "}
                period, 135 million years ago
              </strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={HerbgardenKnebworth} alt="" />
            <figcaption className="juneFigCaption">
              <strong>Herb garden Knebworth House</strong>
            </figcaption>
          </section>
        </figure>
      </div>
      <div className="blogPhotoDivJune">
        <figure>
          <section className="blogPhotoJune">
            <img src={JillAlanKnebworth} alt="" />
            <figcaption className="juneFigCaption">
              <strong>
                Enjoying the gardens <br /> at Knebworth
              </strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={RosegardenKnebworth} alt="" />
            <figcaption className="juneFigCaption">
              <strong>Rose garden, Knebworth</strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={HouseKnebworth} alt="" />
            <figcaption className="juneFigCaption">
              <strong>Knebworth House</strong>
            </figcaption>
          </section>
        </figure>
        <figure>
          <section className="blogPhotoJune">
            <img src={SunsetCumbria} alt="" />
            <figcaption className="juneFigCaption">
              <strong>
                Arriving home to <br /> a beautiful Cumbrian <br /> sunset at
                23.00
              </strong>
            </figcaption>
          </section>
        </figure>
      </div>
      <div className="datenewsDivJune">
        <section className="dateJune">29th June 2024</section>
        <section className="newsheaderJune">
          {" "}
          Stage 5 of our Hadrian's Wall Path Expedition successfully completed
        </section>
        <br />
        <section className="newsJune">
          Today we successfully completed Stage 6 of our Hadrian's Wall Path
          Expedition, Chollerford to Carrawburgh/Broccolitia Fort ( 3a and 3b).
          All the information about this trip for today and for the remaining
          stages over the forthcoming weeks and months, please come and join us
          at our
          <Link to="/hwp2024" className="LinkJune">
            {" "}
            Hadrian's Wall Path Expedition page{" "}
          </Link>
        </section>
      </div>
      <div className="datenewsDivJune">
        <section className="dateJune">30th June 2024</section>
        <section className="newsheaderJune">
          {" "}
          Stage 6 of our Hadrian's Wall Path Expedition successfully completed
        </section>
        <br />
        <section className="newsJune">
          Today we successfully completed Stage 7 of our Hadrian's Wall Path
          Expedition, Carrawburgh/Broccolitia Fort to Housesteads Roman Fort( 3c
          and 3d). All the information about this trip for today and for the
          remaining stages over the forthcoming weeks and months, please come
          and join us at our
          <Link to="/hwp2024" className="LinkJune">
            {" "}
            Hadrian's Wall Path Expedition page{" "}
          </Link>
        </section>
      </div>
    </div>
  );
}
