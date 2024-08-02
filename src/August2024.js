import React from 'react';
import { Link } from "react-router-dom";
import './August2024.css';
import Cyclistaugustheader from 'components/cyclistaugustheader';

export default function August2024() {
    return (

        <div>
           <div className="allcloudCyclist">
            <div className="cloudCyclist"></div>
            <div className="cloudCyclist"></div>
            <div className="cloudCyclist"></div>
            <div className="cloudCyclist"></div>
            <div className="cloudCyclist"></div>
            <div className="cloudCyclist"></div>
            <div className="cloudCyclist"></div>
            <div className="cloudCyclist"></div>
            <div className="cloudCyclist"></div>
          </div>   

        <div id="AugustHeader"> 
          <button id="backbuttonAugust">
            <Link to="/" className="backbuttonLink" style={{color:"black"}}>Back</Link>
          </button>
          <Cyclistaugustheader /> 
          </div> 
      </div>
    );
};
      
