import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/april2024">April 2024</Link>
            <Link to="/may2024">May 2024</Link>
          </ul> 
        </div>
      ) : null}
    </div>
  );
}

