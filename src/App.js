import React from 'react';
import './App.css';
import { Button } from 'components/buttons';
import { Navigation } from 'components/navbar';
import JillBioImage from './images/JillBioImage.jpg';


function MyMenu() {
  return (
    <div id="menu">
      <ul>
        <li><a className="nav-link" href = "April_2024.html"  title = "Click here to go to April 2024 blogs">April 2024</a></li>
        <li><a className="nav-link" href = "May_2024.html"  title = "Click here to go to May 2024 blogs">May 2024</a></li>
        <li><a className="nav-link" href = "June_2024.html" id="menu" title = "Click here to go to June 2024 blogs">June 2024</a></li>
      </ul>
    </div>
  );
}



function ProfileJill() {
  return ( 
  <div>
    <h1>Jill</h1>
    <img src={JillBioImage} alt="Photo Jill" />
  </div>
);
}

export default function App() {
  return (
<body>
  <div className="App">
    <Button />
    <Navigation />
    <h1 id="the_Thomas_Family_Blog">Thomas Family Blog</h1>
    <ProfileJill />
  </div>
</body>
  );
}


