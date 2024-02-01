import React from 'react';
import { ReactDOM } from 'react';
import { useState } from 'react'; //Adding 'state' to a component allows the component to 'remember' some specific information and display it. eg. count the number of times a button is clicked.
import './App.css';//if importing from another file in the same folder use ./file name. ./ tells the import to look for the .js file in the same folder as the current file
import JillBioImage from 'images/JillBioImage.jpg';//if importing from another src folder, just use this configuration
import BernardBioImage from 'images/BernardBioImage.jpg';
import LennieBioImage from 'images/LennieBioImage.jpg';
import ElenaBioImage from 'images/ElenaBioImage.jpg';
import HarryBioImage from 'images/HarryBioImage.jpg';
import Button from 'components/buttons'; //imported as default function from components/buttons
import Dropdown from 'components/dropdown'; //imported as default function from components/dropdown

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom" ;
import { Link } from "react-router-dom";



import { BernardBio } from './indexbiobernard';

const RoutePlans = () => { 
  return ( <Router>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/indexbiobernard" element={<BernardBio />} />
                {/* <Route path="/indexbiojill" element={<JillBio />} /> */}
            </Routes>
        </Router>
);
}


const JillPortalEntry = () => {
  return ( 
  <div>
    <fig><img id="Jill_profile_photo" src={JillBioImage} alt="" /><figcaption>Jill</figcaption></fig>
  </div>
  );
}


const BernardPortalEntry = () =>  {
  return (    
  <div>
    <a className="Member"  target="_blank" href= "{BernardBio}" title="Click here to go to find out more about Bernard" id="Bernard" style={{color:"white"}}><fig><img id="Bernard_profile_photo" src={BernardBioImage} alt="" /><figcaption>Bernard</figcaption></fig></a>
  </div>
  );
}

const LenniePortalEntry = () =>  {
  return ( 
  <div>
    <fig><img id="Lennie_profile_photo" src={LennieBioImage} alt="" /><figcaption>Lennie</figcaption></fig>
  </div>
);
}

const ElenaPortalEntry  = () =>  {
  return ( 
  <div>
    <fig><img id="Elena_profile_photo" src={ElenaBioImage} alt="" /><figcaption>Elena</figcaption></fig>
  </div>
  );
}

const HarryPortalEntry  = () =>  {
  return ( 
  <div>
    <fig><img id="Harry_profile_photo" src={HarryBioImage} alt="" /><figcaption>Harry</figcaption></fig>
  </div>
  );
}

export default function App() {
  const [isVisible, setIsVisible] = useState(false); // declares a state variable inside the component App:

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    
<body>
  <div className="App">
    <Button onClick={toggleVisibility} />
    <Dropdown isVisible={isVisible} />
    <h1 id="the_Thomas_Family_Blog">Thomas Family Blog</h1>
    <div className = "gridContainer">
      <BernardPortalEntry/>
      <div></div>
      <JillPortalEntry />
      <div></div>
      <LenniePortalEntry />
      <div></div>
      <ElenaPortalEntry />
      <div></div>
      <HarryPortalEntry />
    </div>
    {/* <BernardBio /> */}
  </div>

  
</body>
  );
}