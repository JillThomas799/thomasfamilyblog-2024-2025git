import React from 'react';
import { useState } from 'react'; //Adding 'state' to a component allows the component to 'remember' some specific information and display it. eg. count the number of times a button is clicked.
import './App.css';//if importing from another file in the same folder use ./file name. ./ tells the import to look for the .js file in the same folder as the current file
import JillBioImage from 'images/JillBioImage.jpg';//if importing from another src folder, just use this configuration
import BernardBioImage from 'images/BernardBioImage.jpg';
import LennieBioImage from 'images/LennieBioImage.jpg';
import ElenaBioImage from 'images/ElenaBioImage.jpg';
import HarryBioImage from 'images/HarryBioImage.jpg';
import { Button } from 'components/buttons';
import { Dropdown } from 'components/dropdown';


function ProfileJill() {
  return ( 
  <div>
    <fig><img id="Jill_profile_photo" src={JillBioImage} alt="" /><figcaption>Jill</figcaption></fig>
  </div>
  );
}

function ProfileBernard() {
  return ( 
  <div>
    <fig><img id="Bernard_profile_photo" src={BernardBioImage} alt="" /><figcaption>Bernard</figcaption></fig>
  </div>
);
}

function ProfileLennie() {
  return ( 
  <div>
    <fig><img id="Lennie_profile_photo" src={LennieBioImage} alt="" /><figcaption>Lennie</figcaption></fig>
  </div>
);
}

function ProfileElena() {
  return ( 
  <div>
    <fig><img id="Elena_profile_photo" src={ElenaBioImage} alt="" /><figcaption>Elena</figcaption></fig>
  </div>
  );
}

function ProfileHarry() {
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
      <ProfileBernard />
      <div></div>
      <ProfileJill />
      <div></div>
      <ProfileLennie />
      <div></div>
      <ProfileElena />
      <div></div>
      <ProfileHarry />
    </div>
  </div>
</body>
  );
}