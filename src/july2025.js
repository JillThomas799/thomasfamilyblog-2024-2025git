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
import GraduationCardiff1Titled from "./imagesresized/GraduationCardiff1Titled.jpg";
import medievalReenactmentTitled from "./imagesresized/medievalReenactmentTitled.jpg";
import Glynebourne2025Titled from "./imagesresized/Glynebourne2025Titled.jpg";
import London30072025Titled from "./imagesresized/London30072025Titled.jpg";
import ShawsCorner31072025Titled from "./imagesresized/ShawsCorner31072025Titled.jpg";

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

          <section className="dateJuly2025">18th July 2025, Friday</section>
          <section className="newsHeaderJuly2025">
            Cardiff PhD Graduation Day: Harry officially becomes 'Dr Harry'
            <br /> accompanied by lots of Welsh singing and speaking.
          </section>
          <section className="newsJuly2025">
            The day had finally arrived which we had all been awaiting for some
            time: that of Harry's doctoral graduation ceremony in Cardiff. Harry
            had been looking forward to the 'floppy hat' ceremony, more
            officially known as the ceremony where the full doctoral regalia is
            worn including the 'Tam' hats. Much better than the 'bucket hats',
            more officially known as the 'mortarboards' of the graduation
            ceremony.
            <br />
            <br />
            We had fortunately managed to rent some very pleasant{" "}
            <Link
              to="https://www.airbnb.co.uk/rooms/609320701093859071?adults=1&search_mode=regular_search&check_in=2025-08-09&check_out=2025-08-14&children=0&infants=0&pets=0&source_impression_id=p3_1753261446_P3onrYSGnR9aShXj&previous_page_section_name=1000&federated_search_id=8292d703-7e53-49a8-9b2e-fcda546f054d"
              target="_blank"
              className="linkJuly2025"
            >
              {} self-catering accommodation in an airBNB in Bonvilston
            </Link>
            , just outside Cardiff, for a few days.
            <br />
            <br />
            Our experience of Cardiff University over the past 5 years has been
            that it is a great university which makes its students feel very
            welcome. Cardiff is a lovely city which is well worth a visit for
            anyone who has never been, or a revisit for those who have.
            <br />
            <br />
            The graduation ceremony was held at the{" "}
            <Link
              to="https://www.utilitaarenacardiff.co.uk/"
              target="_blank"
              className="linkJuly2025"
            >
              {} Utilita Arena, Cardiff.
            </Link>
            {} Harry's ceremony was at 15.30 and consisted of the School of
            Architecture, Chemistry and Physics and Astronomy graduates and
            doctorates. We were sat towards the back of the auditorium but the
            view was clear and there were large TV screens on either side to
            project the close-up images. The university were running a live-feed
            of the ceremony online so Elena (who was back in Cumbria minding
            Lennie), and Lennie himself were watching the ceremony on the
            live-feed on you tube.
            <br />
            <br />
            The opening procession of the ceremony was accompanied by the Welsh
            hymn{" "}
            <Link
              to="https://en.wikipedia.org/wiki/Calon_L%C3%A2n"
              target="_blank"
              className="linkJuly2025"
            >
              Calon Lân
            </Link>{" "}
            {}, which can be heard{" "}
            <Link
              to="https://open.spotify.com/track/4018M1GQWCpjdHOwdFmVgU"
              target="_blank"
              className="linkJuly2025"
            >
              here
            </Link>{" "}
            sung by the Treorchy Male Voice Choir. The words were written in the
            1890s by Daniel James (Gwyrosydd) and sung to a tune by John Hughes.
            For all Welsh rugby supporters, whilst originally being written as a
            hymn, it is more widely recognised now as a rugby anthem associated
            with the Welsh rugby union.
            <br />
            <br />
            It was lovely to see Harry obtaining his well-deserved award and to
            take part in the ceremony. After some lovely speeches in both
            English and Welsh,{" "}
            <Link
              to="https://www.bass12.co.uk/"
              target="_blank"
              className="linkJuly2025"
            >
              Bass12
            </Link>{" "}
            a riot jazz, brass covers band, put on a very impressive show to
            lead the exit procession.
          </section>
          <div className="SlideshowHostPhotoJuly2025">
            <div className="slideshowinstructionsJuly2025">
              {" "}
              <strong>
                Click on the image below to open the album <br /> of Harry's
                Cardiff graduation ceremony.
                <br />
              </strong>
              <br />
              <Link
                to="https://photos.app.goo.gl/wM5DEM5YUrXNbqTk7"
                target="_blank"
                className="linkJuly2025"
              >
                <img
                  className="slideshowentryJuly2025"
                  src={GraduationCardiff1Titled}
                  alt=""
                />
              </Link>
            </div>{" "}
            {/*Closing div slideshowinstructionsJuly2025*/}
          </div>
          {/*Closing div slideshowHostJuly2025*/}

          <section className="dateJuly2025">20th July 2025, Friday</section>
          <section className="newsHeaderJuly2025">
            A day of Medieval Reenactment at Greystoke Castle
          </section>
          <section className="newsJuly2025">
            Our friends had invited us to a Medieval Reenactment Weekend taking
            place at Greystoke Castle, Penrith on the weekend of the 19th and
            20th July, 2025 as their daughter was taking part, and we had never
            attended such an event before. The event was to feature living
            history encampments, displays of medieval fashion, squire school,
            arming of the knight demonstrations, medieval music, a battle
            reenactment, and a medieval court of justice.
            <br />
            <br />
            It was a super-enjoyable day and far more interesting than we had
            envisaged. The preparation work and detailed research which goes in
            behind the scenes is very impressive. The medieval reenactment at
            Greystoke Castle involved the group{" "}
            <Link
              to="https://normannis.co.uk/joining-us/"
              target="_blank"
              className="linkJuly2025"
            >
              {" "}
              Historia Normannis
            </Link>{" "}
            which is a 12th century reenactment group, focusing primarily on the
            events between the reign of Henry I and King John. The events when
            staged tend to be hosted by a number of the regional groups. This
            event included a Scottish group, Yorkshire group, Cumbria group and
            West Mercia group. For anyone interested in joining or finding out
            more about a group, contact
            <Link
              to="https://normannis.co.uk/joining-us/"
              target="_blank"
              className="linkJuly2025"
            >
              {" "}
              Historia Normannis
            </Link>
            <br />
            <br />
            The events of the day were as follows :
            <ul>
              <li>
                <strong>10am Living History Encampment:</strong> an opportunity
                to step back in time and explore a medieval encampment with
                various displays and demonstrations.
                <br />
                <br />
              </li>
              <li>
                <strong> 11am Medieval Fashion:</strong> Including a fashion
                parade demonstrating examples of clothing and attire from the
                13th century and how, in the 13th century, what you wear is who
                you are.
                <br />
                <br />
              </li>

              <li>
                <strong>12 noon Medieval Tournament: </strong> Treason at the
                Castle? - when the Sheriff of Cumberland’s men visit Greystoke
                Castle in 1214 they find an army of Scottish soldiers on the
                castle grounds. Will they suspect the Castellan of Greystoke of
                plotting treason against King John?
                <br />
                <br />
              </li>

              <li>
                <strong>13.00 Squire School: </strong>Young aspiring knights
                learnt basic combat skills and were generally more blood-thirsty
                than their parents.
                <br />
                <br />
              </li>
              <li>
                <strong>14.00 Medieval Music: </strong> An undercover medieval
                talent show contest .
                <br />
                <br />
              </li>
              <li>
                <strong>15.00 Medieval Battle: </strong> Barons Rebellion -
                Robert de Ros, the Sheriff of Cumberland and his army arrive to
                ensure the Castellan of Greystoke castle pledges allegiance to
                King John of England. With civil war on the horizon, will
                Greystoke kneel to the King, or join forces with Scotland
                against him?
                <br />
                <br />
              </li>
              <li></li>
            </ul>{" "}
          </section>
          <div className="SlideshowHostPhotoJuly2025">
            <div className="slideshowinstructionsJuly2025">
              {" "}
              <strong>
                Click on the image below to open the album <br /> of our
                medieval reenactment day at Greystoke Castle.
                <br />
              </strong>
              <br />
              <Link
                to="https://photos.app.goo.gl/kwBEApWmLAH8yutM7"
                target="_blank"
                className="linkJuly2025"
              >
                <img
                  className="slideshowentryJuly2025"
                  src={medievalReenactmentTitled}
                  alt=""
                />
              </Link>
            </div>{" "}
            {/*Closing div slideshowinstructionsJuly2025*/}
          </div>
          {/*Closing div slideshowHostJuly2025*/}
          <section className="dateJuly2025">29th July 2025, Tuesday</section>
          <section className="newsHeaderJuly2025">
            Visit to Glynebourne in East Sussex, to see Verdi's Falstaff
          </section>
          <section className="newsJuly2025">
            Today, was very exciting as we were off to Glynebourne in East
            Sussex to see Verdi's Falstaff. We were last at Glynebourne in 2013,
            when we saw the Marriage of Figaro by Mozart. On that occasion we
            all 4 were in attendance as it was to celebrate a special occasion
            and included an overnight stay in a local hotel in Lewes, a prepared
            meal in the interval and the more expensive seats in the circle.
            Don't ask about the cost....we try not to think about it....
            <br />
            <br />
            However, just to prove you don't need to break the bank to go to
            Glynebourne, we adopted a very different strategy this time. Firstly
            we combined the Glynebourne trip with a visit to Jill's brother and
            sister-in-law in the South East, with whom we stayed for a few days
            and Bernard's father in the South. We took our own home-made picnic
            and, as the parking facilities are good and the roads more
            accessible than previously, we took the car. Additionally, as the
            auditorium is reasonably compact and most seats have excellent views
            and all have excellent acoustics, we opted for more affordable seats
            which really were no different in price from that which you would be
            paying for the opera or ballet in the large cities.
            <br />
            <br />
            This production of Verdi's Falstaff was originally conceived in 2009
            and is directed by Richard Jones. It is set in 1945 in Windsor, just
            after the end of the Second World War. The opera is adapted from
            Shakespeare’s The Merry Wives of Windsor (with passages from Henry
            IV Part One) and is a comedy.
            <br />
            <br />
            The cast included: Sir John Falstaff – Renato Girolami; Ford –
            Rodion Pogossov; Alice Ford – Anna Princeva; Nannetta – Mariam
            Battistelli; Fenton – Filipe Manu; Meg Page – Stephanie Lauricella;
            Mistress Quickly – Valentina Pernozzoli; Dr Caius – Gregory
            Bonfatti; Bardolfo – Colin Judon; Pistola – Callum, Thorpe
            <br />
            <br />
            However, the stars of the show were not just the excellent singers
            and accompanying London Philharmonic orchestra but also a number of
            very clever props and a set of animatronic cats. The first of these,
            a ginger and white cat on the bar of the Garter Inn, can be seen
            from 0.57 onwards until the end of this{" "}
            <Link
              to="https://youtu.be/wy3Z7akRtYo"
              target="_blank"
              className="linkJuly2025"
            >
              {" "}
              excerpt from the 1st Act of Falstaff at Glynebourne
            </Link>
            . In each scene, there is a cat which reappears in different forms.
            In the last act, it is a black cat sat high up in the tree with eyes
            which light-up and flash.
          </section>
          <div className="SlideshowHostPhotoJuly2025">
            <div className="slideshowinstructionsJuly2025">
              {" "}
              <strong>
                Click on the image below to open the album <br /> of our trip to
                the opera at Glynebourne to see Verdi's Falstaff.
                <br />
              </strong>
              <br />
              <Link
                to="https://photos.app.goo.gl/S7Vp5KAfdfmFSsJS8"
                target="_blank"
                className="linkJuly2025"
              >
                <img
                  className="slideshowentryJuly2025"
                  src={Glynebourne2025Titled}
                  alt=""
                />
              </Link>
            </div>{" "}
            {/*Closing div slideshowinstructionsJuly2025*/}
          </div>
          {/*Closing div slideshowHostJuly2025*/}
          <section className="dateJuly2025">30th July 2025, Wednesday</section>
          <section className="newsHeaderJuly2025">
            Visit to London: ride on the Elizabeth line, British Museum Sutton
            Hoo exhibits, walking tour of London and lunch at Brasserie Zédel.
          </section>
          <section className="newsJuly2025">
            Today was a visit into London and an opportunity to try out the
            newest of the London trains, the Elizabeth Line which opened in
            2022. It is a high-frequency, high-capacity railway that connects
            the east and west of London with a new central section and is
            similar to the RER in Paris and the S-Bahn systems of
            German-speaking countries.
            <br />
            <br />
            Having arrived safely at Stratford (where Jill showed her age by
            spotting and becoming quite excited about the Abba arena where the
            production Abba Voyage is performed) and changing trains to
            Tottenham Court Road Elizabeth Line station, we were soon at the
            British Museum. Our membership tickets enabled us to avoid the
            queues and access easily. Today the focus was on{" "}
            <Link
              to="https://www.britishmuseum.org/collection/galleries/medieval-europe"
              target="_blank"
              className="linkJuly2025"
            >
              Room 40: Medieval Europe AD 1050–1500
            </Link>{" "}
            and{" "}
            <Link
              to="https://www.britishmuseum.org/collection/galleries/sutton-hoo-and-europe"
              target="_blank"
              className="linkJuly2025"
            >
              Room 41: Sutton Hoo and Europe AD 300–1100.{" "}
            </Link>
            <br />
            <br />
            In room 41, it was great to see the original Sutton Hoo finds and
            whilst some, such as the iron chain mail armour found at the burial
            site and which was most likely part of a three-quarter length coat
            of mail, consist now of rusted together iron links and copper rivets
            in alternate rows, nonetheless this find, along with others, give
            clear insights into the wealth and status of the individual buried
            at Sutton Hoo. The Sutton Hoo helmet was very impressive.
            <br />
            <br />
            In room 40, which was dedicated to Medieval Europe, there was the
            Lewis Chessmen: A set of 12th-century chess pieces, discovered on
            the Isle of Lewis, made of walrus ivory and whalebone; a Royal Gold
            Cup: A lavishly decorated gold cup, likely a presentation piece from
            the French royal family; a ceremonial knight's shield, a 2-handed
            sword (which Bernard was very excited about as it resembled the
            sword he uses on the computer game 'Dark Souls') and the Fishpool
            Hoard: A collection of jewelry and coins found buried in
            Nottinghamshire.
            <br />
            <br />
            On leaving the British Museum, we headed round the corner to the
            café at the Cordon Bleu School in Bloomsbury to grab some coffees
            and a sit down before commencing our walking tour which took us
            through Bloomsbury, Piccadilly Circus, Shaftesbury Avenue and the
            theatres, Regent Street and Waterloo Place, Trafalgar Square and the
            best Waterstones store in London ending at{" "}
            <Link
              to="https://www.brasseriezedel.com/"
              target="_blank"
              className="linkJuly2025"
            >
              {" "}
              Brasserie Zédel{" "}
            </Link>{" "}
            for some lunch.
            <br />
            <br />
            As we left Brasserie Zedel, there was a flurry of activity and some
            filming appeared to be taking place. All was shortly revealed when
            we realised that Sadiq Khan was giving a recorded interview. After
            lunch, we took an interesting diversion through Soho before taking
            our return train home.
          </section>
          <div className="SlideshowHostPhotoJuly2025">
            <div className="slideshowinstructionsJuly2025">
              {" "}
              <strong>
                Click on the image below to open the album <br /> of our trip to
                London on the 30th July 2025.
                <br />
              </strong>
              <br />
              <Link
                to="https://photos.app.goo.gl/ZFbE3sJn2t8ngrpE8"
                target="_blank"
                className="linkJuly2025"
              >
                <img
                  className="slideshowentryJuly2025"
                  src={London30072025Titled}
                  alt=""
                />
              </Link>
            </div>{" "}
            {/*Closing div slideshowinstructionsJuly2025*/}
          </div>
          {/*Closing div slideshowHostJuly2025*/}
          <section className="dateJuly2025">31st July 2025, Thursday</section>
          <section className="newsHeaderJuly2025">
            Visit to George Bernard Shaw's former home at Shaw's Corner, Ayot St
            Lawrence, Hertfordshire
          </section>
          <section className="newsJuly2025">
            Today we were heading over to Hertfordshire, so took the opportunity
            to stop off at a location we had last visited 35 years ago, namely
            the former home (or at least one of them) of the activist,
            intellectual and playwright George Bernard Shaw!
            <br />
            <br />
            <Link
              to="https://www.nationaltrustcollections.org.uk/place/shaw%27s-corner"
              target="_blank"
              className="linkJuly2025"
            >
              Shaw's Corner, Ayot St Lawrence
            </Link>{" "}
            was the principal residence of the Irish playwright George Bernard
            Shaw and it was here where he died. It is now owned by the National
            Trust and open to the public as a writer's house museum. Apparently
            the house, which is Edwardian, was built in 1902 as a new rectory
            for the village and when George Bernard Shaw first came here in 1906
            it was to rent it from the rector as a country retreat away from the
            city. He later went on to buy the property. He lived here for 44
            years until his death in 1950 and the house has been kept to reflect
            his life.
            <br />
            <br />
            We were fortunate as it was a week day and we had booked to enter
            during the morning when they run guided tours by volunteers. A very
            entertaining gentleman took us round who gave a very interesting
            talk including impressions of George Bernard Shaw. We think he may
            have done some practising in front of his bedroom mirror... In the
            afternoon, there are no guided tours and people can look around the
            property in their own time. Even some of the children looking around
            found it interesting as we overheard one of them saying on exit
            'That was amazing!', which it certainly was, including the bathroom
            facilities for visitors which is essentially the original Edwardian
            toilet in the right hand corner of the house together with delayed
            flushing mechanism.
            <br />
            <br />
            It was also a trip down memory lane to some degree as it took Jill
            back to a very hot Summer 35 years ago in 1990 when she was
            undertaking her post qualification GP training year (now known as GP
            Specialty Trainees GPST) in this area, including driving around the
            countryside undertaking house visits. Also time spent, on the few
            nights off, having a rare period of relaxation by calling in for a
            drink at{" "}
            <Link
              to="https://www.brocketarms.com/"
              target="_blank"
              className="linkJuly2025"
            >
              The Brocket Arms
            </Link>{" "}
            , Ayot St Lawrence.
          </section>
          <div className="SlideshowHostPhotoJuly2025">
            <div className="slideshowinstructionsJuly2025">
              {" "}
              <strong>
                Click on the image below to open the album <br /> of our trip to
                the home (or at least one of them) <br /> of George Bernard
                Shaw: Shaw's Corner, <br /> Ayot St Lawrence on the 31st July
                2025.
                <br />
              </strong>
              <br />
              <Link
                to="https://photos.app.goo.gl/Wq26VHxPyEHvd2s69"
                target="_blank"
                className="linkJuly2025"
              >
                <img
                  className="slideshowentryJuly2025"
                  src={ShawsCorner31072025Titled}
                  alt=""
                />
              </Link>
            </div>{" "}
            {/*Closing div slideshowinstructionsJuly2025*/}
          </div>
          {/*Closing div slideshowHostJuly2025*/}
        </div>
      </div>
      {/*Closing div for backgroundColorJuly2025 */}
    </div>
  );
}
