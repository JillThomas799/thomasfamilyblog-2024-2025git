import React from 'react';
import { Link } from "react-router-dom";
import './October2024.css';
import FallingLeaves from 'components/fallingleaves';
import PenrithStationTitled from './imagesresized/PenrithStationTitled.jpg';


export default function October2024() {

    return (
      <div>
        <div className="October2024header" >
          <FallingLeaves title="October 2024" /> 
        <button id="backbuttonOctober">
          <Link to="/" className="backbuttonLink" style={{color:"black"}}>Back</Link>
        </button>
        
        <div className="datenewsDivOctober">
            <section className="newsheaderOctober">Welcome to our October 2024 blog</section> 
            <section className="newsOctober" style={{textAlign:"center"}}>Welcome to our October blog. It is now well and truly autumn
              and so for this month's display we have returned to using Scaleable Vector Graphics (SVG) to create
              a visual display of the trees around here shedding their leaves. We have also selected a range of autumnal hex colour 
              codes to create the display.
              <br />
              <br />
              It is always a bit of a sad time of a year when we reach autumn, but there are some gorgeous colours and the colour 
              of the trees around the tarn are beautiful.
              <br />
              <br />
              Anyway, it is a busy month this month as we have a number of visitors coming up to Cumbria and we are looking forward to meeting with friends 
              in Manchester to go to see Rest is Politics live at the Manchester O2 arena. We also have our Penrith train tickets booked to
              go to London for the day to see The Silk Roads Exhibition at the British Museum.
            </section>
            <section className="dateOctober">1st October 2024, Tuesday</section> 
             <section className="newsheaderOctober">Trip to London on the train to see The Silk Roads Exhibition at the British Museum</section> 
            <section className="newsOctober" style={{textAlign:"center"}}>
             Today was our long-awaited trip to try travelling down to London and back for the day via train to see the  <Link to="https://www.britishmuseum.org/exhibitions/silk-roads"
             target="_blank" title="Click here to discover more about the Silk Roads Exhibition at the British Museum" className="LinkOctober2024">Silk Roads Exhibition</Link> at the British Museum. 
             This meant a <em>very</em> early start from home to be safely parked and on the platform at Penrith station for the 7.02 fast, direct train into London Euston station.
             The outward journey went without incident and we arrived safely in London with just 10 minutes delay at 10.20am. We had chosen a quiet
             carriage, which lived up to expectations as it was being  used by  people travelling with work, so it was lovely and peaceful and there was plenty of time to read a number of chapters
             of Peter Frankopan's book <Link to="https://www.amazon.co.uk/Silk-Roads-New-History-World-ebook/dp/B00XN8UG3C/ref=sr_1_3?crid=36BQTJ2JO6U77&dib=eyJ2IjoiMSJ9.eNYkQIU_YOMC2oj8GPXFA5f4g_V9_38XUTCynUbULm-itFUmkQPgkw4clMPRW77IOrXo0lBQHBxDZcP8AR8v-sK0TIvrVypO2q-f9sotTWB-SlPEnrBfvkwpfB-XqGlUf4l71oQdjZDY8Z7KMWelA_-_wJPfoDbb-hEPv5QY9WEQTEN1gCgqx_W_JFnmB15gdvGx3SnvjzLVvPqt4cu7KBSsoSeXL1ntXUZYL9sHz_I.uOv5D7-1cCLEM4UHgjNEXT6-730kyGOjCr6R1WaTDU4&dib_tag=se&keywords=silk+roads&nsdOptOutParam=true&qid=1728051135&sprefix=silk+roads%2Caps%2C277&sr=8-3"
             target="_blank" title="Click here to discover more about Peter Frankopan's 'The Silk Roads A New History of the World'"className="LinkOctober2024">The Silk Roads A New History of the World</Link> , which subsequently proved very useful when
             going around the exhibition.
             <br />
             <br />
             As we are current members of the British Museum, which includes entry to special exhibitons, we had the advantage of not needing to book or queue outside 
             and we also made use of our access (on weekdays) to the very pleasant members' room upstairs which has its own café and is more spacious and quieter
             than the general café areas within the complex. It also gives us a 10% discount off purchases in the shops and cafés  and restaurants at the museum, so what better
             reason for buying further books in the shop!
             <br />
             <br />
             The exhibition itself was very well done and presented. Our prior reading also really helped us understand the history better. The exhibition itself,
             as usual with popular British Museum exhibitions, was busy and quite slow moving so it is worth allowing sufficient time and being prepared for that.
             Some of the photos from the exhibition are included in the album below. Once we had finished the exhibition we had lunch at the  
             <Link to="https://www.britishmuseum.org/visit/food-and-drink/great-court-restaurant" target="_blank" title="Click here to discover more about the Great Court Restaurant"
             className="LinkOctober2024"> Great Court Restaurant</Link> at the museum, which was very pleasant. It is best to book a table in advance as we did, as it is busy.
             <br />
             <br />
             In the afternoon, we decided to have a change from museum-visiting and walk over to Covent garden, which in retrospect was maybe not such a good idea as it 
             was absolutely pouring with rain, and despite having umbrellas we got very wet. We were quite glad therefore to finally arrive back at Euston station
             for our return journey home.
             Our return journey as predicted, did not run as smoothly as the outward journey. Avanti West Coast were undertaking what would appear to be their not 
             uncommon approach of cancelling trains at short notice and then suddenly reinstating them with about 3 minutes to spare. Whilst it must be very difficult to keep all the 
             trains and networks running to time and linking up throughout the day, as incidents crop up en route (in this case a broken rail earlier in the day),
             it did seem that the way this was handled at the managment level was may be not the most productive for everyone concerned. However, in all fairness to Avanti West Coast,
             despite the final delay being over an hour, the process of claiming a delay repayment has proved straightforward and the repayment sum reasonable. The staff also worked hard
             to make sure everyone was aware of their onward connection arrangements for returning home safely that evening.
             <br />
             <br />
             All in all, we had a great day, and would definitely go again.

            </section>

            

            <div className="SlideshowHostPhotoOctober">
            <Link to ="https://photos.app.goo.gl/WkF9CqoN6rWGiV87A" target="_blank" title="Click on the link and read the full comments on each photo to accompany us on our trip to London and the Silk Roads Exhibition." ><strong>
            <div className="slideshowinstructionsOctober"> Click on the image below to open the photo album of our trip to London and the Silk Roads Exhibition. 
            <br /> <br />The individual comments on the photos will take you through the full story of our trip.
            </div>   {/*Closing div slideshowinstructionsOctober*/}

            <img className="slideshowentryOctober" src={PenrithStationTitled} alt="" />
            </strong> 
            </Link>
            </div> 
            {/*Closing div SlideshowHostPhotoOctober*/}
            
            </div> {/* Closing tag datenewsDivOctober */}
            </div>
          </div>
    );
};

         