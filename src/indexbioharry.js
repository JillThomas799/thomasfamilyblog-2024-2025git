import React from "react";
import "./Bio_Harry.css";
import HarryBioImage from "imagesresized/HarryBioImage.jpg";
import { Link } from "react-router-dom";

export function HarryBio() {
  return (
    <div>
      <div className="midnightblue">
        <button id="backbutton">
          <Link to="/" className="backbuttonLink">
            Back
          </Link>
        </button>
        <section className="Profession">
          <h2>Profession</h2>
          <h3>
            Final year PhD student in computational chemistry, Cardiff
            University
          </h3>
        </section>

        <div className="profile">
          <section className="Likes">
            <h2>Likes</h2>
            <li>Cats</li>
            <li>Seagulls</li>
            <li>Bratwurst and chocolate-based desserts</li>
            <li>Computer games</li>
            <li></li>
          </section>

          <section className="photo">
            <figure>
              <img id="Harry_profile_photo" src={HarryBioImage} alt="" />
              <figcaption>
                <strong></strong>
              </figcaption>
            </figure>
            <article>
              {" "}
              Harry grew up in Lancashire, where he attended school until aged
              18 years. After obtaining A*AA in Maths, Further Maths and
              Chemistry A levels respectively, he obtained an unconditional
              place to study for a Masters degree in Chemistry for 4 years.
              After obtaining the prize for best-performing Master's student in
              Chemistry he successfully obtained a place to study for an
              industry-sponsored PhD in Computational Chemistry at Cardiff
              University.
            </article>
          </section>
          <section className="Dislikes">
            <h2>Dislikes</h2>
            <li>Cows</li>
            <li>Barn owls</li>
            <li>Salad</li>
          </section>
        </div>

        <section className="surprisingFacts">
          <h2>Surprising Facts</h2>
          <li>
            Harry has won more awards and prizes than any one else in the family
          </li>
          <li>
            Harry lived and studied in Ulm, Baden Württemberg for 3 months in
            2018 when he was awarded a DAAD scientific research internship in
            catalysis{" "}
          </li>
        </section>

        <section className="FavouriteBooks">
          <h2>Favourite books</h2>
          <li>Warrior Cats novel series</li>
          <li>Stephen King, The Shining </li>
          <li></li>
        </section>
      </div>
    </div>
  );
}
