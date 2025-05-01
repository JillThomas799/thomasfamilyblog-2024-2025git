import React from 'react';
import { Link } from "react-router-dom";
import './April2025.css';
import Daffodil from 'components/daffodil';
import ArchieTitled03042025 from './imagesresized/ArchieTitled03042025.jpg';
import Derwentwater06042025Titled from './imagesresized/Derwentwater06042025Titled.jpg';
import CdSTrainTitled07042025 from './imagesresized/CdSTrainTitled07042025.jpg';
import HighCupNickTitled from './imagesresized/HighCupNickTitled.jpg';
import CdSWk11Walk1Titled from './imagesresized/CdSWk11Walk1Titled.jpg';
import EasterSun2025 from './imagesresized/EasterSun2025.jpg';
import Gorse042025 from './imagesresized/Gorse042025.jpg';
import CherryBlossom042025 from './imagesresized/CherryBlossom042025.jpg';
import LennieonGuard from './imagesresized/LennieonGuard.jpg';
import LennieArmchair from './imagesresized/LennieArmchair.jpg';
import Sunset042025 from './imagesresized/Sunset042025.jpg';
import HighPikeLowPike24052025Titled from './imagesresized/HighPikeLowPike24052025Titled.jpg';

export default function April2025() {
    return (
      <div> {/*General div for April2025 function export*/}
        <div className="April2025header"> {/*div for April2025header */}
        <button id="backbuttonApril">
            <Link to="/" className="backbuttonLink">Back</Link>
          </button>
  
        <div id="April2025title">April 2025</div>
        
        <svg className="Mountains" version="1.1" x="0" y="20" width="100%" height="83vh" viewBox="0 0 -60 0" style={{overflow:"visible"}}>
  
          <defs>
            <linearGradient id="GradMountain" x1="100%" y1="70%" x2="0%" y2="140%" >
                <stop offset="15%" style={{ stopColor: "#001e00", stopOpacity: 1}} />
                <stop offset="15%" style={{ stopColor: "#7ab48c", stopOpacity: 1}} />
                <stop offset="30%" style={{ stopColor: "#A3D468", stopOpacity: 1}} /> 
                <stop offset="70%" style={{ stopColor: "#d1dd93", stopOpacity: 1}} />
            </linearGradient> 
  
            <linearGradient id="GradGroundApril2025" x1="0%" y1="0%" x2="0%" y2="100%">
                {/* <stop offset="15%" style={{ stopColor: "#7ab48c", stopOpacity: 1}} /> */}
                <stop offset="5%" style={{ stopColor: "#d1dd93", stopOpacity: 1}} />
                <stop offset="10%" style={{ stopColor: "#A3D468", stopOpacity: 1}} />
                <stop offset="10%" style={{ stopColor: "#8bb285", stopOpacity: 1}} />   
            </linearGradient> 
  
            <radialGradient id="GradAprilSun" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: "#fff593", stopOpacity: "1"}} > </stop>
                      <stop offset="100%" style={{stopColor: "#F6F0A3", stopOpacity: "0.7"}} ></stop>
                      </radialGradient>
  
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
  
            <filter id="blur1" x="0" y="0">
                  
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2.7" />
                </filter>
                <filter id="blur2" x="0" y="0">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
                </filter>
                <filter id="blur3" x="0" y="0">
                  
                  <feGaussianBlur in="SourceGraphic" stdDeviation="6.7" />
                </filter>
                <filter id="blur4" x="0" y="0">
                  
                  <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
                </filter>
          </defs>
  
          <g className="mountainBackground">
            <polygon id="mountainBackground" points="0, 100, 0, 550, 1800, 550" 
            fill="url(#GradMountain)" opacity="1.0" filter="url(#blur1)"></polygon>
          </g>
          <g className="mountainMiddle">
            <polygon id="mountainMiddle" points=" -20, 20, -40, 550, 1300, 550" 
            fill="url(#GradMountain)" opacity="1.0" filter="url(#blur1)"></polygon>
          </g>
          <g className="mountainForeground">
            <polygon id="mountainForeground" points="-40, -30, -40, 550, 900, 550"
           fill="url(#GradMountain)" opacity="1.0" filter="url(#blur1)" >
            </polygon>
          </g>
  
          <g className="groundApril2025">
            <rect id="groundApril2025" x="0" y="449" width="100vw" height="17vh" fill="url(#GradGroundApril2025)" filter="url(#blur3)"/>
          </g>
   
          <circle radialGradient id="gradSpringSun" cx="180" cy="20" r="50" fill="url(#GradAprilSun)" filter="url(#blur2)">          
                    </circle>
  
         
  
            <svg id="sheep3" >
            <use xlinkHref="#swaledaleSheep1" x={600} y={200} style={{transform:"scale(30%)"}}></use>
            </svg>
            
            <svg id="sheep4" style={{transform:"scale(30%)"}} >
            <use xlinkHref="#swaledaleSheep1" x={800} y={250} style={{transform:"scale(50%)"}} />
            </svg>
  
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
  
            <svg id="lamb1" width="100vw" height="83vh" filter="url(#blur4)">
              <g id="lambleg1leftfront" transform="rotate(10,390, 500)"><rect x="395" y="500" rx="6" ry="6" width="9" height="45" fill=" url(#GradLambLeg)" opacity="0.9"></rect></g>
              <g id="lambleg1rightfront"><rect x="400" y="500" rx="6" ry="6" width="9" height="45" fill=" url(#GradLambLeg)" opacity="0.9"></rect></g>
              <g id="lambleg1leftrear" transform="rotate(5,425, 500)"><rect x="425" y="500" rx="6" ry="6" width="9" height="43" fill=" url(#GradLambLeg)" opacity="0.9"></rect></g>
              <g id="lambleg1rightrear" transform="rotate(-10,430, 500)"><rect x="430" y="500" rx="6" ry="6" width="9" height="43" fill=" url(#GradLambLeg)" opacity="0.9"></rect> </g>
  
              <g id="lambbody1"><rect x="392" y="500" rx="10" ry="10" width="49" height="20" fill=" url(#GradLambBody)" opacity="1.0" /><text fill=" 	#880808" fontSize="12" font-family="Serif" fontStyle="italic" x="409" y="512">55</text></g>
             
              <g id="lambtail1" transform="rotate(-30,530, 485)"><rect x="530" y="485" rx="3" ry="3" width="6" height="25" fill=" url(#GradLambTail)" opacity="0.9"></rect></g>
              
              <g id="lambhead1top"><path d ="M 387 497 A 2 2 30 1 1 408 499" fill="#f6f6da" stroke="#efefe3" strokeWidth="0.2"></path></g>
              <g id="lambhead1bottom"><path d= "M 387 494 A 10 15 0 1 0 408 497" fill="#f6f6da" stroke="#efefe3" strokeWidth="0.2"> </path></g>
              <g id="lamb1nose">
                <line id="lamb1verticalnose" x1="398" y1="500" x2="398" y2="505" stroke="black" strokeWidth="2"></line>
              </g>
              <g id="lamb1mouth"><path d="M 393 503 Q 398 508 403 503" fill="black" /></g>
              <g id="lamb1lefteye"><circle cx="391" cy="496" r="1.5" fill="black" opacity="0.7"></circle></g>
              <g id="lamb1righteye"><circle cx="404" cy="496" r="1.5" fill="black" opacity="0.7"></circle></g>
              <path id="lambearleft" d="M 387 490 q -20 0 2 10 " fill="url(#GradLambEar)" opacity="1.0" ></path>
              <path id="lambearright" d="M 407 490 q 20 0 2 10 " fill="url(#GradLambEar)" opacity="1.0" ></path>
              
            </svg>
  
            <svg id="lamb2" width="100vw" height="83vh" filter="url(#blur4)">
              <g id="lambleg2leftfront" transform="rotate(10,495, 492)"><rect x="495" y="492" rx="6" ry="6" width="9" height="43" fill=" url(#GradLambLeg)" opacity="0.9"></rect></g>
              <g id="lambleg2rightfront"><rect x="500" y="492" rx="6" ry="6" width="9" height="43" fill=" url(#GradLambLeg)" opacity="0.9"></rect></g>
              <g id="lambleg2leftrear" transform="rotate(5,522, 482)"><rect x="522" y="482" rx="6" ry="6" width="9" height="43" fill=" url(#GradLambLeg)" opacity="0.9"></rect></g>
              <g id="lambleg2rightrear" transform="rotate(-10,525, 482)"><rect x="525" y="482" rx="6" ry="6" width="9" height="43" fill=" url(#GradLambLeg)" opacity="0.9"></rect> </g>
  
              <g id="lambbody2" transform="rotate(-15, 490, 492)"><rect x="490" y="492" rx="10" ry="10" width="46" height="20" fill=" url(#GradLambBody)" opacity="1.0" /><text fill=" 	#880808" fontSize="12" font-family="Serif" fontStyle="italic" x="508" y="504">56</text></g>
             
              <g id="lambtail2"><rect x="433" y="506" rx="3" ry="3" width="6" height="25" fill=" url(#GradLambTail)" opacity="0.9"></rect></g>
              
              <g id="lambhead2top"><path d ="M 490 482 A 2 2 30 0 1 511 482" fill="#f6f6da" stroke="#efefe3" strokeWidth="0.2"></path></g>
              <g id="lambhead2bottom"><path d= "M 490 482 A 5 6 0 1 0 511 482" fill="#f6f6da" stroke="#efefe3" strokeWidth="0.2"> </path></g>
              <g id="relocateFacialFeaturesLamb2" style={{transform:"translate(102px, -12px)"}}>
              <g id="lamb1nose">
                <line id="lamb2verticalnose" x1="398" y1="500" x2="398" y2="505" stroke="black" strokeWidth="2"></line>
              </g>
              <g id="lamb2mouth"><path d="M 393 503 Q 398 508 403 503" fill="black" /></g>
              <g id="lamb2lefteye"><circle cx="391" cy="496" r="1.5" fill="black" opacity="0.7"></circle></g>
              <g id="lamb2righteye"><circle cx="404" cy="496" r="1.5" fill="black" opacity="0.7"></circle></g>
              </g>
              <path id="lamb2earleft" d="M 494 470 q -20 0 2 10 " fill="url(#GradLambEar)" opacity="1.0" ></path>
              <path id="lamb2earright" d="M 507 470 q 20 0 2 10 " fill="url(#GradLambEar)" opacity="1.0" ></path>
              
            </svg>
  
            <svg id="sheep5" style={{transform:"scale(60%)"}} >
            <use xlinkHref="#swaledaleSheep2" x={1500} y={350} style={{transform:"scale(70%)"}} />
            </svg>
            
            </svg>{/*Closing tag for mountains class*/} 

            {/* < Daffodil /> */}
  
           
            
            <div className="datenewsDivApril2025">
              <section className="dateApril2025">1st-30th April 2025</section>
              <br />
              <section className="newsApril2025">Welcome to our April 2025 blog. It is great that Spring is emerging now and certainly so far, just a few days into April, we have seen plenty
                of sunshine and bright weather. Long may it continue. 
                <br />
                <br />
                The lambs and their mothers are in the fields and there are also plenty of calves being born, including in the farm at the back of the house.
                On the subject of lambs, the farmer at the back keeps lambs in the field occasionally if he wants to keep an eye on them and Bernard was greeted by a little lamb and its mother 
                peering through the fence at him the other day when he was gardening on the raised path at the rear of the property. We don't know who was the more surprised!
                <br />
                <br />
                We are in full Camino training this month and we will soon be launching our separate Camino de Santiago blog page, rather like we had for the 
                Hadrian's Wall Path last year.
                <br />
                <br />
              As it is lambing time again it is a pleasure to resurrect the lambs from last year's April header representing the lambs in the fields near ourselves, to take us into the spirit of Spring...
              <br />
              <br />              
              </section>    
            </div> {/* Closing div datenewsDivApril2025 */}
  
            <div div className="datenewsDivApril2025">
              <section className="dateAprilHeader2025">3rd April 2025</section>
              <section className="newsheaderApril2025">Day with friends in Coniston in the Lake District National Park</section>  
             <section className="newsApril2025">Today we drove over to Coniston to spend the day with our friends Pat and Dermot and their dog Archie in Coniston, in the Lake District National Park.
              Even better, the sun was shining brightly and the Lake District National Park was looking dramatic and beautiful.
              <br />
              <br />
              We had the opportunity to meet up in Pat and Dermot's holiday cottage there, which is available to rent on the <Link to="https://www.coppermines.co.uk/accommodation/coniston-view-coniston"
              target="_blank" className="LinkApril2025">Coppermines</Link> website, should anyone be interested. We were able to enjoy morning coffees and afternoon tea and cakes in the sunshine in the recently landscaped garden, just across the road from the property,
              from where there are spectacular views of Coniston Water and Village and <Link to = "https://www.brantwood.org.uk/" target="_blank" className="LinkApril2025">Brantwood</Link> , John Ruskin's former home.
              <br />
              <br />
              It was great to catch up on news and undertake a lovely walk up behind the house on a circuit taking in the lower slopes of Coniston Old Man, and with views of  
              <Link to="https://www.mountain-walks.co.uk/lake-district/the-coniston-7/" target="_blank" className="LinkApril2025"> The Coniston 7</Link> .
             </section>
             

             <div className="SlideshowHostPhotoApril2025">
            <div className="slideshowinstructionsApril2025"> <strong>Click on the image below < br /> to open the album of our visit to Coniston < br /> with Pat, Dermot and Archie</strong> 
                    <br /> <br />
            <Link to ="https://photos.app.goo.gl/YXA9HybyCAnpQCV36" target="_blank" className="LinkApril2025">
                    <img className="slideshowentryApril2025" src={ArchieTitled03042025} alt="" />
                    </Link>
                     </div>   {/*Closing div slideshowinstructionsApril2025*/} 
            </div>  {/* Closing div SlideshowHostPhotoApril2025 */} 
            </div> {/* Closing div datenewsDivApril2025 */}


            <div div className="datenewsDivApril2025">
              <section className="dateAprilHeader2025">6th April 2025</section>
              <section className="newsheaderApril2025">Camino de Santiago Training Week 10 Day 1. Derwentwater Circuit 11 miles, 4 hrs 40 </section>  
             <section className="newsApril2025">We are now on week 10 of the Camino de Santiago training and the schedule for this week is two walks of 60 mins
             . One long walk of 3.5 hrs and one long walk of 4.5 hrs walked on consecutive days (to build up stamina). For the 4.5 hour walk we decided on the
             Derwentwater Circuit starting from Keswick as we had not walked this route for quite some time. It was the weekend and the weather forecast was for a sunny, lovely day so Elena 
             and Harry decided to join us. It was an early start then to pick up Elena from her home, which was probably as well as Bernard was so busy listening to the Spanish CD to further improve his Spanish,
             that we missed the Penrith turn and ended up having to go to Shap,then come back again; a 20 mile detour in total!
             <br />
             <br />
            In spite of the delay, we were in Keswick by 9.37am, so were fortunately able to find parking for free on the Heads. Firstly, it was off towards Friar's Crag with good views towards Derwent Isle on our right, the now-named 
            little island just off shore where apparently some of the German community lived who came over as copper miners during the 16th century when they were invited by Elizabeth I to help her find the minerals urgently
            needed for building cannons and minting coins. The German workers were known for their skill and helped bring prosperity to the area but even so, 
            they decided to establish their own, relatively safe settlement a little part from the discord between the immigrant workers and the locals which was happening at that time. 
            The centre of the copper and lead mining industry was in Keswick and was under the control of Company of Mines Royal. 
            <br />
            <br />
            Then it was round into Strandshag Bay and on around the lake. This path has been vastly improved over the years although there was one tricky point where in the storms a number of trees had come 
            down and Bernard had (so he says) to launch into his 'Uncharted' Nathan Drake impression, hopping along the tree trunks! The path across the bottom of the lake at Manesty was entirely passable today
            but after heavy rain and especially in the Winter months the boardwalks can be submerged under water and are impassable. In that case, an alternative route bu the road and through Grange village is available.
            <br />
            <br />
            As the day progressed it became busier as it was a beautiful spring day and a Sunday, but it was a great walk enjoyed by all and turned out to be a good choice for the first of our long walks this week.
             </section>
             
             <div className="SlideshowHostPhotoApril2025">
            <div className="slideshowinstructionsApril2025"> <strong>Click on the image below < br /> to open the album of our Derwentwater circuit walk</strong> 
                    <br /> <br />
            <Link to ="https://photos.app.goo.gl/Y7QwRmWK4X6PTZ3Q8" target="_blank" className="LinkApril2025">
                    <img className="slideshowentryApril2025" src={Derwentwater06042025Titled} alt="" />
                    </Link>
                     </div>   {/*Closing div slideshowinstructionsApril2025*/} 
            </div> {/* Closing div SlideshowHostPhotoApril2025 */} 
            </div> {/* Closing div datenewsDivApril2025 */}
            
            < div className="datenewsDivApril2025">
              <section className="dateAprilHeader2025">7th April 2025</section>
              <section className="newsheaderApril2025">Camino de Santiago Training Week 10 Day 2. Walk in the locality 8 miles, 3 hours 40 </section>  
             <section className="newsApril2025">
              It was off again today for our 2nd long walk of week 10; this time the target was 3hrs 30 walking. To enable a slower start to the day, we decided to walk locally
              but, as a means of opening up new, undiscovered routes, to undertake a route we had not been aware of previously. In actual fact, the longer the routes we are undertaking, the more we are having to do this and in so doing 
              finding lots of interesting paths and ways we had not known existed! The OS app is great for this sort of thing as you can just search on your location and you will be able to 
              see the available local footpaths.
              The good news was that the good weather was holding out really well so there were set to be some lovely North Pennine views....
            <br />
            <br />
            Today's walk took us out up towards the local fell (with Bernard having to become Nathan Drake ... yet again ... to undertake a rather tricky circumnavigation of a fallen tree) before cutting down and across the river and up again into the North Pennine landscape (see album below.)
            The plan was to walk for about 1 hr 30 and then obtain a drink at the pub in the village. However, disaster! Well... not really, it just felt like that. We discovered that
            the very nice pub in the village is not open on Mondays or Tuesdays, so we had to have only a brief rest before continuing on our way....
            <br />
            <br />
            This lack of a pub stop was soon made up for though by Bernard being befriended by two very young lambs who seemed to think he was the local farmer (must be the grey hair, weary gait and frayed gardening cords!- these were Bernard's words about himself...)
            See the album below for the extremely cute photos of these lambs. Just as exciting was after this when we noticed that one of the sheep was just giving birth to a newborn lamb in a nearby field. 
            <br />
            <br />
            It was a lovely afternoon, brilliant sunshine and everywhere looking pretty. The wood anenomes were in flower.
            After 2hrs 45 we made it back as far as out local pub, which was open... So we stopped in for a well-deserved 
            drink, before commencing the final section back home.
        <br />
        <br />
            
             </section>

             <div className="SlideshowHostPhotoApril2025">
            <div className="slideshowinstructionsApril2025"> <strong>Click on the image below < br /> to open the album of our < br /> week 10 day 2 Camino de Santiago <br /> training walk</strong> 
                    <br /> <br />
            <Link to ="https://photos.app.goo.gl/Esya5J9GRB4t3paBA" target="_blank" className="LinkApril2025">
                    <img className="slideshowentryApril2025" src={CdSTrainTitled07042025} alt="" />
                    </Link>
                     </div>   {/*Closing div slideshowinstructionsApril2025*/} 
            </div>  {/* Closing div SlideshowHostPhotoApril2025 */} 
            </div> {/* Closing div datenewsDivApril2025 */}


             <div className="datenewsDivApril2025">
                        <section className="dateApril2025">10th April 2025, Thursday </section>
                        <section className="newsheaderApril2025"><strong> WALK UP HIGH CUP NICK FROM DUFTON: 8 miles, 4 hours</strong> <br /> </section>   
                        <section className="newsApril2025">
                         Today we decided to continue to make the most of the lovely weather and undertake a walk we have undertaken previously and long-wanted to repeat; that of High Cup Nick in the North Pennines.
                          The walk is 8 miles in total by the there and back route although there are other alternatives available should you wish. For example we could have extended the walk up to Murton Point
                          from the head of High Cup Nick, but chose not to on this occasion. The walk involves 490 metres or 1608 feet of ascent. The route can be found in OS Explorer Map OL19 Howgill Fells and Upper Eden Valley.
                          </section >
                       
                         <div className="newsApril2025">
                         <div className="componentWalkDetailsApril2025">     
                        <strong className="headTitlesApril2025">DETAILS OF THE WALK </strong>
                        <br />
                        <br />
                        <ul className="hwpIntroListApril2025">
                            <li className="titlesApril2025"><strong>PARKING:</strong> There is parking on the public car park in Dufton village. This can get full at busy times and this is a popular route, so it is worth arriving promptly.
                            There are also bathrooms here provided by the community which is a very well-run service, so they welcome any donations towards keeping this going.
                            </li>
                            <br />
                            <li className="titlesApril2025"><strong>PATHS:</strong> The route consists of clear, well-signposted footpaths along the Pennine Way. It becomes a little rockier as you ascend further up,
                            but nothing too challenging, so suitable hiking footwear is required.</li>
                            <br />
                            <li className="titlesApril2025"><strong>DISTANCE:</strong> 8 miles in total <strong>, Ascent:</strong> 490 metres, 1608 feet. </li>
                            <br />
                            <li className="titlesApril2025"><strong>REFRESHMENTS:</strong> The Stag Inn at Dufton currently opens on Saturdays and Sunday from 12 midday and during the week from 18.00 but
                            it is worth checking the up to date opening times when you will be visiting as these times may change. There were no refreshments available in the village on the 
                            day and time of our visit.</li>    
                            <br />
                            </ul> 
                       
                        <strong className="headTitlesApril2025">GOOD:</strong> 
                        <br />
                        <br />
                        <ul className="hwpIntroListApril2025">
                          <div className="listItemsAlign">
                            <li className="titlesApril2025"><strong>SPECTACULAR LANDSCAPE AND VIEWS:</strong> The geological interest of this glacially-cut valley makes it a site well-worth seeing.
                            From a personal point of view, we prefer it to other sites of geological interest such as Malham, not least because High Cup Nick, whilst busy,
                            is less busy than Malham. On the day we were walking we hardly saw a soul apart from a couple of farmers until high up on the ridge. </li>
                            <br />
                            <li className="titlesApril2025"><strong> BEAUTIFULLY QUIET: </strong> See the comment above. It was beautifully quiet with hardly anyone about until later 
                            on in the day when it became a bit busier. 
                            </li>
                            <br /> 
                            <li className="titlesApril2025"> <strong>HIGH-LEVEL WALK: </strong> This is what we would call a proper high-level walk with the views to match. Choose a day where the weather is good if you can...</li>
                            <br />
                              
                            </div>
                            <br />
                            </ul>
                            
                        <strong className="headTitlesApril2025">NOT SO GOOD:</strong> 
                        <br />
                        <br />
                        <ul className="hwpIntroListApril2025">
                        <li className="titlesApril2025"><strong> REFRESHMENTS:</strong> ...or lack thereof..... Make sure you take plenty of snacks! </li>
                        <br /> 
                        </ul>
                           
                        <strong className="headTitlesApril2025">HIKE RATING</strong> 
                        <br />
                        <br />
                        <ul className="hwpIntroListApril2025">
                        <li className="titlesApril2025"><strong>10 (OUT OF 10):</strong> A fantastic high level walk which amazing views. Well-worth undertaking. One of our favourite Pennine walks, not least because, unlikely many high Pennine walks, it is not too bad underfoot!</li>
                        <br />
                        </ul>
                        </div>    {/* Closing tag ComponentWalkDetails Class*/ }   
                        </div>
                        

                        <div className="SlideshowHostPhotoApril2025">
            <div className="slideshowinstructionsApril2025"> <strong>Click on the image below < br /> to open the album of our < br /> climb up High Cup Nick < br /> in the Cumbrian Pennines</strong> 
                    <br /> <br />
            <Link to ="https://photos.app.goo.gl/7gzVDPtJAwECawWt8" target="_blank" className="LinkApril2025">
                    <img className="slideshowentryApril2025" src={HighCupNickTitled} alt="" />
                    </Link>
                     </div>   {/*Closing div slideshowinstructionsApril2025*/} 
            </div>  {/* Closing div SlideshowHostPhotoApril2025 */} 
            </div> {/* Closing div datenewsDivApril2025 */}

            <div className="datenewsDivApril2025">
                        <section className="dateApril2025">12th April 2025, Saturday </section>
                        <section className="newsheaderApril2025"><strong> CAMINO DE SANTIAGO TRAINING WEEK 11 WALK 1: 13.5 miles, 5 hours. Ascent: 471 metres, 1545 feet</strong> <br /> </section>   
                        <section className="newsApril2025">
                         We are now in week 11 of training for the Camino de Santiago and this week the long walk increases in length to 5 hrs. At the pace we walk (approx 4.4km or 2.73 miles an hour),
                         this works out to 13.65 miles in distance or thereabouts which in actual fact seems about correct as the longest distance we  will walk in a day on 
                         the Camino de Santiago will be 14 miles....
                         <br />
                         <br />
                         The training advice we are following advises, as distances lengthen, starting to integrate regular lower-volume weeks for 
                         muscle healing and recovery. This is the reason that this week there is only one long distance walk rather than two....
                         <br />
                         <br />
                         Today's walk is a sandwiching together of sections of 3 walks we have undertaken previously, to create a varied and interesting 
                         walk of 13.5 miles, 5 hours.
                          </section >
                       
                         <div className="newsApril2025">
                         <div className="componentWalkDetailsApril2025">     
                        <strong className="headTitlesApril2025">DETAILS OF THE WALK: </strong>
                        <br />
                        <br />
                        <ul className="hwpIntroListApril2025">
                            <li className="titlesApril2025"><strong>PARKING:</strong> If arriving by car, there are a number of points where you can park your car and then walk: Middle Gelt Brudge (under the Viaduct), Castle Carrock village,
                            Jockey Shield to name just a few.</li>
                            <br />
                            <li className="titlesApril2025"><strong>PATHS:</strong> The route consists for the main part of clear footpaths. The route becomes rougher underfoot when ascending 
                            up to Talkin Fell. This section can become quite boggy during the Winter months but was fine today as it was following a dry spell. We did not ascend the final section
                            on to the summit of Talkin Fell but a number of people were doing so. We have visited the summit a number of times in the past and yes, you get some spectacular
                            views but equally, it can be <em>extremely</em> windy.
                            </li>
                            <br />
                            <li className="titlesApril2025"><strong>DISTANCE:</strong> 13.5 miles in total <strong>, Ascent:</strong> 471 metres, 1545 feet. </li>
                            <br />
                            <li className="titlesApril2025"><strong>REFRESHMENTS:</strong> The <Link to="https://www.the-dukeofcumberland.co.uk/" target="_blank" className="LinkApril2025">Duke of Cumberland pub </Link> in Castle Carrock.</li>    
                            <br />
                            </ul> 
                       
                        <strong className="headTitlesApril2025">GOOD:</strong> 
                        <br />
                        <br />
                        <ul className="hwpIntroListApril2025">
                          <div className="listItemsAlign">
                            <li className="titlesApril2025"><strong>INTEREST:</strong> This is an interesting and very varied walk. It commences by walking down towards and traversing through Gelt Woods
                            by the side of the river Gelt. </li>
                            <br />
                            <li className="titlesApril2025"> <strong>WRITTEN ROCK OF GELT: </strong> It is just on the other side of the river Gelt as it flows through Gelt Woods that the <Link to="https://historicengland.org.uk/listing/the-list/list-entry/1014582?section=official-list-entry"
                            target="_blank" className="LinkApril2025">Written Rock of Gelt </Link> lies in a quarry. The Written Rock of Gelt Roman inscriptions are probably the most important on the Hadrian’s Wall frontier. 
                            They provide insight into the organisation of the huge construction project of Hadrian’s Wall, as well as more human touches, such as the caricature of their 
                            commanding officer inscribed by one group of soldiers. The path down to the inscriptions was until the 1980s accessible to the general public, but at that time the path collapsed and the inscriptions are no longer accessible. In 2019, a team from Newcastle University'a archaeology department 
                            absailed down to the rock as described in this <Link to="https://www.theguardian.com/uk-news/2019/feb/27/written-rock-gelt-roman-graffiti-cumbria-quarry-wall-to-be-photogrammed" target="_blank" className="LinkApril2025"
                            >Guardian Article 2019</Link> and this <Link to="https://historicengland.org.uk/whats-new/news/roman-graffiti-to-be-recorded-hadrians-wall-quarry/" target="_blank" className="LinkApril2025">Historic England article on the Written Rock of Gelt</Link> , which also show some photos of the inscriptions.</li>
                            <br />
                            <li className="titlesApril2025"><strong> BEAUTIFULLY QUIET: </strong> It is never particularly busy in this area but today was exceptionally quiet, until we reached the climb up to Talkin Fell where it became a little busier. 
                            The orphan lambs in one of the fields tried to befriend Bernard again but he managed to sneak past them successfully this time. They were very cute....
                            </li>
                            <br /> 
                            <li className="titlesApril2025"><strong> REFRESHMENTS: </strong> Unlike last week, the pub was open <em>(Yeh!)</em>, so we had the opportunity to buy some drinks and chill out there a short while for a well-earned break....
                            </li>
                            <br /> 
                              
                            </div>
                            <br />
                            </ul>
                            
                        <strong className="headTitlesApril2025">NOT SO GOOD:</strong> 
                        <br />
                        <br />
                        <ul className="hwpIntroListApril2025">
                        <li className="titlesApril2025"><strong> LENGTH:</strong> This is quite a long walk so it is tiring. However, 
                        as we build up stamina over the forthcoming period, these 5 hour walks should become easier to undertake <em>(here's hoping)...</em> </li>
                        <br /> 
                        </ul>
                           
                        <strong className="headTitlesApril2025">HIKE RATING</strong> 
                        <br />
                        <br />
                        <ul className="hwpIntroListApril2025">
                        <li className="titlesApril2025"><strong>10 (OUT OF 10):</strong> Really interesting, varied, moderately challenging longer walk</li>
                        <br />
                        </ul>
                        </div>    {/* Closing tag ComponentWalkDetails Class*/ }   
                        </div>
                        

                        <div className="SlideshowHostPhotoApril2025">
            <div className="slideshowinstructionsApril2025"> <strong>Click on the image below < br /> to open the album of our < br /> Week 11 Camino de Santiago  <br />  training long walk  in Gelt Woods, <br /> Geltsdale and up Talkin Fell. < br /> </strong> 
                    <br /> <br />
            <Link to ="https://photos.app.goo.gl/FF95G96dkYdkttgJ8" target="_blank" className="LinkApril2025">
                    <img className="slideshowentryApril2025" src={CdSWk11Walk1Titled} alt="" />
                    </Link>
                     </div>   {/*Closing div slideshowinstructionsApril2025*/} 
            </div>  {/* Closing div SlideshowHostPhotoApril2025 */} 
            

            <div className="datenewsDivApril2025">
              <section className="dateApril2025">Saturday 19th and Sunday 20th April 2025</section>
              <section className="newsheaderApril2025"><strong> PEAK OF CAMINO DE SANTIAGO TRAINING: WEEK 12 of training, 2 long walks of at least 5 hours.</strong> <br /> </section>   
              <br />
              <section className="newsApril2025">
                These two days have been very exciting as we have now reached the peak of our Camino de Santiago training; 2 long walks of 5 hours.
                <br />
                <br />
                In the end we actually exceeded this target as on Saturday, 19th April we walked 24 km , 15 miles, a total of 6 hours walking!
                On Sunday 20th April we walked 21.5lm, 13.5 miles, 5hrs 5 minutes and climbed 446 metres or 1464 feet. Several people locally and on our walks have noticed we are walking a long way and 
                as a results we have got into some interesting conversations, discovering some other people's experiences of 
                long-distance walking....
                <br />
                <br />
                It has also been lovely to see all the plants and trees coming into bloom as we have been out walking, as can be seen from the photos below: the gorse and the the cherry blossom to name but a few....
              <br />
              <br />  
              We feel we are at a point now that we are prepared physically for our trip (or at least, as much as we will ever be) so it is just a case of keeping this up until we go....            
              </section>    
            </div> {/* Closing div datenewsDivApril2025 */}

            <div className="blogPhotoDivApril2025">
            <fig><section className = "blogPhotoApril2025" ><img src={Gorse042025} alt="" /><figcaption className='april2025figcaption'><strong>The gorse in full flower.... <br /> 
            </strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoApril2025" ><img src={CherryBlossom042025} alt="" /><figcaption className='april2025figcaption'><strong>The cherry blossom,<br /> looking lovely....</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoApril2025" ><img src={Sunset042025} alt="" /><figcaption className='april2025figcaption'><strong>The lovely weather has <br /> brought some gorgeous sunsets... <br /> 
            </strong></figcaption></section>
            </fig>  
            </div>

            <div className="blogPhotoDivApril2025">
            <fig><section className = "blogPhotoApril2025" ><img src={EasterSun2025} alt="" /><figcaption className='april2025figcaption'><strong>Finishing our 13.5 miles walk <br /> with our Easter Sunday meal.</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoApril2025" ><img src={LennieonGuard} alt="" /><figcaption className='april2025figcaption'>Lennie meanwhile has not <br /> been featured for a while. <br />
             He has been too busy, <br /> guarding his home...<strong></strong></figcaption></section>
            </fig> 
            <fig><section className = "blogPhotoApril2025" ><img src={LennieArmchair} alt="" /><figcaption className='april2025figcaption'><strong>...and generally stealing <br /> the best chairs in the house <br /> to sit on...</strong></figcaption></section>
            </fig>   
            
            </div>
            
            </div> {/* Closing div datenewsDivApril2025 */}


            < div className="datenewsDivApril2025">
              <section className="dateAprilHeader2025">24th April 2025</section>
              <section className="newsheaderApril2025">High Level Fell Walk: Low Pike and High Pike (Summit at 658 meters, 2159 feet) from Ambleside via High Sweden Bridge and Low Sweden Bridge; 7 miles, 3hrs 17mins.</section>  
             <section className="newsApril2025">
              Our main Camino de Santiago training programme is now complete,so we decided to work on some additional specific training to develop muscle strength and endurance before we set off on our journey. Hence we opted 
              for a high level hike taking in the 2 Wainwrights on the first section of the Fairfield Horseshoe: Low Pike and High Pike. This is considered to be a challenging route which should be avoided
              in poor weather. However, today it was predicted to be sunny with some cloud but a 95% chance of clear summits. 
              <br />
              <br />
              As this is a well-documented route we would suggest anyone interested in 
            walking it accesses a reliable route description and reads and takes careful note on the relevant advice on this route.   In addition we would advise avoiding the 10 foot 
            rocky drop at Sweden Crags by taking the alternative route.         
           
           
             </section>

             <div className="SlideshowHostPhotoApril2025">
            <div className="slideshowinstructionsApril2025"> <strong>Click on the image below < br /> to open the album of our < br /> High and Low Sweden Bridge, < br /> Low Pike and High Pike walk</strong> 
                    <br /> <br />
            <Link to ="https://photos.app.goo.gl/jL7RTDCkcnFyBdAs7" target="_blank" className="LinkApril2025">
                    <img className="slideshowentryApril2025" src={HighPikeLowPike24052025Titled} alt="" />
                    </Link>
                     </div>   {/*Closing div slideshowinstructionsApril2025*/} 
            </div>  {/* Closing div SlideshowHostPhotoApril2025 */} 
            </div> {/* Closing div datenewsDivApril2025 */}
 </div>
 </div>
 );
 }