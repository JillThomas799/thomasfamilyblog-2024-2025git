import React from 'react';
import { Link } from "react-router-dom";
import './July2024.css';
import July2024HeaderPhoto1 from "./imagesresized/July2024HeaderPhoto1.jpg";
import AlnwickGardens from "./imagesresized/AlnwickGardens.jpg";
import PantaloonsIOEheader from "./imagesresized/PantaloonsIOEheader.jpg";
import GardenCentreCat from "./imagesresized/GardenCentreCat.jpg";
import HarringtonArmsFront from "./imagesresized/HarringtonArmsFront.jpg";
import HarringtonArmsSide from "./imagesresized/HarringtonArmsSide.jpg";
import HarringtonArmsFood from "./imagesresized/HarringtonArmsFood.jpg";
import RidgegateReservoir from "./imagesresized/RidgegateReservoir.jpg";
import InfoBoardMacForest from "./imagesresized/InfoBoardMacForest.jpg";
import TrentabankReservoir from "./imagesresized/TrentabankReservoir.jpg";
import WalksMacForest from "./imagesresized/WalksMacForest.jpg";
import CheckingBikes from "./imagesresized/CheckingBikes.jpg";
import DepartureReady from "./imagesresized/DepartureReady.jpg";
import IntheSaddle from "./imagesresized/IntheSaddle.jpg";
import LunchBitts from "./imagesresized/LunchBitts.jpg";
import MonumentBitts from "./imagesresized/MonumentBitts.jpg";
import CafeBittsJ from "./imagesresized/CafeBittsJ.jpg";
import CafeBittsB from "./imagesresized/CafeBittsB.jpg";
import RestWarwickBridgeJill from "./imagesresized/RestWarwickBridgeJill.jpg";
import RestWarwickBridgeBernard from "./imagesresized/RestWarwickBridgeBernard.jpg";
import JillBlacksmiths from "./imagesresized/JillBlacksmiths.jpg";
import BernardBlacksmiths from "./imagesresized/BernardBlacksmiths.jpg";

export default function July2024() {
    return (
      <div>

      <div className="julyAnimationRainClouds" style={{margins:"auto", overflow:"hidden"}}>
        <div className="main">
        <div className="July2024header"> 
          <button id="buttonJuly">
            <Link to="/" className="backbuttonLink">Back</Link>
          </button>
        </div>

          <div className="allcloud">
            <div className="cloud"></div>
            <div className="cloud"></div>
            <div className="cloud"></div>
            <div className="cloud"></div>
            
          <div className="rain">
          <ul>
            <li className="dropWater drop1"></li>
            <li className="dropWater drop2"></li>
            <li className="dropWater drop3"></li>
            <li className="dropWater drop4"></li>
            <li className="dropWater drop5"></li>
            <li className="dropWater drop6"></li>
            <li className="dropWater drop7"></li>
            <li className="dropWater drop8"></li>
            <li className="dropMin min1"></li>
            <li className="dropMin min2"></li>
            <li className="dropMin min3"></li>
            <li className="dropMin min4"></li>
            <li className="dropMin min5"></li>
            <li className="dropMin min6"></li>
            <li className="dropMin min7"></li>
            <li className="dropMin min8"></li>
            <li className="dropMin min9"></li>
            <li className="dropMin min10"></li>
          </ul>
         </div>
         </div>
         <img src= {July2024HeaderPhoto1} alt="" className="headerPhotoJuly" />
         </div>
        </div>
         
         <div className="datenewsDivJuly" >
            <section className="dateJuly">1st - 31st July 2024</section>
            <section className="newsheaderJuly">Welcome to our July 2024 blog</section> 
            <section className="newsJuly"><div style={{textAlign:"center", fontSize:"1.2rem"}}>Welcome to this, our July 2024 blog. </div>
            <br />
            <br />
            The header picture this month was taken in the garden recently and has then been converted into an SVG image for artistic effect.
            However, the weather continues to be cold and stormy, so an animation of stormy showers passing over has been created. This has been 
            the first time an animation has been created since switching over to use a REACT environment, so accordingly, some adjustments 
            to the scripting needed to be made. Anyway, I hope this helps to demonstrate the constantly mixed weather we have been experiencing 
            up here.
            <br />
            <br />
            Otherwise this month, we have been continuing at the weekends to walk the Hadrian's Wall Path and with it being the Summer, we have 
            been undertaking the most strenuous and awesome sections of the walk, including the section from Chollerford to Banks. For all information 
            about this trip so far and over the forthcoming months, please come and join us at our  
            <Link to="/hwp2024" className="LinkJuly2024"> Hadrian's Wall Path Expedition page </Link> . The page will be updated regularly to keep pace with our progress!

            </section>
         </div>

         <div className="datenewsDivJuly" >
            <section className="dateJuly">3rd July 2024</section>
            <section className="newsheaderJuly">Visit to <Link to="https://www.alnwickgarden.com/" target="_blank" title="Click here to discover more about Alnwick Gardens" className="LinkJuly2024"> Alnwick Gardens </Link> , Northumberland</section> 
            <section className="newsJuly">We were able to accomplish a long-planned trip today, that of visiting Alnwick Gardens in Northumberland. It is, together with Alnwick Castle,
              a well-recognised and popular tourist attraction and, with it being within 2 hours drive from our house, achievable within the day.
              <br />
              <br />
            The garden was created by The Duchess of Northumberland in 2001 and is designed to change daily throughout the seasons. 
            We understand that the garden features the largest collection of European plants in the UK and the largest Japanese cherry orchard in the world.  
            The garden contains 4000 different plants, a Grand Cascade, a Poison Garden full of toxic plants and a seasonal cherry orchard. There is a also tree house, 
            where indoor branches are intertwined with fairy lights and a there is an open fire. 
          <br />
          <br />
          Alnwick Gardens are adjacent to Alnwick Castle and the old town, so once we had finished looking around the gardens, we wandered into the town itself.
          We have left <Link to="" target="_blank" title="Click here to discover more about Alnwick Castle" className="LinkJuly2024"> Alnwick Castle </Link> for a separate visit later this Summer hopefully, but it is a popular destination, not least, for 
          those who may be interested, because it plays the starring role in the Harry Potter movies as Hogwarts School of Witchcraft and Wizardry, so maybe best avoided in the school holidays.
          <br />
          <br />
          We had an enjoyable days outing. The good points were that everything is very localised with plentiful parking across the road from the gardens and castle for a charge (£3.50 for the day
          when we were there). All the main sites, including the castle and old town, are within close vicinity. There are plenty of places to eat and drink in the town.The downsides were that we felt it is 
          relatively expensive pro rata and you do tend to have the feeling that it is quite 'engineered', more in keeping with an entertainment site such as 
          Disneyworld or such similar sites. It was busy when we were there with plenty visitors but it can be extremely busy in peak season.
          We subsequently discovered, though it was not clearly advertised, that for £25.00 each you can buy an annual pass for the Alnwick Gardens (we had paid £18.50 each), so for anyone who is likely 
          to be making more than one visit a year, this would appear to be more cost effective. The annual passes can be arranged via the <Link to="https://www.alnwickgarden.com/" target="_blank" title="Click here to discover more about Alnwick Gardens" className="LinkJuly2024"> Alnwick Gardens </Link> 
          website.
          
          
          
           <div className="slideshowHostPhotoJuly">
          <fig>
            <Link to="https://photos.app.goo.gl/oNvyoPrJLx5axYL68" target="_blank">
            <img className="slideshowentryJuly" src={AlnwickGardens} alt="" />
            </Link>
          </fig>
           </div>  {/* Closing div SlideshowHostPhotoJuly */}
            </section>
         </div>

;        <div className="datenewsDivJuly">
        <div className="datenewsDivJuly">
          <section className = "dateJuly">Thursday, July 4th, 2024 (General Election day)</section>
          <section className="newsheaderJuly">Outdoor Theatre production of Oscar Wilde's <Link to="https://thepantaloons.co.uk/ernest/" target="_blank"
        title="Click here to discover more about the performance" className="LinkJuly2024"> The Importance of being Ernest' </Link>  performed by the <Link to="https://thepantaloons.co.uk/" 
        target ="_blank" title="Click here to find more about the Pantaloons Theatre Company" className="LinkJuly2024">Pantaloons theatre Company</Link> at the tarn. </section> 
          <section className = "newsJuly"> 
        This evening we went to see the outdoor production of <Link to="https://thepantaloons.co.uk/ernest/" target="_blank"
        title="Click here to discover more about the performance" className="LinkJuly2024"> The Importance of being Ernest' </Link> by Oscar Wilde performed by <Link to="https://thepantaloons.co.uk/" 
        target ="_blank" title="Click here to find more about the Pantaloons Theatre Company" className="LinkJuly2024" > The Pantaloons theatre Company </Link> in the evening at the tarn between 19.00 and 21.00. 
        <br />
        <br />
        This was our second time at one of these productions. Last year it had been pouring with rain at the start and then cleared into a beautiful evening.
        Sure enough it was raining again at the start today, but soon cleared and was very pleasant. We were better prepared than last time and had made sure we were 
        there when the doors open so we could obtain a place undercover by the café, which was once again open.
        <br />
        <br />
        It was a very entertaining performance and everyone enjoyed it. As was the case last year, the view of the tarn was lovely as the sun started to set.
        
        
        <div className="slideshowHostPhotoJuly">
          <fig>
            <Link to="https://photos.app.goo.gl/NvuREtutgFu1oWdh8" target="_blank">
            <img className="slideshowentryJuly" src={PantaloonsIOEheader} alt="" />
            </Link>
          </fig>
           </div>  {/* Closing div SlideshowHostPhotoJuly */}
        </section>
 
        
 </div>

         <div className="datenewsDivJuly">
            <section className="dateJuly">6th July 2024, Saturday</section> 
            <section className="newsheaderJuly"> Stage 7 of our Hadrian's Wall Path Expedition successfully completed</section>  
            <br />
            <section className="newsJuly">Today we successfully completed Stage 8 of our Hadrian's Wall Path Expedition, Housesteads Fort to Cawfield Quarry (3e and 4a).
             For all the information about this trip for today and for the remaining stages over the forthcoming weeks and months, please come and join us at our  
             <Link to="/hwp2024" className="LinkJuly2024"> Hadrian's Wall Path Expedition page </Link>
            </section>
            </div>       
         </div>

         <div className="datenewsDivJuly">
            <section className="dateJuly">7th July 2024, Sunday</section> 
            <section className="newsheaderJuly"> Stage 8 of our Hadrian's Wall Path Expedition successfully completed</section>  
            <br />
            <section className="newsJuly">Today we successfully completed Stage 9 of our Hadrian's Wall Path Expedition, Cawfields Quarry to Gilsland (4b and 4c).
             For all the information about this trip for today and for the remaining stages over the forthcoming weeks and months, please come and join us at our  
             <Link to="/hwp2024" className="LinkJuly2024"> Hadrian's Wall Path Expedition page </Link>
            </section>
          </div>       
         

          <div className="datenewsDivJuly">
            <section className="dateJuly">13th July 2024, Saturday</section> 
            <section className="newsheaderJuly"> Stage 4 of our Hadrian's Wall Path Expedition successfully completed</section>  
            <br />
            <section className="newsJuly">Today we successfully completed Stage 4 of our Hadrian's Wall Path Expedition, Whittle Dene Reservoirs and Nature Reserve to Chollerford (2c, 2d and 2e).
            For all the information about this trip for today and for the remaining stages over the forthcoming weeks and months, please come and join us at our  
            <Link to="/hwp2024" className="LinkJuly2024"> Hadrian's Wall Path Expedition page </Link>
            </section>
          </div>  

          <div className="datenewsDivJuly">
            <section className="dateJuly">14th July 2024, Sunday</section> 
            <section className="newsheaderJuly"> ADDITIONAL DAY - Visit to the Roman Army Museum and Vindolanda</section>  
            <br />
            <section className="newsJuly"> We had walked a long way (12.6 miles) on Saturday, 13th July in poor, wet weather. So rather than undertaking another stage
           of our Hadrian's Wall walk on the Sunday, given it was forecast for rain again, we decided it was time for a catch-up day in which we would take the opportunity to visit the 
           Roman Army Museum and Vindolanda in a relaxed fashion.
            For all the information about this trip for today and for the remaining stages over the forthcoming weeks and months, please come and join us at our  
            <Link to="/hwp2024" className="LinkJuly2024"> Hadrian's Wall Path Expedition page </Link>
            </section>
          </div>     

          <div className="datenewsDivJuly">
            <section className="dateJuly">18th July 2024, Thursday</section> 
            <section className="newsheaderJuly"> Day out in Cheshire visiting family.</section>  
            <br />
            <section className="newsJuly"> 
             Today we went to Cheshire for the day to visit Bernard's brother who was staying there for a couple of weeks. Fortunately, it was a lovely, sunny day.
             We had planned to stop for a coffee and a break at the first motorway services after the Thelwall viaduct, but subsequently discovered that these services were only 
             after we were due to exit the motorway. So, a rescue plan for a coffee had to be put into action and we ended up instead at Fryer's Garden Centre 
             near Knutsford, where the most pampered and comfortable cat seemed to live.... (see photo).
             <br />
             <br />
             For lunch, we had a pretty drive out to Gawsworth village where there is the <Link to="https://www.robinsonsbrewery.com/pubs/harrington-arms-gawsworth/" target="_blank" className="LinkJuly2024">
             Harrington Arms</Link> and as it was such good weather, we had lunch in the garden.
             <br />
             <br />
             After lunch we drove up into <Link to="https://www.tripadvisor.co.uk/Attraction_Review-g191278-d12711431-Reviews-Macclesfield_Forest-Macclesfield_Cheshire_England.html" className="LinkJuly2024"> Macclesfield Forest </Link> , where we had a pleasant walk.
             We had not visited Macclesfield Forest before and the drive out there was very pleasant. It was also great to have the opportunity to catch up on news and returned Bernard's brother's bicycle,
             which Bernard had been repairing, to him. Before long though, it was time for the long drive home, after what had been a very enjoyable day.

            <div className="blogPhotoDivJuly">
            <fig><section className = "blogPhotoJuly" ><img src={GardenCentreCat} alt="" /><figcaption className='julyfigcaption'><strong>The resident cat at Fryer's Garden Centre,<br /> Knutsford having a very comfortable life...</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoJuly" ><img src={HarringtonArmsFront} alt="" /><figcaption className='julyfigcaption'><strong>The Harrington Arms, Gawsworth. <br /> A lovely location for lunch...</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoJuly" ><img src={HarringtonArmsSide} alt="" /><figcaption className='julyfigcaption'><strong>...where because of the lovely weather, <br /> we were able to sit in the garden <br /> to eat our food.</strong></figcaption></section>
              </fig>
              <fig><section className = "blogPhotoJuly" ><img src={HarringtonArmsFood} alt="" /><figcaption className='julyfigcaption'><strong>...where the food was good <br /> and reasonably priced...</strong></figcaption></section>
              </fig>
            </div>

            <div className="blogPhotoDivJuly">
            <fig><section className = "blogPhotoJuly" ><img src={InfoBoardMacForest} alt="" /><figcaption className='julyfigcaption'><strong>There were some useful information signs <br /> which was just as well, because <br /> we were otherwise somewhat lost... </strong></figcaption></section>
            </fig>
              <fig><section className = "blogPhotoJuly" ><img src={WalksMacForest} alt="" /><figcaption className='julyfigcaption'><strong>We used the information boards <br /> to look at the possible walks ...</strong></figcaption></section>
              </fig>
            <fig><section className = "blogPhotoJuly" ><img src={TrentabankReservoir} alt="" /><figcaption className='julyfigcaption'><strong>Trentabank Reservoir, Macclesfield Forest</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoJuly" ><img src={RidgegateReservoir} alt="" /><figcaption className='julyfigcaption'><strong>Ridgegate Reservoir, Macclesfield Forest</strong></figcaption></section>
            </fig>
            </div> 
             </section>
          </div>    

          <div className="datenewsDivJuly">
            <section className="dateJuly">20th July 2024, Saturday</section> 
            <section className="newsheaderJuly"> Stage 3 of our Hadrian's Wall Path Expedition successfully completed</section>  
            <br />
            <section className="newsJuly">Today we successfully completed Stage 3 of our Hadrian's Wall Path Expedition, Tyne Riverside Park to Whittle dene Reservoirs (2a and 2b).
            For all the information about this trip for today and for the remaining stages over the forthcoming weeks and months, please come and join us at our  
            <Link to="/hwp2024" className="LinkJuly2024"> Hadrian's Wall Path Expedition page </Link>
            </section>
          </div> 

           <div className="datenewsDivJuly">
            <section className="dateJuly">28th July 2024, Sunday</section> 
            <section className="newsheaderJuly"> Stage 9 of our Hadrian's Wall Path Expedition successfully completed</section>  
            <br />
            <section className="newsJuly">Today we successfully completed Stage 9 of our Hadrian's Wall Path Expedition, Gilsland to Lanercost Priory (4d and 4e).
            For all the information about this trip for today and for the remaining stages over the forthcoming weeks and months, please come and join us at our  
            <Link to="/hwp2024" className="LinkJuly2024"> Hadrian's Wall Path Expedition page </Link>
            </section>
          </div>    

          <div className="datenewsDivJuly">
            <section className="dateJuly">29th July 2024, Monday</section> 
            <section className="newsheaderJuly"> Day out cycling on the Hadrian's Cycleway - Route 72 to Carlisle - 28 miles</section>  
            <br />
            <section className="newsJuly"> 
            We had long planned to try cycling to Carlisle on Hadrian's Cycle Route - no. 72 on the National Cycle Network.
            So...the weather forecast was reasonable and we were going to have to be at home in the forthcoming days as the kitchen floor was being re-tiled. What better opportunity
            than to head off to the city?......
            <br />
            <br />
            <Link to="https://www.sustrans.org.uk/find-other-routes/hadrians-cycleway" target="_blank" title="Click here to discover more about the Hadrians-Cycle way, route 72 and part of Route 71 of the National Cycle Routes"
            className="LinkJuly2024"> Hadrian's Cycleway - Route 72  </Link> of the National Cycle Route follows  the line of the Roman frontier for 170 miles (274 kilometres) from Ravenglass in Cumbria to South Shields in Tyne & Wear.
            According to the information on the Sustrans website, the route is 'a mixture of on-road and traffic-free sections which runs mainly on country lanes and quiet roads, interspersed with sections of traffic-free path, promenade and riverside path.'
            We feel we have to add a caveat here though.... that is very true, but it is also the case that some of these 'country lane and quiet road sections' are reasonably well-used by local traffic, who, because they are knowledgeable about the terrain,
            can travel at quite high speed. This means that at all times on these sections, we would advise being very 'traffic-aware'...  The route is well-signposted thanks in part to the European Agricultural Fund for Rural Development who, in 2018, 
            supported the upgrade of route signing associated with Route 72, Hadrian's Cycleway, in Cumbria. Over 130 new signs were installed along the route.
            <br />
            <br />
            It took us 1hr 45 to cycle to Carlisle and the route takes you in through Rickerby Park by the river Eden. By then, we were hungry and ready for our packed lunch. Much to our delight, we also
            discovered a very pleasant container-café open in Bitt's Park run by a Greek gentleman where they serve very good coffees, amongst other things.
            <br />
            <br />
            Suitable refreshed, we started on the long cycle home.... This time though we took two breaks en route; one at Warwick Bridge and the other for a very well-earned drink at the Blacksmiths Arms.
           

            <div className="blogPhotoDivJuly">
            <fig><section className = "blogPhotoJuly" ><img src={CheckingBikes} alt="" /><figcaption className='julyfigcaption'><strong>Bernard checking over the bicycles <br /> before we leave...</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoJuly" ><img src={DepartureReady} alt="" /><figcaption className='julyfigcaption'><strong>Jill is kitted-out....</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoJuly" ><img src={IntheSaddle} alt="" /><figcaption className='julyfigcaption'><strong>...and departure-ready.</strong></figcaption></section>
              </fig>
              <fig><section className = "blogPhotoJuly" ><img src={MonumentBitts} alt="" /><figcaption className='julyfigcaption'><strong>We have arrived safely in Carlisle! <br /> Here is the Queen Victoria Monument.</strong></figcaption></section>
              </fig>
            </div>

            <div className="blogPhotoDivJuly">
            <fig><section className = "blogPhotoJuly" ><img src={LunchBitts} alt="" /><figcaption className='julyfigcaption'><strong> It was good to sit down for a while. <br /> Lunch in Bitt's Park. </strong></figcaption></section>
            </fig>
              <fig><section className = "blogPhotoJuly" ><img src={CafeBittsB} alt="" /><figcaption className='julyfigcaption'><strong> Bernard at the café, Bitt's park.</strong></figcaption></section>
              </fig>
            <fig><section className = "blogPhotoJuly" ><img src={CafeBittsJ} alt="" /><figcaption className='julyfigcaption'> <strong> Jill at the café, Bitt's park. </strong></figcaption></section>
            </fig>
            {/* <fig><section className = "blogPhotoJuly" ><img src={} alt="" /><figcaption className='julyfigcaption'><strong></strong></figcaption></section>
            </fig> */}
            </div> 

            <div className="blogPhotoDivJuly">
            <fig><section className = "blogPhotoJuly" ><img src={RestWarwickBridgeJill} alt="" /><figcaption className='julyfigcaption'><strong> We had seen cyclists sitting <br /> resting  here before...</strong></figcaption></section>
            </fig>
              <fig><section className = "blogPhotoJuly" ><img src={RestWarwickBridgeBernard} alt="" /><figcaption className='julyfigcaption'><strong>...so we took opportunity to use <br /> the benches for ourselves.</strong></figcaption></section>
              </fig>
            <fig><section className = "blogPhotoJuly" ><img src={JillBlacksmiths} alt="" /><figcaption className='julyfigcaption'><strong>On the return journey, <br /> a well-deserved drink at <br /> the Blacksmith's Arms for Jill..</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoJuly" ><img src={BernardBlacksmiths} alt="" /><figcaption className='julyfigcaption'><strong>...and for Bernard.</strong></figcaption></section>
            </fig>
            </div> 
             </section>
          </div>       
               
          
          </div>

         

);
}
