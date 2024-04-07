import React from 'react';
import './Bio_bernard.css';
import BernardBioImage from 'imagesresized/BernardBioImage.jpg';
import { Link } from "react-router-dom";

export function BernardBio() {
  return (
    <div>
      <div className="midnightblue">
      <section className="Profession">
      <button id="backbutton">
          <Link to="/" className="backbuttonLink">Back</Link>
        </button>
        <h2>Profession</h2>
        <h3>Retired General Practitioner</h3>
      </section>
      

      <div className="profile">
        <section className="Likes">
          <h2>Likes</h2>
          <li>Playing on computer games, especially blood-bourne</li>
          <li>Cats</li>
          <li>Being retired</li>
          <li>Cooking</li>
        </section>
        <section className="photo">
          <figure>
          <img id="Bernard_profile_photo" src={BernardBioImage} alt="" />
            <figcaption><strong /></figcaption></figure>
          <article>
            {" "}
            Bernard was born in Billinge and grew up in Ashton-in-Makerfield, the
            second eldest of three boys. He attended Ashton Grammar School and at
            16 years of age then went onto study for his A levels at Wigan
            Technical College. After applying for and accepting a place to study
            dentistry, he changed his mind and secured a place at Manchester
            University to study medicine.
          </article>
        </section>
        <section className="Dislikes">
          <h2>Dislikes</h2>
          <li>Shopping</li>
          <li>Cruises</li>
          <li>Going out to work</li>
          <li>Foreign holidays</li>
        </section>
      </div>
      <section className="Surprisingfacts">
        <h2>Surprising Facts</h2>
        <li>Bernard has an 'O' level in Astronomy.</li>
        <li>
          In 2013 was,together with Jill, voted by patients as the 2nd best GP
          practice in the UK for trust and confidence in their doctor
        </li>
        <li>
          Favourite saying is that of Groucho Marx who said 'I refuse to join any
          club which would have me as a member'
        </li>
      </section>
      </div>
    </div>
  );
};
