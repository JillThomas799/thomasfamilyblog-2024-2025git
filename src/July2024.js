import React from 'react';
import { Link } from "react-router-dom";
import './July2024.css';
import July2024HeaderPhoto1 from "./imagesresized/July2024HeaderPhoto1.jpg";
import AlnwickGardens from "./imagesresized/AlnwickGardens.jpg";

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
            <section className="newsJuly"><div style={{textAlign:"center"}}>Welcome to this, our July 2024 blog. </div>
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
            been undertaking the most strenuous and awesome sections of the walk, including the section from Chollerford to Banks.

            </section>
         </div>

         <div className="datenewsDivJuly" >
            <section className="dateJuly">3rd July 2024</section>
            <section className="newsheaderJuly">Visit to <Link to="https://www.alnwickgarden.com/" target="_blank" title="Click here to discover more about Alnwick Gardens"> Alnwick Gardens </Link> , Northumberland</section> 
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
          We have left <Link to="" target="_blank" title="Click here to discover more about Alnwick Castle"> Alnwick Castle </Link> for a separate visit later this Summer hopefully, but it is a popular destination, not least, for 
          those who may be interested, because it plays the starring role in the Harry Potter movies as Hogwarts School of Witchcraft and Wizardry, so maybe best avoided in the school holidays.
          <br />
          <br />
          We had an enjoyable days outing. The good points were that everything is very localised with plentiful parking across the road from the gardens and castle for a charge (£3.50 for the day
          when we were there). All the main sites, including the castle and old town, are within close vicinity. There are plenty of places to eat and drink in the town.The downsides were that we felt it is 
          relatively expensive pro rata and you do tend to have the feeling that it is quite 'engineered', more in keeping with an entertainment site such as 
          Disneyworld or such similar sites. It was busy when we were there with plenty visitors but it can be extremely busy in peak season.
          We subsequently discovered, though it was not clearly advertised, that for £25.00 each you can buy an annual pass for the Alnwick Gardens (we had paid £18.50 each), so for anyone who is likely 
          to be making more than one visit a year, this would appear to be more cost effective. The annual passes can be arranged via the <Link to="https://www.alnwickgarden.com/" target="_blank" title="Click here to discover more about Alnwick Gardens"> Alnwick Gardens </Link> 
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

         <div className="datenewsDivJuly">
            <section className="dateJuly">6th July 2024</section> 
            <section className="newsheaderJuly"> Stage 8 of our Hadrian's Wall Path Expedition successfully completed</section>  
            <br />
            <section className="newsJuly">Today we successfully completed Stage 8 of our Hadrian's Wall Path Expedition, Housesteads Fort to Cawfield Quarry (3e and 4a).
             All the information about this trip for today and for the remaining stages over the forthcoming weeks and months, please come and join us at our  
             <Link to="/hwp2024"> Hadrian's Wall Path Expedition page </Link>
            </section>
            </div>

;        

         </div>

);
}
