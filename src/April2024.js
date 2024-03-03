import React from 'react';
import { Link } from "react-router-dom";
import './April2024.css';

export default function April2024() {
  return (
    <div>
      <div className="April2024header"> 
      <button id="backbuttonApril">
          <Link to="/" className="backbuttonLink">Back</Link>
        </button>

      <div id="April2024title">April 2024</div>
      
      <svg className="Mountains" version="1.1" x="0" y="20" width="100vw" height="83vh" viewBox="0 0 -60 0" style={{overflow:"visible"}}>

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
                    <stop offset="100%" style={{stopColor: "#e9e0d4", stopOpacity: "0.7"}} ></stop> 
                    </radialGradient>

          <filter id="blur1" x="0" y="0">
                
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.7" />
              </filter>
              <filter id="blur2" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
              </filter>
              <filter id="blur3" x="0" y="0">
                
                <feGaussianBlur in="SourceGraphic" stdDeviation="6.7" />
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

        <g>
          <rect id="ground" x="0" y="449" width="100vw" height="17vh" fill="url(#GradGround)" filter="url(#blur3)"/>
        </g>
 
        <circle radialGradient id="gradSpringSun" cx="180" cy="20" r="50" fill="url(#GradAprilSun)" filter="url(#blur2)">          
                  </circle>

       

        <svg id="sheep" width="100vw" height="83vh" >
          
          <g id="sheepLeg">
            <rect id="legRight" x="595" y="300" width="35" height="12" fill="url(#Gradsheepfur)" rx="5" ry="5" opacity="1.0" transform="rotate(100,354,299)"></rect>
            <rect id="legLeft" x="583" y="350" width="35" height="12" fill="url(#Gradsheepfur)" rx="5" ry="5" opacity="1.0" transform="rotate(82,350,299)"></rect>
          </g>

          <g id="sheepbody">
          <circle cx="290" cy="520" r="24" fill="url(#Gradsheepfur)" opacity="1.0"/>
          <circle cx="325" cy="520" r="24" fill="url(#Gradsheepfur)" opacity="1.0"/>
          <circle cx="320" cy="500" r="20" fill="url(#Gradsheepfur)" opacity="1.0"/>
          <circle cx="295" cy="500" r="24" fill="url(#Gradsheepfur)" opacity="1.0"/>
          <circle cx="320" cy="500" r="24" fill="url(#Gradsheepfur)" opacity="1.0"/>
          </g>

          <g id="sheepHead">
          {/* <ellipse cx="310" cy="490" rx="20" ry="25" fill="28282B" opacity="0.8" />  */}
          <path id="shapefacebottom" d="M 292 460 q 20 40 38 0" stroke="#28282B" strokeWidth="4" ></path>
          <path id="top" d="M 292 460 q 20 -30 38 0" stroke="#28282B" strokeWidth="4" ></path>
          <rect id="nose" x="303" y="455" width="14" height="12" rx="10" ry="10" fill="#fffceb" opacity="0.8" filter="url(#blur2)" ></rect>
          <path id="muzzlebottom" d="M 300 472 A 5.5 4 0 0 1 320 472  " fill="url(#Gradsheepfur)" opacity="0.8" filter="url(#blur2)"> </path>
          <path id="muzzletop" d="M 300 472 A 5.5 4 1 0 0 320 472  " fill="url(#Gradsheepfur)" opacity="0.8" filter="url(#blur2)"> </path>
          <path id="sheepearleft" d="M 295 448 q -40 15 -2 14 " fill="url(#Gradsheepfur)" opacity="1.0" ></path>
          <path id="sheepearright" d="M 324 448 q 40 15 3 14 " fill="url(#Gradsheepfur)" opacity="1.0" ></path>
          </g>
          
          <g id="sheepEye">
          <ellipse cx="300" cy="455" rx="7" ry="5" fill="url(#Gradsheepfur)" opacity="1.0"/>
          <ellipse cx="320" cy="455" rx="7" ry="5"  fill="url(#Gradsheepfur)" opacity="1.0" />
          <ellipse cx="302" cy="455" rx="5" ry="2" fill="black" />
          <ellipse cx="318" cy="455" rx="5" ry="2"fill="black" />
          {/* <ellipse cx="300" cy="454" rx="2" ry="1.0" fill="black" />
          <ellipse cx="320" cy="454" rx="2" ry="1.0" fill="black" /> */}
          </g>

          </svg>
          
          <svg id="sheep2" >
          <use xlinkHref="#sheep" x={1000} y={100} style={{transform:"scale(65%)"}}></use>
          </svg>

          <svg id="sheep3" >
          <use xlinkHref="#sheep" x={600} y={200} style={{transform:"scale(30%)"}}></use>
          </svg>
          
          <svg id="sheep4" style={{transform:"scale(30%)"}} >
          <use xlinkHref="#sheep" x={800} y={250} style={{transform:"scale(50%)"}} />
          </svg>
          
      
      </svg>      
    </div> {/* Closing tag April2024header */} 
    </div> /* Closing tag for root div*/ 
  );
}