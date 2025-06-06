import React from "react";
import { Link } from "react-router-dom";
import "./January2025.css";
import "./January2025.scss";
import CatLennie from "components/catlennie";
import Snowstorm from "components/snowstorm";
import SnowTalkinFell09012025Title from "./imagesresized/SnowTalkinFell09012025Title.jpg";
import LennieJan20251 from "./imagesresized/LennieJan20251.jpg";
import LennieJan20252 from "./imagesresized/LennieJan20252.jpg";
import TreeDownTalkin20251 from "./imagesresized/TreeDownTalkin20251.jpg";
import TreeDownTalkin20252 from "./imagesresized/TreeDownTalkin20252.jpg";
import RooflessShedTalkin from "./imagesresized/RooflessShedTalkin.jpg";

export default function January2025() {
  return (
    <div className="mainJanuary">
      <div div className="January2025Header">
        {" "}
        January 2025
        <button id="backbuttonDecember">
          <Link to="/" className="backbuttonLink" style={{ color: "black" }}>
            Back
          </Link>
        </button>
        <Snowstorm />
        <CatLennie />
      </div>
      <div className="backgroundJanuary2025">
        <section className="dateJanuary" style={{ marginTop: "0%" }}>
          January 1st - 31st 2025
        </section>
        <section className="newsheaderJanuary">
          {" "}
          WISHING EVERYONE A VERY HAPPY NEW YEAR!
        </section>
        <section className="newsJanuary" style={{ textAlign: "left" }}>
          Welcome to our January blog.
          <br />
          <br />
          This month, as it is January, we have returned to our snowy scene.
          However, given Lennie does not like the snow and he likes to keep
          warm, on our header design this month, we have created an igloo for
          him, a heated mat to lie on and some dinner to eat, which he is
          enjoying.
          <br />
          <br />
          We have added 2 robins to the animation as he likes to sleep in his
          basket right by the patio window and look outside to survey his
          domain. Often birds can be seen hopping towards the glass and looking
          in at Lennie, and then hopping away again happily as they know he is
          inside.
          <br />
          <br />
          The design and animations on this page have been created using SVG
          (scalable vector graphics), html, css and javascript. The design for
          the robins was created by referring to images of a robin and trying to
          recreate a representative example of what we see in real life.
          <br />
          <br />
          If you have any problems with the page and animations displaying
          correctly please could you let me know as usual, via the Problem
          Feedback button at the bottom of the home page of this website. It is
          much appreciated as whilst all the designs are tested using developer
          tools across different device settings before release, sometimes the
          displays will not run in the intended way and it is only by knowing
          about it I can try and correct it.
          <br />
          <br />
        </section>

        <section className="dateJanuary">January 9th 2025, Thursday</section>
        <section className="newsheaderJanuary">
          {" "}
          SNOWY WONDERLAND: 6.7 mile walk into the local hills.{" "}
        </section>
        <section className="newsJanuary" style={{ textAlign: "left" }}>
          Since the 5th January we have had snow which has persisted due to
          freezing temperatures and clear skies. Bernard has gained weight since
          Christmas so decided we needed to get some exercise! Hence, we entered
          today into a brilliantly sunny, freezing, snowy wonderland. With snow
          boots on our feet and taking appropriate care, we ventured out into
          the icy wilderness feeling rather like Captain Scott on his final
          journey into the Antarctic.....
          <br />
          <br />
        </section>

        <div className="SlideshowHostPhotoJanuary">
          <div className="slideshowinstructionsJanuary">
            {" "}
            <strong>
              Click on the image below to open the photo album and see the snowy
              wonderland.
            </strong>{" "}
          </div>{" "}
          {/*Closing div slideshowinstructionsJanuary*/}
          <br /> <br />
          <Link
            to="https://photos.app.goo.gl/EZC9TLLSs9eX22tS9"
            target="_blank"
            title="Click on the link and read the full comments on each photo to see the best and worst of Lennie 2024."
          >
            <img
              className="slideshowentryJanuary"
              src={SnowTalkinFell09012025Title}
              alt=""
            />
          </Link>
        </div>

        <section className="dateJanuary">January 15th 2025, Wednesday</section>
        <section className="newsheaderJanuary">
          {" "}
          WENT TO SEE THE FILM 'MARIA', STARRING ANGELINA JOLIE, AT THE RHEGED
          CENTRE.{" "}
        </section>
        <section className="newsJanuary" style={{ textAlign: "left" }}>
          Today we went to see the newly-released film 'Maria', based on the
          final weeks in the opera singer Maria Callas's life, at the Rheged
          Centre.
          <br />
          <br />
          Whilst not usually a great fan of Angelina Jolie, in my opinion she
          was particularly impressive in this film, as the role of Maria Callas
          is a very difficult one to play. I have had a personal fascination
          with Callas since I was in my teens and first read about her at the
          time of her death in 1977. She was and remains for me the most
          outstanding female opera singer of our time, not so much for the tonal
          perfection of her singing as for her ability to bring alive the
          character of the parts she is playing in the same way that Rudolf
          Nureyev did for ballet. Both of them had something quite exceptional.
          <br />
          <br />
          The film was quite slow-moving to start but very artistically created;
          however after a while it draws you in. There had clearly been much
          work which had gone into the production. Maria Callas had 2 very cute
          poodles and these were represented in the film so Bernard and I have
          nominated them for Oscars as they were brilliant actors. Bernard was
          rather unenthusiastic about going to this film but he came out having
          genuinely enjoyed it so it is not just for absolute opera-buffs. It
          was a change also to have a film which was more in the style of the
          European Arts films which we used to see at the{" "}
          <Link
            to="https://homemcr.org/history/cornerhouse/"
            target="_blank"
            title="Click here to discover about the Cornerhouse, Manchester"
            className="LinkJanuary2025"
          >
            {" "}
            Cornerhouse{" "}
          </Link>{" "}
          in Manchester, but do not seem to be released as often these days.
          <br />
          <br />
          Actually, for anyone who is interested and who cannot make it as far
          as the Cornerhouse in Manchester, I have just noticed that these days,
          you can if you wish pay a monthly fee to have a HOME film pass and
          have access to tickets to view the new releases at the Cornerhouse
          (excepting occasional ones) at home, any time, as many times as you
          like. If anyone is interested, details about the{" "}
          <Link
            to="https://homemcr.org/visit/filmpass/"
            target="_blank"
            className="LinkJanuary2025"
          >
            HOME film pass
          </Link>{" "}
          at the Cornerhouse can be found on the link.
          <br />
          <br />
        </section>

        <section className="dateJanuary">
          January 24th -26th 2025, Thursday
        </section>
        <section className="newsheaderJanuary">
          {" "}
          STORM ÉOWYN and its aftermath...{" "}
        </section>
        <section className="newsJanuary" style={{ textAlign: "left" }}>
          Storm Éowyn hit Cumbria on the 24th January 2024 bringing maximum
          winds of 84 miles an hour at Brampton weather station and the most
          prolonged gale force storm we have ever had, hitting gale force 9.
          Harry had received a red alert on his mobile phone, although Bernard
          and I did not receive one on ours. We could see the tarn from our
          house, with what looked like mini tornadoes running across its
          surface.
          <br />
          <br />
          The main challenge though was that the power lines went down at about
          10.45am and were not reinstated until after 20.00 in the evening.
          Fortunately, we have some battery driven lights and a gas hob so were
          still able to make some food and warm drinks and to use the log burner
          for heating. The farmer at the rear of our property was rather more
          ingenious though and had a generator on his tractor which he was using
          to power the electricity to the farmhouse on an emergency supply.
          North West Electric had been helpful and set up a number of warm
          spaces across the county, where warm food and drink could be accessed,
          the closest one to us being Brampton. Lennie does not like the wind
          and had been trying to hide in the wardrobe.....
          <br />
          <br />
          The good news was that on review for any structural damage of the
          property the following morning, there was none noted and Bernard's
          greenhouse had once again survived the storm. Unfortunately, one of
          the houses locally has lost all the ridge tiles on the extension.
          <br />
          <br />
          Storm Éowyn has been reported as being one of the strongest storms in
          a generation, and caused widespread travel problems, power cuts and
          significant damage to infrastructure. The area worse hit was Ireland.
          <br />
          <br />
        </section>

        <div className="blogPhotoDivJanuary">
          <figure>
            <section className="blogPhotoJanuary">
              <img src={TreeDownTalkin20251} alt="" />
              <figcaption className="januaryFigCaption">
                <strong>Tree down by Talkin Tarn, blocking the path(1)</strong>
              </figcaption>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJanuary">
              <img src={TreeDownTalkin20252} alt="" />
              <figcaption className="januaryFigCaption">
                <strong>Tree down by Talkin tarn, blocking the path(2)</strong>
              </figcaption>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJanuary">
              <img src={RooflessShedTalkin} alt="" />
              <figcaption className="januaryFigCaption">
                <strong>
                  The boating shed at the tarn has lost its roof....
                </strong>
              </figcaption>
            </section>
          </figure>
        </div>
        <div className="blogPhotoDivJanuary">
          <figure>
            <section className="blogPhotoJanuary">
              <img src={LennieJan20251} alt="" />
              <figcaption className="januaryFigCaption">
                <strong>
                  {" "}
                  Lennie meanwhile is playing that age-old <br /> cat
                  trick....of sleeping where you <br /> least want him to...{" "}
                </strong>
              </figcaption>
            </section>
          </figure>
          <figure>
            <section className="blogPhotoJanuary">
              <img src={LennieJan20252} alt="" />
              <figcaption className="januaryFigCaption">
                <strong></strong>...in this case on Harry's clean interview
                clothes!.....{" "}
              </figcaption>
            </section>
          </figure>
        </div>
      </div>
    </div>
  );
}
