import React from 'react';
import { Link } from "react-router-dom";
import './Hwp2024.css';
import Romaneagle from 'components/eagle';
import NewcastleQuayside from "./imagesresized/NewcastleQuayside.jpg";
import HwpIntro from "./imagesresized/HwpIntro.jpg";
import ChollerfordBroccolitia from "./imagesresized/ChollerfordBroccolitia.jpg";
import MithrasTemple from "./imagesresized/MithrasTemple.jpg";
import LegionExhibitionEntrance from "./imagesresized/LegionExhibitionEntrance.jpg";


export default function Hwp2024() {
    return (

        <div className="bodyHwp">
        <div className="hwp2024Header"> 
          <button id="backbutton" style={{backgroundColor:"#D19B2F"}}>
            <Link to="/" className="backbuttonLink" style={{color:"black"}}>Back</Link>
          </button>
          </div>
        <h1 style={{backgroundColor:"#66023c", borderRadius:"0"}}>Hadrian's Wall Path 2024
        <Romaneagle />
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
        <li>Minimize the carbon footprint by walking or using public transport where possible, and where not, to use only one car.</li>
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
        title="Click here to learn more about information produced by Newcastle University about Tyrian purple"> article </Link> from Newcastle University explains more about the source
        and importance of Tyrian purple, which only the emperor was allowed to wear.

        
        </div> {/*Closing tab for hwpDailyNarrative div */}
        </div>  {/*Closing tab for newsHwp div */}
        </div>  {/*Closing tab for datenewsDivHwp div */}

      

        <div className="datenewsDivHwp">
            <section className="newsheaderHwp"><strong>Day 1 - Wallsend to Newcastle Swing Bridge</strong></section>
            <section className="dateHwp">1st June 2024, Saturday</section> 
            <div className="newsHwp">
             <div className="componentWalkDetails">     
            <strong className="headTitles">Details of the Walk </strong>
            <ul className="hwpIntroList">
                <li><strong className="titles">Parking:</strong><br />Quayside Car Park (owned by Newcastle City Council). £11.00 for the day. Payment is via the <Link to="https://www.paybyphone.co.uk/" target="_blank">Pay by Phone</Link> app on your mobile phone.</li>
                <li><strong className="titles">Public Transport: </strong><br /> Metro yellow line heading to South Shields via Whitley Bay between <strong>Manors</strong> and <strong>Wallsend</strong> metro stations. 
                Routes and live updates can be viewed on the Nexus <Link to="https://www.nexus.org.uk/ticket-information/pop/pop-app" target="_blank" title="Click here to go to the Pop app Information page of the Nexus site">Pop app</Link>. Cost £5.60 per adult for All Day Rover ticket.</li>
                <li><strong className="titles">Distance:</strong><br /> 5.1 miles on the Hadrian's Wall Path, 7.5 miles total, <strong> Ascent:</strong> 22 metres, 72 feet,  <strong>Descent:</strong> 30 metres, 98 feet. </li>
                <li><strong className="titles">Refreshments:</strong><br /><Link to="https://oswinproject.org.uk/our-work/cafe-16-at-newcastle-cathedral/" target="_blank" title="Click here to discover more about Café 16, St Nicholas' Cathedral ">Café 16, St Nicholas' Cathedral</Link>, Newcastle.
                The café is supplied with fresh produce from the charity’s bakery in HMP Northumberland, where the café's trained bakers allow prisoners to learn new skills and find a new direction on release.</li> 
                </ul>    

            <strong className="headTitles">Good</strong> 
            <ul className="hwpIntroList">
              <div className="listItemsAlign">
                <li><strong className="titles">Museums :</strong><br /><Link to="https://segedunumromanfort.org.uk/" target="_blank" title="Click here
            to discover more about Segedunum Fort"> Segedunum Fort </Link>, <Link to="https://www.newcastlecastle.co.uk/" target="_blank" title="Click 
            here to discover more about Newcastle Castle">Newcastle Castle</Link></li>
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
            as there is so much to do, see and learn that undertaking so much in one day does not allow to spend time in the sites and museums. Also we would not advise walking on firm 
            surfaces for such a distance.</li>
            </ul>
            </div>    {/* Closing tag ComponentWalkDetails Class*/ }          
            <br />
            <div className="hwpDailyNarrative">
            We were up early on this, the first day of our Hadrian's Wall walk and left promptly in order to be in Newcastle by 9.30am. We chose to park on one of the Newcastle City Council car parks.
            Be forewarned, these no longer accept cash payments, so it is worth setting up the 
             <Link to="https://www.paybyphone.co.uk/" target="_blank"> Pay by Phone app</Link> on your phone before you go, so that payment can be made quickly and easily.
            We used the <Link to="https://www.getintonewcastle.co.uk/venues/quayside-multi-storey-car-park" target="_blank" title="Click here to discover more about the Quayside Car Park"> Quayside Car Park </Link> 
            which is reasonably priced by city standards (£11.00 for the day) and parking after 18.00 is free. 
            <br />
            <br />
            After a short 10 minute walk (0.3 mile), we arrived at Manors Metro Station. The Metro services in Newcastle are run by <Link to="https://www.nexus.org.uk/" target="_blank" title="Click here to go to the Nexus website">Nexus</Link>.
            Their <Link to="https://www.nexus.org.uk/ticket-information/pop/pop-app" target="_blank" title="Click here to go to the Pop app Information page of the Nexus site"> Pop app </Link>
            can be downloaded to your phone and allows you to plan your journey and access live updates. Day tickets need to be purchased at the ticket machine located just inside the entrance to the station, but are straightforward to acquire.
            <br />
            <br />
            The Hadrian's Wall Path starts at Wallsend, and on disembarking at Wallsend metro station, it is a well-signed posted and short (3 minute) walk to  
            <Link to="https://segedunumromanfort.org.uk/" target="_blank" title="Click here to discover more about Segedunum Fort"> Segedunum Roman Fort. </Link>
            Entry was half-price as the 3rd floor of the museum and also the reconstructed bath house were currently closed awaiting repairs to flooding damage. 
            These are due to be completed by the end of August as this <Link to ="https://www.bbc.com/news/articles/cndd2wppy3xo" target="_blank" title="Click here to open the article"> recent BBC article</Link> explains, so in no way let this put you off 
            visiting as this is still an excellent, informative museum and site and there are some amazing views from the viewing tower. Our intention is to have a further visit 
            when the repairs are complete.
            <br />
            <br />
            From there, we went on to join the Hadrian's Wall Path which, for the first 12 miles runs not along the original line of Hadrian's Wall
            but along the route 72 cycle and pedestrian way alongside the River Tyne. This path is much pleasanter than might be imagined, despite
            it being through quite an urban area. It is also a cycle path, so you just need to keep a look out for cyclists to let them past. Our favourite 
            section was when we dropped down to be right beside the River Tyne. The Ropery formed a good spot for a packed lunch as there was a bench to 
            sit on. 
            <br />
            <br />
            After lunch, it was a leisurely wander into Newcastle city centre via the Quayside. It was a beautifully sunny Saturday afternoon so people were making full use 
            of the riverside and rooftop bars and restaurants. On arrival in Newcastle city centre, it was time for some refreshments and we went to <Link to="https://oswinproject.org.uk/our-work/cafe-16-at-newcastle-cathedral/" 
            target="_blank" title="Click here to discover more about Café 16, St Nicholas' Cathedral ">Café 16, St Nicholas' Cathedral</Link> who have excellent cakes, before
            heading down the road to <Link to="https://www.newcastlecastle.co.uk/" target="_blank" title="Click 
            here to discover more about Newcastle Castle">Newcastle Castle</Link> to visit the Black Gate and to climb the Keep, from which there are some fantastic views 
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
            <section className="newsheaderHwp"><strong>Day 6 - Chollerford to Brocolitia/Carrawburgh Roman Fort</strong></section>
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
           title="Click here to discover more about Chester's Roman Fort"> Chester's Roman Fort and Museum </Link> . 
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
            target="_blank">Chipchase Castle</Link> which has a 14th century Pele tower and a 17th century Jacobean house attached. It is a scheduled ancient monument and Grade 1 listed building.
            <br />
            <br />
            Limestone Corner: At Limestone Corner, there is an unfinished section of ditch filled with abandoned stone blocks: one slab still show the holes chiselled by the Romans to split the rock.
            The stone here is hard basalt and it appears that the Romans found this too hard to work with and gave up trying to complete this part of the ditch. Unfortunately, we did not take any photos
            of Limestone Corner, but this <Link to="https://perlineamvalli.wordpress.com/tag/limestone-corner/" target="_blank"> Per Lineam Valli </Link> website has some interesting information and photographs
            <br />
            <br />
            Once we had successfully reached Brocolitia/Carrawburgh Military Fort we returned to the car in order to travel back to Chester's Roman Fort and spent
            the remainder of the afternoon there exploring fully the fort and museum, leaving the exploration of Brocolitia Fort for the following morning.
            <br />
            <br />
            <Link to="https://www.english-heritage.org.uk/visit/places/chesters-roman-fort-and-museum-hadrians-wall/" target="_blank"
           title="Click here to discover more about Chester's Roman Fort"> Chester's Roman Fort and Museum </Link> are managed by English Heritage so members 
           can obtain free entry using their membership cards. Chester's Roman Fort is one of the best preserved Roman Ruins in Britain and is certainly,
           together with <Link to="https://www.english-heritage.org.uk/visit/places/chesters-roman-fort-and-museum-hadrians-wall/history/collection/" target="_blank"> John Clayton's museum </Link> , one of our favourites. 
           In 1843, John Clayton inherited the site from his father, who had previously turfed over the ruins.
           John Clayton excavated many parts of the fort and created the museum to house and maintain the many exhibits both from the fort and other segments of the wall. He also developed such a 
           fascination for Hadrian's Wall that he bought up many other large areas of the wall. By the time John died in 1890 he owned five forts – Chesters, Carrawburgh, Housesteads, Vindolanda and Carvoran – 
           as well as most of the Wall within this 20 mile stretch.
           <br />
           <br />
           If you are visiting the Chesters site, we would strongly advise making sure that you leave enough time and that you also have time to see the John Clayton Museum 
           and the Chester's Bridge abutment detour right down to the river, where a narrow footbridge originally carried the Wall across the River North Tyne, but the Romans later replaced this 
           with an impressive stone road bridge. The remains of the stone abutment that joined the bridge to the riverbank survive, along with the foundations of the tower and a section of the wall.
           <br />
           <br />
           The fort was situated astride Hadrian's Wall, guarding the bridge over the river North Tyne and was occupied by a 500 strong cavalry regiment, the 
           ala II Asturum (Second Asturian Cavalry Unit) from Asturia in Northern Western Spain. There are plenty of information boards to provide further explanation
           for the various areas as you go around the fort.
            <br /> 
            <br /> 
            Join us on our 6th day of the Hadrian's Wall Path by clicking on the album below and following our narrative by clicking on the added comments.          
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
            <section className="newsheaderHwp"><strong>Day 7 - Brocolitia/Carrawburgh Roman Fort to Housesteads Roman Fort</strong></section>
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
           target="_blank" title="Click here to discover more about the Brocolitia Mithraeum or Temple of Mithras"> Brocolitia Mithraeum or Temple of Mithras </Link> . 
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
            target="_blank" title="Click here to discover more about General Wade"> General Wade </Link>  (1673-7148) removed the stones from the Fort 
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

            Join us on our 7th day of the Hadrian's Wall Path by clicking on the album below and following our narrative by clicking on the added comments.          
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
      </div> 
      
      
    );

  }
