import React from "react";
import './deer.css';

export default function Deer() { 
    return (
        <div>
      <svg className="deerAnimation" version="1.1" x="0" y="0" width="100vw" height="60vh" viewBox="-80 -90 500 500">
      <g className="deer1"  xmlns="http://www.w3.org/2000/svg">  

<defs>
            <linearGradient id="gradBodyDeer" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style= {{ stopColor:"#5C4033", stopOpacity: 1}} />
                <stop offset="30%" style={{ stopColor:"#B87333", stopOpacity: 1}} />
                <stop offset="40%" style={{ stopColor:"#5C4033", stopOpacity: 1}} /> 
                <stop offset="90%" style={{ stopColor:"#B87333", stopOpacity: 1}} />
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
    <stop offset="100%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
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
  <filter id="blur4" x="0" y="0">    
    <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
  </filter>

  <linearGradient id="gradNoseDeer" x1="0%" y1="70%" x2="0%" y2="100%">
    <stop offset="0%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
    <stop offset="100%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} />
  </linearGradient>

</defs>

        <g className="deer1Legs">
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
        </g>;
        
        </g>
  </svg>
        </div>
    );
};





{/* <line id="deer1MouthNasal" x1="263.5" y1="287" x2="263.5" y2="291" stroke="#5c4033" strokeWidth="1.5" opacity="0.6" />
         <line id="deer1MouthRight" x1="257.5" y1="292" x2="263.5" y2="293" stroke="#5c4033" strokeWidth="1.5" opacity="0.7" />
         <line id="deer1MouthLeft" x1="263.5" y1="293" x2="269.5" y2="292" stroke="#5c4033" strokeWidth="1.5" opacity="0.7" />
         <rect id="deer1MouthTongue" x="260.4" y="291.5" width="9.5" height="11" rx="5" ry="5" fill="#F19E93" stroke="black" stroke-width="0.5"/> */}