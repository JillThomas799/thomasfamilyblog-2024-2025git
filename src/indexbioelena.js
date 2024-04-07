import React from 'react';
import './Bio_Elena.css';
import ElenaBioImage from 'imagesresized/ElenaBioImage.jpg';
import { Link } from "react-router-dom";

export function ElenaBio() {
  return (
<div>
    <div className="AquamarineBlue">
    <button id="backbutton">
          <Link to="/" className="backbuttonLink">Back</Link>
        </button>
      <section className="Profession">
        <h2>Profession</h2>
        <h3>Software Devops Engineer at the Economist</h3>
      </section>
      <div className="profileElena">
        <section className="Likes">
          <h2>Likes</h2>
          <li>History</li>
          <li>Writing</li>
          <li>Hiking</li>
          <li>Video games</li>
          <li />
        </section>
        <section className="photo">
          <img id="Elena_profile_photo" src={ElenaBioImage} alt="" />
          <article>
            {" "}
            Works for the Economist in their tech department. Initially studied
            chemistry before switching to computer science. A big advocate for
            LGBTQ+ rights, I was involved in several pride groups in the past.{" "}
          </article>
        </section>
        <section className="Dislikes">
          <h2>Dislikes</h2>
          <li>Small dogs</li>
          <li>Loud places</li>
          <li>Excess drama </li>
          <li>Warm weather</li>
        </section>
      <section className="Surprisingfacts">
        <h2>Surprising Facts</h2>
        <li>Elena was once on the TV</li>
      </section>
      <section className="FavouriteBooks">
        <h2>Favourite books</h2>
        <li>Discworld series by Terry Pratchett</li>
      </section>
      <section className="FavouriteMusic">
        <h2>Favourite Music</h2>
        <li>Classic rock</li>
        <li>Indie pop</li>
        <li>Orchestral</li>
      </section>
      </div>
    </div>
  </div>
  );
};
