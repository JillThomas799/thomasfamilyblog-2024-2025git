import React from 'react';
import { Link } from "react-router-dom";
import './September2024.css';
import AbbotsfordCafe from "./imagesresized/AbbotsfordCafe.jpg";
import AbbotsfordGargoyles from "./imagesresized/AbbotsfordGargoyles.jpg";
import EntranceAbbotsford from "./imagesresized/EntranceAbbotsford.jpg";
import WalterScottsCat from "./imagesresized/WalterScottsCat.jpg";
import AbbotsfordRear from "./imagesresized/AbbotsfordRear.jpg";
import AbbotsfordLibrary from "./imagesresized/AbbotsfordLibrary.jpg";
import AbbotsfordfromGarden from "./imagesresized/AbbotsfordfromGarden.jpg";
import AbbotsfordfromGarden2 from "./imagesresized/AbbotsfordfromGarden2.jpg";
import BustWalterScott from "./imagesresized/BustWalterScott.jpg";
import DrawingRoomAbbotsford from "./imagesresized/DrawingRoomAbbotsford.jpg";
import HallShieldsAbbotsford from "./imagesresized/HallShieldsAbbotsford.jpg";
import HallAbbotsford from "./imagesresized/HallAbbotsford.jpg";
import DoddSummitTitled from "./imagesresized/DoddSummitTitled.jpg";

export default function September2024() {
    return (
      <div style={{background:"#98964D"}}>
        <div className="SeptemberHeader"> 
          <button id="backbuttonSeptember">
            <Link to="/" className="backbuttonLink">Back</Link>
          </button>
        </div>
        <svg className="CowsAndSheep" version="1.1" x="0" y="20" width="100%" height="50vh" viewBox="0 0 -60 0" style={{overflow:"visible"}}>
          <defs>
          <radialGradient id="Gradsheepfur" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: "#f4eee0", stopOpacity: "1"}} > </stop> 
                    <stop offset="100%" style={{stopColor: "#e9e0d4", stopOpacity: "1"}} ></stop> 
                    </radialGradient>

            <radialGradient id="GradSheepEar" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: "#3A3B3c", stopOpacity: "1.0"}} > </stop>
                    <stop offset="100%" style={{stopColor: "#efefe3", stopOpacity: "1.0"}} ></stop>
                    </radialGradient>

                    <radialGradient id="GradLambEar" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: "#FEC0CB", stopOpacity: "1"}} > </stop>
                    <stop offset="100%" style={{stopColor: "#efefe3", stopOpacity: "0.7"}} ></stop>
                    </radialGradient>

            <linearGradient id="GradLambBody" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:" #d3d3d3"}} />
              <stop offset="100%" style={{stopColor:"#f6f6da"}} />
            </linearGradient>

            <linearGradient id="GradLambLeg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:" #d3d3d3"}} />
            <stop offset="100%" style={{stopColor:"#f6f6da"}} />
            </linearGradient>

            <linearGradient id="GradLambTail" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:" #3A3B3C"}} />
            <stop offset="10%" style={{stopColor:" #d3d3d3"}} />
            <stop offset="100%" style={{stopColor:" #d3d3d3"}} />
            </linearGradient>

          </defs>

          <svg id="swaledaleSheep1" width="100vw" height="83vh">
            
            <g id="swaledaleSheep1frontlegright"><rect x="618" y="478" rx="6" ry="6" width="7" height="28" fill=" url(#GradLambLeg)" ></rect></g>
            <g id="swaledaleSheep1frontlegleft"><rect x="600" y="478" rx="6" ry="6" width="7" height="28" fill=" url(#GradLambLeg)" ></rect></g>
            <g id="swaledaleSheep1rearlegright"><rect x="589" y="474" rx="6" ry="6" width="7" height="29" fill=" url(#GradLambLeg)" ></rect></g>
            <g id="swaledaleSheep1rearlegleft"><rect x="611" y="474" rx="6" ry="6" width="7" height="29" fill=" url(#GradLambLeg)" ></rect></g>
              
            <g id="swaledaleSheep1bodyleft"  >
              <path fill="url(#Gradsheepfur)" d="M 600 480 A 30,40 80 0 1 605, 430" />
            </g>
            <g id="swaledaleSheep1bodycentre" ><polygon points="610 430, 605 430, 600 480, 620 480" fill="url(#Gradsheepfur)"/></g>
            <g id="swaledaleSheep1bodyright"  >
              <path fill="url(#Gradsheepfur)" d="M 620 480 A 30,40 80 0 0 610, 430" />
            </g>
            
            <g id="swaledaleSheep1upperhornleft"><path fill="#c4915e" stroke="#c4915e" strokeWidth="8" d="M 604 418 A 30,30 20 0,0 595 422" /></g>
            <g id="swaledaleSheep1lowerhornleft"><path fill="#c4915e" stroke="#c4915e" strokeWidth="2" d="M 595 422 A 30,40 0 0, 0 598 436" /></g>
            <g><path id="sheepearleft" d="M 604 420 q -39 -3 23 20 " fill="url(#GradSheepEar)" opacity="1.0" ></path></g> 
            <g id="swaledaleSheep1upperhornright"><path fill="#c4915e" stroke="#c4915e" strokeWidth="8" d="M 616 418 A 30,30 -20 0,0 627 422" /></g>
            <g id="swaledaleSheep1lowerhornright"><path fill="#c4915e" stroke="#c4915e" strokeWidth="2" d="M 627 425 A 30,40 0 0, 0 624 436" /></g>
            <g><path id="sheepearright" d="M 618 421 q 35 -3 -23 20" fill="url(#GradSheepEar)" opacity="1.0" ></path></g>
            
            <g id="swaledaleSheep1head"><ellipse cx="610" cy="430" rx="11.5" ry="15" fill="#36454F" opacity="0.9"></ellipse></g>
            <g id="swaledaleSheep1muzzle"><ellipse cx="610" cy="436" rx="5" ry="9" fill="url(#Gradsheepfur)" opacity="0.9"></ellipse></g>
            <g id="swaledaleSheep1eyerightouter"><ellipse cx="603" cy="425" rx="4" ry="3" fill="url(#Gradsheepfur)" opacity="0.9" style={{transform:"rotate(20deg,603,425)"}}></ellipse></g>
            <g id="swaledaleSheep1eyeleftouter"><ellipse cx="616" cy="425" rx="4" ry="3" fill="url(#Gradsheepfur)" opacity="0.9" style={{transform:"rotate(-20deg,616,425)"}}></ellipse></g> 
            <g id="swaledaleSheep1eyerightinner"><ellipse cx="603" cy="425" rx="3" ry="1.5" fill="#36454F" opacity="0.9" style={{transform:"rotate(20deg,603,425)"}}></ellipse></g>
            <g id="swaledaleSheep1eyeleftinner"><ellipse cx="616" cy="425" rx="3" ry="1.5" fill="#36454F" opacity="0.9" style={{transform:"rotate(-20deg,616,425)"}}></ellipse></g> 

            <g id="swaledaleSheep1mouth"><path d="M 605 438 Q 610 443 615 438" fill="#36454F" /></g>
            <g id="swaledaleSheep1noseleft"><path d="M 605 435 Q 607 436 610 439" fill="#36454F" /></g>     
          </svg>

          <svg id="swaledaleSheep2" width="100vw" height="83vh" style={{transform:"translate(0px, -40px)"}}>
            
            <g id="swaledaleSheep2frontlegright"><rect x="453" y="478" rx="6" ry="6" width="7" height="48" fill=" url(#GradLambLeg)" ></rect></g>
            <g id="swaledaleSheep2frontlegleft"><rect x="465" y="478" rx="6" ry="6" width="7" height="48" fill=" url(#GradLambLeg)" ></rect></g>
            <g id="swaledaleSheep2rearlegright"><rect x="498" y="493" rx="6" ry="6" width="7" height="29" fill=" url(#GradLambLeg)" ></rect></g>
            <g id="swaledaleSheep2rearlegleft"><rect x="509" y="493" rx="6" ry="6" width="7" height="29" fill=" url(#GradLambLeg)" ></rect></g>
            <g id="swaledaleSheep2body" ><rect x="450" y="460" rx="30" ry="13" width="70" height="40" fill="url(#Gradsheepfur)" ></rect></g>
            <g id="idmarkerswaledaleSheep2"><rect x="485" y="460" rx="2" ry="30" width="7" height="10" fill="#880808" opacity="0.5" filter="url(#blur2)" ></rect></g>

            <g id="relocatesheephornsswaledaleSheep2" style={{transform:"translate(-152px, 37px)"}}>
            <g id="swaledaleSheep2upperhornleft"><path fill="#c4915e" stroke="#c4915e" strokeWidth="8" d="M 604 418 A 30,30 25 0,0 594 422" /></g>
            <g id="swaledaleSheep2lowerhornleft"><path fill="#c4915e" stroke="#c4915e" strokeWidth="2" d="M 594 422 A 30,40 0 0, 0 596 434" /></g>
            <g><path id="sheep2earleft" d="M 604 420 q -39 -3 23 20 " fill="url(#GradSheepEar)" opacity="1.0" ></path></g> 
            <g id="swaledaleSheep2upperhornright"><path fill="#c4915e" stroke="#c4915e" strokeWidth="7" d="M 612 418 A 30,30 -20 0,1 627 422" /></g>
            <g id="swaledaleSheep2lowerhornright"><path fill="#c4915e" stroke="#c4915e" strokeWidth="2" d="M 627 425 A 30,40 0 0, 0 624 434" /></g>
            <g><path id="sheep2earright" d="M 618 421 q 35 -3 -23 20" fill="url(#GradSheepEar)" opacity="1.0" ></path></g>
            </g>

            <g id="swaledaleSheep2head"><ellipse cx="457" cy="467" rx="11.5" ry="15" fill="#36454F" opacity="0.9"></ellipse></g>
            
            <g id="relocatefacialfeaturesswaledaleSheep2" style={{transform:"translate(-152px, 37px)"}}>
            <g id="swaledaleSheep2muzzle"><ellipse cx="611" cy="439" rx="5" ry="9" fill="url(#Gradsheepfur)" opacity="0.9"></ellipse></g>
            <g id="swaledaleSheep2eyerightouter"><ellipse cx="603" cy="425" rx="4" ry="3" fill="url(#Gradsheepfur)" opacity="0.9" style={{transform:"rotate(20deg,603,425)"}}></ellipse></g>
            <g id="swaledaleSheep2eyeleftouter"><ellipse cx="616" cy="425" rx="4" ry="3" fill="url(#Gradsheepfur)" opacity="0.9" style={{transform:"rotate(-20deg,616,425)"}}></ellipse></g> 
            <g id="swaledaleSheep2eyerightinner"><ellipse cx="604" cy="426" rx="3" ry="1.5" fill="#36454F" opacity="0.9" style={{transform:"rotate(20deg,603,425)"}}></ellipse></g>
            <g id="swaledaleSheep2eyeleftinner"><ellipse cx="616" cy="426" rx="3" ry="1.5" fill="#36454F" opacity="0.9" style={{transform:"rotate(-20deg,616,425)"}}></ellipse></g> 
            <g id="swaledaleSheep2mouth"><path d="M 606 438 Q 610 443 617 438" fill="#36454F" /></g>
            <g id="swaledaleSheep2noseleft"><path d="M 605 435 Q 607 436 610 439" fill="#36454F" /></g>  
            </g>  

            <g id="swaledaleSheep2tail"  transform="rotate(-5,514, 473)"><rect x="514" y="473" rx="3" ry="3" width="8" height="30" fill=" url(#Gradsheepfur)" opacity="0.9"></rect></g>

         </svg>
        ;
        <svg id="sheepAdultLamb1" style={{transform:"scale(50%)"}} >
          <use xlinkHref="#swaledaleSheep1" x={300} y={150} style={{transform:"scale(2.2)"}} />
          </svg>

         <svg id="sheepAdultLamb2" style={{transform:"scale(50%)"}} >
          <use xlinkHref="#swaledaleSheep2" x={600} y={150} style={{transform:"scale(2.2)"}} />
          </svg>

          
         </svg>
        
        
        <div className="SeptemberHeader">September 2024</div>
        

        <div className="datenewsDivSeptember" style={{marginTop:"5%"}}>
            {/* <section className="dateSeptember">1st - 30th September 2024</section> */}
            <section className="newsheaderSeptember">Welcome to our September 2024 blog</section> 
            <section className="newsSeptember" style={{textAlign:"center"}}>
            {/* Welcome to our September blog.  */}
            The summer is almost over, but despite the poor weather and the cold, we have still managed to have a very enjoyable time over the summer.
            As we have previously written, we managed to successfully complete our Hadrian's Wall Path trek and now the schools are back and it is a little quieter, there is still
            a long list of walks we would like to do and trips we would like to take so hopefully this month we will be able to bring a little news about those.
            <br />
            <br />
            As can be seen, the sheep have made a reappearance on this month's header as they are all still around in the fields, together with the addition 
            of a significant number of cattle grazing, together with their calves, which has meant for some cautious maneuvering through fields at times! 
            It will be noted now that all the lambs have grown up, and are now adult sheep, as can be seen here in their digital recreations, and the 
            grass is now a suitable autumnal shade.
            <br />
            <br />
            To start off with though, here is our blog about the first of these trips, a long-awaited visited to Abbotsford, Walter Scott's home in the 
            Scottish Borders. This is well worth a visit if you are in the area......
            </section>
            </div>

            <div className="datenewsDivSeptember">
            <section className="dateSeptember">3rd September 2024</section> 
            <section className="newsheaderSeptember"> Visit to Sir Walter Scott's House, Abbotsford</section>  
            <br />
            <section className="newsSeptember">  <strong>Who was Sir Walter Scott: <br /> </strong> <Link to ="https://en.wikipedia.org/wiki/Walter_Scott" target="_blank" title="Click here to discover more about Sir Walter Scott" className="LinkSeptember"> 
            <strong> Sir Walter Scott </strong> </Link> (August 1771 - 1832) was a Scottish poet, novelist and historian. 
            Many of his works remain classics of European and Scottish literature, notably the novels <Link to="https://www.goodreads.com/book/show/6440.Ivanhoe" target="_blank" className="LinkSeptember">
            Ivanhoe (1819) </Link>, <Link to="https://www.goodreads.com/book/show/543686.Rob_Roy" target="_blank" className="LinkSeptember"> Rob Roy (1817) </Link>, <Link to="https://www.goodreads.com/book/show/539025.Waverley" target="_blank" className="LinkSeptember"> Waverley (1814) </Link>, 
            <Link to="https://www.goodreads.com/book/show/699603.Old_Mortality" target="_blank" className="LinkSeptember"> Old Mortality (1816) </Link> , 
            <Link to="https://www.goodreads.com/book/show/699484.The_Heart_of_Mid_Lothian" target="_blank" className="LinkSeptember"> The Heart of Mid-Lothian (1818) </Link>, 
            and <Link to="https://www.goodreads.com/book/show/49495.The_Bride_of_Lammermoor" target="_blank" className="LinkSeptember"> The Bride of Lammermoor (1819) </Link> , along with the narrative poems             
            <Link to="http://www.walterscott.lib.ed.ac.uk/works/poetry/marmion.html" target="_blank" className="LinkSeptember"> Marmion (1808) </Link> and 
            <Link to="http://www.walterscott.lib.ed.ac.uk/works/poetry/lady.html" target="_blank" className="LinkSeptember"> The Lady of the Lake (1810) </Link>. 
            <br />
            <br />
            He was also an antiquarian and collector. He was an advocate, judge, and legal administrator by profession, but he combined 
            writing and editing with his daily work as Clerk of Session and Sheriff-Depute of Selkirkshire. He had great success in his life but also great 
            tragedy. He was, after Byron, the most widely read and influential writer of the Romantic period and made significant earnings from his writing as a result.
            However later Scott suffered two major financial crises, in 1813 and 1825-26, both sparked by the collapse of his publishers. In 1825 Sir Walter Scott was at the height of his power and fame. 
            By January 1826 he was financially ruined with enormous debts that vastly exceeded his assets. His wife Charlotte Charpenter also died in 1826 and then
            he received news of the death of his ten year old grandson John Hugh Lockhart whilst in Italy in December 1831.
            <br />
            <br />
            <strong>What factors contributed to Walter Scott's becoming a writer? :</strong>
            < div className="SeptemberList">
            <li><strong>Childhood Polio :</strong> In 1773, when he was still under 2 years old, Scott suffered from a bout of polio which left him lame.
            His parents sent him to recover at his grandfather's farm near Kelso in the Borders. Here he was taught to read by his aunt and learned from her the 
            speech patterns and many of the tales and legends that he would use later in his work. </li>
            <li><strong>Childhood Explorations :</strong> During his convalescence, he explored the nearby countryside and as a result, developed a love of natural beauty and a deep interest in and appreciation 
            of the historic struggles of his Scottish forefathers. He often used these to create the backdrop to the plots of a many of his novels.</li>
            <li><strong>A fascination with the history and culture of his native Scotland</strong> : He loved reading poetry, history, drama, and fairy tales and romances. 
            Visitors recall him reciting poetry with great enthusiasm and dramatic skill, which was helped by his remarkable memory.</li>
            </div>
            <br />
            <strong>What and where is Abbotsford? :</strong> Abbotsford is situated in the Scottish Borders, near Galashiels, on the south bank of the River Tweed and to quote the information provided by the Abbotsford Trust, is 'one of the finest examples of a writer's home anywhere in the world.'
            After his death in 1832, it was maintained by generations of his family until 2007, when the Abbotsford Trust, an independent charitable trust was set up to take over responsibility. 
            They have undertaken restoration work to ensure that visitors today see the house as it would have been when Scott died in 1832.
            <br />
            <br />
            <strong>What we liked :</strong> Having now visited Abbotsford, we can understand why it remains such a popular attraction. It is situated in the Borders of Scotland by the
            River Tweed and the drive from the north west of England takes you along the A7 and the Borders Historic Route to Edinburgh, passing through Hawick. This is as much a part of the trip as the house itself as it is necessary 
            to know and understand the countryside and culture he fell in love with in order to understand Abbotsford. 
            <br />
            <br />
            Unlike many historic houses, Abbotsford is reasonably modest in size. It is easy to imagine how it must have been when Walter Scott was living here and it is easy to understand why he loved it so much.He is known to have called it 'The Delilah 
            of his imagination'. It is a classic story of riches to ruin, with his building the house with the extensive proceeds of all his writing work but later fell into serious debt.
            <br />
            <br />
            The Abbotsford Trust have done a very good job of making this an enjoyable and interesting attraction. We particularly liked 
             the choice of audio guides, we chose the one with an actor playing the part of Walter Scott narrating his own story which was really clever 
             and very effective. The audio guide gives lots of information, but it is also worth buying a copy of the guidebook as this has far more information
             about the contents of the house which Walter Scott collected throughout his lifetime. 
             <br />
            <br />
              The walled gardens are a really pleasant and sheltered place to sit, and then it is possible to go and do the walks by the River Tweed.
              Overall, this visit was even better than anticipated and we plan to return at some point. If in the area, it is well worth a visit...
            <br />
            <br />

            <div className="blogPhotoDivSeptember">
            <fig><section className = "blogPhotoSeptember" ><img src={AbbotsfordCafe} alt="" /><figcaption className='augustfigcaption'><strong>It had been a very impressive but <br /> long(ish) drive  
            so first and foremost on arrival, it was time for a café stop... </strong></figcaption></section>
            </fig>
              <fig><section className = "blogPhotoSeptember" ><img src={EntranceAbbotsford} alt="" /><figcaption className='augustfigcaption'><strong>Entrance to Abbotsford ... it is easy to see why Sir Walter Scott liked this house so much.</strong></figcaption></section>
              </fig>
              <fig><section className = "blogPhotoSeptember" ><img src={HallAbbotsford} alt="" /><figcaption className='augustfigcaption'><strong>This is the entrance hall - <br /> Walter Scott was also known as an antiquarian <br /> and collector and all of these items are of historical interest....</strong></figcaption></section>
            </fig>
              <fig><section className = "blogPhotoSeptember" ><img src={HallShieldsAbbotsford} alt="" /><figcaption className='augustfigcaption'><strong> The shields of Walter Scott's Ancestors are 
             these down the centre <br /> of the ceiling and those of the principal border families are painted around the cornice...  </strong></figcaption></section>
              </fig>           
            </div>

            <div className="blogPhotoDivSeptember">
           
              <fig><section className = "blogPhotoSeptember" ><img src={AbbotsfordLibrary} alt="" /><figcaption className='augustfigcaption'><strong>Walter Scott's library, Abbotsford...Here are about 7000 of the 9000 books Walter Scott collected,
                each in the same spot as Walter Scott placed them.</strong></figcaption></section>
              </fig>
              <fig><section className = "blogPhotoSeptember" ><img src={BustWalterScott} alt="" /><figcaption className='augustfigcaption'><strong>...and here is the bust of Sir Walter Scott which was moved here from the drawing room by Walter Scott the younger.</strong></figcaption></section>
            </fig>
              <fig><section className = "blogPhotoSeptember" ><img src={DrawingRoomAbbotsford} alt="" /><figcaption className='augustfigcaption'><strong>Evening leisure pursuits were centred on the the drawing room next door, a room which Scott's wife Charlotte preferred. Their daughter Sophia would play the harp and sing here.</strong></figcaption></section>
              </fig>
              <fig><section className = "blogPhotoSeptember" ><img src={AbbotsfordGargoyles} alt="" /><figcaption className='augustfigcaption'><strong>Sir Walter Scott's armoury, intended for the display of his collections of fine arms and armoury but often used as his private sitting room.
              Walter Scott loved gothic architecture and weird and grotesque carvings...</strong></figcaption></section>
            </fig>
           
            </div>

            <div className="blogPhotoDivSeptember">
            
            <fig><section className = "blogPhotoSeptember" ><img src={AbbotsfordRear} alt="" /><figcaption className='augustfigcaption'><strong> Abbotsford as seen from the rear. <br /> The central section of the house is the original. </strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoSeptember" ><img src={AbbotsfordfromGarden2} alt="" /><figcaption className='augustfigcaption'><strong>Sir Walter Scott's gardens at Abbotsford were also an extension <br /> of his creative talent....</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoSeptember" ><img src={AbbotsfordfromGarden} alt="" /><figcaption className='augustfigcaption'><strong>View of Abbotsford from a seat in the walled garden.</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoSeptember" ><img src={WalterScottsCat} alt="" /><figcaption className='augustfigcaption'><strong>Although Walter Scott was a passionate dog-lover, <br /> in later life he also grew to like cats.  He said <br /> ' Cats are a very mysterious kind of folk. 
              There is always more passing in their minds than we are <br /> aware of. Here is a painting of his cat, Hinse of Hinsefeldt ....</strong></figcaption></section>
            </fig>
            </div>

            </section>
           </div> 

           <div className="datenewsDivSeptember">
            <section className="dateSeptember">5th September 2024, Sunday</section> 
            <section className="newsheaderSeptember"> ADDITIONAL DAY - Visit to the Great North Museum, Newcastle upon Tyne</section>  
            <br />
            <section className="newsSeptember" style={{textAlign:"center"}}> 
            Today, we took the opportunity to take the train into Newcastle upon Tyne and to go and visit the Hadrian's Wall Gallery at the Great North Museum.
            There are some very interesting exhibits. Especially impressive is the reproduction model of the entire wall, forts and milecastles which
            gives a real sense of the geography and scale of the endeavour. The overhead drone footage of the remaining wall sites in Newcastle itself was also
            a really helpful tool as it is possible to obtain a much clearer and informative view from an aerial photograph.
            <br />
            <br />
            For all the information about this trip today, please come and join us at our  
            <Link to="/hwp2024" className="LinkSeptember"> Hadrian's Wall Path Expedition page </Link>
            </section>
          </div>    

           <div className="datenewsDivSeptember">
            <section className="dateSeptember">7th September 2024, Saturday</section>
            <section className="newsheaderSeptember"><strong>Dodd Summit, Wood and Mirehouse, Bassenthwaite</strong></section>
             <div className="newsSeptember">
             <div className="componentWalkDetails">     
            <strong className="headTitlesSeptember">Details of the Walk </strong>
            <ul className="hwpIntroList">
                <li><strong className="titlesSeptember">Parking:</strong><br />The Forestry Commission car park by the Old Sawmill Tearoom, across the road from Mirehouse house and gardens. This cost £8.50 for our stay.</li>
                <li><strong className="titlesSeptember">Paths: </strong><br /> The paths are clear, well-maintained and well-signposted.  </li>
                <li><strong className="titlesSeptember">Distance:</strong><br /> 7.2 miles in total <strong>  Ascent:</strong> 530 metres, 1,740 feet. </li>
                <li><strong className="titlesSeptember">Refreshments:</strong> <Link to="https://www.mirehouse.co.uk/plan-your-visit/the-old-sawmill-tearoom/" target="_blank"
            title="Click here to look at the opening times for the Old Sawmill Tearoom" className="LinkSeptember">Old Sawmill Tearoom</Link></li> </ul>    

            <strong className="headTitlesSeptember">Good</strong> 
            <ul className="hwpIntroList">
              <div className="listItemsAlign">
                <li><strong className="titlesSeptember">Walk :</strong><br /> Really enjoyable walk with over 500 metres in ascent so a steady climb, and not dissimilar to Haystacks at Buttermere in actual fact.
                Really interesting combination of a moderately energetic climb, spectacular views once out of the wood and then the lovely and interesting Mirehouse
                gardens and Lakeside walk across the road. </li>
                <br />
                <br />
                <li><strong className="titlesSeptember">Mirehouse Gardens :</strong><br /> <Link to="https://www.mirehouse.co.uk/" target="_blank"
                title="Click here to discover more about Mirehouse" className="LinkSeptember">Mirehouse house and gardens</Link> are situated by Lake Bassenthwaite.  
                As the <Link to="https://www.mirehouse.co.uk/" target="_blank"
                title="Click here to discover more about Mirehouse" className="LinkSeptember">Mirehouse website </Link> explains, the present house was built in 1666 by the 8th Earl of Derby for visits to his Cumbrian estates. 
                In 1688 he sold it to his agent Roger Gregg. The Greggs and their kinsmen, the Storys owned it until Thomas Story left it to John Spedding of Armathwaite Hall in 1802.
                Mirehouse has had fascinating links to significant literary figures over the years including Alfred Lord Tennyson who was a close friend of James Spedding and visited Mirehouse twice, 
                bringing his wife Emily here on their honeymoon.  He met Edward Fitzgerald at Mirehouse. James Spedding was Francis Bacon’s editor and biographer and as a result manuscripts and books from Bacon’s time are found in the house.   
                <br />
                <br />
                The house itself is open a couple of days a week in season, but the gardens are open every
                day in season. There is a fee for entry to both, but for ourselves it is included in our <Link to="https://www.historichouses.org/become-a-member/"
                target="_blank" title="Click here to discover more about Historic Houses membership" className="LinkSeptember">Historic Houses Membership.</Link> </li>
                <br />
                <br />
                <li><strong className="titlesSeptember">Refreshments : </strong><br />The Old Sawmill Tearoom, Mirehouse provides great drinks, cakes and lunches. 
                It is open 10am to 16.30 during the season. Check website for details <Link to="https://www.mirehouse.co.uk/plan-your-visit/the-old-sawmill-tearoom/" target="_blank"
            title="Click here to look at the opening times for the Old Sawmill Tearoom" className="LinkSeptember">Old Sawmill Tearoom</Link></li> 
                <br />
                <br />
                <li><strong className="titlesSeptember">Weather: </strong><br />It was a lovely day, beautifully sunny and warm but not too hot. As with all summits, it was 
                quite breezy on the top!</li>
                <br />
                <br />
                </div>
                </ul>
                
            <strong className="headTitlesSeptember">Not so good</strong> 
            <ul className="hwpIntroList">
                <li><strong className="titlesSeptember">Moderately busy :</strong><br />Although the schools have returned now, September remains a very popular 
                month for visitors to the national park so it was reasonably busy, without being overly so. Certainly, the number of visitors did 
                not detract from the enjoyment. It did get busier as the day went on, so an early start is quite beneficial and also means it is easier 
                to obtain a place on the car park.</li>
                <br />
                <br />
                </ul>
               
            <strong className="headTitlesSeptember">Hike Rating</strong> 
            <ul className="hwpIntroList">
            <li><strong className="titlesSeptember">9.5 (out of 10):</strong> An enjoyable days walking and climbing  in a beautiful location with some spectacular views.
            Mirehouse itself is also very interesting and the Lakeside walk takes you down by Bassenthwaite lake.</li>
            </ul>
            </div>    {/* Closing tag ComponentWalkDetails Class*/ }    
            </div>      
            <br />
           
            <div className="hwpDailyNarrative">
            
           <br />
           <br />
           Today we walked up to Dodd summit through Dodd Wood, Bassenthwaite and afterwards into Mirehouse Gardens to walk the Lakeside walk..
           <br />
           <br />
           
            Join us on our day out to Dodd Summit, Wood and Mirehouse by clicking on the album below and following our narrative by clicking on the added comments.          
           
            <br />
           <br />

          <div className="slideshowHostPhotoSeptember">
          <fig>
            <Link to="https://photos.app.goo.gl/vxKMk4pgjxCRD1eo8" target="_blank">
            <img className="slideshowentrySeptember" src={DoddSummitTitled} alt="" />
            </Link>
          </fig>
           </div>  {/* Closing div SlideshowHostPhotoSeptember */}
           </div> {/* Closing tag datenewsDivSeptember */}
           </div> {/*Closing tag for hwpDailyNarrative div */}
           </div>
          
           
                     );
};