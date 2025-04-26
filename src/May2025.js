import React from "react";
import { Link } from "react-router-dom";
import './May2025.css';


export default function May2025() {

    return (
      <div>
        <div className="backgroundMay2025">
         <div className="May2025Header" > May 2025 </div>
                       <button id="backbuttonMay2025">
                                <Link to="/" className="backbuttonLinkMay2025" style={{color:"black"}}>Back</Link>
                              </button>
      
                              <div className="May2025Santiago" > Santiago de Compostela </div>
                              <svg
        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="CdSLogo_1"
        x="0px" y="0px" width="841.89px" height="595.276px" xmlSpace="preserve" >  
            <line x1="0" y1="400" x2="600" y2="-20" stroke="#FFD700" strokeWidth="55" /> 
            <g><circle cx="30" cy="380" r="35" stroke="black" fill="navy" ></circle></g><text fill="white" fontSize="15" fontWeight="bold" font-family="Serif" fontStyle="italic" x="6" y="383">London</text> 
            <g><circle cx="150" cy="295" r="35" stroke="black" fill="navy" ></circle></g><text fill="white" fontSize="15" fontWeight="bold" font-family="Serif" fontStyle="italic" x="134" y="295">Paris</text>             
            <g><circle cx="270" cy="210" r="35" stroke="black" fill="navy" ></circle></g><text fill="white" fontSize="15" fontWeight="bold" font-family="Serif" fontStyle="italic" x="238" y="210">Barcelona</text> 
            <g><circle cx="390" cy="125" r="35" stroke="black" fill="navy" ></circle></g><text fill="white" fontSize="15" fontWeight="bold" font-family="Serif" fontStyle="italic" x="365" y="125">Madrid</text>
            <g><circle cx="510" cy="40" r="35" stroke="black" fill="navy" ></circle></g><text fill="white" fontSize="15" fontWeight="bold" font-family="Serif" fontStyle="italic" x="495" y="40">Léon</text>  
                             </svg>
      </div>
      </div>

      );
      };