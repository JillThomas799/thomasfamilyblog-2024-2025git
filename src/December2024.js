import React from "react";
import { Link } from "react-router-dom";
import './December2024.css';
import SnowmanShakerDisplay from 'components/snowmanshakerdisplay';

export default function December2024() {

    return (
      <div>
        <div className="December2024header" >
          <SnowmanShakerDisplay title="December 2024" /> 
        <button id="backbuttonDecember">
          <Link to="/" className="backbuttonLink" style={{color:"black"}}>Back</Link>
        </button>
        </div>

        <section className="dateDecember">December 1st - 31st 2024</section> 
             <section className="newsheaderDecember"> WELCOME TO OUR CHRISTMAS AND DECEMBER BLOG</section> 
            <section className="newsDecember" style={{textAlign:"center"}}>
           Welcome to our November blog. This month we have created a virtual, animated bonfire and firework display for our Guy Fawke's party. This
           way, Lennie can be included too as he hates the noise of real fireworks. He has already organised for us to put on <Link to="https://www.classicfm.com/radio/shows-presenters/pet-classics/"
           target="_blank" title="Click here to discover more about the annual Pet's Classics programme on Classic FM" className="LinkNovember">Pet's Classics on Classic FM </Link> 
           at 17.00 on the 2nd and 5th of November 2024, to help keep him relaxed. He loves this programme.
           <br />
           <br />
                      For the winter months we have also included a colour scheme taken once again from an autumnal russet pallet in hex color coding.
           The display is created by amalgamating 3 separate container elements: the  burning bonfire animation, the animated firework display, 
           and the earth which forms the ground. We hope you enjoy it...
            <br /> 
            <br />  
            </section>
        </div>
        );
        };