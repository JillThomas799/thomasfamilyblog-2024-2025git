import React from "react";
import "./Bio_Lennie.css";
import LennieBioImage from "imagesresized/LennieBioImage.jpg";
import { Link } from "react-router-dom";

export function LennieBio() {
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
          <h3>Top Cat</h3>
        </section>

        <div className="profile">
          <section className="Likes">
            <h2>Likes</h2>
            <li>Mascarpone</li>
            <li>Butter</li>
            <li>Steak</li>
            <li>Sleeping</li>
            <li>Mice</li>
            <li>His home and garden</li>
            <li>Treats</li>
          </section>

          <section className="photo">
            <figure>
              <img id="Lennie_profile_photo" src={LennieBioImage} alt="" />
              <figcaption>
                <strong></strong>
              </figcaption>
            </figure>
            <article>
              {" "}
              Lennie was born in Sheffield and was found abandoned on the
              streets of Sheffield, together with his sister and taken in by the
              RSPCA
            </article>
          </section>

          <section className="Dislikes">
            <h2>Dislikes</h2>
            <li>Catteries</li>
            <li>All vets</li>
            <li>Vaccinations</li>
            <li>Cardboard boxes</li>
          </section>
        </div>

        <section className="surprisingFacts">
          <h2>Surprising Facts</h2>
          <li>
            Lennie has been occasionally known to have overstepped his hunting
            capabilities when he caught a magpie and a rat
          </li>
          <li>
            Lennie appears to have injured his nose in the past. It is thought
            he may have been harmed when he was abandoned on the streets of
            Sheffield
          </li>
        </section>

        <section className="FavouriteMusic">
          <h2>Favourite Music</h2>
          <li>Einaudi</li>
          <li>Classic FM's Pet Classics</li>
        </section>

        <section className="FavouriteBooks">
          <h2>Favourite books</h2>
          <li>Judith Kerr, The Big Mog Collection</li>
          <li>Inga Moore, Six Dinner Sid</li>
        </section>
      </div>
    </div>
  );
}
