import React from 'react';
import { Link } from "react-router-dom";
import './August2024.css';
import Cyclistaugustheader from 'components/cyclistaugustheader';
import Caerleon13082024 from "./imagesresized/Caerleon13082024.jpg";
import LennieAtHome from "./imagesresized/LennieAtHome.jpg";
import JillPenarthPier from "./imagesresized/JillPenarthPier.jpg";
import BernardHarryPenarthPier from "./imagesresized/BernardHarryPenarthPier.jpg";
import AneurinBevan from "./imagesresized/AneurinBevan.jpg";
import PenarthPier from "./imagesresized/PenarthPier.jpg";
import MumblesCastellCoch from "./imagesresized/MumblesCastellCoch.jpg";
import KitchenFloorBefore from "./imagesresized/KitchenFloorBefore.jpg";
import KitchenFloor2 from "./imagesresized/KitchenFloor2.jpg";
import KitchenWallNew from "./imagesresized/KitchenWallNew.jpg";
import KitchenFloorAfter from "./imagesresized/KitchenFloorAfter.jpg";
import Internment from "./imagesresized/Internment.jpg";
import ElenaGarden1 from "./imagesresized/ElenaGarden1.jpg";
import ElenaGarden4 from "./imagesresized/ElenaGarden4.jpg";
import ElenaGarden5 from "./imagesresized/ElenaGarden5.jpg";
import ElenaGarden7 from "./imagesresized/ElenaGarden7.jpg";

export default function August2024() {

    return (

        <div>
           <div className="allcloudCyclist">
            <div className="cloudCyclist"></div>
            <div className="cloudCyclist"></div>
            <div className="cloudCyclist"></div>
            <div className="cloudCyclist"></div>
            <div className="cloudCyclist"></div>
            <div className="cloudCyclist"></div>
            <div className="cloudCyclist"></div>
            <div className="cloudCyclist"></div>
            <div className="cloudCyclist"></div>
          </div>   

        <div id="AugustHeader"> 
          <button id="backbuttonAugust">
            <Link to="/" className="backbuttonLink" style={{color:"black"}}>Back</Link>
          </button>
          <Cyclistaugustheader /> 
          </div> 

          <div className="datenewsDivAugust">
            <section className="dateAugust">3rd August 2024, Saturday</section> 
            <section className="newsheaderAugust"> Stage 2 of our Hadrian's Wall Path Expedition successfully completed</section>  
            <br />
            <div className="news">
            <section className="newsAugust">Today we successfully completed Stage 2 of our Hadrian's Wall Path Expedition, Newcastle Gateshead Millenium Bridge to Tyne Riverside Country Park (1b):
              8.7 miles (including a 1 mile detour to Denton Hall turret).
            <br /><br />
            For all the information about this trip for today and for the previous and remaining stages over the forthcoming weeks and months, please come and join us at our  
            <Link to="/hwp2024" className="LinkAugust"> Hadrian's Wall Path Expedition page </Link> .
            </section>
            </div>
          </div>

          <div className="datenewsDivAugust">
            <section className="dateAugust">5th August 2024, Saturday</section> 
            <section className="newsheaderAugust"> The kitchen tiling project reaches its conclusion...</section>  
            <br />
            <div className="news">
            <section className="newsAugust">
              For the past week we have been having the kitchen, associated utility and ensuite bathroom tiled. This was to have been one 
              of next year's projects, but in order to ensure the desired tiles remained available, it has been necessary to expedite it...
              <br />
              <br />
              The kitchen floor and wall tiles have been those which were in the property when we purchased it and comprised quarry floor tiles and black wall tiles.
              Whilst hard wearing and rustic, they have tended to make the room quite dark and 'closed in' and it has long been a plan to change these at some point.
              <br />
              <br />
              Needless to say, this has created a degree of upheaval as a number of the main, heavy kitchen items have had to be moved, including 2 fridges
              and the microwave and meals have had to be pre-prepared as we were not able to walk on the kitchen floor at first to use the cooker.
              <br />
              <br />
              Today thankfully the tilers were completing the finishing touches and it is looking much better, so it has all been worth the effort. Here are some of
              the before and after photos...
              <div className="blogPhotoDivAugust">
            <fig><section className = "blogPhotoAugust" ><img src={KitchenFloorBefore} alt="" /><figcaption className='augustfigcaption'><strong>Kitchen floor and wall tiles - BEFORE</strong></figcaption></section>
            </fig>
              <fig><section className = "blogPhotoAugust" ><img src={KitchenFloor2} alt="" /><figcaption className='augustfigcaption'><strong>Kitchen floor with the <br /> old tiles removed and <br />  matting laid down</strong></figcaption></section>
              </fig>
            <fig><section className = "blogPhotoAugust" ><img src={KitchenWallNew} alt="" /><figcaption className='augustfigcaption'><strong>Kitchen wall tiles - in the <br />  process of being laid</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoAugust" ><img src={KitchenFloorAfter} alt="" /><figcaption className='augustfigcaption'><strong>Kitchen floor and wall tiles - AFTER</strong></figcaption></section>
            </fig>
            </div> 
            </section>
            </div>
          </div>

          <div className="datenewsDivAugust">
            <section className="dateAugust">5th - 7th August 2024, Monday - Wednesday</section> 
            <section className="newsheaderAugust"> Journey down South to attend to some matters of importance and to visit relatives</section>  
            <br />
            <div className="news">
            <section className="newsAugust"> 
            We had to go down South today as there were some matters which needed attending to down there. 
            However, it was a good opportunity to visit and meet with a number of relatives on both sides of the family.
            <br />
            <br />
           <fig><section className = "blogPhoto1August" ><img src={Internment} alt="" /><figcaption className='julyfigcaption'><strong style={{color:"black"}}>The 
            Thomas family plus one <br /> additional non-family member. Can <br /> you spot who they are <br /> and what their role is?....</strong></figcaption>
            </section></fig>
            </section>
           </div>
           </div>

              <div className="datenewsDivAugust">
            <section className="dateAugust">7th August 2024, Saturday</section> 
            <section className="newsheaderAugust"> Update on Elena's garden</section>  
            <br />
            <br />
            <div className="news">
            <section className="newsAugust">
              Earlier in the late Spring/ early Summer, Bernard helped Elena create some raised beds for her garden . Elena took a number of the 
              excess bedding plants we had grown and planted them to try and introduce some colourful flower borders throughout the Summer months.
              <br />
              <br />
              Needless to say, it has not been the best nor warmest of summers so far, so they have been quite slow to grow and flower.
              However, they are looking better now after some slightly warmer days and they are starting to brighten the garden up. Here are some of the photos...
             
              <div className="blogPhotoDivAugust">
            <fig><section className = "blogPhotoAugust" ><img src={ElenaGarden1} alt="" /><figcaption className='augustfigcaption'><strong>Elena's raised beds(1)</strong></figcaption></section>
            </fig>
              <fig><section className = "blogPhotoAugust" ><img src={ElenaGarden4} alt="" /><figcaption className='augustfigcaption'><strong>Elena's raised beds(2)</strong></figcaption></section>
              </fig>
            <fig><section className = "blogPhotoAugust" ><img src={ElenaGarden5} alt="" /><figcaption className='augustfigcaption'><strong></strong>Elena's Raised beds (3)</figcaption></section>
            </fig>
            <fig><section className = "blogPhotoAugust" ><img src={ElenaGarden7} alt="" /><figcaption className='augustfigcaption'><strong></strong>Elena's Raised beds (4)</figcaption></section>
            </fig>
            </div> 

            </section>
            </div>
          </div>

        
           
          
          <div className="datenewsDivAugust">
            <section className="dateAugust">10th August 2024, Saturday</section> 
            <section className="newsheaderAugust"> Stage 10 of our Hadrian's Wall Path Expedition successfully completed</section>  
            <br />
            <div className="news">
            <section className="newsAugust">Today we successfully completed Stage 10 of our Hadrian's Wall Path Expedition, Lanercost to Low Crosby, 5a-5d inclusive, 8.75 miles on the Hadrian's Wall Path, 9.75 miles in total.
            <br /><br />
            For all the information about this trip for today and for the previous and remaining stages over the forthcoming weeks and months, please come and join us at our  
            <Link to="/hwp2024" className="LinkAugust"> Hadrian's Wall Path Expedition page </Link> .
            </section>
            </div>
          </div> 

          <div className="datenewsDivAugust">
            <section className="dateAugust">12th - 16th August 2024, Monday - Friday</section> 
            <section className="newsheaderAugust"> Short Break on holiday in Pencoed, Near Bridgend, South Wales.</section>  
            <br />
            <section className="news"> 
            <ul className="ulAugust">
            <div className="newsAugust"><li className="liAugust"><strong>Monday, 12th August 2024 :</strong></li> Today we set off on our journey to Pencoed in South Wales for a 4 day mini-break.
           Lennie was happy, as he was safe back at home in Cumbria with Elena. <br /> <br /> It has been many years now since we traveled long distance during the main school summer holiday period and had forgotten
           just how busy it can be! There were even cars queuing back on to the motorway at some service stations... <br /> <br /> Finally, we arrived and the accommodation was lovely, so that was great, and it was time for 
           a well-earned rest before the busy week to come. <br /> <br />             
           <fig><section className = "blogPhoto1August" ><img src={LennieAtHome} alt="" /><figcaption className='julyfigcaption'><strong style={{color:"black"}}>Lennie, happy at home back in Cumbria</strong></figcaption></section>
            </fig>
           </div>
           <div className="newsAugust"><li className="liAugust"><strong>Tuesday, 13th August 2024 :</strong></li> Today we set off for Caerleon, near Newport, to go and visit the <Link to="https://museum.wales/roman/" target="_blank" className="LinkAugust">
           National Roman Legion Museum</Link> , <Link to="https://cadw.gov.wales/visit/places-to-visit/caerleon-roman-fortress-and-baths" target="_blank" className="LinkAugust">Roman Baths</Link> and <Link to="https://cadw.gov.wales/visit/places-to-visit/caerleon-amphitheatre"
           target="_blank" className="LinkAugust">Roman Amphitheatre</Link>. 
           <br /><br /> Up until AD 75 the invading Roman army had not been able to conquer the area which is now known as Wales due to fierce resistance
           from the native Silures tribe. In AD75 however, a new governor of Britain, by the name of Frontinus, decided on a new strategy to build a fortress at modern-day Caerleon, inside the territory of the Silures tribe and this
           fortress was to be known as Isca and became one of only 3 long-term forts ever built in Britain (the other 2 being at York and Chester).
           <br /><br />
           Isca was a garrison measuring 20 hectares for 5,500 men who served in the second Augustan Legion (Legio II Augusta). Work commenced on the main fortress, built in turf, soil and timber, in AD75. This
           was followed by the fortress baths in stone. The baths lasted longer than the Roman period and in fact lasted into medieval times, when the stone was used to build modern-day Carleon.
           Over time the fortress itself was converted into stone.
           <br /><br />
           By AD90, the threat from the Silures had gone, and a stone amphitheatre could be built outside the city walls, the remains of which can be seen today.
           Citizen soldiers of the Legions expected to be provided with the amenities of Rome, so in the amphitheatre, which could hold 6000 spectators on wooden, tiered seating, gladitorial games could be held and in the baths exercise 
           could be undertaken in the swimming pool or the basilica, the large gym-like exercise hall. 
           <br /> <br /> 
            Both the National Roman Legion Museum and the Amphitheatre are free to enter, but there is a small charge for entry to the Roman Baths. We felt that it was well worth paying the 
            charge for the Roman Baths though as they are really well done with lighting, film effects and sound all helping recreate the experience of the Romans
            swimming in the pool.
           <br /> <br /> 
            In the afternoon, it was a short drive down to the coast at Newport to see the <Link to="https://naturalresources.wales/days-out/places-to-visit/south-east-wales/newport-wetlands-national-nature-reserve/?lang=en" target="_blank" className="LinkAugust">
            RSPB Newport Wetlands</Link> which is a partnership between Natural Resources Wales, Newport City Council and the RSPB.
            <br />
            <br />
            It is situated only a short drive from the city of Newport, the RSPB Newport Wetlands is part of the Gwent Levels and consists of a diverse range of habitats
            including wet grassland, reedbeds, saltmarsh and saline lagoons. 
            There is a seven kilometre network of re-surfaced paths around the Uskmouth reedbeds, viewing screens across the deepwater channels, and a raised viewing platform and bird hide.
            It also contains the East Usk Lighthouse which is over 120 years old.
            <br /><br /> 
            There are a number of walking trails including the Orchid Trail (1 mile) for looking out for orchids in late spring and early summer,
            Sculpture Trail (1 mile) which involves going through reedbridges, over a floating bridge and past the East Usk lighthouse, 
            Woodland and Estuary Trail (1.5 miles) which involves going through reedbeds, woodland, past open water and the estuary, 
            the Wetlands Experience (2.5 miles) which combines the orchid, the woodland and estuary trail and part of the Wales Coast Path and lastly 
            the Green Lanes and Coast Walk (3.75 miles) which includes include the East Usk Lighthouse, views over the Severn Estuary as far as Exmoor, bird-hide, and green lanes.
           <br /> <br />
           We opted for the Wetlands Experience as we had already done a reasonable amount of walking around Caerleon in the morning.
           <br /> <br /> 
           Click on the Caerleon and RSPB holiday album below to see selected photos of day 2 of the holiday.
           <fig>
            <Link to="https://photos.app.goo.gl/wbuncLw4Lh6Hx3Js5" target="_blank">
            <img className="slideshowentryAugust" src={Caerleon13082024} alt="" />
            </Link>
          </fig></div>
           <div className="newsAugust"><li className="liAugust"><strong>Wednesday, 14th August 2024 :</strong></li> Today, Harry needed to be in Cardiff, so we combined the visit to Cardiff in the afternoon with a preceding visit to Penarth in the morning.
           The old haunts were visited including the Danish pastry shop and the café on the pier... 
           <div className="blogPhotoDivAugust">
            <fig><section className = "blogPhotoAugust" ><img src={JillPenarthPier} alt="" /><figcaption className='augustfigcaption'><strong>Jill on Penarth pier...</strong></figcaption></section>
            </fig>
              <fig><section className = "blogPhotoAugust" ><img src={BernardHarryPenarthPier} alt="" /><figcaption className='augustfigcaption'>...and also Harry <br /> and Bernard.<strong></strong></figcaption></section>
              </fig>
            <fig><section className = "blogPhotoAugust" ><img src={PenarthPier} alt="" /><figcaption className='augustfigcaption'><strong>The pier was very quiet as the weather was not great, but it was still very pleasant.</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoAugust" ><img src={AneurinBevan} alt="" /><figcaption className='augustfigcaption'><strong>Then into Cardiff in the afternoon to say hello to <br /> the founder of the NHS, <br /> Aneurin Bevan.</strong></figcaption></section>
            </fig>
            </div>  </div>
           <div className="newsAugust"><li className="liAugust"><strong>Thursday, 15th August 2024 :</strong></li>Today was our last full day away on holiday before our return journey,
           so we decided to revisit the Mumbles near Swansea in the morning and then to drive over to visit <Link to="https://cadw.gov.wales/visit/places-to-visit/castell-coch"
           target="_blank" title="Click here to discover more about Coch Castle" className="LinkAugust"> Castell Coch </Link> , near Cardiff in the afternoon. We had passed Castell Coch from afar
           many times over the past few years when traveling to and from Cardiff, but had never got round to visiting, so it was great to be able to go to see it at last.
           The Castle is run by CADW so English Heritage members can enter either for free (if repeat members) or half-price (if first-year members).
           <br />
           <br />
           Mumbles is located on Swansea Bay, and marks the start of the Gower Peninsula which was the UK’s first designated Area of Outstanding Natural Beauty.
           Just off Mumbles Head are 2 islands which can , with care and close attention to the tides, be accessed at low tide.
           However, people often get into problems when choosing to access these islands as this <Link to="https://rnli.org/news-and-media/2024/august/12/float-to-live-helps-save-man-at-mumbles-lighthouse" 
           target="_blank" className="LinkAugust">RNLI member explains </Link> when he talks about the risks of this stretch of beach and water and a recent rescue they had undertaken.
          <br />
          <br />
          There is a great walk (or cycle) all along the front from the Mumbles Head to Swansea. This will be even better when the contractors have finished
          upgrading and refurbishing the Mumbles coastal sea defences. The work aims to reduce the risk of flooding to homes and businesses that are increasingly 
          threatened by rising sea levels brought about by climate change.
          <br />
          <br />
          There are also numerous places to eat. We chose <Link to="https://www.verdis-cafe.co.uk/" target="_blank" className="LinkAugust"> Verdi's Italian Café </Link>
           which is very busy and popular, the service is great and there is a good choice of menu. It also has pretty awesome views across the bay. Just a word of warning,
           the portion sizes are <em>huge</em>, so just be prepared for that if you are visiting.
           <br />
          <br />
          Castell Coch on the other hand is situated high on the outskirts of Cardiff, high on a hillside. It is built on the site of a medieval  castle which dates back to the 11th,
          12th and 13th centuries. The basement, which you can go inside is part of the original medieval castle. By the early 14th century the castle seems to have fallen into ruin. However 550 years later, the very wealthy Marquess of Bute
          who had inherited a fortune made from the industrial growth of South Wales, commissioned <Link to="https://en.wikipedia.org/wiki/William_Burges" target="_blank" className="LinkAugust"> William Burges </Link>  
          to recreate a vision of the Middle Ages and build a new castle on the site of the old. The two already knew each other as they had worked together developing Cardiff Castle.
          <br />
          <br />
          Castell Coch was actually a lot more interesting and fun than we had anticipated. 
          There are several forest walks up the hillside behind the castle which are also worthwhile and one of which we undertook.

          <br />
          <br />
           Click on the Mumbles and Castell Coch holiday album below to see selected photos of day 4 of the holiday.
           <fig>
            <Link to="https://photos.app.goo.gl/wfxJEfiXTYWePDxk7" target="_blank">
            <img className="slideshowentryAugust" src={MumblesCastellCoch} alt="" />
            </Link>
          </fig></div>
           <div className="newsAugust"><li className="liAugust"><strong>Friday, 16th August 2024 :</strong></li> It was time to return to Cumbria today. Well, what can I say?
           It was summer holidays, on a Friday and a beautiful sunny day so the traffic was <em>extremely</em> busy with a number of hold ups. it was a <em>long, long </em> journey!
           However eventually we were safely home again and it was time for a rest.... It had been a very busy two weeks. </div>
           </ul>
           <br />
           <br />
           </section>

           <div className="datenewsDivAugust">
            <section className="dateAugust">15th August 2024, Thursday</section> 
            <section className="newsheaderAugust"> IMPORTANT DAY TODAY! - Harry's scientific paper is published in the <Link to="https://www.rsc.org/journals-books-databases/about-journals/catalysis-science-technology/"
            target="_blank" title="Click here to read more about the Catalysis Science and Technology Journal" className="LinkAugust">Catalysis Science and Technology Journal</Link> .
              Congratulations Harry and well-deserved after all your hard work! </section>  
            <br />
            <div className="newsCongrats">
              <div className="CongratsMessage">CONGRATULATIONS ON YOUR PUBLICATION HARRY!</div> 
              <br />
            <section className="newsAugust"> A really special and important day today as Harry heard that the scientific paper he has been working on has been published in the <Link to="https://www.rsc.org/journals-books-databases/about-journals/catalysis-science-technology/"
            target="_blank" title="Click here to read more about the Catalysis Science and Technology Journal" className="LinkAugust">Catalysis Science and Technology Journal</Link>. 
              As anyone working in the field of scientific research will know, to succeed in getting a paper published in a scientific journal of this repute is no small achievement.
              Harry is the first named author and the paper can be accessed by clicking on this link <Link to="https://pubs.rsc.org/en/content/articlelanding/2024/cy/d4cy00284a"
              target="_blank" className="LinkAugust">First principles investigation of manganese catalyst structure and coordination in the p-xylene oxidation process</Link>.
            </section>
            </div>
          </div> 
           
            <br />
           <br />

           <div className="datenewsDivAugust">
            <section className="dateAugust">18th August 2024, Sunday</section> 
            <section className="newsheaderAugust"> Stage 11 of our Hadrian's Wall Path Expedition successfully completed</section>  
            <br />
            <div className="news">
            <section className="newsAugust">Today we successfully completed Stage 11 of our Hadrian's Wall Path Expedition, Low Crosby to Burgh-By-Sands, 5e to 6b and part of 6c, 11.8 miles.
            <br /><br />
            For all the information about this trip for today and for the previous and remaining stages over the forthcoming weeks and months, please come and join us at our  
            <Link to="/hwp2024" className="LinkAugust"> Hadrian's Wall Path Expedition page </Link> .
            </section>
            </div>
          </div> 
            
            <br />
           <br />
           <div className="datenewsDivAugust">
            <section className="dateAugust">24th August 2024, Sunday</section> 
            <section className="newsheaderAugust"> Stage 12 and final stage of our Hadrian's Wall Path Expedition successfully completed</section>  
            <br />
            <div className="news">
            <section className="newsAugust">Today we successfully completed Stage 12, which is the final stage of our Hadrian's Wall Path Expedition, Burgh-By-Sands to Bowness-on-Solway, 
              part of 6c, 6d and 6e inclusive, 8.5 miles.
            <br /><br />
            For all the information about this trip for today and for the previous and remaining stages over the forthcoming weeks and months, please come and join us at our  
            <Link to="/hwp2024" className="LinkAugust"> Hadrian's Wall Path Expedition page </Link> .
            </section>
            </div>
          </div> 
            </div> {/*Closing tag for hwpDailyNarrative div */}
            <br />
           <br />
           </div>

    );
};

