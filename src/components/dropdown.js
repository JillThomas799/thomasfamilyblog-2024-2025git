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
            
            <Link to="/april2024" className="monthLink">April 2024 Blog</Link>
            <Link to="/may2024" className="monthLink">May 2024 Blog</Link>
            <Link to="/june2024" className="monthLink">June 2024 Blog</Link>
            <Link to="/july2024" className="monthLink">July 2024 Blog</Link>
            <Link to="/hwp2024" className="monthLink">Hadrian's Wall Path 2024 Blog</Link>
          </ul> 
        </div>
      ) : null}
    </div>
  );
}
