import React from 'react';

export function Dropdown(props) {
  return (
    <div>
      {props.isVisible ? (
      <div id="menu">
        <ul>
            <li><a className="nav-link" href="april2024.js" id="menu" title="Click here to go to April 2024 blogs">April 2024</a></li>
            <li><a className="nav-link" href="may2024.js" id="menu" title="Click here to go to May 2024 blogs">May 2024</a></li>
            <li><a className="nav-link" href="june2024.js" id="menu" title="Click here to go to June 2024 blogs">June 2024</a></li>
            <li><a className="nav-link" href="july2024.js" id="menu" title="Click here to go to July 2024 blogs">July 2023</a></li>
            <li><a className="nav-link" href="august2024.js" id="menu" title="Click here to go to August 2024 blogs">August 2023</a></li>
            <li><a className="nav-link" href="september2024.js" id="menu" title="Click here to go to September 2024 blogs">September 2024</a></li>
            <li><a className="nav-link" href="october2024.js" id="menu" title="Click here to go to October 2024 blogs">October 2024</a></li>
            <li><a className="nav-link" href="november2024.js" id="menu" title="Click here to go to November 2024 blogs">November 2024</a></li>
            <li><a className="nav-link" href="december2024.js" id="menu" title="Click here to go to December 2024 blogs"> December 2024</a></li>
            <li><a className="nav-link" href="january2025.html" id="menu" title="Click here to go to January 2025 blogs">January 2025</a></li>
           </ul> 
        </div>
      ) : null}
    </div>
  );
}

// export default Dropdown;