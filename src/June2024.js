import React from 'react';
import { Link } from "react-router-dom";
import './June2024.css';
import June2024HeaderPhoto1 from "./imagesresized/June2024HeaderPhoto1.jpg";

export default function June2024() {
    return (
      <div>
        <div className="June2024header"> 
          <button id="backbutton">
            <Link to="/" className="backbuttonLink">Back</Link>
          </button>
        </div>
        <h1 style={{background:"#9bc4d4", borderRadius:"0"}}><img src= {June2024HeaderPhoto1} alt="" className="headerPhoto" /></h1>

        <div className="datenewsDiv">
            <section className="date">1st - 30th June 2024</section>
            <section className="newsheader">Welcome to our June 2024 blog</section> 
            <section className="news">Welcome to this, our June 2024 blog. We hope everyone is keeping well and happy in spite of the poor June weather so far.<br/><br/>
              The header photo this month was taken returning along the Old Military Road which runs along Hadrian's Wall in Northumberland and Cumbria, when
              we had been out in the car doing some route-planning for our Hadrian's Wall Expedition and it just about sums up what life is like up here. Everyone found the sign very amusing and, given this is usually a road which people tend to drive quite fast along,
              it was no mean achievement of the farmer's to get everyone sitting waiting quite patiently in their cars until all the cows had been successfully moved!<br/><br/>
              From this month we have set up a separate page narrating our 84 (or so) mile Hadrian's Wall Path expedition which we will be undertaking in day-long segments over the coming weeks and months
              We are hoping we will be able to provide tips and guidance to anyone else thinking of walking the path in this manner, as the challenges are a little different to when doing it as one block over 4-9 days.
            <br />
            <br />
            
            </section>
            </div>
        
        </div>
    );
}