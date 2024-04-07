import React from 'react';
import './Bio_jill.css';
import JillBioImage from 'imagesresized/JillBioImage.jpg';
import { Link } from "react-router-dom";

export function JillBio() {
  return (
<div>
<div className="midnightblue">  
<button id="backbutton">
          <Link to="/" className="backbuttonLink">Back</Link>
        </button>
<section className="Profession">
        <h2>Profession</h2>
        <h3>Retired General Practitioner</h3>
    </section>

    <div className="profile"  >     
        <section className="Likes">
            <h2>Likes</h2>
            <li>Family</li>
            <li>Countryside</li>
            <li>Peace and quiet</li>
            <li>Cats</li>
            <li>Studying software and foreign languages</li>
            <li>Europe</li>
        </section>
    
        <section className="photo">
            <figure><img id="Jill_profile_photo" src= {JillBioImage} alt="" /><figcaption><strong></strong></figcaption></figure>
             <article> Jill grew up near Wigan. She has from a young age had a love of classical music, opera and ballet 
                and when younger learnt to play the piano and violin. From the age of 13 years she wanted to become a doctor. After obtaining the necessary A levels in sciences,
                she successfully gained a place to study medicine at Manchester Medical School.</article>
            </section>
       
        
        <section className="Dislikes">
            <h2>Dislikes</h2>
            <li>Unkindness</li>
            <li>Intolerance of the underdog</li>
            <li>Arrogance</li>
         </section>
    </div>

    <section className="Surprisingfacts">
        <h2>Surprising Facts</h2>
        <li>Jill has an additional degree in European Studies</li>
        <li>At the age of 22 years, and never having flown before, Jill flew on her own out to Melbourne Australia for 3 months 
            to study at Melbourne children's Hospital. </li>
    </section>

    <section className="FavouriteBooks">
        <h2>Favourite books</h2>
        <li>Anatoli Rybakov, Children of the Arbat trilogy: 'Children of the Arbat', 'Fear' and 'Dust and Ashes'.</li>
        <li>Ellie Griffiths, the Ruth Galloway series</li>
        <li>Melvyn Bragg, 'Back in the Day' </li>
        <li>M W Craven, Washington Poe series, of which my favourite is 'Dead Ground'</li>
        <li>Polly Morland, 'A Fortunate Woman' A Country Doctor's Story</li>
    </section>

    <section className="FavouriteMusic">
        <h2>Favourite Music</h2>
        <li>Paganini Violin Concertos</li>
        <li>Chopin piano concertos numbers 1 and 2</li>
        <li>Antonio Vivaldi 12 Violin Concertos Op3,the 'L'estro Armonico' set, of which the Concerto for 2 violins in A minor, RV255 is my favourite</li>
    </section> 
  </div>
  </div>
  );
};
