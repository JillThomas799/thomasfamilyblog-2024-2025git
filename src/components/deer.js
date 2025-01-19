import React from "react";
import './deer.css';

export default function Deer() { 
    return (
        <div>
      <svg className="deerAnimation" version="1.1" x="0" y="0" width="100%" height="100%" viewBox="0 0 100vw 100%">
      <g className="deer1"  xmlns="http://www.w3.org/2000/svg">  

<defs>
            <linearGradient id="gradBodyDeer" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style= {{ stopColor:"#A48D6A", stopOpacity: 1}} />
                <stop offset="30%" style={{ stopColor:"#C2B280", stopOpacity: 1}} />
                <stop offset="40%" style={{ stopColor:"#A48D6A", stopOpacity: 1}} /> 
                <stop offset="90%" style={{ stopColor:"#C2B280", stopOpacity: 1}} />
                <stop offset="100%" style={{ stopColor:"#C2B280", stopOpacity:1}} /> 
        </linearGradient>

        <linearGradient id="gradLegsDeer" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
            <stop offset="30%" style={{ stopColor:"#B87333", stopOpacity:1}} />
            <stop offset="50%" style={{ stopColor:"#5C4033", stopOpacity:1}} /> 
            <stop offset="60%" style={{ stopColor:"#B87333", stopOpacity:1}} />
            <stop offset="70%" style={{ stopColor:"#5C4033", stopOpacity:1}} /> 
            <stop offset="100%" style={{ stopColor:"white", stopOpacity:1}} /> 
    </linearGradient>

    <linearGradient id="gradHeadDeer" x1="10%" y1="0%" x2="30%" y2="100%">
        <stop offset="0%" style={{ stopColor:"black", stopOpacity:1}} />
        <stop offset="40%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
        <stop offset="50%" style={{ stopColor:"#5C4033", stopOpacity:1}} /> 
        <stop offset="60%" style={{ stopColor:"#B87333", stopOpacity:1}} />
        <stop offset="100%" style={{ stopColor:"white", stopOpacity:1}} /> 
</linearGradient>

<radialGradient id="gradEarsDeer" cx="50%" cy="60%" r="50%" fx="50%" fy="80%">
    <stop offset="0%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} />  
    <stop offset="100%" style={{ stopColor:"#aea073", stopOpacity:1}} />
  </radialGradient>

  <filter id="blur1" x="0" y="0">    
    <feGaussianBlur in="SourceGraphic" stdDeviation="3.4" />
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

  <linearGradient id="gradNoseDeer" x1="0%" y1="70%" x2="0%" y2="100%">
    <stop offset="0%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
    <stop offset="100%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} />
  </linearGradient>

</defs>

        {/* <g className="deer1Legs">
        <rect id="deer1LegLeft" x="240" y="270" width="65" height="15" rx="5" ry="5" fill="url(#gradLegsDeer)"/>
        <rect id="deer1LegRight" x="240" y="290" width="75" height="15" rx="5" ry="5" fill="url(#gradLegsDeer)"/> 
        </g>
       
        <ellipse id="deer1Tail" cx="190" cy="299" rx="50" ry="25" fill="url(#gradBodyDeer)" stroke="#5c4033" stokeWidth="1" transform="rotate(12,187,299)"/>
        <ellipse id="deer1Body" cx="200" cy="280" rx="60" ry="30" fill="url(#gradBodyDeer)" stroke="#5c4033" strokeWidth="1" />
        
        <g className="deerHeadTotal">
                <ellipse id="deer1Head" cx="260" cy="275" rx="25" ry="23" fill="url(#gradHeadDeer)" stroke="none" transform="rotate(0,30,0)"/>
        
        <ellipse id="deer1EyeLeft"cx="275" cy="276" rx="5" ry="3" fill="black"  strokeWidth="1.5" opacity="0.8" transform="rotate(-35deg)"/>
        <ellipse id="deer1EyeRight" cx="254" cy="276" rx="5" ry="3" fill="black"  strokeWidth="1.5" opacity="0.8" transform="rotate(-35deg)"/>

        <line id="facialLine1Deer1" x1="256" y1="255" x2="261" y2="276" stroke="#5c4033" strokeWidth="2" stroke-linecap="round" opacity="1" />
        <line id="facialLine2Deer1" x1="262" y1="255" x2="264" y2="276" stroke="#5c4033" strokeWidth="3" stroke-linecap="round" opacity="1" />
        <line id="facialLine3Deer1" x1="266" y1="255" x2="267" y2="276" stroke="#5c4033" strokeWidth="2" stroke-linecap="round" opacity="1" />
               
        <polygon id="earLeftDeer1" points="264,265 276,248 282,265" style={{ stroke: "#5C4033", strokeWidth: "1.5" }}
        transform='rotate(30,20,40);"' fill="url(#gradEars)" opacity="0.9" />
        <polygon id="earRight" points="238,265 250,248 256,265" style={{ stroke: "#5C4033", strokeWidth: "1.5" }}
        transform='rotate(30,20,40);"' fill="url(#gradEars)" opacity="0.9" />
    
         <line id="deer1NoseRight" x1="258" y1="276" x2="259" y2="285" stroke="#5c4033" strokeWidth="1.5" opacity="0.6" fill="url(#gradNoseDeer)"/>
         <line id="deer1NoseLeft" x1="269" y1="276" x2="268" y2="285" stroke="#5c4033" strokeWidth="1.5" opacity="0.6" fill="url(#gradNoseDeer)"/>

         <ellipse id="deer1nostrilRight" cx="262" cy="285" rx="1.3" ry="0.8" fill="#5C4033" opacity="0.5" />
         <ellipse id="deer1nostrilLeft" cx="265.5" cy="285" rx="1.3" ry="0.8" fill="#5C4033" opacity="0.5" />
        </g>; */}
        
        

        <g className="deer">

        <g className="deerBody">
             <rect x="10"  y="500" width="120" height="40" rx="10" ry="10" fill="#C2B280" opacity="1.0" filter="url(#blur2)" /> This is the deer body
             <ellipse cx="13" cy="515" rx="5" ry="10" fill="#ECD0B8" filter="url(#blur2)" /> This is the white deer tail
          </g>

          
        <g className="deerNeck">
        <rect id="deerNeck" x="102"  y="470" width="30" height="42.82" rx="15" ry="15" transform="translate(90,-10) rotate(10)" fill="#C2B280" opacity="1.0" filter="url(#blur2)" /> This is the deer neck.
        <ellipse id="deerFace" cx="120" cy="492" rx="12" ry="15" fill="#aea073" filter="url(#blur2)" />
        </g>

        <g className="deerHead">
        <g id="deerEyes">
          <ellipse id="deerEyeRight" cx="114" cy="487" rx="3" ry="2" fill="#36454F" opacity="0.9" style={{transform:"rotate(20deg,114,490)"}}></ellipse>
          <ellipse id="deerEyeLeft" cx="128" cy="487" rx="3" ry="2" fill="#36454F" opacity="0.9" style={{transform:"rotate(-20deg,128,490)"}}></ellipse>
        </g> 
        
        <g id="deerEars">
            <path id="deerEarRight" d="M 105 477 C 100 457 105 457 112 463 T 117 474 105 474" fill="url(#gradEarsDeer)" opacity="1.0" ></path>
            <path id="deerEarLeft" d="M 133 480 C 128 450 150 460 143 474 T 141 474 133 482" fill="url(#gradEarsDeer)" opacity="1.0" transform="translate(82, -15) rotate(10)" ></path></g>
        </g>

        <g id="deerMuzzle">
            <ellipse id="deerMuzzle" cx="120" cy="495" rx="4.5" ry="6"fill="#36454F" opacity="0.9" filter="url(#blur2)" />
        </g>
        </g> Closing tag for deerHead

          
          
          </g> Closing tag for deer

          {/* <circle cx="60" cy="500" r="15" fill="blue" >
          <animate
      attributeName="cx"
      from="10"
      to="500"
      dur="5s"
      repeatCount="indefinite" />
      </circle> */}

      {/* <animateTransform
      attributeName="transform"
      begin="0s"
      dur="20s"
      type="rotate"
      from="0 60 60"
      to="360 100 60"
      repeatCount="indefinite" /> */}

{/* <animateMotion path="M 0 0 H 250 Z" dur="5s" repeatCount="indefinite" /> */}

{/* <animateMotion
      path="M 250,80 H 50 Q 30,80 30,50 Q 30,20 50,20 H 250 Q 280,20,280,50 Q 280,80,250,80Z"
      dur="3s"
      repeatCount="indefinite"
      rotate="auto" /> */}
                 
  </svg>
        </div>
    );
};


