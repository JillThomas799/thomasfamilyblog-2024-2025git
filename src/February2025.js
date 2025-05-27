import React from "react";
import "./February2025.css";
import { Link } from "react-router-dom";
import Deer from "components/deer";
import BigBen15022025 from "./imagesresized/BigBen15022025.jpg";
import WestminsterBridge15022025 from "./imagesresized/WestminsterBridge15022025.jpg";
import HoPTour1 from "./imagesresized/HoPTour1.jpg";
import HoPTour2 from "./imagesresized/HoPTour2.jpg";
import HoPTour3 from "./imagesresized/HoPTour3.jpg";
import LunchZedel from "./imagesresized/LunchZedel.jpg";
import NickBuckinghamPalace from "./imagesresized/NickBuckinghamPalace.jpg";
import Coffee15022025 from "./imagesresized/Coffee15022025.jpg";
import GreenPark15022025 from "./imagesresized/GreenPark15022025.jpg";
import WhitehavenHarbour1 from "./imagesresized/WhitehavenHarbour1.jpg";
import WhitehavenHarbour2 from "./imagesresized/WhitehavenHarbour2.jpg";
import SeagullSignWhitehaven from "./imagesresized/SeagullSignWhitehaven.jpg";
import BAEBarrow from "./imagesresized/BAEBarrow.jpg";
import ViewFromBridgeBarrowDocks from "./imagesresized/ViewFromBridgeBarrowDocks.jpg";
import HarryBarrowDocks from "./imagesresized/HarryBarrowDocks.jpg";
import SeagullBAE from "./imagesresized/SeagullBAE.jpg";
import HolyIsland22022025 from "./imagesresized/HolyIsland22022025Title.jpg";

export default function February2025() {
  return (
    <div className="bodyFeb2025">
      <div className="February2025header">
        {" "}
        February 2025
        <button id="backbuttonFebruary2025">
          <Link to="/" className="backbuttonLink">
            Back
          </Link>
        </button>
      </div>

      <div className="stageBorder">
        <div className="snowScene">
          {/* <div className="curtain1"> </div> */}
          <Deer />
          {/* <div className="curtain2"></div> */}
          <div className="groundSnow"></div>
        </div>
      </div>
      <section className="dateFebruary" style={{ marginTop: "0%" }}>
        February 1st - 28th 2025
      </section>
      <section className="newsheaderFebruary">
        {" "}
        WELCOME TO OUR FEBRUARY BLOG
      </section>
      <section className="newsFebruary" style={{ textAlign: "left" }}>
        This month we are introducing as part of our header design some new
        animal friends who live near to us. These are the 3 deer who we see most
        days as we walk down to the lake. The design for the deer has been
        undertaken from first principles; analyzing photographic images and then
        using SVG to create a set of images which represent as closely as
        possible the deer whom we meet.
        <br />
        <br />
      </section>

      <section className="dateFebruary" style={{ marginTop: "0%" }}>
        February 4th and 17th 2025
      </section>
      <section className="newsheaderFebruary">
        {" "}
        HARRY EXPLORES SOME OPPORTUNITIES FOR EMPLOYMENT
      </section>
      <section className="newsFebruary" style={{ textAlign: "left" }}>
        Harry has been working very hard to explore further job opportunities
        now he has successfully completed his PhD. This has involved some
        reconnaissance activity, so on the 4th of February 2025 he was out near
        Whitehaven in Cumbria and then on the 17th February at the naval
        dockyard in Barrow-in-Furness, Cumbria. Applying for a graduate job
        seems to be a full time job in itself.
        <br />
        <br />
      </section>

      <div className="blogPhotoDivFebruary">
        <fig>
          <section className="blogPhotoFebruary">
            <img src={WhitehavenHarbour1} alt="" />
            <figcaption className="februaryFigCaption">
              <strong>
                Out at Whitehaven, <br />
                on the west coast of Cumbria.
              </strong>
            </figcaption>
          </section>
        </fig>
        <fig>
          <section className="blogPhotoFebruary">
            <img src={WhitehavenHarbour2} alt="" />
            <figcaption className="februaryFigCaption">
              <strong></strong>Fishing boats on Whitehaven harbour.
            </figcaption>
          </section>
        </fig>
        <fig>
          <section className="blogPhotoFebruary">
            <img src={SeagullSignWhitehaven} alt="" />
            <figcaption className="februaryFigCaption">
              <strong></strong>Checking out the seagull density <br />
              ... presumably not insignificant <br /> given this sign....
            </figcaption>
          </section>
        </fig>
      </div>

      <div className="blogPhotoDivFebruary">
        <fig>
          <section className="blogPhotoFebruary">
            <img src={BAEBarrow} alt="" />
            <figcaption className="februaryFigCaption">
              <strong>
                BAE Systems, Barrow,
                <br />
                on the west coast of Cumbria.
              </strong>
            </figcaption>
          </section>
        </fig>
        <fig>
          <section className="blogPhotoFebruary">
            <img src={ViewFromBridgeBarrowDocks} alt="" />
            <figcaption className="februaryFigCaption">
              <strong></strong>View from the bridge, <br /> Barrow docks.
            </figcaption>
          </section>
        </fig>
        <fig>
          <section className="blogPhotoFebruary">
            <img src={HarryBarrowDocks} alt="" />
            <figcaption className="februaryFigCaption">
              <strong></strong>Harry exploring Barrow docks.
            </figcaption>
          </section>
        </fig>
        <fig>
          <section className="blogPhotoFebruary">
            <img src={SeagullBAE} alt="" />
            <figcaption className="februaryFigCaption">
              <strong></strong>Meeting and greeting one of <br /> the local
              seagulls....
            </figcaption>
          </section>
        </fig>
      </div>

      <section className="dateFebruary" style={{ marginTop: "0%" }}>
        February 15th 2025
      </section>
      <section className="newsheaderFebruary">
        {" "}
        VISIT TO LONDON, HOUSES OF PARLIAMENT TOUR AND LUNCH AT BRASSERIE ZÉDEL,
        LONDON ..... Well OK, with one woman down.
      </section>
      <section className="newsFebruary" style={{ textAlign: "left" }}>
        This weekend, we had booked a{" "}
        <Link
          to="https://www.parliament.uk/visiting/visiting-and-tours/"
          target="_blank"
          title="Click here to discover more about the Houses of Parliament Tours"
          className="LinkFebruary2025"
        >
          {" "}
          tour{" "}
        </Link>{" "}
        of the Houses of Parliament together and invited Bernard's brother
        Nicholas along as, despite having worked close-by for many years, he had
        never been to visit inside the building. It seems to so often be the
        case that when you work in an area you never have the time to see the
        tourist sites on your doorstep! We had never been to see inside the
        Houses of Parliament, although of course we have seen the debating
        chamber many times on TV and so had been awaiting this trip with
        anticipation. There are 2 options for the tour: (1){" "}
        <Link
          to="https://www.parliament.uk/visiting/visiting-and-tours/tours-of-parliament/guided-tours-of-parliament/"
          target="_blank"
          title="Click here to discover more about the guided tours of the Houses of Parliament."
          className="LinkFebruary2025"
        >
          {" "}
          A guided tour{" "}
        </Link>{" "}
        and (2){" "}
        <Link
          to="https://tickets.parliament.uk/timeslot/uk-parliament-multimedia-tour"
          target="_blank"
          title="Click here to discover more about the guided tours of the Houses of Parliament."
          className="LinkFebruary2025"
        >
          {" "}
          A self-guided audio tour{" "}
        </Link>
        . As things stand currently the tours run on Saturdays throughout the
        year and during the recess from Mondays to Saturdays. The current prices
        of the tours can be found{" "}
        <Link
          to="https://www.parliament.uk/visiting/visiting-and-tours/tour-prices-from-1-april-2024/"
          target="_blank"
          title="Click here to discover more about pricing for the the Houses of Parliament Tours"
          className="LinkFebruary2025"
        >
          {" "}
          here{" "}
        </Link>
        .
        <br />
        <br />
        Following this, a meal had been booked at{" "}
        <Link
          to="https://www.brasseriezedel.com/"
          target="_blank"
          title="Click here to discover more about Brasserie Zédel and some sample menus"
          className="LinkFebruary2025"
        >
          {" "}
          Brasserie Zédel
        </Link>{" "}
        , a Parisian Brasserie in 1930s style, which had been personally
        recommended to us.
        <br />
        <br />
        Unfortunately, due to an unforeseen family emergency this weekend, Jill
        was unable to undertake the trip after all as she needed to stay back
        home to take care of things, but thankfully Bernard and Nicholas were
        still able to go. As can be seen, the weather was typical for the UK in
        February with dark and gloomy skies. Nonetheless Bernard and Nicholas
        really enjoyed it and Jill is going to rearrange a visit for herself and
        Bernard later in the year.
      </section>

      <div className="blogPhotoDivFebruary">
        <fig>
          <section className="blogPhotoFebruary">
            <img src={BigBen15022025} alt="" />
            <figcaption className="februaryFigCaption">
              <strong>
                Big Ben and the Houses of Parliament <br /> from Westminster
                Bridge
              </strong>
            </figcaption>
          </section>
        </fig>
        <fig>
          <section className="blogPhotoFebruary">
            <img src={WestminsterBridge15022025} alt="" />
            <figcaption className="februaryFigCaption">
              <strong>
                View from Westminster Bridge
                <br />
                looking down past the Houses <br /> of Parliament towards Canary
                Wharf
              </strong>
            </figcaption>
          </section>
        </fig>
        <fig>
          <section className="blogPhotoFebruary">
            <img src={HoPTour1} alt="" />
            <figcaption className="februaryFigCaption">
              <strong>
                Nicholas in Westminster Hall, the only part <br /> of the
                medieval palace of Westminster <br /> to survive a fire in 1834.
              </strong>
            </figcaption>
          </section>
        </fig>
      </div>

      <div className="blogPhotoDivFebruary">
        <fig>
          <section className="blogPhotoFebruary">
            <img src={HoPTour2} alt="" />
            <figcaption className="februaryFigCaption">
              <strong>
                {" "}
                Sited at the entrance to St Stephen’s Hall, <br /> Houses of
                Parliament, the light sculpture <br /> by Mary Branson (above)
                marking the <br /> centenary of votes for women.
              </strong>
            </figcaption>
          </section>
        </fig>
        <fig>
          <section className="blogPhotoFebruary">
            <img src={HoPTour3} alt="" />
            <figcaption className="februaryFigCaption">
              <strong></strong>St Stephen's Hall with the statues of <br />{" "}
              famous parliamentarians.
            </figcaption>
          </section>
        </fig>
        <fig>
          <section className="blogPhotoFebruary">
            <img src={LunchZedel} alt="" />
            <figcaption className="februaryFigCaption">
              <strong>Lunch at Brasserie Zédel</strong>
            </figcaption>
          </section>
        </fig>
      </div>

      <div className="blogPhotoDivFebruary">
        <fig>
          <section className="blogPhotoFebruary">
            <img src={NickBuckinghamPalace} alt="" />
            <figcaption className="februaryFigCaption">
              <strong>Nicholas outside Buckingham Palace</strong>
            </figcaption>
          </section>
        </fig>
        <fig>
          <section className="blogPhotoFebruary">
            <img src={Coffee15022025} alt="" />
            <figcaption className="februaryFigCaption">
              <strong></strong>Time for a well-earned coffee
            </figcaption>
          </section>
        </fig>
        <fig>
          <section className="blogPhotoFebruary">
            <img src={GreenPark15022025} alt="" />
            <figcaption className="februaryFigCaption">
              <strong>Then time to head home ....</strong>
            </figcaption>
          </section>
        </fig>
      </div>

      <section className="dateFebruary" style={{ marginTop: "0%" }}>
        February 22nd 2025, Saturday
      </section>
      <section className="newsheaderFebruary">
        {" "}
        VISIT TO HOLY ISLAND OF LINDISFARNE IN THE SUNSHINE WITH ELENA AND
        HARRY.
      </section>
      <section className="newsFebruary" style={{ textAlign: "left" }}>
        We related in early May how we had driven out to visit the Holy Island
        of Lindisfarne on the Northumbrian coast. At the time we said that when
        the tide times were right at a weekend, we would return with Elena and
        Harry so they could visit also as it is a site which is well worth
        visiting.
        <br />
        <br />
        The decision to visit on this occasion was made at very short notice,
        but having visited before recently not much planning was required, just:
        <ol>
          <li className="tickList">
            ✓ Check safe{" "}
            <Link
              to="https://holyislandcrossingtimes.northumberland.gov.uk/"
              target="_blank"
              title="Click here to check the Holy Island tide timetable"
              className="LinkFebruary2025"
            >
              {" "}
              tide crossings{" "}
            </Link>{" "}
            - 10.50 until 20.40.
          </li>
          <li className="tickList">✓ Check best day - Saturday. </li>
          <li className="tickList">
            ✓ Check weather - 11 degrees, brilliant sunshine.
          </li>
        </ol>
        <br />
        We had a light lunch at{" "}
        <Link
          to="https://1stclassfoodholyisland.co.uk/"
          target="_blank"
          title="Click here to discover more about First Class Food"
          className="LinkFebruary2025"
        >
          First Class Food
        </Link>
        , before going on to visit the Priory and adjacent museum which are both
        owned and managed by English Heritage.
        <br />
        <br />
        Holy Island of Lindisfarne is one of the most important centres of early
        English Christianity. St Aidan, an Irish monk sho lived in Iona in
        Scotland, founded the first monastery on Holy Island in AD 635 and the
        monastery later became the centre of a major saint's cult celebrating
        its bishop, Cuthbert.
        <br />
        <br />
        Christianity first came to Britain in Roman times in the 1st century
        AD/CE, sitting alongside the existing religious cults of worshiping the
        Pagan gods or Roman gods. From 313 AD onwards, due to the roman emperor
        Constantine Christian worship was tolerated within the Roman Empire.
        <br />
        <br />
        After the Romans left Britain in around AD/CE 410, the Anglo-Saxons from
        Northern Germany and Southern Scandinavia (Denmark and the Netherlands)
        settled, particularly in the West and Wales. They were not at the time
        Christians and followed their own religion although Christianity
        continued in some areas where the Anglo-Saxons had not settled. As a
        result, in AD595 Pope Gregory sent a mission to Britain led by St
        Augustine to convert the Anglo-Saxons to Christianity. Augustine arrived
        in Kent and firstly converted the king there, Ethelbert. Overtime more
        Anglo-Saxon kings and the population also became Christians as it was
        seen as one way in which they could unite people. For more basic summary
        information on the Anglo-Saxons and the rise of Christianity in Britain
        click{" "}
        <Link
          to="https://www.bbc.co.uk/bitesize/articles/zs3gcdm#zyk77yc"
          target="_blank"
          className="LinkFebruary2025"
        >
          here
        </Link>
        <br />
        <br />
        By the 7th century the Northumbrian kingdom of{" "}
        <Link
          to="https://englandsnortheast.co.uk/king-oswald-aidan/"
          target="_blank"
          className="LinkFebruary2025"
        >
          King Oswald of Northumbria
        </Link>{" "}
        (born around 603, ruled 633-642), who was the son of King Æthelfrith,
        ruler of the kingdoms of Bernicia and Deira, dominated Britain.
        Northumbria consisted of two parts: Deira, centred on the old Roman city
        of York, and Bernicia further north. Oswald’s accession in 634 focused
        Northumbrian power in Bernicia, around the royal palaces at Yeavering,
        Mælmin (Milfield) and Bamburgh. After Æthelfrith's death in 616, Oswald
        was expelled from Northumbria by his uncle Edwin. He and his brother
        took refuge on the Scottish island of Iona, where they converted to
        Christianity. King Oswald was determined to reintroduce Christianity to
        the North-East and so employed St Aidan, an Irish monk from Iona, to
        convert Northumbria to Celtic Christianity. Oswald granted Aidan and his
        companions the small tidal island of Lindisfarne on which to establish a
        monastery. and he became the first Bishop of Lindisfarne.
        <br />
        <br />
        It is important to note that Celtic Christianity was slightly different
        in terms of customs, organisation and values to the Roman style of
        Christianity introduced by Paulinus under King Edwin. These differences
        are largely subtle and presentational but they were resolved at the
        Synod of Whitby in 664. The Roman Catholic Church was strictly
        hierarchical, legalistic, and elitist, whereas the Celtic Church was
        provincial and local based, monastic, mystical, and celebrated the
        sacredness of nature, thus reflecting the patterns of life in the
        communities in which the church flourished.
        <br />
        <br />
        The information provided by{" "}
        <Link
          to="https://www.english-heritage.org.uk/visit/places/lindisfarne-priory/History/"
          Target="_blank"
          className="LinkFebruary2025"
        >
          English Heritage
        </Link>{" "}
        tells us thatSometime in the 670s a monk named Cuthbert joined the
        monastery at Lindisfarne. He eventually became Lindisfarne’s greatest
        monk-bishop, and the most important saint in northern England in the
        Middle Ages. As prior of Lindisfarne, Cuthbert reformed the monks’ way
        of life to conform to the religious practices of Rome rather than
        Ireland. This caused bitterness, and he decided to retire and live as a
        hermit. He lived at first on an island (now called St Cuthbert’s Isle)
        just offshore, but later moved across the sea to the more remote island
        of Inner Farne. On the insistence of the king, however, Cuthbert was
        made a bishop in 685. His new duties brought him back into the world of
        kings and nobles, but he acquired a considerable reputation as a pastor,
        seer and healer.
        <br />
        <br />
        Cuthbert died on 20 March 687 and was buried in a stone coffin inside
        the main church on Lindisfarne. Eleven years later, on opening his tomb,
        the monks discovered that Cuthbert’s body had not decayed, a sign
        according to the monks of his purity and saintliness. His remains were
        elevated to a coffin-shrine at ground level, and this marked the
        beginnings of the cult of St Cuthbert, which was to alter the course of
        Lindisfarne’s history. Miracles were soon reported at St Cuthbert’s
        shrine and Lindisfarne was quickly established as the major pilgrimage
        centre in Northumbria. As a result, the monastery grew in power and
        wealth, attracting grants of land from kings and nobles as well as gifts
        of money and precious objects. The cult of St Cuthbert also consolidated
        the monastery’s reputation as a centre of Christian learning. One of the
        results was the production in about 710–25 of the masterpiece of early
        medieval art known today as the{" "}
        <Link
          to="https://www.lindisfarne.org.uk/gospels/"
          target="_blank"
          className="LinkFebruary2025"
        >
          Lindisfarne Gospels
        </Link>{" "}
        .
        <br />
        <br />
        On the 8th June AD/ACE 793, the Vikings attacked. It was their first
        significant raid in Europe and was physically and psychologically
        devastating: one of England’s holiest shrines had been attacked by
        pagans, and St Cuthbert had not intervened to stop them. As a result of
        these attacks the monks moved inland to Norham and later settled in
        Chester-le-Street. In 875 the decision was made to leave Lindisfarne for
        good. In 995 St Cuthbert’s relics were moved again and eventually
        enshrined at Durham, where they remain. The prosperity of the Durham
        monastic community was based on its ability to attract pilgrims to the
        shrine.
        <br />
        <br />
        In the 11th to 13th century the Durham monks returned to Lindisfarne and
        built the{" "}
        <Link
          to="https://www.english-heritage.org.uk/visit/places/lindisfarne-priory/"
          target="_blank"
          className="LinkFebruary2025"
        >
          priory{" "}
        </Link>
        with a cenotaph marking Cuthbert's original grave.
      </section>

      <div className="SlideshowHostPhotoFebruary">
        <div className="slideshowinstructionsFebruary">
          {" "}
          <strong>
            Click on the image below to open the album of our visit to Holy
            Island in the sun with Elena and Harry
          </strong>{" "}
        </div>{" "}
        {/*Closing div slideshowinstructionsJanuary*/}
        <br /> <br />
        <Link to="https://photos.app.goo.gl/yPoaNMU6KcRfJycJA" target="_blank">
          <img
            className="slideshowentryFebruary"
            src={HolyIsland22022025}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
