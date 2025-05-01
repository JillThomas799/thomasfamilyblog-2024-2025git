import React from "react";
import { Link } from "react-router-dom";
import './May2025.css';
import Footprintanimation from 'components/footprintanimation';


export default function May2025() {

    return (
      <div> {/*General div for May2025 function export*/}
        <div className="may2025Background">{/*div for may2025Background */}
        
                       <button id="backbuttonMay2025">
                                <Link to="/" className="backbuttonLink" style={{color:"#FFD700"}}>Back</Link>
                              </button>
                              <div className="May2025Header" > May 2025 </div>
                             
                              <svg
        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="CdSLogo_1"
        x="0px" y="-100px" width="1541.89px" height="695.276px"  xmlSpace="preserve" >  
           
           <g id="outboundJourney">
            <g id="lineOutbound"><line x1="0" y1="400" x2="770" y2="-140" stroke="#FFD700" strokeWidth="55" /> </g>
            <g id="londonOutbound"><circle cx="30" cy="380" r="30" stroke="black" fill="navy" ></circle></g><text fill="white" fontSize="15" fontWeight="bold" font-family="Serif" fontStyle="italic" x="6" y="383">London</text> 
            <g id="parisOutbound"><circle cx="150" cy="295" r="30" stroke="black" fill="navy" ></circle></g><text fill="white" fontSize="15" fontWeight="bold" font-family="Serif" fontStyle="italic" x="134" y="295">Paris</text>             
            <g id="barcelonaOutbound"><circle cx="270" cy="210" r="30" stroke="black" fill="navy" ></circle></g><text fill="white" fontSize="15" fontWeight="bold" font-family="Serif" fontStyle="italic" x="238" y="210">Barcelona</text> 
            <g id="madridOutbound"><circle cx="390" cy="125" r="30" stroke="black" fill="navy" ></circle></g><text fill="white" fontSize="15" fontWeight="bold" font-family="Serif" fontStyle="italic" x="365" y="125">Madrid</text>
            <g id="léonOutbound"><circle cx="510" cy="40" r="30" stroke="black" fill="navy" ></circle></g><text fill="white" fontSize="15" fontWeight="bold" font-family="Serif" fontStyle="italic" x="495" y="40">Léon</text>  
            {/* <g id="outboundArrow"><path d="M 500 -100 L 650 -80 L 675 70 Z" fill="#FFD700" /></g> */}
            </g>

            <g id="returnJourney">
            <g id="lineOutbound"> <line x1="600" y1="-120" x2="1400" y2="400" stroke="#FFD700" strokeWidth="55" /> </g>    
            <g id="madridReturn"><circle cx="890" cy="70" r="30" stroke="black" fill="navy" ></circle></g><text fill="white" fontSize="15" fontWeight="bold" font-family="Serif" fontStyle="italic" x="867" y="70">Madrid</text> 
            <g id="barcelonaReturn"><circle cx="1010" cy="148" r="30" stroke="black" fill="navy" ></circle></g><text fill="white" fontSize="15" fontWeight="bold" font-family="Serif" fontStyle="italic" x="978" y="148">Barcelona</text>             
            <g id="parisReturn"><circle cx="1127" cy="224" r="30" stroke="black" fill="navy" ></circle></g><text fill="white" fontSize="15" fontWeight="bold" font-family="Serif" fontStyle="italic" x="1110" y="224">Paris</text> 
            <g id="londonReturn"><circle cx="1247" cy="300" r="30" stroke="black" fill="navy" ></circle></g><text fill="white" fontSize="15" fontWeight="bold" font-family="Serif" fontStyle="italic" x="1225" y="300">London</text>
            <g id="homeReturn"><circle cx="1370" cy="380" r="30" stroke="black" fill="navy" ></circle></g><text fill="white" fontSize="15" fontWeight="bold" font-family="Serif" fontStyle="italic" x="1350" y="380">Home</text>   
            <g id="returnArrow"><path d="M 1360 450 L 1440 430 L 1430 350 Z" fill="#FFD700" /></g>
            </g> 
            
            {/* <g id="santiagoCircle"><path d="M 500,-20 A 20,20 30 0 0 800,-20 " stroke="#FFA500" strokeWidth="1" fill="#FFD700" transform="translate(70,0)" /> </g>         */}
            {/* <g id="santiagoCircle"><circle cx="720" cy="145" r="150" stroke="#FFA500" strokeWidth="1" fill="#FFD700"></circle></g> */}
             </svg>
           
           {/* <Footprintanimation />  */}


    <div className="May2025Santiago" > Santiago de <br /> Compostela </div> 

    <div className="datenewsDivMay2025">
              <section className="dateMay2025">1st-31st May 2025</section>
              <br />
              <section className="newsMay2025">Welcome to our May 2025 blog and it is a super-exciting month this month as we are off to Spain! Elena and Harry are back home looking after Lennie, the house,
                and the garden, so thanks to them both. We will therefore be out of radar contact for some weeks until our return. We will, on our return be undertaking the challenging but enjoyable task
                of writing up our Camino blog so we wish everyone well until the end of May, whatever you may be doing.....  
                <br />
                <br />  
                For anyone who may be interested, this <Link to="/caminodesantiago" className="LinkMay2025"> link to our Camino de Santiago blog page  </Link>takes you to a little background information and history on the Camino de Santiago.
                <br />
                <br /> 
                The arrows in this May header highlight our stopovers on the journey to and from Spain. We will be travelling all the way by train and stopping overnight at the locations marked. We will be walking between Léon and Santiago de Compostela.
                All the colour schemes for this month and for the Camino de Santiago webpage are those traditionally recognized as representing the way-marking scheme for the Camino: yellow and blue (with a little red thrown in for good measure). 
              </section>    
            </div> {/* Closing div datenewsDivMay2025 */}

      </div>{/*Closure div for may2025Header */}
      
      </div> 

      );
      };