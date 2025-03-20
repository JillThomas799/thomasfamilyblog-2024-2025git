import React from "react";
import './pheasant.css';

export default function Pheasant() { 
    return (
        <div>
      <svg className="pheasantHeader" id="pheasantHeader" version="1.1" x="0" y="0" width="100%" height="100%" viewBox="0 0 100vw 100%">
      < g className="pheasantScene"  xmlns="http://www.w3.org/2000/svg">
      <defs>

     <linearGradient id="gradPheasantWall" x1="0%" y1="0%" x2="0%" y2="100%">
     <stop offset="0%" style={{ stopColor:"#F6E8B1", stopOpacity:1}} />
     <stop offset="80%" style={{ stopColor:"#BA8759", stopOpacity:1}} />
     </linearGradient>  

     <linearGradient id="gradGroundPheasant" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#d1dd93", stopOpacity:1}} />
              <stop offset="5%" style={{ stopColor: "#A3D468", stopOpacity:1}} />   
              <stop offset="20%" style={{ stopColor: "#78b665", stopOpacity:1}} /> 
              <stop offset="50%" style={{ stopColor: "#7ab48c", stopOpacity:1}} />              
          </linearGradient>   

    <linearGradient id="gradPheasantTailFeather2" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" style={{ stopColor:"#f3e2d6", stopOpacity:0.9}} />    
    <stop offset="1%" style={{ stopColor:"black", stopOpacity:1}} />
    <stop offset="20%" style={{ stopColor:"#f3e2d6", stopOpacity:0.9}} />
    <stop offset="21%" style={{ stopColor:"black", stopOpacity:1}} />
    <stop offset="40%" style={{ stopColor:"#f3e2d6", stopOpacity:0.9}} />
    <stop offset="41%" style={{ stopColor:"black", stopOpacity:1}} />
    <stop offset="60%" style={{ stopColor:"#f3e2d6", stopOpacity:0.9}} />
    <stop offset="61%" style={{ stopColor:"black", stopOpacity:1}} />
    <stop offset="80%" style={{ stopColor:"#f3e2d6", stopOpacity:0.9}} />
    <stop offset="81%" style={{ stopColor:"black", stopOpacity:1}} />
    <stop offset="95%" style={{ stopColor:"#f3e2d6", stopOpacity:0.9}} />
    <stop offset="100%" style={{ stopColor:"#7e4820", stopOpacity:1}} />
    </linearGradient>

    <linearGradient id="gradPheasantTailFeather1" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" style={{ stopColor:"#f3e2d6", stopOpacity:0.8}} />    
    <stop offset="15%" style={{ stopColor:"#C2B280", stopOpacity:0.8}} />
    <stop offset="55%" style={{ stopColor:"#7e4820", stopOpacity:1}} />
    <stop offset="100%" style={{ stopColor:"#633818", stopOpacity:0.8}} />
    </linearGradient>

  <filter id="blur1" x="0" y="0">    
    <feGaussianBlur in="SourceGraphic" stdDeviation="3.4" />
  </filter>
  <filter id="blur2" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" />
  </filter>
  <filter id="blur5" x="0" y="0">    
    <feGaussianBlur in="SourceGraphic" stdDeviation="2.0" />
  </filter>
  <filter id="blur4" x="0" y="0">    
    <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
  </filter>
  <filter id="blur5" x="0" y="0">    
    <feGaussianBlur in="SourceGraphic" stdDeviation="8.0" />
  </filter>

</defs>     
    <g className = "pheasantGardenSlope">
          <rect id="pheasantGardenSlope" x="0" y="0" width="100vw" height="68vh" fill="#82CEE5" filter="url(#blur5)" opacity="0.6"/>
    </g>

    {/* <g className = "pheasantWall">
    <rect id="pheasantWallTop" x="0" y="200" width="100vw" height="40px" fill="#E8E4C9" filter="url(#blur2)" stroke="black"/>
    <rect id="pheasantWall" x="0" y="240" width="100vw" height="380px" fill="url(#gradPheasantWall)" filter="url(#blur2)"/>
    </g>
       */}   
    
      <g className="groundPheasant">
          <rect id="groundPheasant" x="0" y="500px" width="100%" height="50vh" fill="url(#gradGroundPheasant)" filter="url(#blur5)" opacity="0.5"/>
        </g>
      
        <g className = "pheasant1" id="pheasant1">
          <g id="pheasantLegs">
           <g className = "pheasantLegsR">
             <path id = "pheasantLegsR" d = "M 740 470 L 740 505 L 749 505 L 749 470 " fill="#cbcbcb"></path>
           </g>
          <g className = "pheasantLegsL">
             <path id = "pheasantLegsL" d = "M 760 470 L 760 505 L 769 505 L 769 470 " fill="#cbcbcb"></path>
          </g>
      </g>
    <g className="pheasantBody" >  
      <path d = "M 640 410 Q 730 330 830 330 Q 835 340 880 345 Q 900 445 800 470 Q 730 490 640 460" fill="#633818" opacity="0.9"/>
      {/* <ellipse cx="300" cy="460" rx="70" ry="90" fill="#7e4820"  /> */}
      </g>
    <g className="pheasantCollar">
     < path d = "M 830 330  L 835 320 Q 860 340 885 345 L 880 355 Q 855 358 830 330" fill="#f5f5f5" />
    </g>
    <g className = "pheasantNeck">
      <path d = "M 835 320 L 860 275 Q 890 270 900 300 L 885 345 Q 855 342 835 320" fill = "#163832" opacity="0.8" />
    </g>
    <g className = "pheasantHeadBlack">
     <path d = "M 860 275 Q 880 245 922 280 C 900 310 885 330 860 275" fill="black"  opacity="0.8" />  
    </g>
    <g className = "pheasantHeadRed">
    <path d = "M 870 282 Q 900 260 918 283 L 900 286 Q 904 323 870 282 " fill="#780606" />
    </g>
    <g className="pheasantEyeOuter">
      <circle cx="896" cy="280" r="5" fill="#FFBF00" opacity="0.7"/>
    </g>
    <g className="pheasantEyeInner">
      <circle cx="896" cy="280" r="2" fill="black" opacity="0.8"/>
      </g>
    <g className="pheasantBeak">
      <path d = "M 915 277 Q 930 280 940 290 Q 930 283 910 293 Z 915 277 " fill="#F6E8B1" opacity = "0.9" stroke = "black" strokeOpacity="0.2" />
    </g>

    <g className = "pheasantFeather2">
    <path d = "M 840 365 Q 800 340 760 350 Q 650 430 800 430 Q 885 440 835 365 " fill="#FFFDD1" opacity="0.6" />
    </g>

    <g className="wingMarkers2" >
          <use xlinkHref="#wingMarkers" x={800} y={250} style={{transform:"translate(-20px, 10px)"}} />
          </g> 
    <g className="wingMarkers2" >
          <use xlinkHref="#wingMarkers" x={800} y={250} style={{transform:"translate(-20px, 10px)"}} />
          </g>
    <g className = "pheasantFeather1">
      <path d = "M 840 365 Q 820 355 780 395 Q 740 430 800 430 Q 885 440 835 365 " fill="#B87333" opacity="0.6" />
      <g id="wingMarkers">
      <ellipse id="ellipse1" cx= "780" cy="400" rx="3" ry="6" fill="black" opacity="0.8" />
      <ellipse id="ellipse2" cx= "790" cy="395" rx="3" ry="6" fill="black" opacity="0.8" />
      <ellipse id="ellipse3" cx= "800" cy="390" rx="3" ry="6" fill="black" opacity="0.8" />
      <ellipse id="ellipse4" cx= "810" cy="385" rx="3" ry="6" fill="black" opacity="0.8" />
      <ellipse id="ellipse5" cx= "820" cy="380" rx="3" ry="6" fill="black" opacity="0.8" />
      <ellipse id="ellipse6" cx= "830" cy="375" rx="3" ry="6" fill="black" opacity="0.8" />
      </g>

      <g className = "pheasantTail1">
        <path d = "M 640 410 Q 610 415 580 420 Q 575 425 450 430 Q 450 450 560 440 Q 600 460 640 460 Z   "  fill = "url(#gradPheasantTailFeather2)" opacity = "0.8" stroke = "#cbcbcb" strokeWidth = "1" strokeOpacity = "0.5"/ >
      </g>  

      <g className = "pheasantTail2">
        <path d = "M 640 410 Q 610 415 580 420 Q 575 425 450 430 Q 450 450 560 440 Q 600 460 640 460 Z   "  fill = "url(#gradPheasantTailFeather1)" opacity = "0.8" stroke = "#cbcbcb" strokeWidth = "1" strokeOpacity = "0.5"/ >
      </g>      

      <g className="wingMarkers2" >
          <use xlinkHref="#wingMarkers" style={{transform:"translate(10px, 5px)"}} />
          </g>
          <g className="wingMarkers3" >
          <use xlinkHref="#wingMarkers" style={{transform:"translate(17px, 15px)"}} />
          </g>
          <g className="wingMarkers4" >
          <use xlinkHref="#wingMarkers" style={{transform:"translate(17px, 25px)"}} />
          </g>
    </g>
        
    </g>

     </g>
      </svg>
      </div>
    );
};
