import React from "react";
import './February2025.css';
import { Link } from "react-router-dom";
import Deer from 'components/deer';
import CatLennie from 'components/catlennie';



export default function February2025() {
    return (
        <div className="bodyFeb2025">
            <div className="February2025header" > February 2025
               <button id="backbuttonFebruary2025">
                        <Link to="/" className="backbuttonLink" >Back</Link>
                      </button> 
                </div>
              
        <div className="stageBorder"> 
        <div className="snowScene">            
       
            {/* <div className="curtain1"> </div> */}
            < Deer />
            <div className="curtain2"></div>
            {/* <div className="groundSnow"></div> */}
            </div> 
            
        </div>
        
     </div>
);
};
