import React from 'react'; // imports React from 'react';
import { useState } from 'react'; //Adding 'state' to a component allows the component to 'remember' some specific information and display it. eg. count the number of times a button is clicked.
import './App.css';//if importing from another file in the same folder use ./file name. ./ tells the import to look for the .js file in the same folder as the current file
import JillBioImage from 'images/JillBioImage.jpg';//if importing from another src folder, just use this configuration
import BernardBioImage from 'images/BernardBioImage.jpg';
import LennieBioImage from 'images/LennieBioImage.jpg';
import ElenaBioImage from 'images/ElenaBioImage.jpg';
import HarryBioImage from 'images/HarryBioImage.jpg';
import Button from 'components/buttons'; //imported as default function from components/buttons
import Dropdown from 'components/dropdown'; //imported as default function from components/dropdown

import { Link } from "react-router-dom";

const BernardPortalEntry = () =>  {
  return (    
  <div>
    
    <fig>
      <Link to="/bernard-bio" className="profileLink">
        <img id="Bernard_profile_photo" src={BernardBioImage} alt="" title="Click here to go to Bernard's profile"/>
        </Link>
        <Link to="/bernard-bio" className="profileLink">
        <figcaption>Bernard</figcaption>
        </Link>
        </fig> 

  </div>
  );
}


const JillPortalEntry = () => {
  return ( 
  <div>
    
    <fig>
    <Link to="/jill-bio" className="profileLink">
        <img id="Jill_profile_photo" src={JillBioImage} alt="" title="Click here to go to Jill's profile"/>
    </Link>
    <Link to="/jill-bio" className="profileLink">
        <figcaption>Jill</figcaption>
    </Link>
    </fig>

  </div>
  );
}

const ElenaPortalEntry  = () =>  {
  return ( 
  <div>
    
    <fig>
      <Link to="/elena-bio" className="profileLink">
        <img id="Elena_profile_photo" src={ElenaBioImage} alt="" title="Click here to go to Elena's profile" />
      </Link>
      <Link to="/elena-bio" className="profileLink">
        <figcaption>Elena</figcaption>
      </Link>
      </fig>
  </div>
  );
}

const LenniePortalEntry = () =>  {
  return ( 
  <div>
    
    <fig>
      <Link to="/lennie-bio" className="profileLink">
        <img id="Lennie_profile_photo" src={LennieBioImage} alt="" title="Click here to go to Lennie's profile"/>
      </Link>
      <Link to="/lennie-bio" className="profileLink">
          <figcaption>Lennie</figcaption>
      </Link>
      </fig>
  </div>
);
}

const HarryPortalEntry  = () =>  {
  return ( 
  <div>
     
    <fig>
      <Link to="/harry-bio" className="profileLink">
    <img id="Harry_profile_photo" src={HarryBioImage} alt="" title="Click here to go to Harry's profile" />
    </Link>
    <Link to="/harry-bio" className="profileLink">
    <figcaption>Harry</figcaption>
    </Link>
    </fig>
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
        <div></div>
        </div>
      </div>
    </body>
  );
}