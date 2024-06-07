import React from 'react';
import { Link } from "react-router-dom";
import './Hwp2024.css';
import NewcastleQuayside from "./imagesresized/NewcastleQuayside.jpg";
import HwpIntro from "./imagesresized/HwpIntro.jpg";


export default function Hwp2024() {
    return (

        <div className="bodyHwp">
        <div className="hwp2024Header"> 
          <button id="backbutton" style={{backgroundColor:"#D19B2F"}}>
            <Link to="/" className="backbuttonLink" style={{color:"black"}}>Back</Link>
          </button>
          </div>
        <h1 style={{backgroundColor:"#66023c", borderRadius:"0"}}>Hadrian's Wall Path 2024
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
            <section className="dateHwp">1st June 2024, Saturday</section>
            <section className="newsheaderHwp"><strong>Day 1 - Wallsend to Newcastle Swing Bridge</strong>
            </section> 
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
      </div> 
      
      
    );

  }
