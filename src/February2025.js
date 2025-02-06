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
            {/* <div className="curtain2"></div> */}
            <div className="groundSnow"></div>
            </div> 
            
        </div>
        <section className="dateFebruary" style={{marginTop:'0%'}}>February 1st - 28th 2025</section> 
                     <section className="newsheaderFebruary"> WELCOME TO OUR FEBRUARY BLOG</section> 
                    <section className="newsFebruary" style={{textAlign:"left"}}>
                   This month we are introducing as part of our header design some new animal friends who live near to us. These are the
                   3 deer who we see most days as we walk down to the lake. The design for the deer has been undertaken from first principles; 
                   analyzing photographic images and then using SVG to create a set of images which represent as closely as possible the deer 
                   whom we meet.  
                    <br /> 
                    <br /> 
                    </section>
     </div>
);
};
