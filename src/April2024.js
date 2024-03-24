import React from 'react';
import { Link } from "react-router-dom";
import './April2024.css';

export default function April2024() {
  return (
    <div >
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
            
            <g id="swaledaleSheep1upperhornleft"><path fill="#c4915e" stroke="#c4915e" strokeWidth="3" d="M 604 418 A 30,30 20 0,0 590 422" /></g>
            <g id="swaledaleSheep1lowerhornleft"><path fill="#c4915e" stroke="#c4915e" strokeWidth="2" d="M 590 422 A 30,40 0 0, 0 598 434" /></g>
            <g><path id="sheepearleft" d="M 604 420 q -39 -3 23 20 " fill="url(#GradSheepEar)" opacity="1.0" ></path></g> 
            <g id="swaledaleSheep1upperhornright"><path fill="#c4915e" stroke="#c4915e" strokeWidth="3" d="M 616 418 A 30,30 -20 0,0 631 422" /></g>
            <g id="swaledaleSheep1lowerhornright"><path fill="#c4915e" stroke="#c4915e" strokeWidth="2" d="M 631 425 A 30,40 0 0, 0 624 434" /></g>
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
            <g id="swaledaleSheep2upperhornleft"><path fill="#c4915e" stroke="#c4915e" strokeWidth="3" d="M 604 418 A 30,30 20 0,0 590 422" /></g>
            <g id="swaledaleSheep2lowerhornleft"><path fill="#c4915e" stroke="#c4915e" strokeWidth="2" d="M 590 422 A 30,40 0 0, 0 598 434" /></g>
            <g><path id="sheep2earleft" d="M 604 420 q -39 -3 23 20 " fill="url(#GradSheepEar)" opacity="1.0" ></path></g> 
            <g id="swaledaleSheep2upperhornright"><path fill="#c4915e" stroke="#c4915e" strokeWidth="3" d="M 616 418 A 30,30 -20 0,0 631 422" /></g>
            <g id="swaledaleSheep2lowerhornright"><path fill="#c4915e" stroke="#c4915e" strokeWidth="2" d="M 631 425 A 30,40 0 0, 0 624 434" /></g>
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
          </svg>

          <svg id="lamb1" width="100vw" height="83vh" filter="url(#blur4)">
            <g id="lambleg1leftfront" transform="rotate(10,390, 500)"><rect x="395" y="500" rx="6" ry="6" width="9" height="45" fill=" url(#GradLambLeg)" opacity="0.9"></rect></g>
            <g id="lambleg1rightfront"><rect x="400" y="500" rx="6" ry="6" width="9" height="45" fill=" url(#GradLambLeg)" opacity="0.9"></rect></g>
            <g id="lambleg1leftrear" transform="rotate(5,425, 500)"><rect x="425" y="500" rx="6" ry="6" width="9" height="43" fill=" url(#GradLambLeg)" opacity="0.9"></rect></g>
            <g id="lambleg1rightrear" transform="rotate(-10,430, 500)"><rect x="430" y="500" rx="6" ry="6" width="9" height="43" fill=" url(#GradLambLeg)" opacity="0.9"></rect> </g>

            <g id="lambbody1"><rect x="392" y="500" rx="10" ry="10" width="49" height="20" fill=" url(#GradLambBody)" opacity="1.0" /><text fill=" 	#880808" font-size="12" font-family="Serif" fontStyle="italic" x="409" y="512">55</text></g>
           
            <g id="lambtail1"><rect x="433" y="506" rx="3" ry="3" width="6" height="25" fill=" url(#GradLambTail)" opacity="0.9"></rect></g>
            
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

    </div> {/* Closing tag April2024header */} 

    </div> /* Closing tag for root div*/ 
  );
}