import React from 'react';
import { Link } from "react-router-dom";
import './April2024.css';
import ChocolateEasterEggs from "./imagesresized/ChocolateEasterEggs.jpg";
import CentralVillageSceneApril24 from "./imagesresized/CentralVillageSceneApril24.jpg";
import FarmDaffodilsApril24 from "./imagesresized/FarmDaffodilsApril24.jpg";
import DaffodilsVillageExitApril24 from "./imagesresized/DaffodilsVillageExitApril24.jpg";
import HarryTarnApril24 from "./imagesresized/HarryTarnApril24.jpg";
import DaffodilsVillageCatApril24 from "./imagesresized/DaffodilsVillageCatApril24.jpg";
import CatDaffodilsApril24 from "./imagesresized/CatDaffodilsApril24.jpg";
import EasterBunniesandEggsBowness from "./imagesresized/EasterBunniesandEggsBowness.jpg";
import HarryVillageCentreApril24 from "./imagesresized/HarryVillageCentreApril24.jpg";
import ApproachingBroughamHall from "./imagesresized/ApproachingBroughamHall.jpg";
import BroughamHall from "./imagesresized/BroughamHall.jpg";
import BroughamHallDoorKocker from "./imagesresized/BroughamHallDoorKnocker.jpg";
import CatWill1 from "./imagesresized/CatWill1_16032024.jpg";
import CatWill2 from "./imagesresized/CatWill2_16032024.jpg";
import CatWill3photo from "./imagesresized/CatWill3photo.jpg";
import CatWillCumbrianFelt from "./imagesresized/CatWillCumbrianFelt.jpg";
import CatWillTribute from "./imagesresized/CatWillTribute.jpg";
import CatWillPoem from "./imagesresized/CatWillPoem.jpg";
import CatWillPetShopNotice from "./imagesresized/CatWillPetShopNotice.jpg";
import CatWillPrint from "./imagesresized/CatWillPrint.jpg";
import BlossomSizerghApril2024 from "./imagesresized/BlossomSizerghApril2024.jpg";
import GardenSizerghApril2024 from "./imagesresized/GardenSizerghApril2024.jpg";
import HoleslackFarmSizergh from "./imagesresized/HoleslackFarmSizergh.jpg";
import ViewMorecambeBayApril2024 from "./imagesresized/ViewMorecambeBayApril2024.jpg";

export default function April2024() {
  return (
    <div>
      <div className="April2024header"> 
      <button id="backbuttonApril">
          <Link to="/" className="backbuttonLink">Back</Link>
        </button>

      <div id="April2024title">April 2024</div>
      
      <svg className="Mountains" version="1.1" x="0" y="20" width="100%" height="83vh" viewBox="0 0 -60 0" style={{overflow:"visible"}}>

        <defs>
          <linearGradient id="GradMountain" x1="100%" y1="70%" x2="0%" y2="140%" >
              <stop offset="15%" style={{ stopColor: "#001e00", stopOpacity: 1}} />
              <stop offset="15%" style={{ stopColor: "#7ab48c", stopOpacity: 1}} />
              <stop offset="30%" style={{ stopColor: "#A3D468", stopOpacity: 1}} /> 
              <stop offset="70%" style={{ stopColor: "#d1dd93", stopOpacity: 1}} />
          </linearGradient> 

          <linearGradient id="GradGround" x1="0%" y1="0%" x2="100%" y2="100%">
              {/* <stop offset="15%" style={{ stopColor: "#7ab48c", stopOpacity: 1}} /> */}
              <stop offset="5%" style={{ stopColor: "#d1dd93", stopOpacity: 1}} />
              <stop offset="70%" style={{ stopColor: "#A3D468", stopOpacity: 1}} />   
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

        <g className="ground">
          <rect id="ground" x="0" y="449" width="100vw" height="17vh" fill="url(#GradGround)" filter="url(#blur3)"/>
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

            <g id="lambbody1"><rect x="392" y="500" rx="10" ry="10" width="49" height="20" fill=" url(#GradLambBody)" opacity="1.0" /><text fill=" 	#880808" font-size="12" font-family="Serif" fontStyle="italic" x="409" y="512">55</text></g>
           
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

            <g id="lambbody2" transform="rotate(-15, 490, 492)"><rect x="490" y="492" rx="10" ry="10" width="46" height="20" fill=" url(#GradLambBody)" opacity="1.0" /><text fill=" 	#880808" font-size="12" font-family="Serif" fontStyle="italic" x="508" y="504">56</text></g>
           
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
          
          <div className="datenewsDiv">
            <section className="date">1st-30th April 2024</section>
            <br />
            <section className="news">Welcome to our April 2024 blog launched from our new site! We hope you like the site's new look and improved functionality. 
            Please note and bookmark the new web address which is displayed in your browser above.
            <br />
            <br />
            This month's theme is the local North Cumbrian Swaledale sheep in the area where we live and their very cute lambs who have been entertaining us, gambling around in the fields recently. 
            Swaledale sheep are a breed of sheep named after the Yorkshire valley of Swaledale in England. In this area of Northern Cumbria, 
            which is located in the Pennine fells of Cumbria, they are the main breed of sheep to be reared. They are especially suited to this area
            as they are very hardy, able-bodied, thick-coated and bold. More information about Swaledales can be found <Link Link to = "https://en.wikipedia.org/wiki/Swaledale_sheep" target="_blank" title="Please click here to discover more about Swaledale sheep"><strong>here</strong></Link>.
            <br />
            <br />
            For those people who may be interested, the April header design this month has been created from first-principals using Scalable Vector Graphics (SVG). Firstly, pictures were taken of the local Swaledale sheep and their lambs, then the mountains,
            sheep and lambs were carefully plotted and their colours and features matched as closely as possible. The new site uses React, a javascript library which allows a webpage to be described using small, reusable components. 
            <br />
            <br />
            Meanwhile, the Easter weekend has brought us some pleasanter weather. The daffodils are in bloom in the village and people are out and about, smiling, cheerful and chatty, catching up on local news after the windy and wet early Spring.
            The daffodils are always lovely and the grass the fresh green of early Spring. 
            </section>    
          </div> 

          <div className="blogPhotoDiv">
          <fig><section className = "blogPhoto" ><img src={ChocolateEasterEggs} alt="" /><figcaptionApril><strong>Easter Eggs at <Link to = "https://www.castle-chocolates.co.uk/" target = "_blank" title = "Click here to discover more about Castle Chocolates, Carlisle">Castle Chocolates</Link>, <br />Carlisle for Easter</strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={CentralVillageSceneApril24} alt="" /><figcaptionApril><strong>Good Friday...a lovely warm, sunny day in the <br />village centre with daffodils everywhere..</strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={FarmDaffodilsApril24} alt="" /><figcaptionApril><strong>...at the central village farm</strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={DaffodilsVillageExitApril24} alt="" /><figcaptionApril><strong>...on exiting the village</strong></figcaptionApril></section>
            </fig>
          </div>

          <div className="blogPhotoDiv">
            <fig><section className = "blogPhoto" ><img src={DaffodilsVillageCatApril24} alt="" /><figcaptionApril><strong>...and on entering the village</strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={CatDaffodilsApril24} alt="" /><figcaptionApril><strong>..where there is also one of the village cats, nicknamed 'bread cat' because it likes eating bread <br /> 
            (Ps. Lennie hates it - both the cat and bread!)</strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={HarryTarnApril24} alt="" /><figcaptionApril><strong>Harry enjoying the fine weather at the tarn</strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={HarryVillageCentreApril24} alt="" /><figcaptionApril><strong>..and the walk back into the center village</strong></figcaptionApril></section>
            </fig>  
          </div>

          <div className="blogPhotoDiv">
          <fig><section className = "blogPhoto" ><img src={EasterBunniesandEggsBowness} alt="" /><figcaptionApril><strong>Over Easter we have been for a number of long walks including at <Link to = "https://www.solwaycoastaonb.org.uk/2019/places-to-explore/historic-hamlets/bowness-on-solway/" target="_blank" title="Click here to discover more about Bowness-on-Solway">Bowness-on-Solway</Link><br /> on Easter Saturday where we found these <br /> Easter bunnies and eggs </strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={ApproachingBroughamHall} alt="" /><figcaptionApril><strong>And on Easter Monday in the countryside <br /> around <Link to = "https://www.broughamhall.co.uk/" target="_blank" title="Please click here to discover more about Brougham Hall">Brougham Hall</Link> (seen here),<br /> and <Link to = "https://www.english-heritage.org.uk/visit/places/brough-castle/" target="_blank" title="Click here to discover more about Brough Castle">Brough Castle</Link></strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={BroughamHall} alt="" /><figcaptionApril><strong><Link to = "https://www.broughamhall.co.uk/" target="_blank" title="Please click here to discover more about Brougham Hall">Brougham Hall</Link></strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={BroughamHallDoorKocker} alt="" /><figcaptionApril><strong><Link to = "https://www.broughamhall.co.uk/history/the-brougham-door-knocker/" target="_blank" title="Please click here to discover more about the door knocker at Brougham Hall">12th century style door knocker Brougham Hall</Link></strong>, <br /> quite an interesting story to this</figcaptionApril></section>
            </fig>
          </div>

          <div className="datenewsDiv">
            <section className="date">5th April 2024</section>
            <section className="news">Some sad news from Carlisle....</section>  
            <br />
            <section className="news">
            <br />
            <br />
            In our 16th March blog entry, we went out to the Greek restaurant in Carlisle for our Mother's Day meal and we enclosed a photo of the very popular and well-known cat, whom the 
            pet shop on Bank Street feeds and look after (see below for those people who missed the photos first time around). 
            <br />
            <br />
            We have since discovered and regret having to announce that he sadly died peacefully of old-age 10 days later on the 26th March, 2024, at the grand old cat-age of 16 years. His name was Will and he had adopted Nixon's pet shop 
            on Bank Street as his owners some years ago. He featured in a full article in the local paper which you can read by opening the link below and which 
            tells how he used to sleep in the cat baskets and curl up on the counter near the treats :
            <br />
            <br />
            <Link to ="https://www.newsandstar.co.uk/news/24213986.tributes-paid-beloved-carlisle-pet-shop-cat-will/" target="_blank" title="click on link
            to read all about Will">News and Star Article on Will, the Bank Street cat</Link>. 
            <br />
            <br />
            He was known by many of the local population and has received some lovely 
            epitaphs, including the poem below which says:
            <br />
            <br />
            <em>"
              When tomorrow 
              <br />
              starts
              <br />
              without me
              <br />
              Don't think we're
              <br />
              far apart
              <br />
              For every time you
              <br />
              think of me
              <br />
              I'm right here
              <br />
              inside your heart" </em>
            <br />
            <br />
            and the beautiful Cumbrian felt picture of Will (shown below) a local artist has created of him with the inscription:
            <br />
            <br />
            <em>
            Bank Street Cat William (Will) 2008 - 26th March 2024
            <br />
            By Tina Cumbrian Felts
            </em>

            <br />
            <br />
           
            </section>    
          </div> 

          <div className="blogPhotoDiv">
          <fig><section className = "blogPhoto" ><img src={CatWill1} alt="" /><figcaptionApril><strong>Will, 10 days before he died peacefully of old age</strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={CatWill2} alt="" /><figcaptionApril><strong>Will fighting bravely on, shortly before he died...</strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={CatWill3photo} alt="" /><figcaptionApril><strong>Will, a handsome cat in his younger days</strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={CatWillPetShopNotice} alt="" /><figcaptionApril><strong>Pet shop announcement of Will's death</strong></figcaptionApril></section>
            </fig>
          </div>

          <div className="blogPhotoDiv">
            <fig><section className = "blogPhoto" ><img src={CatWillPrint} alt="" /><figcaptionApril><strong>Print of Will created by local artist</strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={CatWillTribute} alt="" /><figcaptionApril><strong>Tribute to Cat Will</strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={CatWillPoem} alt="" /><figcaptionApril><strong>Poem written for Will (see above)</strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={CatWillCumbrianFelt} alt="" /><figcaptionApril><strong>Beautiful Cumbrian Felt picture and memoriam of Will, created by local artist</strong></figcaptionApril></section>
            </fig>  
          </div>

          <div className="datenewsDiv">
            <section className="date">6th April 2024</section> 
            <section className="news">Our first trip of the year to meet up with friends - <Link to = "https://www.nationaltrust.org.uk/visit/lake-district/sizergh" target="_blank" title="Click here to discover more about Sizergh Castle">Sizergh Castle and Walk</Link></section>  
            <br />
            <section className="news">There are signs that Spring is arriving at last with the arrival of the blossom on the trees and the daffodils. Also just as importantly, the arrival of our first outing to meet with friends this year. 
            <br />
            <br />
            An old favourite, Sizergh Castle in South Cumbria was selected as our venue, not least because it has a good café, <em>(we know, we know...it always seems to be about the café...but these things are important)</em>, and there are a range of walks with some spectacular views on offer. 
            <br />
            <br />
            It was great to meet up with our friends, one of whom Jill has known since she was 11 years old and was bridesmaid at our wedding, and to catch up on news. There were some rainy showers, so for the first time we also 
            looked around the interior of Sizergh Castle, which was worth seeing. It was very busy as it was still the Easter holidays. By after lunch the weather had brightened, though it remained quite stormy, so we 
            worked out a relatively tree-free route up to <Link to = "https://www.nationalchurchestrust.org/church/st-john-evangelist-helsington" target="_blank" title="Click here to discover more about St John the Evangelist Church, Hetherington">St John the Evangelist Church, Hetherington</Link>, from where
            there are fantastic, sweeping views across to Morecambe Bay, the Lyth Valley and the distant Lakeland Fells. 
            <br />
            <br />
            Sizergh Castle remains one of our favourite National Trust properties, probably because of its size (it is relatively small), and the fact there are a variety of mixed-level walks which can be undertaken. It is also quite accessible, not being far off the M6 Junction 36 exit. 
            It is quite a popular location for visitors, as can be seen from the <Link to = "https://www.tripadvisor.co.uk/Attraction_Review-g186326-d218255-Reviews-or10-Sizergh_Castle-Kendal_Lake_District_Cumbria_England.html" target="_blank">Trip Advisor Reviews</Link>. </section>
          
          </div> 

          <div className="blogPhotoDiv">
          <fig><section className = "blogPhoto" ><img src={BlossomSizerghApril2024} alt="" /><figcaptionApril><strong>Signs of Spring...<br />
          the blossom out in the gardens</strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={GardenSizerghApril2024} alt="" /><figcaptionApril><strong>...and the daffodils on the lawns</strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={HoleslackFarmSizergh} alt="" /><figcaptionApril><strong>It was quite stormy so we chose a <br /> (relatively) tree-free route. <br /> Up by Holeslack Farmhouse ....</strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={ViewMorecambeBayApril2024} alt="" /><figcaptionApril><strong>... and on up to St John the Evangelist church, <br /> from where there are fantastic views <br /> over the Lyth Valley, distant fells and Morecambe Bay</strong></figcaptionApril></section>
            </fig>
          </div>

          {/* <div className="blogPhotoDiv">
          <fig><section className = "blogPhoto" ><img src={} alt="" /><figcaptionApril><strong></strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={} alt="" /><figcaptionApril><strong></strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={} alt="" /><figcaptionApril><strong></strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={} alt="" /><figcaptionApril><strong></strong></figcaptionApril></section>
            </fig>
          </div> */}

          {/* <div className="blogPhotoDiv">
          <fig><section className = "blogPhoto" ><img src={} alt="" /><figcaptionApril><strong></strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={} alt="" /><figcaptionApril><strong></strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={} alt="" /><figcaptionApril><strong></strong></figcaptionApril></section>
            </fig>
            <fig><section className = "blogPhoto" ><img src={} alt="" /><figcaptionApril><strong></strong></figcaptionApril></section>
            </fig>
          </div> */}

    </div> {/* Closing tag April2024header */} 

    </div> /* Closing tag for root div*/ 
  );

  
}
    
   
    

