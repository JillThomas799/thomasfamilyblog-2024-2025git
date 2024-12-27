import React from "react"
import './catlennie.css';

export default function CatLennie() {
    return (
            <div>
                <div>                    
<svg className="lennieIceHouseCat" version="1.1" x="0" y="0" width="100vw" height="75vh" viewBox="-80 -90 500 560">

           
            <g className="lennieCat" 
            xmlns="http://www.w3.org/2000/svg">  
            </g>
            <defs>
                        <linearGradient id="gradBody" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style= {{ stopColor:"#5C4033", stopOpacity: 1}} />
                            <stop offset="30%" style={{ stopColor:"#B87333", stopOpacity: 1}} />
                            <stop offset="40%" style={{ stopColor:"#5C4033", stopOpacity: 1}} /> 
                            <stop offset="90%" style={{ stopColor:"#B87333", stopOpacity: 1}} />
                            <stop offset="100%" style={{ stopColor:"#C2B280", stopOpacity:1}} /> 
                    </linearGradient>
                    <linearGradient id="gradLegs" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
                        <stop offset="30%" style={{ stopColor:"#B87333", stopOpacity:1}} />
                        <stop offset="50%" style={{ stopColor:"#5C4033", stopOpacity:1}} /> 
                        <stop offset="60%" style={{ stopColor:"#B87333", stopOpacity:1}} />
                        <stop offset="70%" style={{ stopColor:"#5C4033", stopOpacity:1}} /> 
                        <stop offset="100%" style={{ stopColor:"white", stopOpacity:1}} /> 
                </linearGradient>
                <linearGradient id="gradHead" x1="10%" y1="0%" x2="30%" y2="100%">
                    <stop offset="0%" style={{ stopColor:"black", stopOpacity:1}} />
                    <stop offset="40%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
                    <stop offset="50%" style={{ stopColor:"#5C4033", stopOpacity:1}} /> 
                    <stop offset="60%" style={{ stopColor:"#B87333", stopOpacity:1}} />
                    <stop offset="100%" style={{ stopColor:"white", stopOpacity:1}} /> 
            </linearGradient>
            <radialGradient id="gradEars" cx="50%" cy="60%" r="50%" fx="50%" fy="80%">
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
    
              <linearGradient id="gradNose" x1="0%" y1="70%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
                <stop offset="100%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} />
              </linearGradient>
            
            </defs>

 <g class="lennieLegs">
                    <rect id="lennieLegleft" x="240" y="270" width="65" height="15" rx="5" ry="5" fill="url(#gradLegs)"/>
                    <rect id="lennieLegRight" x="240" y="290" width="75" height="15" rx="5" ry="5" fill="url(#gradLegs)"/> 
                    </g>
                   
                    <ellipse id="catTail" cx="190" cy="299" rx="50" ry="25" fill="url(#gradBody)" stroke="#5c4033" stokeWidth="1" transform="rotate(12,187,299)"/>
                    <ellipse id="catBody" cx="200" cy="280" rx="60" ry="30" fill="url(#gradBody)" stroke="#5c4033" strokeWidth="1" />
                   
                    <g id="catHeadTotal">
                    
                    <ellipse id="catHead" cx="260" cy="275" rx="25" ry="23" fill="url(#gradHead)" stroke="none" transform="rotate(0,30,0)"/>
                    
                    <ellipse id="catEyeLeft"cx="275" cy="276" rx="5" ry="3" fill="black"  strokeWidth="1.5" opacity="0.8" transform="rotate(-35deg)"/>
                    <ellipse id="catEyeRight" cx="254" cy="276" rx="5" ry="3" fill="black"  strokeWidth="1.5" opacity="0.8" transform="rotate(-35deg)"/>
    
                    <line id="facialLine1" x1="256" y1="255" x2="261" y2="276" stroke="#5c4033" strokeWidth="2" stroke-linecap="round" opacity="1" />
                    <line id="facialLine2" x1="262" y1="255" x2="264" y2="276" stroke="#5c4033" strokeWidth="3" stroke-linecap="round" opacity="1" />
                    <line id="facialLine3" x1="266" y1="255" x2="267" y2="276" stroke="#5c4033" strokeWidth="2" stroke-linecap="round" opacity="1" />
                   
                    <line id="whiskerRight1" x1="254" y1="285" x2="214" y2="298" stroke="white" strokeWidth="0.5"/>
                    <line id="whiskerRight2" x1="252" y1="283" x2="212" y2="292" stroke="white" strokeWidth="0.5"/>
                    <line id="whiskerRight3" x1="254" y1="287" x2="212" y2="313" stroke="white" strokeWidth="0.5"/>
    
                    <line id="whiskerLeft1" x1="271" y1="285" x2="311" y2="298" stroke="white" strokeWidth="0.5"/>
                    <line id="whiskerLeft2" x1="272" y1="283" x2="312" y2="292" stroke="white" strokeWidth="0.5"/>
                    <line id="whiskerLeft3" x1="271" y1="287" x2="310" y2="313" stroke="white" strokeWidth="0.5"/>
    
                    
                    <polygon id="earLeft" points="264,265 276,248 282,265" style={{ stroke: "#5C4033", strokeWidth: "1.5" }}
                    transform='rotate(30,20,40);"' fill="url(#gradEars)" opacity="0.9" />
                    <polygon id="earRight" points="238,265 250,248 256,265" style={{ stroke: "#5C4033", strokeWidth: "1.5" }}
                    transform='rotate(30,20,40);"' fill="url(#gradEars)" opacity="0.9" />
   
                
                     <line id="noseRight" x1="258" y1="276" x2="259" y2="285" stroke="#5c4033" strokeWidth="1.5" opacity="0.6" fill="url(#gradNose)"/>
                     <line id="noseLeft" x1="269" y1="276" x2="268" y2="285" stroke="#5c4033" strokeWidth="1.5" opacity="0.6" fill="url(#gradNose)"/>
    
                     <ellipse id="nostrilRight" cx="262" cy="285" rx="1.3" ry="0.8" fill="#5C4033" opacity="0.5" />
                     <ellipse id="nostrilLeft" cx="265.5" cy="285" rx="1.3" ry="0.8" fill="#5C4033" opacity="0.5" />
                
                     <line id="mouthNasal" x1="263.5" y1="287" x2="263.5" y2="291" stroke="#5c4033" strokeWidth="1.5" opacity="0.6" />
                     <line id="mouthRight" x1="257.5" y1="292" x2="263.5" y2="293" stroke="#5c4033" strokeWidth="1.5" opacity="0.7" />
                     <line id="mouthLeft" x1="263.5" y1="293" x2="269.5" y2="292" stroke="#5c4033" strokeWidth="1.5" opacity="0.7" />
                     <rect id="mouthTongue" x="260.4" y="291.5" width="9.5" height="11" rx="5" ry="5" fill="#F19E93" stroke="black" stroke-width="0.5"/>
                    </g>;

                   <g>
                    <g id="iceHousetop"><path d ="M 30 350 A 2 2 0 1 1 380 350" fill="url(#gradIceHouse)" filter="url(#blur1)" stroke="#efefe3" strokeWidth="0.2" opacity="1"></path></g>
                    
<defs>
                        <radialGradient id="gradIceHouse" x1="0%" y1="100%" x2="100%" y2="0%" opacity="1">
                        <stop offset="0%" style={{stopColor: "#cdced5", stopOpacity: "0"}} > </stop>
                        <stop offset="60%" style={{stopColor: "#FFFAFA", stopOpacity: "0.7"}} > </stop>  
                        <stop offset="80%" style={{stopColor: "white", stopOpacity: "1"}} ></stop> 
                        </radialGradient></defs></g>
    
              </svg>

            </div>
            </div>
    );
};

          