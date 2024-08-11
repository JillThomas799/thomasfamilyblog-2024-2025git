import React from 'react';
import { Link } from "react-router-dom";
import './Hwp2024.css';
import Romaneagle from 'components/eagle';
import NewcastleQuayside from "./imagesresized/NewcastleQuayside.jpg";
import HwpIntro from "./imagesresized/HwpIntro.jpg";
import ChollerfordBroccolitia from "./imagesresized/ChollerfordBroccolitia.jpg";
import MithrasTemple from "./imagesresized/MithrasTemple.jpg";
import LegionExhibitionEntrance from "./imagesresized/LegionExhibitionEntrance.jpg";
import HousesteadsCawfieldQuarry from "./imagesresized/HousesteadsCawfieldQuarry.jpg";
import ThirlwallElena1 from "./imagesresized/ThirlwallElena1.jpg";
import WhittleChollerford from "./imagesresized/WhittleChollerford.jpg";
import RomanArmyMuseumT from "./imagesresized/RomanArmyMuseumT.jpg";
import HeddonItalianClosed2Text from "./imagesresized/HeddonItalianClosed2Text.jpg";
import HWPThermometer from 'components/charityfundraisingthermometer';
import WillowfordDay9 from "./imagesresized/WillowfordDay9.jpg";
import Branzinos from "./imagesresized/Branzinos.jpg";
import GatesheadMillennium from "./imagesresized/GatesheadMillennium.jpg";
import TyneKingGeorge from "./imagesresized/TyneKingGeorge.jpg";
import Swing from "./imagesresized/Swing.jpg";
import HighLevel from "./imagesresized/HighLevel.jpg";
import QEii from "./imagesresized/QEii.jpg";
import KingEdwardVII from "./imagesresized/KingEdwardVII.jpg";
import DunstonStaithes from "./imagesresized/DunstonStaithes.jpg";
import DentonHallTurret from "./imagesresized/DentonHallTurret.jpg";
import Lemington from "./imagesresized/Lemington.jpg";
import Newburn from "./imagesresized/Newburn.jpg";
import WaltonTearoomnamed from "./imagesresized/WaltonTearoomnamed.jpg";



export default function Hwp2024() {
    return (

        <div className="bodyHwp">
        <div className="hwp2024Header"> 
          <button id="backbutton" style={{backgroundColor:"#D19B2F"}}>
            <Link to="/" className="backbuttonLink" style={{color:"black"}}>Back</Link>
          </button>
          </div>
        <h1 className="hadrianswallTitle" style={{backgroundColor:"#66023c", borderRadius:"0"}}>Hadrian's Wall Path 2024
        <Romaneagle />
        <HWPThermometer />
        <div className="introHostPhotoHwp">
        <img className="hwpIntroPhoto" src={HwpIntro} alt="" />
        </div>
        </h1>
      

        <div className="datenewsDivHwp">
        <section className="dateHwp">1st June, 2024 onwards.... Hadrian's Wall Long Distance Path </section>
        <div className="newsheaderHwp">How did we come to be here?.....</div> 
        <div className="newsHwp">
        < div className="hwpDailyNarrative">
          <div>If this were a novel, it might possibly commence with the following....... <br /> <br /></div>
          <em>'When they looked back afterwards, no one could quite recall how they had arrived 
            at the decision to walk this 84 mile wild and windswept path from the East to the West Coast of England, encompassing both current-day Northumberland and Cumbria. 
            Or at least, if anyone did recall, no one was now admitting to it, in case they might have to accept responsibility....'
            <br />
            <br /> 
            </em>  
        On a more serious note though, what is clear are the aims of this undertaking, which are to:
        <br />
        <ul id="hwpIntroList">
        <li>Complete the Hadrian's Wall Path on separate days over a number of months.</li>
        <li>Ensure there is ample opportunity to visit the many museums and sites of interest en route and to enjoy the fantastic views.</li>
        <li>Try and keep the trip as 'green' as possible.</li>
        <li>Make a blog record of the journey, which others considering this trip might find useful.</li>
        <li>Try where possible to support local and regional businesses, organisations and charities.</li> 
        </ul>
      <br />
        Over the coming weeks and months we will section by section be adding news of our Hadrian's Wall Path Expedition. 
        <br />
        <br />
        To enter into the theme, the background 
        colours for the Hadrian's Wall Path blog have been chosen for their significance to the Romans and the Roman Empire, with the
        key colour being Tyrian Purple, the colour worn by the Roman Emperor.  This <Link to="https://www.ncl.ac.uk/press/articles/latest/2024/05/tyrianpurplecarlisle/" target="_blank"
        title="Click here to learn more about information produced by Newcastle University about Tyrian purple" className="LinkHWP"> article </Link> from Newcastle University explains more about the source
        and importance of Tyrian purple, which only the emperor was allowed to wear.

        
        </div> {/*Closing tab for hwpDailyNarrative div */}
        </div>  {/*Closing tab for newsHwp div */}
        </div>  {/*Closing tab for datenewsDivHwp div */}

      

        <div className="datenewsDivHwp">
            <section className="newsheaderHwp"><strong>Day 1 - Wallsend to Newcastle Swing Bridge: 5.1 miles on the Hadrian's Wall Path, 7.5 miles total</strong></section>
            <section className="dateHwp">1st June 2024, Saturday</section> 
            <div className="newsHwp">
             <div className="componentWalkDetails">     
            <strong className="headTitles">Details of the Walk </strong>
            <ul className="hwpIntroList">
                <li><strong className="titles">Parking:</strong><br />Quayside Car Park (owned by Newcastle City Council). £11.00 for the day. Payment is via the <Link to="https://www.paybyphone.co.uk/" target="_blank">Pay by Phone</Link> app on your mobile phone.</li>
                <li><strong className="titles">Public Transport: </strong><br /> Metro yellow line heading to South Shields via Whitley Bay between <strong>Manors</strong> and <strong>Wallsend</strong> metro stations. 
                Routes and live updates can be viewed on the Nexus <Link to="https://www.nexus.org.uk/ticket-information/pop/pop-app" target="_blank" title="Click here to go to the Pop app Information page of the Nexus site" className="LinkHWP">Pop app</Link>. Cost £5.60 per adult for All Day Rover ticket.</li>
                <li><strong className="titles">Distance:</strong><br /> 5.1 miles on the Hadrian's Wall Path, 7.5 miles total, <strong> Ascent:</strong> 22 metres, 72 feet,  <strong>Descent:</strong> 30 metres, 98 feet. </li>
                <li><strong className="titles">Refreshments:</strong><br /><Link to="https://oswinproject.org.uk/our-work/cafe-16-at-newcastle-cathedral/" target="_blank" title="Click here to discover more about Café 16, St Nicholas' Cathedral " className="LinkHWP">Café 16, St Nicholas' Cathedral</Link>, Newcastle.
                The café is supplied with fresh produce from the charity’s bakery in HMP Northumberland, where the café's trained bakers allow prisoners to learn new skills and find a new direction on release.</li> 
                </ul>    

            <strong className="headTitles">Good</strong> 
            <ul className="hwpIntroList">
              <div className="listItemsAlign">
                <li><strong className="titles">Museums :</strong><br /><Link to="https://segedunumromanfort.org.uk/" target="_blank" title="Click here
            to discover more about Segedunum Fort" className="LinkHWP"> Segedunum Fort </Link>, <Link to="https://www.newcastlecastle.co.uk/" target="_blank" title="Click 
            here to discover more about Newcastle Castle" className="LinkHWP">Newcastle Castle</Link></li>
                <li><strong className="titles">Walk : </strong><br />The section of the walk which runs right beside the River Tyne was our favourite, watching the speed boats, fishing boats and seagulls.</li> 
                <li><strong className="titles">History : </strong><br />Learnt not just about Roman history but also about the docks and the ships built there and the medieval history of Newcastle Castle.</li> 
                <li><strong className="titles">Information boards:</strong><br />Really interesting and informative information boards en route during the walks.</li>
                <li><strong className="titles">Weather:</strong><br /> Beautiful, sunny day.</li>
                </div>
                </ul>
                <br />
            <strong className="headTitles">Not so good</strong> 
            <ul className="hwpIntroList">
                <li><strong className="titles">Underfoot</strong><br />All of the walk was on firm surfaces.</li>
                <li><strong className="titles">Seating</strong><br />There is relatively little opportunity for sitting down between the main waymarks, although there 
                is a lovely picnic area at Wallsend within the Segendum Fort and some great quayside seating and bars and cafés once getting by the Millenium and Swing Bridges.  </li>
                </ul>
            <strong className="headTitles">Hike Rating</strong> 
            <ul className="hwpIntroList">
            <li><strong className="titles">8 (out of 10):</strong> Better walk than expected so don't let some people's complaints about its urban setting on line put you off.
            It is walking on firm surfaces all the way though. Many people walk this section combining 3 segments known as 1a, 1b and 1c, from Wallsend to Heddon-on-the-Wall, but we would advise against this if possible
            as there is so much to do, to see and to learn that undertaking so much in one day does not allow for time to be spent in the sites and museums. Also we would not advise walking on firm 
            surfaces for such a distance.</li>
            </ul>
            </div>    {/* Closing tag ComponentWalkDetails Class*/ }          
            <br />
            <div className="hwpDailyNarrative">
            We were up early on this, the first day of our Hadrian's Wall walk and left promptly in order to be in Newcastle by 9.30am. We chose to park on one of the Newcastle City Council car parks.
            Be forewarned, these no longer accept cash payments, so it is worth setting up the 
             <Link to="https://www.paybyphone.co.uk/" target="_blank" className="LinkHWP"> Pay by Phone app</Link> on your phone before you go, so that payment can be made quickly and easily.
            We used the <Link to="https://www.getintonewcastle.co.uk/venues/quayside-multi-storey-car-park" target="_blank" title="Click here to discover more about the Quayside Car Park" className="LinkHWP"> Quayside Car Park </Link> 
            which is reasonably priced by city standards (£11.00 for the day) and parking after 18.00 is free. 
            <br />
            <br />
            After a short 10 minute walk (0.3 mile), we arrived at Manors Metro Station. The Metro services in Newcastle are run by <Link to="https://www.nexus.org.uk/" target="_blank" title="Click here to go to the Nexus website" className="LinkHWP">Nexus</Link>.
            Their <Link to="https://www.nexus.org.uk/ticket-information/pop/pop-app" target="_blank" title="Click here to go to the Pop app Information page of the Nexus site" className="LinkHWP"> Pop app </Link>
            can be downloaded to your phone and allows you to plan your journey and access live updates. Day tickets need to be purchased at the ticket machine located just inside the entrance to the station, but are straightforward to acquire.
            <br />
            <br />
            The Hadrian's Wall Path starts at Wallsend, and on disembarking at Wallsend metro station, it is a well-signed posted and short (3 minute) walk to  
            <Link to="https://segedunumromanfort.org.uk/" target="_blank" title="Click here to discover more about Segedunum Fort" className="LinkHWP"> Segedunum Roman Fort. </Link>
            Entry was half-price as the 3rd floor of the museum and also the reconstructed bath house were currently closed, awaiting repairs to flooding damage. 
            These are due to be completed by the end of August as this <Link to ="https://www.bbc.com/news/articles/cndd2wppy3xo" target="_blank" title="Click here to open the article" className="LinkHWP"> recent BBC article</Link> explains, so in no way let this put you off 
            visiting as this is still an excellent, informative museum and site and there are some amazing views from the viewing tower. Our intention is to have a further visit 
            when the repairs are complete.
            <br />
            <br />
            From there, we went on to join the Hadrian's Wall Path which, for the first 12 miles runs not along the original line of Hadrian's Wall
            but along the route 72 cycle and pedestrian way along the Northern bank of the River Tyne. This path is much pleasanter than might be imagined, despite
            it being through quite an urban area. It is also a cycle path, so you just need to keep a look out for cyclists to let them past. Our favourite 
            section was when we dropped down to be right beside the River Tyne. The Ropery formed a good spot for a packed lunch as there was a bench to 
            sit on. 
            <br />
            <br />
            After lunch, it was a leisurely wander into Newcastle city centre via the Quayside. It was a beautifully sunny Saturday afternoon so people were making full use 
            of the riverside and rooftop bars and restaurants. On arrival in Newcastle city centre, it was time for some refreshments and we went to <Link to="https://oswinproject.org.uk/our-work/cafe-16-at-newcastle-cathedral/" 
            target="_blank" title="Click here to discover more about Café 16, St Nicholas' Cathedral " className="LinkHWP">Café 16, St Nicholas' Cathedral</Link> who have excellent cakes, before
            heading down the road to <Link to="https://www.newcastlecastle.co.uk/" target="_blank" title="Click 
            here to discover more about Newcastle Castle" className="LinkHWP">Newcastle Castle</Link> to visit the Black Gate and to climb the Keep, from which there are some fantastic views 
            of Newcastle's iconic bridges. 
            <br />
            <br />
            All in all it had been a great first day of the Hadrian's Wall Path with everyone looking forward to the next stage....
            <br />
            <br />
            Join us on our 1st day of the Hadrian's Wall Path by clicking on the album below and following our narrative by clicking on the added comments.          
            </div> {/*Closing tag for hwpDailyNarrative div */}
            

          <div className="slideshowHostPhotoHwp">
          <fig>
            <Link to="https://photos.app.goo.gl/sRhBPqCMEbCajSdf9" target="_blank">
            <img className="slideshowentryHwp" src={NewcastleQuayside} alt="" />
            </Link>
          </fig>
           </div>  {/* Closing div SlideshowHostPhotoHwp */}
           </div> {/* Closing tag datenewsDivHwp */}
      </div>

      <div className="datenewsDivHwp">
            <section className="newsheaderHwp"><strong>Day 2 - Newcastle Gateshead Millenium Bridge to Tyne Riverside Country Park: 8.7 miles (including a 1 mile detour to Denton Hall turret).</strong></section>
            <section className="dateHwp">3rd August 2024, Saturday</section>
      </div>

      <div className="newsHwp">
             <div className="componentWalkDetails">     
            <strong className="headTitles">Details of the Walk </strong>
            <ul className="hwpIntroList">
                <li><strong className="titles">Parking:</strong><br />Free parking at Tyne Riverside car park and parking for £4.60 for the day on a Saturday at St Ann's Car Park, Sandgate, Newcastle Upon Tyne.</li>
                <li><strong className="titles">Distance:</strong><br /> 8.7 miles on the Hadrian's Wall Path, including the Denton Hall turret diversion<strong> Ascent:</strong> 56 metres, 184 feet,  <strong>Descent:</strong> 45 metres, 148 feet. </li>
                <li><strong className="titles">Refreshments:</strong><br />Coffees and cakes at <Link to="https://www.getintonewcastle.co.uk/venues/starbucks-malmaison" target="_blank" title="Click here to discover more about Starbucks at Malmaison, Newcastle" className="LinkHWP">Starbucks at Malmaison</Link>, Newcastle
                and soft drinks at <Link to="https://www.branzinorestaurant.co.uk/" target="_blank" title="Click here to discover more about Branzinos" className="LinkHWP"> Branzino's Italian restaurant </Link> , the Boat House, Newburn, Newcastle. </li> 
                </ul>    

            <strong className="headTitles">Good</strong> 
            <ul className="hwpIntroList">
              <div className="listItemsAlign">
                <li><strong className="titles">Points of Interest :</strong><br />There are a surprising number of points of interest on this segment of the walk, far more than
                we had anticipated. They include the Blacksmith's Needle, the seven key Newcastle bridges, the old fish market, Dunston Staith, Elswick and Scotwood and the history of William Armstrong and his importance
                in armament production and ship building on the Tyne, the Lemington glassworks, the battle of Newburn Ford and Tyne Riverside Park.</li>
                <li><strong className="titles">Walk : </strong><br />The initial part of this walk runs alongside the River Tyne, with plenty of historical features and points of interest to note..</li> 
                <li><strong className="titles">History : </strong><br />Learnt lots more about the industrial history of the River Tyne, especially its very important role in ship building and armament production.</li> 
                <li><strong className="titles">Information boards:</strong><br />There is a plethora of interesting and informative information boards en route during the walks.</li>
                <li><strong className="titles">Weather:</strong><br /> It was a beautiful, sunny day.</li>
                </div>
                </ul>
                <br />
            <strong className="headTitles">Not so good</strong> 
            <ul className="hwpIntroList">
                <li><strong className="titles">Traffic congestion</strong><br />Due to the Red Bull Tyne Ride Event, a significant number of roads in the centre of Newcastle 
                were closed, which added to the fact it was Saturday lunchtime, made the short journey between Tyne Riverside Country Park and the parking in the city centre
                quite slow and challenging. </li>
                </ul>
            <strong className="headTitles">Hike Rating</strong> 
            <ul className="hwpIntroList">
            <li><strong className="titles">8 (out of 10):</strong> This was an interesting and enjoyable walk. There was more opportunity to sit down than on Stage 1 of the walk
            and especially on the stretch along the Tyne riverside, a significant amount of history to learn about. This really gave a feel, not just of history relating to Roman times,
            but also the medieval and 17th - 19th century  development of Newcastle city and the surrounding areas.</li>
            </ul>
            </div>    {/* Closing tag ComponentWalkDetails Class*/ }          
            <br />

          <div className="hwpDailyNarrative">
           Today, we were heading back into Newcastle City Centre to undertake Stage 2 of the Hadrian's Wall Path, between Newcastle Gateshead Millenium Bridge and 
           Tyne Riverside Country Park. We were keen to finally get this segment completed as it had already had to be postponed on several occasions and the 
           annual Great North Run Event is due to be on at the beginning of September, making access into the city, which is overwhelmingly busy, very restricted at that time.
           <br />
           <br />
           What we had not counted on though was the fact that today there was another large event on in Newcastle, the <Link to="https://www.redbull.com/gb-en/events/red-bull-tyne-ride"
           target="_blank" className="LinkHWP"> Red Bull Tyne Ride Event </Link> . As a result, it took us over 24 minutes to cover just 7 miles in heavily congested traffic through the centre 
           of Newcastle both in the morning, and also on our return in the evening....           
            <br />
            <br />
            There was plenty to see on today's walk though including Blacksmith's Needle, the seven famous bridges of Newcastle upon Tyne, the old Fish Market, Dunston Staith, Elswick and Scotwood and the history of William Armstrong and his importance
            in armament production and ship building on the Tyne, the Lemington glassworks, the battle of Newburn Ford and Tyne Riverside Park.
            <br />
            <br />
            <strong style={{fontSize:"1.2rem"}}>Blacksmith's Needle :</strong> was made by the British Artist Blacksmiths Association and unveiled in May 1997, with it's constituent parts made at different forges around the country.
            <br />
            <br />
            <strong style={{fontSize:"1.2rem"}}>The seven famous bridges of Newcastle upon Tyne (from East to West) :</strong>
            <br />
            <br />
            <ol>
              <li><strong>Gateshead Millenium Bridge :</strong> <br /> was opened on September 17th, 2001. It was designed to link Newcastle's north bank with Gateshead Quays, the new arts and cultural quarter to the south. 
              The bridge consists of two steel arches, a deck that acts as the pedestrian and cycle path and a supporting arch. It was the world's first tilting bridge.
              <fig><section className = "blogPhoto1HWP" ><img src={GatesheadMillennium} alt="" /><figcaption className='HWPfigcaption'><strong>Gateshead Millennium Bridge <br /> (seen in the foreground)</strong></figcaption></section>
              </fig>
               </li>
              <li><strong>George V or Tyne Bridge :</strong> <br /> was officially opened on 10 October 1928 by King George V, who was first to cross it with Queen Mary. It was built of Cornish granite by the engineering firm Mott, Hay and Anderson and is today Grade II listed and  
              recognised as being a key symbol of Newcastle's identity. It was built for the new age of the motorised-vehicle and to cope with increasing traffic crossing the Tyne. 
              At the time of its construction, the Tyne Bridge was the world’s longest span bridge. 
              <fig><section className = "blogPhoto1HWP" ><img src={TyneKingGeorge} alt="" /><figcaption className='HWPfigcaption'><strong>Tyne Bridge</strong></figcaption></section>
              </fig></li>
              <li><strong>Swing Bridge :</strong> <br /> stands on the site of the Old Tyne Bridges of 1270 and 1781, and probably of the original Roman Pons Aelius bridge, which was both a very important
              part of the Roman infrastructure, but also a site of religious worship as revealed by the presence of two altars, dedicated to the water gods Neptune and Oceanus, which were found on the site 
              of the bridge in the late 19th century. <br /> The new bridge was opened in 1876 and is a swinging bridge of electric/hydraulic operation. It was necessary to replace the old Georgian Bridge as the old bridge was low level and prevented larger vessels from moving up river. This meant that keels were needed to transport coal from the riverbank staiths at Dunston, Derwenthaugh and beyond to the ships further down river, 
                an inefficient and time-consuming process. Armstrong's factories at Elswick were held back due to the impossibility of ships reaching there. Trade was greatly stimulated after the Swing Bridge opened. 
                Armstrong's Elswick shipyard commenced in 1884 and various other works benefited. Coal shipments from northwest Durham became much easier and facilitated the opening of new staiths at Dunston in 1893 and 1903.
                <fig><section className = "blogPhoto1HWP" ><img src={Swing} alt="" /><figcaption className='HWPfigcaption'><strong>Swing Bridge (The low-level red and cream bridge <br /> seen in the foreground)</strong></figcaption></section>
              </fig></li>
              <li><strong>High Level Bridge :</strong> <br /> over which the intercity train line runs and which was designed by Robert Stephenson opened in 1849 aand was part of the objective to create a continuous line from London to Edinburgh 
              being the first in the world  to combine rail and road traffic
              <fig><section className = "blogPhoto1HWP" ><img src={HighLevel} alt="" /><figcaption className='HWPfigcaption'><strong>High Level Bridge (seen in the foreground)</strong></figcaption></section>
              </fig></li>
              <li><strong>Queen Elizabeth II Bridge  :</strong> <br /> was built as part of the Tyne and Wear Metro system and opened on the 6th November 1981, 9 days before the regular Metro service began,
              <fig><section className = "blogPhoto1HWP" ><img src={QEii} alt="" /><figcaption className='HWPfigcaption'><strong>Queen Elizabeth II bridge (seen in the foreground)</strong></figcaption></section>
              </fig></li>
              <li><strong>King Edward VII Bridge : </strong> <br /> The King Edward VII Bridge spans the River Tyne between Newcastle upon Tyne and Gateshead. This bridge, together with the High Level Bridge completed a loop of railway tracks using both sides of the Tyne making train movements easier. 
              Trains from north or south of Newcastle could enter or leave via the new bridge and the west end of Central Station, which now became a through station for north-south trains. 
              At the Gateshead end are two viaducts, one turning west and one east so that trains can be sent in either direction. <br /> Construction began in July 1902 and the bridge was opened 
              by King Edward VII and Queen Alexandra on 10 July 1906.Today it carries the main East Coast railway and is Listed Grade II. 
              <fig><section className = "blogPhoto1HWP" ><img src={KingEdwardVII} alt="" /><figcaption className='HWPfigcaption'><strong>King Edward VII Bridge (seen in the background, <br /> behind the blue Queen Elizabeth II Bridge)</strong></figcaption></section>
              </fig>
            </li>
              <li><strong>Redheugh Bridge :</strong> 
<br />
There have been 3 Redheugh Bridges spanning the River Tyne and currently carrying the A189 road. 

    The first Redheugh Bridge, built by Thomas Bouch, was opened in 1871. It needed to be replaced because of structural faults.
    The second bridge, built by Sir William Arrol & Co, was opened on 13th August 1901.
    The third and current Redheugh Bridge was built by Edmund Nuttall Ltd and opened on 18th May 1983 by Princess Diana.
</li>
<br />
<br />
              </ol>
          
              This additional <Link to="https://englandsnortheast.co.uk/newcastle-quayside-history/" target="_blank"
            title="Click here to discover more about Newcastle's seven bridges and quayside" className="LinkHWP">article</Link> also has some really interesting information about the bridges and the history of Newcastle 
            quayside.

            <br />
            <br />
            <strong style={{fontSize:"1.2rem"}}> Fish Market : </strong>
             There have been fish stalls on Sandhill going back to Medieval times. From 1823 the fish market was held in the new covered section of the Guildhall designed by John Dobson.
            In 1880 a new purpose-built indoor fish market was built on Sandhill. Later the fish market moved to Clayton Street and then eventually relocated as a dedicated section of the Green Market.
            Today,  the old Fish Market, is now 'Riverside', a  popular live music venue. 
            <br />
            <br />
            <strong style={{fontSize:"1.2rem"}}> Dunston Staiths : </strong>
             Dunston Staiths, on the River Tyne, is believed to be the largest timber structure in Europe. 
            It is a Scheduled Monument, Grade II listed and is owned by registered charity Tyne and Wear Building Preservation Trust (TWBPT). 
            Opened in 1893 by the North East Railway Company, it was built to allow large quantities of coal arriving by rail from the Durham 
            Coalfields to be loaded directly onto waiting colliers (coal ships) ready for the onward journey to customers in London and abroad. 
            At the coal industry's peak around 5.5 million tons of coal was moved this way each year.    
            <br />
            <br />
            <fig><section className = "blogPhoto1HWP" ><img src={DunstonStaithes} alt="" /><figcaption className='HWPfigcaption'><strong>Dunston Staithes</strong></figcaption></section>
           </fig>
            <strong style={{fontSize:"1.2rem"}}> Elswick and Scotwood : </strong>
            At its zenith, around the turn of the century, William Armstrong's Elswick and Scotswood works employed over 20,000 people.
            This workforce together with their families and the many small trades, industries, shops and the like 
            which served them, accounted for the growth of most of the western suburbs of Newcastle. Scotswood and 
            Elswick, along with four other small townships Jesmond, Heaton, Byker and Westgate – were taken into the 
            boundaries of Newcastle Upon Tyne under the Municiple Corporation Act of 1835.
            This expansion of the city brought the spread of housing into the suburbs. 
            Fuelled by the growth of industry on the riverbank, the construction of houses in Elswick and Scotswood took 
            place at a rapid and constant pace. In 1851 the population of Elswick was 3,539.
            <br />
            <br />
            <strong style={{fontSize:"1.2rem"}}> Lemington Glassworks : </strong>
            The glassworks site was leased from the Duke of Northumberland by a group of local businessmen under the name 
            of the Northumberland Glass Company in 1787. Initially flat glass was produced from 4 large glass cones. This 
            company owned the glassworks until 1837 when three of the glass houses were demolished, leaving the huge cone 
            which is still in existence. 
            <br />
            <br />
            <fig><section className = "blogPhoto1HWP" ><img src={Lemington} alt="" /><figcaption className='HWPfigcaption'><strong>Lemington</strong></figcaption></section>
           </fig>
            <strong style={{fontSize:"1.2rem"}}> Battle of Newburn Ford : </strong>
            The Battle of Newburn Ford took place in Summer 1640 when a Scottish Covenanter army of 20,000 under Alexander Leslie 
            defeated an English force of 5,000, led by Lord Conway. The only significant military action of the Second Bishop's War, 
            victory enabled the Scots to take Newcastle, which provided the bulk of London's coal supplies, and allowed them to put 
            pressure on the central government. It is important because it had far-reaching consequences for King Charles, 
            setting the scene for a civil  war in which King Charles lost his throne and his head and England became a republic for 
            the first and last time under Oliver Cromwell. The main cause of the confrontation was religion, particularly as Archbishop 
            William Laud has attempted to impose a new prayer book on the Scots.
            <br />
            <br />
            <fig><section className = "blogPhoto1HWP" ><img src={Newburn} alt="" /><figcaption className='HWPfigcaption'><strong>Site of Battle of Newburn Ford</strong></figcaption></section>
           </fig>
            <strong style={{fontSize:"1.2rem"}}> Denton Hall Turret : </strong>
            Denton Hall Turret lies in the western suburbs of Newcastle, part of a 63-metre section of Hadrian’s Wall in a small public space adjacent to the A186.
            Built of unusually large stones, the turret has a platform in one corner, which probably served as the base for a ladder to reach the upper floors. 
            Another 60-metre section of the Wall survives 300 metres west, alongside the south verge of the A69.
            <br />
            <br />
            <fig><section className = "blogPhoto1HWP" ><img src={DentonHallTurret} alt="" /><figcaption className='HWPfigcaption'><strong>Denton Hall Turret </strong></figcaption></section>
           </fig>
            Join us on our 2nd day of the Hadrian's Wall Path by clicking on the album below and following our narrative by clicking on the added comments.          

          </div>
          <div className="slideshowHostPhotoHwp">
          <fig>
            <Link to="https://photos.app.goo.gl/VWvo8FVKnFQaRuQ38" target="_blank">
            <img className="slideshowentryHwp" src={Branzinos} alt="" />
            </Link>
          </fig>
          <br />
          <br />
         
          
           </div>  {/* Closing div SlideshowHostPhotoHwp */}
           </div> {/* Closing tag datenewsDivHwp */}
                       

      <div className="datenewsDivHwp">
            <section className="newsheaderHwp"><strong>Day 3 - Tyne Riverside Country Park to Whittle Dene Reservoirs: 8.6 miles on the Hadrian's Wall Path, 9.56 miles in total.</strong></section>
            <section className="dateHwp">20th July, 2024</section>

            <div className="newsHwp">
             <div className="componentWalkDetails">     
            <strong className="headTitles">Details of the Walk </strong>
            <ul className="hwpIntroList">
                <li><strong className="titles">Parking:</strong><br />Free parking at Tyne Riverside Country Park car park and on the roadside-parking in the lay-by at Whittle dene reservoirs.</li>
                <li><strong className="titles">Paths: </strong><br />Clear, well-defined and sign-posted paths once you reach the far-side of Tyne Riverside Country Park.</li>
                <li><strong className="titles">Distance:</strong><br /> 9.56 miles in total, of which 8.6 miles on the Hadrian's Wall Path.<strong>  Ascent:</strong>  159 metres, 521 feet.  </li>
                <li><strong className="titles">Refreshments:</strong><br />Limited on this section, depending on the time when you are undertaking the walk. A special mention is therefore necessary
                for <Link to="https://www.spar.co.uk/store-locator/hal22784-spar-heddon" target="_blank" className="LinkHWP">Spar Petrol Station, Heddon-on-the-Wall</Link> who sell take-away coffees and a 
                good range of drinks and snacks . There is also a bathroom here which you can use, as long as you are purchasing something at the shop. </li> 
                </ul>    

            <strong className="headTitles">Good</strong> 
            <ul className="hwpIntroList">
              <div className="listItemsAlign">
                <li><strong className="titles">Heddon-on-the-Wall : </strong> is an interesting and pretty village, situated up on the hill. There are some lovely 
                views from here. There is also, with a small detour, the longest existing segment of the original broad section of Hadrian's Wall. There are plenty of information signs.
                Most of the year, the Italian bistro and deli should be open, we were just unlucky in it being their summer break.<br /></li> 
                <li><strong className="titles">History : </strong> The remains of <Link to="https://rudchester.org/fort.html" target="_blank" title="Click here to discover more 
                about Vindobala/Rudchester Fort" className="LinkHWP"> Vindobala/Rudchester Fort</Link> and the information board there are very interesting. <br /></li> 
                <li><strong className="titles">Weather:</strong> Whilst cloudy, it was warm and a pleasant day with no rain. <br /></li>
                </div>
                </ul>
                <br />
            <strong className="headTitles">Not so good</strong> 
            <ul className="hwpIntroList">
                <li><strong className="titles">Waymarking initially: </strong>Google maps will not take you to the correct place on Tyne Riverside Country Park, as we were 
                parking on the main car park by Hedley's Riverside Coffee Shop. To get there, when you are following Google Maps and 
                entering Tyne Riverside Country Park, take a left by the Keelman and Big Lamp Brewery; this will take you to the desired car park immediately 
                behind Hedley's Riverside Coffee Shop. <br /> On leaving the car, walk directly towards the River Tyne, by the side of the playground,
                and on meeting the main path, turn right towards Wylam (ie. away from Newcastle). Keep following this path until you see the Acorn sign pointing to the 
                right, at which point you will leave the main path and follow the Hadrian's Walk Path. </li>
                <li><strong className="titles">Mud and flood!:</strong> There were occasional extremely muddy sections and one section where the path was completely submerged 
                in water up to mid-calf depth, calling for an <Link to="https://en.wikipedia.org/wiki/Uncharted_4:_A_Thief%27s_End" target="_blank" className="LinkHWP">'Uncharted'</Link> type manoeuvre (see photo album). <br /> </li>
                <li><strong className="titles">Refreshments - Lack of:</strong> Refreshments are limited on this section, depending on the time when you are undertaking the walk. See "Refreshments" in the "Details of the Walk" section above. <br /> </li>
                <li><strong className="titles"></strong><br /> </li>
                </ul>
            <strong className="headTitles">Hike Rating</strong> 
            <ul className="hwpIntroList">
            <li><strong className="titles">8 (out of 10):</strong> What can we say....we have to deduct several points for the muddiness underfoot in sections, the flood and the limited opportunity for 
            refreshments en-route!</li>
            </ul>
            </div>    {/* Closing tag ComponentWalkDetails Class*/ }          
            <br />
            <div className="hwpDailyNarrative">
            We were walking today from Tyne Riverside Country Park, which is located 7 miles from the centre of Newcastle, up via Heddon-on-the-Wall and over to Whittle dene reservoir.
            On leaving the Tyne Riverside Country Park, we shortly joined the <Link to="https://co-curate.ncl.ac.uk/wylam-wagonway/" target="_blank" className="LinkHWP">  Wylam Waggonway
            </Link> , before starting to head up hill towards Heddon-on-the-Wall. 
            <br />
            <br />
            This climb up to Heddon-on-the-Wall is the very final stage of Day 1 for East to West Hadrian's Wall Path walkers who are undertaking the 
            trek over a week, and they complain about it a lot. We can see why....we would have not liked to climb up here after 16-18 miles walking. However, it was at the start of our walk, so all was well
            and good and we were soon in Heddon-on-the-Wall. 
            <br />
            <br />
            It had been quite a long drive out to Tyne Riverside Country Park, so we felt it was time for coffees and refreshments. However, it was only 11.10am 
            and so the <Link to="https://www.facebook.com/THREETUNSHEDDON/?_rdr" target="_blank" className="LinkHWP">The Three Tuns</Link> and <Link to="https://www.vintageinn.co.uk/restaurants/north-east/swan-at-heddon?utm_source=google&utm_medium=organic&utm_campaign=gmb-homepage#/"
            target="_blank" className="LinkHWP"> Swan </Link> inns were not yet open. Elena identified an alternative, the <Link to="https://www.tripadvisor.co.uk/Restaurant_Review-g1653233-d25194372-Reviews-Bell_E_Buon-Heddon_on_the_Wall_Northumberland_England.html"
            target="_blank" className="LinkHWP"> Bell e Buon </Link> Italian Bistro and Deli. However, when we arrived it was closed and there was a sign on the door; they were closed for their annual holiday.....
            After taking a small detour to see the longest remaining segment of the broad (2.9 metre thickness) section of Hadrian's Wall, we were rescued by the <Link to="https://www.spar.co.uk/store-locator/hal22784-spar-heddon" target="_blank" className="LinkHWP"> Spar Petrol Station </Link> where we could buy drinks and snacks and use the bathroom facilities.
            So five stars to the Spar Petrol Station, Heddon-on-the-Wall!
            <br />
            <br />
            After a short rest, we set on our way again towards the remains of <Link to="https://rudchester.org/fort.html" target="_blank" title="Click here to discover more 
            about Vindobala/Rudchester Fort" className="LinkHWP"> Vindobala/Rudchester Fort</Link> . Then it was on towards Ironsign Farm B and B, which we circumnavigated and headed onwards towards
            Harlow Hill, some 2.25 miles away. There are some very muddy parts on this segment (see photos). But these soon sank into insignificance, when we came 
            to <em>the great flood</em>, which was located just before Albermale Barracks. This necessitated some very creative thinking, as demonstrated in the photo album.
            <br />
            <br />
            Finally, we were back at Whittle dene Reservoirs and it was time for a well-earned lunch, sitting on the picnic tables by the reservoir. Then it was time to pack our gear back 
            in the car, return to pick up the 2nd car from Tyne Riverside Country Park and to return to <Link to="https://www.tripadvisor.co.uk/ShowUserReviews-g1051961-d1508482-r953594113-The_Errington_Coffee_House-Corbridge_Northumberland_England.html"
            target="_blank" title="Click here to discover more about the Errington Coffee House" className="LinkHWP"> Errington Coffee House </Link> for some coffees and home-baked cakes.
            <br />
            <br />
            Join us on our 3rd day of the Hadrian's Wall Path by clicking on the album below and following our narrative by clicking on the added comments.          
            </div> {/*Closing tag for hwpDailyNarrative div */}
            <br />
            <br />
          <div className="slideshowHostPhotoHwp">
          <fig>
            <Link to="https://photos.app.goo.gl/rnn51hGg2vQVA3tFA" target="_blank">
            <img className="slideshowentryHwp" src={HeddonItalianClosed2Text} alt="" />
            </Link>
          </fig>
           </div>  {/* Closing div SlideshowHostPhotoHwp */}
           </div> {/* Closing tag datenewsDivHwp */}
      </div>
      

      <div className="datenewsDivHwp">
            <section className="newsheaderHwp"><strong>Day 4 - Whittle Dene Reservoirs to Chollerford with Brunton Turret(26a) and Chesters Bridge Abutment: 12.6 miles</strong></section>
            <section className="dateHwp">13th July 2024, Saturday</section>
             <div className="newsHwp">
             <div className="componentWalkDetails">     
            <strong className="headTitles">Details of the Walk </strong>
            <ul className="hwpIntroList">
                <li><strong className="titles">Parking:</strong><br />We parked for free on roadside-parking at Whittle dene reservoirs and the 
                lay-by on the B6320 just north of the roundabout at Chollerford.</li> 
                <li><strong className="titles">Paths: </strong>Clear, well-marked and sign-posted paths along the entire route. There is a requirement to 
                cross the road at several points, where care is needed. This section has the most stiles of any section of the walk.<br />
                </li>
                <li><strong className="titles">Distance:</strong><br /> 12.6 miles in total, of which  on the Hadrian's Wall Path.<strong>  Ascent:</strong>  246 metres, 810 feet.  </li>
                <li><strong className="titles">Refreshments:</strong><br />Coffees and drinks at the Robin Hood Inn, lunch at the Errington Coffee House. </li> 
                </ul>    

            <strong className="headTitles">Good</strong> 
            <ul className="hwpIntroList">
              <div className="listItemsAlign">
                <li><strong className="titles">Navigation: </strong><br />This section of the Hadrian's Wall Path is 
                very well-signposted and easy to follow on a clear path.</li>
                <li><strong className="titles">Vallum: </strong><br />Whilst there is not much wall to see in this section,
                there is plenty to see of the vallum, which can be observed quite clearly.
                </li> 
                <li><strong className="titles">Local hospitality: </strong><br />A big plus for the hospitality of the Robin Hood inn and Errington coffee house en-route.
                especially given the weather. They were a life-saver.
                </li> 
                </div>
                </ul>
                <br />

            <strong className="headTitles">Not so good</strong> 
            <ul className="hwpIntroList">
                <li><strong className="titles">Weather: </strong> <br />It was unfortunately raining all morning, which was a shame.
                </li>
                <li><strong className="titles">Distance: </strong> <br />This was (together with the detours), at 12.6 miles, at the upper end of an acceptable 
                walk length for the day. However, we did not regret having pushed on that bit extra to see the Brunton Turret and Chesters Wall 
                Abutment detours.
                </li>
                </ul>
                <br />
            <strong className="headTitles">Hike Rating</strong> 
            <ul className="hwpIntroList">
            <li><strong className="titles">8 (out of 10):</strong> </li>
            </ul>
            </div>    {/* Closing tag ComponentWalkDetails Class*/ } 

            <br />
            <div className="hwpDailyNarrative">
            Todays walk was to start at <Link to="https://www.nwt.org.uk/nature-reserves/whittle-dene" target="_blank" 
            title="Click here to discover more about Whittledene reservoirs and nature reserve" className="LinkHWP"> Whittle dene reservoirs and nature reserve </Link> and end back at the car at Chollerford roundabout taking in <Link to="https://www.nwt.org.uk/nature-reserves/whittle-dene" target="_blank" 
            title="Click here to discover more about Whittledene reservoirs and nature reserve" className="LinkHWP"> Whittle dene reservoirs and nature reserve </Link>, the 
            sites of turrets 17a to 26b and milecastles 17 to 26, <Link to="https://robinhoodinnhadrianswall.co.uk/" target="_blank"
            title="Click here to discover more about the Robin Hood Inn" className="LinkHWP"> Robin Hood Inn </Link> at East Wallhouses (also a stamping station), site of <Link to="https://www.u3ahadrianswall.co.uk/halton-chesters-roman-fort/"
            target="_blank" title="Click here to discover more about Halton Chesters Fort (Onnum)" className="LinkHWP"> Halton Chesters Fort (Onnum) </Link> ,
            <Link to="https://www.roman-britain.co.uk/places/portgate/" target="_blank" className="LinkHWP"> Port Gate </Link>, <Link to="https://www.tripadvisor.co.uk/ShowUserReviews-g1051961-d1508482-r953594113-The_Errington_Coffee_House-Corbridge_Northumberland_England.html"
            target="_blank" title="Click here to discover more about the Errington Coffee House" className="LinkHWP"> Errington Coffee House </Link>, <Link to="https://fabulousnorth.com/heavenfield/"
            target="_blank" title="Click here to discover more about Heavenfield Battle Site and St Oswald's Church" className="LinkHWP"> Heavenfield Battle site and Church of St Oswald </Link> , <Link to="https://www.english-heritage.org.uk/visit/places/planetrees-roman-wall-hadrians-wall/"
            target="_blank" title="Click here to discover more about" className="LinkHWP"> Planetrees </Link> , <Link to="https://www.english-heritage.org.uk/visit/places/brunton-turret-hadrians-wall/" target="_blank"
            title="Click here to discover more about Brunton Turret" className="LinkHWP"> Brunton Turret (26a) </Link> , and the <Link to="https://www.english-heritage.org.uk/visit/places/chesters-bridge-abutment-hadrians-wall/"
            target="_blank" title="Click here to discover more about Chesters Bridge Abutment" className="LinkHWP"> Chesters Bridge Abutment </Link> .
            <br /> 
            <br /> 
            After parking the car, we left <Link to="https://www.nwt.org.uk/nature-reserves/whittle-dene" target="_blank" 
            title="Click here to discover more about Whittledene reservoirs and nature reserve" className="LinkHWP"> Whittle dene reservoirs and nature reserve </Link> just before 9.30am in steady rain. 
            Our first stop was intended to be the <Link to="https://robinhoodinnhadrianswall.co.uk/" target="_blank"
            title="Click here to discover more about the Robin Hood Inn" className="LinkHWP"> Robin Hood Inn </Link> at East Wallhouses, which is also a stamping station for our Hadrian's Wall passports.
            The Inn apparently dates back to 1752 and is constructed with traditional stone, which is thought to have been sourced from Hadrian’s Wall. The Inn is often mentioned by Hadrian's Wall walkers
            and local people and in our opinion, having been there, with good reason. In spite of it being 10am in the morning and the owners in the middle of cleaning after breakfast, when
            we appeared through the door soaking wet, they were more than happy to get us seated, serve us some coffees and chat about their experience
            doing what we are doing ie. walking the Wall in stages at the weekend, last year. We understand that there is also the Vallum Farm Tearoom  
            on the other side of the road as a possible place for refreshments, although we have not personally visited and it is important to distinguish this 
            from the restaurant at that location.
            <br /> 
            <br /> 
            Fully refreshed and dried out a little, and with our passports successfully stamped, we recommenced our journey. The path follows parallel to the B6318 but does cross
            this road a number of times, so it is necessary to take care. There are many stiles also along this section, which can become a little tiring after a while, but we would not advise being tempted to walk on the
            road, as some people were doing as the traffic travels very fast and your chances of surviving intact are questionable! The path anyway is well demarcated and signposted 
            and whilst there is a reasonable ascent on all this stretch today, it is very gradual and therefore you do not really notice it.
            It is also a great stretch for visualising at length, and really getting a feel for the <Link to="https://en.wikipedia.org/wiki/Vallum_(Hadrian%27s_Wall)"
            target="_blank" title="Click here to discover more about the Vallum" className="LinkHWP"> Vallum </Link> , and you cannot achieve this the same from the road. 
            <br/>
            <br/>
            Eventually, we came to the site of <Link to="https://www.u3ahadrianswall.co.uk/halton-chesters-roman-fort/"
            target="_blank" title="Click here to discover more about Halton Chesters Fort (Onnum)" className="LinkHWP"> Halton Chesters Fort (Onnum) </Link>, near Halton Castle before finally reaching 
            Errington roundabout, the site of <Link to="https://www.roman-britain.co.uk/places/portgate/" target="_blank" className="LinkHWP"> Port Gate </Link>, and our lunch stop <em>(yeah!)</em> <Link to="https://www.tripadvisor.co.uk/ShowUserReviews-g1051961-d1508482-r953594113-The_Errington_Coffee_House-Corbridge_Northumberland_England.html"
            target="_blank" title="Click here to discover more about the Errington Coffee House" className="LinkHWP"> Errington Coffee House </Link> , which was <em>extremely</em> busy, so we would advise
            making sure you are there promptly if you are intending to eat there. It is very reasonably-priced.
            <br/>
            <br/>
            After lunch, it was time to head towards an important 7th century battle site, the  <Link to="https://fabulousnorth.com/heavenfield/"
            target="_blank" title="Click here to discover more about Heavenfield Battle Site and St Oswald's Church" className="LinkHWP"> Heavenfield Battle site and Church of St Oswald </Link> and then <Link to="https://www.english-heritage.org.uk/visit/places/planetrees-roman-wall-hadrians-wall/"
            target="_blank" title="Click here to discover more about" className="LinkHWP"> Planetrees </Link> which was where can be seen a really good example of a piece of the Roman Wall which demonstrates the reduction from the building of 
            the Wall initially as broad gauge and subsequently, seemingly for the purposes of increased speed and reduction in cost, as narrow gauge.
            We were quite tired by now but it was decided that we could not venture out all this way without also adding in the detours to <Link to="https://www.english-heritage.org.uk/visit/places/brunton-turret-hadrians-wall/" target="_blank"
            title="Click here to discover more about Brunton Turret" className="LinkHWP"> Brunton Turret (26a) </Link> , and the <Link to="https://www.english-heritage.org.uk/visit/places/chesters-bridge-abutment-hadrians-wall/"
            target="_blank" title="Click here to discover more about Chesters Bridge Abutment" style={{color:"blue"}}> Chesters Bridge Abutment </Link>. The Chesters Bridge Abutment detour, alongside the east bank 
            of the river North Tyne does, at the end of a long day, seem like a bit of a trek, but having undertaken it, it is in our opinion well worth the effort.
             <br/>
             <br/>
            We invite you to join us on our 4th day of the Hadrian's Wall Path by clicking on the album below and following our narrative by clicking on the added comments.          
            </div> {/*Closing tag for hwpDailyNarrative div */}
            

          <div className="slideshowHostPhotoHwp">
          <fig>
            <Link to="https://photos.app.goo.gl/hL1BhXrSTocuc3Vq9" target="_blank">
            <img className="slideshowentryHwp" src={WhittleChollerford } alt="" />
            </Link>
          </fig>
           </div>  {/* Closing div SlideshowHostPhotoHwp */}
           </div> {/* Closing tag datenewsDivHwp */}
      </div>


      
      <div className="datenewsDivHwp">
            <section className="newsheaderHwp"><strong>Day 5 - Chollerford to Brocolitia/Carrawburgh Roman Fort: 4miles</strong></section>
            <section className="dateHwp">29th June 2024, Saturday</section>
             <div className="newsHwp">
             <div className="componentWalkDetails">     
            <strong className="headTitles">Details of the Walk </strong>
            <ul className="hwpIntroList">
                <li><strong className="titles">Parking:</strong><br />Brocolitia Roman Fort Car Park and lay-by on B6320 just north of the roundabout at Chollerford.</li>
                <li><strong className="titles">Paths: </strong><br />The Hadrian's Wall path is well-marked, clear and easy to following in this segment, just follow the Acorn signs. </li>
                <li><strong className="titles">Distance:</strong><br /> 4 miles on the Hadrian's Wall Path<strong>  Ascent:</strong> 215 metres, 705 feet. </li>
                <li><strong className="titles">Refreshments:</strong><br />English Heritage Café at Chester's Roman Fort. There is also the Corbridge Coffee Company mobile van daily on Broccolitia Fort car park.</li> 
                </ul>    

            <strong className="headTitles">Good</strong> 
            <ul className="hwpIntroList">
              <div className="listItemsAlign">
                <li><strong className="titles">Views :</strong><br />We gained over 200 metres on this walk, as we climbed out of the valley at Chollerford through which 
                the North Tyne River runs and up onto the ridge. There were therefore some extensive and impressive views looking in all directions as the 
                terrain opened out.</li>
                <li><strong className="titles">Walk : </strong><br />Very enjoyable walk with extensive views. Easy to navigate.</li> 
                <li><strong className="titles">History : </strong><br />Chester's Roman Fort, which is , together with Vindolanda and Housesteads,
                one of the most outstanding Roman Forts on the Hadrian's Wall path and we would suggest setting aside 2 hours to visit the fort and museum.</li> 
                <li><strong className="titles">Paths: </strong><br />The rangers keep a wide path of grass cut shorter and request that you walk 2 abreast to reduce the risk of erosion, which we attempted as much as possible to do.
                This made walking on the paths very straightforward.</li>
                <li><strong className="titles">Weather: </strong><br /> Whilst a rather cloudy day, the wind had dropped from the previous day and the rainy showers which had been forecast did not
                  materialise until later in the day. </li>
                </div>
                </ul>
                <br />
            <strong className="headTitles">Not so good</strong> 
            <ul className="hwpIntroList">
                <li><strong className="titles">Public Transport</strong><br />The AD122 bus, which we had planned on taking from Broccolitia Fort back to 
                Chollerford only runs every 2 hours, which meant that, in order to have plenty time to see Chester's Fort, on this occasion we had to take 2 cars, which was not so good. 
                </li>
                </ul>
            <strong className="headTitles">Hike Rating</strong> 
            <ul className="hwpIntroList">
            <li><strong className="titles">9 (out of 10):</strong> </li>
            </ul>
            </div>    {/* Closing tag ComponentWalkDetails Class*/ }          
            <br />
            <div className="hwpDailyNarrative">
           This was a reasonably short walk today, being only 4 miles, but we had chosen this option deliberately to allow us plenty of time to see 
           <Link to="https://www.english-heritage.org.uk/visit/places/chesters-roman-fort-and-museum-hadrians-wall/" target="_blank"
           title="Click here to discover more about Chester's Roman Fort" className="LinkHWP"> Chester's Roman Fort and Museum </Link> . 
           <br />
           <br />
           This segment is the first of 4 segments which form what is widely considered to be the finest section of the Hadrian's Wall Path (HWP). These 4 sections are also 
           the best-preserved segments of the wall and it becomes obvious as you walk along the path of the wall why this should be, as the landscape becomes increasingly wild and 
           rugged.
           <br />
           <br />
           First of all though, it was time to get our passports stamped at Chester's Fort. The only problem being it was not very clear which section of the passport
           was for which stamp, so we ended up mistakenly stamping Chester's in the Housesteads slot! Not to worry though, we are sure Northumberland National 
           Parks are used to this and Elena said it was all part and parcel of the Hadrian's Wall experience!...
            <br />
            <br />
            Key points and way-marks on the walk from Chollerford to Brocolitia/Carrawburgh Roman Fort include Chester's Roman Fort, Black Carts wall and Turret (29A), Limestone Corner, 
            the trig point at 250 metres and Limestone corner.
            <br />
            <br />
            Turret 29A (Black Carts): Black Carts is a 200 metre section of narrow wall. However, the accompanying Black Carts Turret was built in 122AD for the originally planned 3 metre width broad wall, 
            before the decision was made to build with a reduced width of 1.8 metres. The turrets and small section of wall were built first and then the rest of the wall afterwards. 
            Just to the north of Black Carts Turret the ditch can clearly be seen where, when John Clayton first excavated the site in 1873, he found 3 'centurial' stones showing the names
            of soldiers who built the section of wall.
            <br />
            <br />
            Trig point at 250 metres: Following a climb of about 200 metres from Chollerford, the views now started to open up here. The Cheviot Hills came into view in the north and <Link to="https://www.chipchasecastle.com/"
            target="_blank" className="LinkHWP">Chipchase Castle</Link> which has a 14th century Pele tower and a 17th century Jacobean house attached. It is a scheduled ancient monument and Grade 1 listed building.
            <br />
            <br />
            Limestone Corner: At Limestone Corner, there is an unfinished section of ditch filled with abandoned stone blocks: one slab still show the holes chiselled by the Romans to split the rock.
            The stone here is hard basalt and it appears that the Romans found this too hard to work with and gave up trying to complete this part of the ditch. Unfortunately, we did not take any photos
            of Limestone Corner, but this <Link to="https://perlineamvalli.wordpress.com/tag/limestone-corner/" target="_blank" className="LinkHWP"> Per Lineam Valli </Link> website has some interesting information and photographs
            <br />
            <br />
            Once we had successfully reached Brocolitia/Carrawburgh Military Fort we returned to the car in order to travel back to Chester's Roman Fort and spent
            the remainder of the afternoon there exploring fully the fort and museum, leaving the exploration of Brocolitia Fort for the following morning.
            <br />
            <br />
            <Link to="https://www.english-heritage.org.uk/visit/places/chesters-roman-fort-and-museum-hadrians-wall/" target="_blank"
           title="Click here to discover more about Chester's Roman Fort" className="LinkHWP"> Chester's Roman Fort and Museum </Link> are managed by English Heritage so members 
           can obtain free entry using their membership cards. Chester's Roman Fort is one of the best preserved Roman Ruins in Britain and is certainly,
           together with <Link to="https://www.english-heritage.org.uk/visit/places/chesters-roman-fort-and-museum-hadrians-wall/history/collection/" target="_blank" className="LinkHWP"> John Clayton's museum </Link> , one of our favourites. 
           In 1843, John Clayton inherited the site from his father, who had previously turfed over the ruins.
           John Clayton excavated many parts of the fort and created the museum to house and maintain the many exhibits both from the fort and other segments of the wall. He also developed such a 
           fascination for Hadrian's Wall that he bought up many other large areas of the wall. By the time John died in 1890 he owned five forts – Chesters, Carrawburgh, Housesteads, Vindolanda and Carvoran – 
           as well as most of the Wall within this 20 mile stretch.
           <br />
           <br />
           If you are visiting the Chesters site, we would strongly advise making sure that you leave enough time and that you also have time to see the John Clayton Museum 
           and the Chester's Bridge abutment detour right down to the river (see our previous, Day 4 entry regarding the Chesters Bridge abutment detour), where a narrow footbridge originally carried the Wall across the River North Tyne, but the Romans later replaced this 
           with an impressive stone road bridge. The remains of the stone abutment that joined the bridge to the riverbank survive, along with the foundations of the tower and a section of the wall.
           <br />
           <br />
           The fort was situated astride Hadrian's Wall, guarding the bridge over the river North Tyne and was occupied by a 500 strong cavalry regiment, the 
           ala II Asturum (Second Asturian Cavalry Unit) from Asturia in Northern Western Spain. There are plenty of information boards to provide further explanation
           for the various areas as you go around the fort.
            <br /> 
            <br /> 
            Join us on our 5th day of the Hadrian's Wall Path by clicking on the album below and following our narrative by clicking on the added comments.          
            </div> {/*Closing tag for hwpDailyNarrative div */}
            

          <div className="slideshowHostPhotoHwp">
          <fig>
            <Link to="https://photos.app.goo.gl/v2pBu6efu65sxcvy6" target="_blank">
            <img className="slideshowentryHwp" src={ChollerfordBroccolitia} alt="" />
            </Link>
          </fig>
           </div>  {/* Closing div SlideshowHostPhotoHwp */}
           </div> {/* Closing tag datenewsDivHwp */}

      </div>

      <div className="datenewsDivHwp">
            <section className="newsheaderHwp"><strong>Day 6 - Brocolitia/Carrawburgh Roman Fort to Housesteads Roman Fort: 5.7 miles on the Hadrian's Wall Path, 6.7 miles in total.</strong></section>
            <section className="dateHwp">30th June 2024, Sunday</section>
             <div className="newsHwp">
             <div className="componentWalkDetails">     
            <strong className="headTitles">Details of the Walk </strong>
            <ul className="hwpIntroList">
                <li><strong className="titles">Parking:</strong><br />Brocolitia Roman Fort Car Park and Housesteads Car Park. Both of these car parks are run by Northumberland National Park and we had bought an annual 
                Hadrian's Wall parking pass for one of the cars, so that helped.</li>
                <li><strong className="titles">Paths: </strong><br />The Hadrian's Wall path is well-marked, clear and easy to following in this segment, just follow the Acorn signs. The views become more dramatic as you
                progress towards Housesteads.</li>
                <li><strong className="titles">Distance:</strong><br /> 5.7 miles on the Hadrian's Wall Path, 6.7 miles in total.<strong>  Ascent:</strong>  184 metres, 604 feet.  </li>
                <li><strong className="titles">Refreshments:</strong><br />National Trust Café at Housestead's Roman Fort entrance by the car park. There is also the Corbridge Coffee Company mobile van daily on Brocolitia Fort car park.</li> 
                </ul>    

            <strong className="headTitles">Good</strong> 
            <ul className="hwpIntroList">
              <div className="listItemsAlign">
                <li><strong className="titles">Views :</strong><br />The countryside really opens out as you climb on to the Whin Sill at Sewingshield Crags and it is possible
                to experience to some degree what it must have really been like for the Romans and civilians living in these areas and also the challenges of building the wall.</li>
                <li><strong className="titles">Walk : </strong><br />Very enjoyable walk with extensive views. Easy to navigate.</li> 
                <li><strong className="titles">History : </strong><br />It would be easy to get totally absorbed in the finer detail of the history, but in some ways that might be best done in 
                exhibitions such as the <em>Legion; Life in the Roman Army </em> Exhibition at the British Museum. The real difference in undertaking the Hadrian's Wall Path is to get some idea in the live
                as to what it must have actually been like, battling the elements, the terrain and the hostile forces North of the Wall.</li> 
                <li><strong className="titles">Paths: </strong><br />The paths are clear, and well-marked.</li>
                <li><strong className="titles">Weather: </strong><br />It had been forecast for quite a bit of rain, but thankfully, whilst a grey and overcast day, the rain managed to 
                just about hold off until we had returned home.</li>
                </div>
                </ul>
                <br />
            <strong className="headTitles">Not so good</strong> 
            <ul className="hwpIntroList">
                <li><strong className="titles">Refreshments</strong><br />On arrival at Housesteads Fort, the café is back down the hill at the car park entrance, so our well-earned
                refreshments had to wait until the end.</li>
                <li><strong className="titles">Cattle alert</strong><br />We had to cross a field of cows and their calves. At least there was no bull this time,
                as others have experienced at this point. However, we are well-used to the strategies needed for crossing cattle-filled fields so all was well.</li>
                </ul>
            <strong className="headTitles">Hike Rating</strong> 
            <ul className="hwpIntroList">
            <li><strong className="titles">9 (out of 10):</strong> </li>
            </ul>
            </div>    {/* Closing tag ComponentWalkDetails Class*/ }          
            <br />
            <div className="hwpDailyNarrative">
           It was a prompt start this morning to head once again towards Brocolitia Roman Fort car park. Brocolitia/Carrawburgh Fort lies mid-way between Chester's Roman Fort and Housesteads Roman Fort
           and from the road, it does not look to be exceptional, especially in relation to the larger Chester's and Housesteads Forts. However, we would argue 
           it is an important stopping point for anyone visiting Hadrian's Wall, as it is here you can visit a unique monument on the wall, the <Link to="https://www.undiscoveredscotland.co.uk/hexham/templeofmithras/index.html"
           target="_blank" title="Click here to discover more about the Brocolitia Mithraeum or Temple of Mithras" className="LinkHWP"> Brocolitia Mithraeum or Temple of Mithras </Link> . 
           <br />
           <br />
          Mithraism was what was called a mystery cult. In these cults, devotees met in small groups to have the mysteries of the divine revealed to them and to undergo complex initiation rites. 
          These cults drew on many aspects of Roman ritual practice but often claimed eastern origins; eg. the god Mithras was thought to be a manifestation of the Persian god Mithra.
          Followers used Latin in their rituals, erected altars and made vows in the traditional Roman manner, but they also depicted the god and his attendants in ‘Persian’ dress. 
          The temples of the mystery cults in the frontier zone tended to be smaller than those associated with other practices and were enclosed so that the rites of the initiates 
          were concealed from non-members. The Temple of Mithras is small and secluded, being located under the vicus of the Fort, being built to resemble the cave in which Mithras was said to have killed a bull and feasted 
          with the God of the Sun, Soll and today it includes replicas of three altars and a number of statues; the originals are located in the Great North Museum in Newcastle upon Tyne. Someone had dutifully left a few penny coins in the basin of one of the replica altars. The original altars and statues were colorfully painted.
          
          <br />
          <br />           
             The original fort remains only as a three and a half acre bump in the field as <Link to="https://en.wikipedia.org/wiki/George_Wade"
            target="_blank" title="Click here to discover more about General Wade" className="LinkHWP"> General Wade </Link>  (1673-7148) removed the stones from the Fort 
            to reuse as rubble fill for the construction of the Military Road (which is now the B6318), which he planned to try to address the difficulties 
            he encountered marching his troops cross-country from Newcastle to Carlisle during the Jacobite rising in 1745.
            Wade helped plan the road but had died before construction began in 1751. it should not be confused with the Military Way built by the Romans immediately south of Hadrian's Wall.
            <br /> 
            <br /> 
            After exploring Brocolitia/Carrawburgh Fort and the Temple of Mithras, it was time to cross the Old Military Road with care and continue following the Hadrian's Wall Path out towards 
            Housestead's Fort just over 5 miles distant. 
            <br />
            <br />
            Key points and way-marks on the walk after leaving the Mithras Temple today were the Sewingshields Wall situated precipitously on the edge of Sewing Shields Crags, a high rocky outcrop
             which features Milecastle 35 and Turret 35a which are all built on the Whin Sill, Busy Gap and King's Wicket Gate, Turret 36, Knag Burn Gateway and Housesteads Roman Fort. 
             King's Wicket gate is the name of the wicket gate in the line of Hadrian's Wall in Busy Gap. The feature is thought to be a stock enclosure
             associated with a traditional drove road running through the Wall at this point. The date is uncertain, but in the late Middle Ages Busy Gap was a notorious 
             haunt for bandits and raiders, known as 'Busy Gap rogues', as the stock held in the enclosure may not always have been there with the owner's consent.
            <br />
            <br />
            Housesteads Fort lies at about the mid-point of Hadrian's Wall and housed an infantry regiment of 800, the First Cohort of Tungrians raised in eastern Belgium.
           It is the the best preserved of the 16 forts on the Hadrian's Wall frontier and also  contains the finest preserved latrines from Roman Britain. It was abandoned between the early 5th until the 16th Century, when it was taken over by the Border Reivers,
            a lawless community on the Anglo-Scottish border.
            <br /> 
            <br /> 

            Join us on our 6th day of the Hadrian's Wall Path by clicking on the album below and following our narrative by clicking on the added comments.          
            </div> {/*Closing tag for hwpDailyNarrative div */}
            

          <div className="slideshowHostPhotoHwp">
          <fig>
            <Link to="https://photos.app.goo.gl/n89VM6fbi7B8hBZL8" target="_blank">
            <img className="slideshowentryHwp" src={MithrasTemple} alt="" />
            </Link>
          </fig>
           </div>  {/* Closing div SlideshowHostPhotoHwp */}
           </div> {/* Closing tag datenewsDivHwp */}

      </div>

      <div className="datenewsDivHwp">
            <section className="newsheaderHwp"><strong>Day 7 - Housesteads Roman Fort to Cawfield Quarry (PS. This is the best day of the walk!): 6 miles on the Hadrian's Wall Path, 6.5 miles in total.</strong></section>
            <section className="dateHwp">6th July 2024, Saturday</section>
             <div className="newsHwp">
             <div className="componentWalkDetails">     
            <strong className="headTitles">Details of the Walk </strong>
            <ul className="hwpIntroList">
                <li><strong className="titles">Parking:</strong><br />We parked at <Link to="https://www.english-heritage.org.uk/visit/places/housesteads-roman-fort-hadrians-wall/plan-your-visit/facilities/"
                target="_blank" title="Click here to discover more about Housesteads Car Park" className="LinkHWP"> Housesteads Car Park </Link> and <Link to="https://www.northumberlandnationalpark.org.uk/places-to-visit/hadrians-wall/cawfields/"
                target="_blank" title="Click here to discover more about Cawfield Quarry Car Park" className="LinkHWP"> Cawfield Quarry Car Park </Link>. Both of these car parks are run by Northumberland National Park and we had bought an annual 
                Hadrian's Wall parking pass for one of the cars. <Link to="https://www.northumberlandnationalpark.org.uk/visitor-info/car-parks/" target="_blank" className="LinkHWP"> Annual passes </Link> are available from <Link to="https://www.thesill.org.uk/" target="_blank" title="Click here to discover more about The Sill Visitor's Centre"> The Sill </Link> .</li> 
                <li><strong className="titles">Paths: </strong><br />Well-defined path over the numerous crags between Housesteads Fort and Cawfields Quarry. The walk is reasonably strenuous as there are repeated ascents and descents 
                along the line of the crags.</li>
                <li><strong className="titles">Distance:</strong><br /> 6 miles on the Hadrian's Wall Path, 6.5 miles in total.<strong>  Ascent:</strong>  309 metres, 1014 feet.  </li>
                <li><strong className="titles">Refreshments:</strong><br />Café at The Sill Visitor's Centre.</li> 
                </ul>    

            <strong className="headTitles">Good</strong> 
            <ul className="hwpIntroList">
              <div className="listItemsAlign">
                <li><strong className="titles">Walk: </strong>This is without exception the most awesome and stunning section of the Hadrian's Wall Path, as you walk along a series of ridges of the Whin Sill along which this section of the wall was built.
                Together with the wildness and remoteness of the landscape, which remains to this day largely uninhabited, this is a really impressive walk and has been our favourite day's walking on the Wall so far.<br /></li>
                <li><strong className="titles">Path: </strong><br />We had walked the section of the Wall between Cawfield Quarry and Peel Gap in 2014 as part of a 6 3/4 mile circular walk and it had been quite a lot more strenuous than we had anticipated,
                not least because conditions underfoot were not great. However, the National Trust seem to have undertaken a lot of work improving the footpath to reduce erosion and this 
                was certainly an improvement underfoot compared to previously.</li> 
                <li><strong className="titles"> Weather: </strong><br />Brilliant sunshine and not too hot, so ideal walking weather - what more can I say!</li> 
                </div>
                </ul>
                <br />

            <strong className="headTitles">Not so good</strong> 
            <ul className="hwpIntroList">
                <li><strong className="titles"> Tragedy of the Sycamore Gap Tree: </strong> As many of you will know, on the morning of 28th September 2023, the iconic <Link to="https://en.wikipedia.org/wiki/Sycamore_Gap_tree"
                target="_blank" title="Click here to discover more about the Sycamore Gap Tree" className="LinkHWP"> Sycamore Gap tree </Link> which stood in Sycamore Gap,
                a dramatic dip in the landscape of Hadrian's Wall, was maliciously felled. The tree had been described as one of the most photographed trees in the country 
                and an emblem for the North East of England. It derived its alternative name from featuring in a prominent scene in the 1991 film Robin Hood: Prince of Thieves. 
                It was well-known by everyone locally and a there has been a huge amount of anger and sadness at its loss.<br /></li>
                <li><strong className="titles"> Weather warning: </strong>We were very fortunate and the good weather held out until just after we had returned to the car and safely
                settled ourselves in the café at the Sill Visitors Centre. At that point, the heavens opened and it was raining so hard, blowing in sheets, that even hardened walkers 
                with full rain-proof gear were not venturing across the car park. For anyone who has not experienced weather in this area, this can come as 
                somewhat of a shock! Our advice would be; always come prepared and be willing to change route to a safer option from that planned if necessary (there are a number 
                of 'escape' routes off the Wall) . Do not rely too heavily on the weather forecast, conditions can change totally within a minute at times..... <br /></li>
                </ul>
                <br />
            <strong className="headTitles">Hike Rating</strong> 
            <ul className="hwpIntroList">
            <li><strong className="titles">10 (out of 10):</strong> </li>
            </ul>
            </div>    {/* Closing tag ComponentWalkDetails Class*/ }          
            <br />
            <div className="hwpDailyNarrative">
            It was an 8.20am start this morning, as the weather forecast for the afternoon was poor, so we were already at Housesteads car park in the sunshine and peace 
            and quiet by 8.40am. First of all, we had to climb back up to the point on Hadrian's Wall at which we had finished yesterday's walk, namely Knag Burn gate.
            Whilst the fort itself, which is owned by the National Trust, does not open until 10am, there is a public footpath which runs up around the edge of the fort 
            which can be accessed at anytime. Once on the path, we headed off in a westerly direction towards Cawfield Quarry Car Park.
            <br /> 
            <br /> 
            Todays walk was to include Hotbank Crags, Crag Lough and Highshield Crags, Sycamore Gap, Peel Crags, Steel Rigg, Shield on the Wall, Whinshield Crags, Caw Gap and Cawfield Quarry.
            It was to be a brilliant day and our best walking day on the wall so far.
            <br /> 
            <br /> 
            We invite you to join us on our 7th day of the Hadrian's Wall Path by clicking on the album below and following our narrative by clicking on the added comments.          
            </div> {/*Closing tag for hwpDailyNarrative div */}
            

          <div className="slideshowHostPhotoHwp">
          <fig>
            <Link to="https://photos.app.goo.gl/xhjYZ7WvttfxMbsB6" target="_blank">
            <img className="slideshowentryHwp" src={HousesteadsCawfieldQuarry} alt="" />
            </Link>
          </fig>
           </div>  {/* Closing div SlideshowHostPhotoHwp */}
           </div> {/* Closing tag datenewsDivHwp */}
      </div>


      <div className="datenewsDivHwp">
            <section className="newsheaderHwp"><strong>Day 8 - Cawfields Quarry to Gilsland: 6 miles.</strong></section>
            <section className="dateHwp">7th July 2024, Sunday</section>
             <div className="newsHwp">
             <div className="componentWalkDetails">     
            <strong className="headTitles">Details of the Walk </strong>
            <ul className="hwpIntroList">
                <li><strong className="titles">Parking:</strong><br />We parked at <Link to="https://www.northumberlandnationalpark.org.uk/places-to-visit/hadrians-wall/cawfields/"
                target="_blank" title="Click here to discover more about Cawfield Quarry Car Park" style={{color:"blue"}}> Cawfield Quarry Car Park </Link> and on Railway Terrace in Gilsland, where there is free on-road parking. Cawfields Car Park is run by Northumberland National Park and we had bought an annual 
                Hadrian's Wall parking pass for one of the cars, so we left the car with the pass at Cawfield Quarry. <Link to="https://www.northumberlandnationalpark.org.uk/visitor-info/car-parks/" target="_blank" style={{color:"blue"}}> Annual passes </Link> are available from <Link to="https://www.thesill.org.uk/" target="_blank" title="Click here to discover more about The Sill Visitor's Centre" style={{color:"blue"}}> The Sill </Link> .</li> 
                <li><strong className="titles">Paths: </strong><br />A clear, well-defined path firstly through the ruins of Aesica (Great Chesters) Roman Fort and then a gradual climb up onto Walltown Crags, with some ascents and descents similar to yesterday before dropping down to the visitor's centre at Walltown Quarry. 
                On leaving the Quarry, the terrain evens out considerably and becomes more undulating as it heads out towards Gilsland.</li>
                <li><strong className="titles">Distance:</strong><br /> 6 miles on the Hadrian's Wall Path.<strong>  Ascent:</strong>  325 metres, 1066 feet.  </li>
                <li><strong className="titles">Refreshments:</strong><br />Lanercost Priory tearooms.</li> 
                </ul>    

            <strong className="headTitles">Good</strong> 
            <ul className="hwpIntroList">
              <div className="listItemsAlign">
                <li><strong className="titles">Views: </strong><br />Spectacularly good views from the top of Walltown Crags, stretching for miles. It is really easy to get a feeling 
                of lived-experience of being a legionnary up on the wall patrolling and keeping guard from the milecastles and turrets. The views were better today than expected
                and come a close second to those of yesterday's walk.</li>
                <li><strong className="titles">History: </strong><br />The ruins of Aesica (Great Chesters) Fort are less well organised and therefore have more of a romantic feel 
                than some of the other forts. The opportunity to go and look at the 14th century Thirlwall Castle en route to Gilsland was also very interesting. </li> 
                <li><strong className="titles"> Walk: </strong><br />Another high level walk and interestingly, a greater overall ascent than yesterday. The wall is pretty well-preserved
              in the section running down to Walltown Quarry Car Park and Visitor's Centre and the Roman Army Museum/Magnis (Carvoran) Fort.  </li> 
                </div>
                </ul>
                <br />

            <strong className="headTitles">Not so good</strong> 
            <ul className="hwpIntroList">
                <li><strong className="titles">Path on the descents Walltown Crags: </strong> <br />Whilst the path was at all times clearly marked and signposted,
                the paths were not maintained on the descents as well as on the previous days section of walking between Housesteads and Cawfields Quarry, presumably
                in part because this section of the path is not under the care of the National Trust.
                </li>
                <li><strong className="titles">Aesica fort : </strong> <br />Whilst in one respect, the lack of any information boards at Aesica Fort led to a 
                more romantic feel, it would have been helpful to have some additional information on site. We have a feeling we may have missed some things here
                and so intend to return for a shorter walk and more detailed visit one day in the coming months.
                </li>
                </ul>
                <br />
            <strong className="headTitles">Hike Rating</strong> 
            <ul className="hwpIntroList">
            <li><strong className="titles">10 (out of 10):</strong> </li>
            </ul>
            </div>    {/* Closing tag ComponentWalkDetails Class*/ } 

            <br />
            <div className="hwpDailyNarrative">
            Todays walk was to start in Cawfields car park and end in Gilsland village taking in Aesica (Great Chesters) Roman Fort, past the sites of Turrets 43a and 43b where no visible remains exist, 
            Walltown Crags including Turrets 44b(Mucklebank) and 45a and the site of the previous Milecastle 45, Walltown Quarry, 
            Thirlwall Castle , Holmhead Guesthouse, Gap Farm and Gilsland, 2 nesting kestrels and a Texel Mule cross bred sheep.
            <br /> 
            <br /> 
            Aesica Fort, whose modern name is Great Chesters (not to be confused with Chesters Fort at Chollerford) was the ninth fort on Hadrian's Wall. It lies 6.0 miles to the east of 
            Housesteads (Roman name Vercovicium) and 6.5 miles to the west of Birdoswald Fort (Roman name Banna). Its main purpose was to guard the Caw Gap where the Haltwhistle Burn 
            crosses the Wall. It was built relatively late (AD128), over the site of the exisiting Milecastle 43. There are no visible remains of Milecastle 43's two accompanying
            turrets: turret 43A and turret 43B either. At 3 acres Aesica Fort was smaller than some of the other forts. More information about Aesica fort can be found <Link to="https://perlineamvalli.wordpress.com/2015/10/17/the-best-bits-of-hadrians-wall-the-forts-great-chesters/"
            target="_blank" style={{color:"blue"}}> here </Link> and <Link to="https://www.u3ahadrianswall.co.uk/great-chester-roman-fortaesica/" target="_blank" style={{color:"blue"}}> here </Link> .
            <br /> 
            <br /> 
            Walltown Crags: There are a number of routes over Walltown Crags and any can be used, but the top route offers the most spectacular views and is well worth the climb, so this was the route we used. It is 
            also the route we suggest to others to use if walking this route (as long as you are up for the climb).
            We passed the previous site of Milecastle 45 which is located on the top of Walltown Crags. The walls have been robbed, so little remains. We understand however that the site is still <Link to="https://en.wikipedia.org/wiki/Milecastle_45"
            target="_blank" style={{color:"blue"}}> visible as earthworks on aerial photographs </Link> . As we walked along the crags, we saw 2 Kestrels circling overhead which appeared 
            to be nesting in the walls of the crag.
            <br /> 
            <br /> 
            Turret 44b (Mucklebank) has magnificent views over the surrounding landscape. It is unusual in that it is built into a corner of Hadrian's Wall. Dropping down below
            Turret 44b(Mucklebank) is the alleged site of King Arthur's Well , although there is no sign of it today.
            Turret 45a is built high on Walltown Crags. It is thought that the wall and turret were built separately as, whilst the Wall's foundations run through the turret, above 
            ground the wall and turret are separate structures and there are no wing walls and the wall meets the turret at an angle.This suggests they were probably built separately.
            <br /> 
            <br /> 
            Finally we dropped down to the Walltown Quarry car park where there is a very pleasant small Visitors Centre, where you can buy some 
            hot drinks from a machine and there are picnic tables to sit on by the quarry. We took the opportunity to have some lunch here.
            There are also a number of walks you can do from this site, for which there are information boards. It is one of the pick up points for the 
            <Link to="https://www.gonortheast.co.uk/ad122" target="_blank" title="Click here to discover more 
            about the AD 122 busservice"> AD122 bus </Link> run by Go North East and in fact the bus arrived whilst we were there. The <Link to="https://romanarmymuseum.com/"
            target="_blank" title="Click here to discover more about the Roman Army Museum" style={{color:"blue"}}> Roman Army Museum </Link> on the site of the old Roman Fort Magnis (Carvoran) 
            is near here, although this reqires a full half-day visit, so we will return to this on a separate occasion on a poor-weather day over the forthcoming months.
            <br /> 
            <br /> 
            We then headed over to <Link to="https://www.northumberlandnationalpark.org.uk/places-to-visit/hadrians-wall/thirlwall-castle/"
            target="_blank" title="Click here to discover more about Thirlwall Castle" style={{color:"blue"}}> Thirlwall Castle </Link> , which is a 12th century castle which was later 
            strengthened using stones from nearby Hadrian’s Wall. This link also includes a hyperlink to an interesting leaflet about Thirlwall castle produced 
            by Northumberland National Park. It was then time to cross the railway line carefully and head on for the final couple of miles towards Gilsland where we would end the walk.
            <br /> 
            <br /> 
            We invite you to join us on our 8th day of the Hadrian's Wall Path by clicking on the album below and following our narrative by clicking on the added comments.          
            </div> {/*Closing tag for hwpDailyNarrative div */}
            

          <div className="slideshowHostPhotoHwp">
          <fig>
            <Link to="https://photos.app.goo.gl/X2NPiiG1bZnzoBASA" target="_blank">
            <img className="slideshowentryHwp" src={ThirlwallElena1 } alt="" />
            </Link>
          </fig>
           </div>  {/* Closing div SlideshowHostPhotoHwp */}
           </div> {/* Closing tag datenewsDivHwp */}
      </div>

      <div className="datenewsDivHwp">
            <section className="newsheaderHwp"><strong>Day 9 - Gilsland to Lanercost: 6.5 miles on the Hadrian's Wall Path, 7.5 miles in total.</strong></section>
            <section className="dateHwp">28th July 2024, Sunday</section>
             <div className="newsHwp">
             <div className="componentWalkDetails">     
            <strong className="headTitles">Details of the Walk </strong>
            <ul className="hwpIntroList">
                <li><strong className="titles">Parking:</strong><br />The free car park by the River Irthing at Lanercost and the free on-street parking at Railway Terrace, Gilsland.</li>
                <li><strong className="titles">Paths: </strong><br />The paths are clear and well-signposted. There is a diversion in place (hopefully only temporary) between Poltross Burn Milecastle
                and the Willowford segment of the wall, but in actual fact this takes you through Gilsland village which is an interesting little village with the possibility 
                of refreshments (within opening hours) at the <Link to="https://www.facebook.com/houseofmegtearooms/?locale=en_GB" target="_blank" className="LinkHWP">House of Meg</Link> , 
                or the <Link to="https://www.facebook.com/bridgeinngilsland/?locale=en_GB" target="_blank" className="LinkHWP"> Bridge Inn </Link> . Normally, there is also 
                the <Link to="https://www.thesamson.co.uk/" target="_blank" className="LinkHWP"> Samson Inn </Link> which is a community pub owned by three local farmers. However it is currently closed
                for refurbishment. </li>
                <li><strong className="titles">Distance:</strong><br /> 6.5 miles on the Hadrian's Wall Path, 7.5 miles in total<strong>  Ascent:</strong> 191 metres, 623 feet. </li>
                <li><strong className="titles">Refreshments:</strong><br /> The <Link to="https://www.facebook.com/houseofmegtearooms/?locale=en_GB" target="_blank" className="LinkHWP">House of Meg</Link> and the <Link to="https://www.facebook.com/bridgeinngilsland/?locale=en_GB" target="_blank" className="LinkHWP"> Bridge Inn </Link> .</li> </ul>    

            <strong className="headTitles">Good</strong> 
            <ul className="hwpIntroList">
              <div className="listItemsAlign">
              <li><strong className="titles">History : </strong><br />There was a surprising amount of things of historical interest on this stretch; certainly more than we had anticipated, including some really well-preserved segments of wall, 
                the Willowford Bridge abutment showing evidence that even the Roman's experienced damage due to flooding, a centurial stone, Birdoswald Roman Fort and the only known Roman signal tower
                together with Lanercost Priory. </li>
                <li><strong className="titles">Countryside :</strong><br />Picturesque, lush, rolling countryside.</li>
                <li><strong className="titles">Refreshments : </strong><br />There was ample opportunity for refreshments both in Gilsland, at Birdoswald café and at Lanercost tearooms. </li> 
                <li><strong className="titles">Weather: </strong><br />It was a pleasantly warm, sunny day; great walking weather. </li>
                </div>
                </ul>
                <br />
            <strong className="headTitles">Not so good</strong> 
            <ul className="hwpIntroList">
                <li><strong className="titles">Summer holiday season</strong><br />It is now the peak Summer holiday season and the number of visitors reflected that.</li>
                </ul>
            <strong className="headTitles">Hike Rating</strong> 
            <ul className="hwpIntroList">
            <li><strong className="titles">10 (out of 10):</strong> This was a far more enjoyable and interesting section of the wall than we had anticipated. There are still some significant sections of Roman Wall remaining
            and the line of the ditch can be followed easily. It helped for the first time to cement an understanding of how Lanercost Priory fits into the history
            and landscape of Hadrian's Wall. It also enabled us to discover Gilsland, a small village we had previously only driven through to reach elsewhere...</li>
            </ul>
            </div>    {/* Closing tag ComponentWalkDetails Class*/ }          
            <br />
            <div className="hwpDailyNarrative">
            
           <br />
           <br />
           Today we walked the 9th stage of the Hadrian's Wall path, taking us from <Link to="https://www.visitcumbria.com/car/gilsland/" target="_blank"
           title ="Click here to discover more about Gilsland" className="LinkHWP"> Gilsland </Link> , via <Link to="https://www.english-heritage.org.uk/visit/places/birdoswald-roman-fort-hadrians-wall/"
           target="_blank" title="Click here to discover more about Birdoswald Fort" className="LinkHWP"> Birdoswald Fort </Link> , over to <Link to="https://www.english-heritage.org.uk/visit/places/lanercost-priory/"
           target="_blank" title="Click here to discover more about Lanercost Priory" className="LinkHWP"> Lanercost Priory </Link>. 
           <br />
           <br />
            Key points and way-marks on the walk from Gilsland to Lanercost Priory include Poltross Burns Milecastle (number 48), Gilsland village, 
            the Willowford section of Hadrian's Wall with turrets 48a and 48b, Willowford Farm B and B and self-catering accomodation where there is a Roman centurial 
            stone built into the barn wall, Willowford Bridge abutment and the new Millenium bridge over the River Irthing, Harrows Scar (site of Milecastle 49), Birdoswald Roman Fort, Turret 49a,
            Piper Sike Turret (number 51a), Pike Hill Signal Tower, Banks East Turret (number 52a), Hare Hill with a 3m high section of Hadrian's Wall and Lanercost Priory.
            <br />
            <br />
            <Link to="https://www.english-heritage.org.uk/visit/places/poltross-burn-milecastle-hadrians-wall/history/" target="_blank" title="Click here to discover more about 
            Poltross Burn Milecastle" className="LinkHWP"> Poltross Burn Milecastle, Gilsland </Link> : This is one of the best preserved milecastles on Hadrian's Wall. It is bigger than usual, and inside are the remains of 2 
            barrack blocks. Broad Wall foundations on the East wing indicate that it was built, at least in part , before the decision was taken to narrow the width of Hadrian's Wall. 
            In the North West corner there are remains of ovens and in the North East corner the only surviving set of steps, probably leading up to the ramparts.
            <br />
            <br />
            <Link to="https://www.visitcumbria.com/car/gilsland/" target="_blank"
           title ="Click here to discover more about Gilsland" className="LinkHWP"> Gilsland village </Link> : A small village which today has a good community spirit and focuses a large part of its trade on providing accomodation and refreshments 
            for walkers on the Hadrian's Wall path and cyclists. 
            <br />
            <br />
            <Link to="https://www.english-heritage.org.uk/visit/places/willowford-wall-turrets-and-bridge-hadrians-wall/history/" target="_blank"
            title="Click here to discover more about the Willowford section of Hadrian's Wall" className="LinkHWP"> Willowford section of the wall with Turrets 48a and 48b </Link> : Here well-preserved sections of the wall and ditch and several turrets (48a and 48b) can be seen. 
            <br />
            <br />
            <Link to="https://willowford.co.uk/" target="_blank" className="LinkHWP"> Willowford Farm B and B and self-catering accomodation </Link> : This is a popular and very pleasant stop-over location for Hadrian's Wall walkers where there is a Roman centurial 
            stone built into the barn wall.
            <br />
            <br />
            <Link to="https://www.english-heritage.org.uk/visit/places/willowford-wall-turrets-and-bridge-hadrians-wall/history/" target="_blank"
            title="Click here to discover more about the Willowford Bridge abutment" className="LinkHWP"> Willowford Bridge abutment </Link> : The East abutment is all that is left of the Romans' Bridge over the River Irthing. It is now on dry land because the course of the Irthing has 
            moved West over time. There were a number of bridges built at this site but the earliest one was probably built under Hadrian at the same time as Hadrians Wall. On the North 
            side of the abutment, there are two sluices with an open channel beside them: the channel was possibly a mill race with the sluices helping to control the flow of water through it.
            In 1999 a new Millenium bridge over the River Irthing was designed by the architectural firm Napper and constructed and lowered into place using a RAF helicopter.
            <br />
            <br />
            <Link to="https://www.english-heritage.org.uk/visit/places/harrows-scar-milecastle-and-wall-hadrians-wall/history/" target="_blank"
            title="Click here to discover more about Harrow's Scar" className="LinkHWP"> Harrows Scar (site of Milecastle 49) </Link> : Little remains of this milecastle, but there are still some points of interest. In the 17th century, a cottage was built inside the ruins 
            and you can still see its foundations in the South West corner. More about the milecastle and its exact location cane be found <Link to="https://en.wikipedia.org/wiki/Milecastle_49" target="_blank" title="Click here to discover more about Milecastle 49 and turrets 49a and 49b"
            className="LinkHWP"> here </Link> . Milecastle 49 is immediately west of the gorge of the River Irthing where the Wall was carried over the river by the bridge at Willowford. The scar or cliff and hence the milecastle are named after an ancient tenement called The Harrows which stood nearby.
            <br />
            <br />
            <Link to="https://www.english-heritage.org.uk/visit/places/birdoswald-roman-fort-hadrians-wall/history-and-stories/history/" target="_blank"
            title="Click here to discover more about Birdoswald Roman Fort" className="LinkHWP"> Birdoswald Roman Fort </Link> : The Romans occupied Birdoswald Fort for 300 years from the 
            2nd to the 5th centuries and Birdoswald's defences are the best preserved of any of the forts on the line of the wall. Birdoswald is interesting also because it was occupied after the 
            Romans had left; in the Dark Ages and then again in medieval times going on to be a fortified farm subject to raids by the Border Reivers. It also contains  the only drill and exercise hall 
            ever to have been found in a Roman auxiliary fort.
            <br />
            <br />
            <Link to="https://en.wikipedia.org/wiki/Milecastle_49" target="_blank" title="Click here to discover more about Milecastle 49 and turrets 49a and 49b"
            className="LinkHWP"> Turret 49b, Birdoswald West </Link>: There is no turret 49a, as it was positioned right in the centre of Birdoswald Fort. 
            Turret 49b is situated to the west of the River Irthing. Hadrian's Wall was originally built as a turf wall, but later it was replaced by a stone wall which followed a 
            different course for 2 Roman miles between milecastle 49 and 51. Turret 49b was built on the line of, and around the same time as, 
            the stone wall and was fully bonded with it.
            <br />
            <br />
            <Link to="https://hadrianswallcountry.co.uk/attraction/leahill-turret-and-piper-sike-turret/" target="_blank" className="LinkHWP"> Piper Sike Turret, number 51a </Link> : 
            Unlike Turret 49b, this turret was not bonded fully with Hadrian's Wall. It was originally constructed for the turf wall. When the turf wall was 
            replaced by the stone wall, the turret then had to be integrated into it.
            <br />
            <br />
            <Link to="https://en.wikipedia.org/wiki/Pike_Hill_Signal_Tower" target="_blank" className="LinkHWP"> Pike Hill Signal Tower </Link>: Unfortunately, there is little left of the only known signal tower on Hadrian's Wall. 
            It overlooked the Stanegate, a key Roman Road which ran E-W from Corbridge to Carlisle. Soldiers would have been able to signal to the nearby forts at Nether Denton and Castle Hill. The tower was built under 
            Trajan, long before Hadrian's Wall. The wall was built with a deliberate kink to incorporate the tower.
            <br />
            <br />
            <Link to="https://en.wikipedia.org/wiki/Milecastle_52" target="_blank" title="Click here to discover more about Turret 52a and also Milecasle 52 and turret 52b"
            className="LinkHWP"> Turret 52a, Banks East Turret </Link> : Turret 52a is one of the 2 turrets associated with milecastle 52, which today is unfortunately no longer visible, but is 
            occupied by Bankshead House and Garden. Turret 52B (grid reference NY57006457) has never been located. Its position has been estimated in relation to Turret 52A and Milecastle 53.
            It may lie beneath the modern road. Unlike Turret 49b, this turret was not bonded fully with Hadrian's Wall. It was originally constructed for the turf wall. When the turf wall was replaced by the stone wall, 
            the turret then had to be integrated into it. 
            <br />
            <br />
            <Link to="https://www.english-heritage.org.uk/visit/places/hare-hill-hadrians-wall/" target="_blank" className="LinkHWP"> Hare Hill section of Hadrian's Wall </Link> : This contains a 3m high piece of Hadrian's Wall. 
            Although it is often claimed to be the highest remaining section of Hadrian's Wall and the central core is original, the north side of it was actually rebuilt in the 19th century using Roman stones.
            There is a centurial stone built into the north side of the wall at about head height, but it is very difficult to spot. The stone was taken from a different part of Hadrian's Wall.
            <br />
            <br />
            <Link to="https://www.english-heritage.org.uk/visit/places/lanercost-priory/"
           target="_blank" title="Click here to discover more about Lanercost Priory" className="LinkHWP"> Lanercost Priory </Link> : Standing close to Hadrian’s Wall, and built in large part from stone sourced from the nearby sections of Hadrian's Wall, it suffered frequent attacks during the long Anglo-Scottish wars, once by Robert 
            Bruce in person. The mortally sick King Edward I rested here for five months in 1306-7, shortly before his death on his final campaign. Today it is looked after by English Heritage.
            We have visited Lanercost Priory severl times in the past, so concentrated today on the walk itself. However, we will be returning here when we return to 
            Birdoswald Fort in the forthcoming months.
            <br />
            <br />
            Join us on our 9th day of the Hadrian's Wall Path by clicking on the album below and following our narrative by clicking on the added comments.          
            </div> {/*Closing tag for hwpDailyNarrative div */}
            <br />
           <br />

          <div className="slideshowHostPhotoHwp">
          <fig>
            <Link to="https://photos.app.goo.gl/FuAKD2gL1mYdsh2f8" target="_blank">
            <img className="slideshowentryHwp" src={WillowfordDay9} alt="" />
            </Link>
          </fig>
           </div>  {/* Closing div SlideshowHostPhotoHwp */}
           </div> {/* Closing tag datenewsDivHwp */}

      </div>

      <div className="datenewsDivHwp">
            <section className="newsheaderHwp"><strong>Day 10 - Lanercost to Low Crosby village: 8.75 miles on the Hadrian's Wall Path, 9.75 miles in total.</strong></section>
            <section className="dateHwp">10th August 2024, Saturday</section>
             <div className="newsHwp">
             <div className="componentWalkDetails">     
            <strong className="headTitles">Details of the Walk </strong>
            <ul className="hwpIntroList">
                <li><strong className="titles">Parking:</strong><br />Free parking on the car park by the River Irthing and Old Bridge at Lanercost and free on-street parking in the centre of Low Crosby village.</li>
                <li><strong className="titles">Paths: </strong><br /> As for all the Hadrian's Wall national trail, the path is mainly a green sward cut into the grass, which makes navigation
                straightforward. In areas where it can become very muddy and boggy in wet weather, there are stones or matting which have been inserted. We would advise
                people to use the Acorn signs, Hadrian's Wall Path signposts and the Carlisle OS map number 315 to navigate and <em>not</em> Google maps, otherwise 
                you will end up going around the front of Bleatarn Farm, which will not make the farmer very happy! (see photo in album)..... </li>
                <li><strong className="titles">Distance:</strong><br /> 8.75 miles on the Hadrian's Wall Path, 9.75 miles in total <strong>  Ascent:</strong> 108 metres, 355 feet. </li>
                <li><strong className="titles">Refreshments:</strong><br /> <Link to="https://www.waltoncumbria.uk/tearoom/index.htm" target="_blank"
            title="Click here to look at the opening times and sample menu for Walton Tearoom" className="LinkHWP">Walton Tearoom </Link> and Lanercost Tea Rooms. </li> </ul>    

            <strong className="headTitles">Good</strong> 
            <ul className="hwpIntroList">
              <div className="listItemsAlign">
              <li><strong className="titles">History : </strong><br /></li>
                <li><strong className="titles">Countryside :</strong><br />Whilst this section of the walk does not have the rugged splendour of the Chollerford to Walltown Quarry section of the path,
                none the less it is through some lovely verdant and rolling countryside with spectacular views south west towards Blencathra and the northern Lake District peaks
                and to the south towards Cold Fell and the North Pennines.</li>
                <li><strong className="titles">Refreshments : </strong><br />This was a definite plus on this section of the walk, as the opportunities
                to pick up refreshments and or sit down turned out to be at key strategic points. <Link to="https://www.waltoncumbria.uk/tearoom/index.htm" target="_blank"
            title="Click here to look at the opening times and sample menu for Walton Tearoom" className="LinkHWP">Walton Tearoom </Link> is definitely worth a visit and
            the proprietors are very welcoming. It is open 10.00-17.00 every day. The picnic bench at Newtown green was a great spot for lunch and then of course
            Lanercost tearoom, at the end of the walk is always very pleasant and serves good food and cakes. </li> 
                <li><strong className="titles">Weather: </strong><br />It was a pleasantly warm, sunny day; great walking weather. </li>
                </div>
                </ul>
                <br />
            <strong className="headTitles">Not so good</strong> 
            <ul className="hwpIntroList">
                <li><strong className="titles">Summer holiday season :</strong><br />It was now the peak Summer holiday season and, whilst not as busy as some of the 
                central sections of the trail, there were still a steady number of walkers whom we passed en route.</li>
                <li><strong className="titles">Remaining segments of the wall :</strong><br />From Dovecote Bridge onwards, there are no remaining segments of the wall visible, which might be disappointing for some people.
                However, the route does actually follow the line of the wall extremely closely and the path runs by the Roman ditch, which is visible for a large part of the way.
                </li>
                </ul>
            <strong className="headTitles">Hike Rating</strong> 
            <ul className="hwpIntroList">
            <li><strong className="titles">9 (out of 10):</strong> An enjoyable days walking through lovely countryside and with some spectacular views.</li>
            </ul>
            </div>    {/* Closing tag ComponentWalkDetails Class*/ }          
            <br />
            <div className="hwpDailyNarrative">
            
           <br />
           <br />
           Today we walked the 10th stage of the Hadrian's Wall path, taking us from Lanercost to Low Crosby village.
           <br />
           <br />
            Key points and way-marks on the walk from  Lanercost to Low Crosby village include: Lanercost Exit and some remaining segments of Hadrian's wall, 
            Dovecote Bridge, Walton village and church, 
            Bleatarn Farm
            <br />
            <br />
            <strong style={{ fontSize: "rem1.2"}}> Lanercost Exit:  </strong> On continuing west shortly after Lanercost Exit, there are some sections of Hadrian's Wall in the trees on the right.
            <br />
            <br />
            <strong style={{ fontSize: "rem1.2"}}> Dovecote Bridge (just outside of Walton): </strong>There used to be a visible section of Hadrian's Wall at this bridge. The bridge
             was however made of Cumbrian red sandstone and as a result, did not weather well. After being exposed for just 20 years, it had sustained significant damage by the elements. In 1983 therefore,
            it was reburied in order to preserve it.
            <br />
            <br />  
            <strong style={{ fontSize: "rem1.2"}}>Walton village, St Mary's church and Walton Tearoom:</strong><Link to="https://www.visitcumbria.com/car/walton/" target="_blank" title="Click here to discover 
            more about Walton village, St Mary's church and Walton Tearoom, North Cumbria" className="LinkHWP"> Walton village and St Mary's church </Link> are on the path of Hadrian's Wall. Walton is only a 
            small village but is very pretty with some great views out towards Cold Fell and the North Pennines and has one very important feature for all walkers on the Hadrian's Wall path, the <Link to="https://www.waltoncumbria.uk/tearoom/index.htm" target="_blank"
            title="Click here to look at the opening times and sample menu for Walton Tearoom" className="LinkHWP">Walton Tearoom </Link> . This is open from 10.00-17.00 daily 
            and is <Link to="https://www.tripadvisor.co.uk/ShowUserReviews-g8715454-d8155353-r941402870-The_Reading_Room_at_Walton-Walton_Brampton_Cumbria_England.html" target="_blank" className="LinkHWP"> 
            very popular </Link> with Hadrian's Wall walkers.
            <br />
            <br /> 
            <strong style={{ fontSize: "rem1.2"}}> Castlesteads House: </strong> <Link to="https://perlineamvalli.wordpress.com/tag/castlesteads/" target="_blank" 
            title="Click here to discover more about Castlesteads House" className="LinkHWP"> Castlesteads House </Link> is an 18th century mansion built on the site
            of the earlier Walton House. It is situated between Walton and Newtown, to the left of the Hadrian's Wall Path and is situated on the site of 
            <Link to="https://www.u3ahadrianswall.co.uk/castlesteads-roman-fort-camboglanna/" target="_blank" className="LinkHWP" title=
            "Click here to discover more about Campoglanna Roman Fort"> Camboglanna Roman Fort </Link>.
            <br />
            <br />   
           <strong style={{ fontSize: "rem1.2"}}> Bleatarn Farm: </strong> The ground around Bleatarn Farm was used by the Romans to gather stone 
           for Hadrian's Wall and the mounds created by the debris from the quarry activity can still be seen.
            <br />
            <br />
         
            Join us on our 10th day of the Hadrian's Wall Path by clicking on the album below and following our narrative by clicking on the added comments.          
            </div> {/*Closing tag for hwpDailyNarrative div */}
            <br />
           <br />

          <div className="slideshowHostPhotoHwp">
          <fig>
            <Link to="https://photos.app.goo.gl/bruTNaavSFaWnL5q6" target="_blank">
            <img className="slideshowentryHwp" src={WaltonTearoomnamed} alt="" />
            </Link>
          </fig>
           </div>  {/* Closing div SlideshowHostPhotoHwp */}
           </div> {/* Closing tag datenewsDivHwp */}

      </div>


      <div className="datenewsDivHwp">
            <section className="newsheaderHwp"><strong>ADDITIONAL DAY - Visit to the Roman Army Museum and Vindolanda </strong></section>
            <section className="dateHwp">14th July 2024, Sunday</section>
             <div className="newsHwp">
             <div className="componentWalkDetails"> 
            <div className="hwpDailyNarrative">
           We had walked a long way (12.6 miles) on Saturday, 13th July in poor, wet weather. So rather than undertaking another stage
           of our Hadrian's Wall walk on the Sunday, given it was forecast for rain again, we decided it was time for a catch-up day in which we would take the opportunity to visit the 
           Roman Army Museum and Vindolanda in a relaxed fashion.
           <br /> 
            <br /> 
          The Roman Army Museum: We have visited Vindolanda previously, but not the Roman Army Museum and so had long planned a visit. 
          We commenced the visit by watching the Edge of Empire The Eagle's Eye film. The actual film is 20-30 minutes long and was originally 
          filmed in 3D. We understand that the reason the 3D version can no longer be seen is that the 3D licence had become unaffordable,
          so now it is shown in 2D. Nonetheless, it is a very impressive film, and the screen it is shown on is a reasonable size. It really brings 
          life on this section of the Wall in Roman times to life.
          <br /> 
          <br /> 
          There is also a 10 minute film produced by the Vindolanda Trust, talking about the making of the Edge of Empire The Eagle's Eye film which can be found on You Tube videos. It is a really
          interesting short film as the filming was undertaken using a combination of an eagle who came from the local Kielder bird of prey centre, and whose name we discovered was Sima and a helicopter.
          The eagle had a camera strapped to its chest.
            <br /> 
            <br /> 
            Both museums are well woth a visit although we would recommend taking a full day for Vindolanda and a separate half-day for the Roman Army Museum.
            We went on free guided tours at both sites which were very interesting.
            <br /> 
            <br /> 
            We invite you to join us on our visit to the Roman Army and Vindolanda Museums by clicking on the album below and following our narrative by clicking on the added comments.          
            </div> {/*Closing tag for hwpDailyNarrative div */}
            </div>

          <div className="slideshowHostPhotoHwp">
          <fig>
            <Link to="https://photos.app.goo.gl/7UbS3Bujzjgc79C87" target="_blank">
            <img className="slideshowentryHwp" src={RomanArmyMuseumT } alt="" />
            </Link>
          </fig>
           </div>  {/* Closing div SlideshowHostPhotoHwp */}
           </div> {/* Closing tag datenewsDivHwp */}
      </div>
     
      </div> 
      
      
      
      
    );

  }
