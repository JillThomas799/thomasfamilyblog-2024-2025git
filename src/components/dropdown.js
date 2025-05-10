import React from 'react';
import { Link } from 'react-router-dom';
import './dropdown.css';

export default function Dropdown(props) {
  return (
    <div>
      {props.isVisible ? (
      <div id="menu">
          <ul>
            {/* 
              * Take the routes from index.js, and use those as your paths in the
              * `to` argument. If you look in index.js, april2024 matches to an
              * april2024 route.
              * Add more routes here as needed. To make it cleaner, use a loop :)
            */}
            
            <li className="spacing"><Link to="/april2024" className="monthLink">April 2024 Blog</Link></li>
            <li className="spacing"><Link to="/may2024" className="monthLink">May 2024 Blog</Link></li>
            <li className="spacing"><Link to="/june2024" className="monthLink">June 2024 Blog</Link></li>
            <li className="spacing"><Link to="/july2024" className="monthLink">July 2024 Blog</Link></li>
            <li className="spacing"><Link to="/august2024" className="monthLink">August 2024 Blog</Link></li>
            <li className="spacing"><Link to="/september2024" className="monthLink">September 2024 Blog</Link></li>
            <li className="spacing"><Link to="/october2024" className="monthLink">October 2024 Blog</Link></li>
            <li className="spacing"><Link to="/november2024" className="monthLink">November 2024 Blog</Link></li>
            <li className="spacing"><Link to="/december2024" className="monthLink">December 2024 Blog</Link></li>
            <li className="spacing"><Link to="/january2025" className="monthLink">January 2025 Blog</Link></li>
            <li className="spacing"><Link to="/february2025" className="monthLink">February 2025 Blog</Link></li>
            <li className="spacing"><Link to="/march2025" className="monthLink">March 2025 Blog</Link></li>
            <li className="spacing"><Link to="/april2025" className="monthLink">April 2025 Blog</Link></li>
            {/* <li className="spacing"><Link to="/may2025" className="monthLink">May 2025 Blog</Link></li> */}
            <li className="spacing"><Link to="/hwp2024" className="monthLink">Hadrian's Wall Path 2024 Blog</Link></li>
            {/* <li className="spacing"><Link to="/caminodesantiago" className="monthLink">Camino de Santiago May 2025 Blog</Link></li> */}
          </ul> 
        </div>
      ) : null}
    </div>
  );
}
