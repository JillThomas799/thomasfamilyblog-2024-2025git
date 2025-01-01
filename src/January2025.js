import React from "react";
import { Link } from "react-router-dom";
import './January2025.css';
import './January2025.scss';
import CatLennie from 'components/catlennie'
import Snowstorm from 'components/snowstorm'

export default function January2025() {
    return (
        <div className="mainJanuary">
            <div div className="January2025Header" > January 2025
               <button id="backbuttonDecember">
                        <Link to="/" className="backbuttonLink" style={{color:"black"}}>Back</Link>
                      </button>
<Snowstorm />
<CatLennie />
        </div>
          <div className="backgroundJanuary2025">
         <section className="dateJanuary" style={{marginTop:'0%'}}>January 1st - 31st 2025</section> 
                     <section className="newsheaderJanuary"> WISHING EVERYONE A VERY HAPPY NEW YEAR!</section> 
                    <section className="newsJanuary" style={{textAlign:"left"}}>
                   Welcome to our January blog. This month, as it is January, we have returned to our snowy scene. However, given Lennie does not like the snow
                   and he likes to keep warm we have created an igloo for him and a heated mat for him to lie on. He is in this animation busy eating and enjoying his dinner.
                   <br />
                   <br />
                   It has also been entertaining with Lennie as he likes to sleep in his basket right by the patio window and look outside to survey his domain.
                   Often we will see birds hopping towards the glass and looking in at Lennie, and then hopping away happily again as they know he is inside.
                   The funniest recently was when a very large pheasant was in the garden doing the same and shouting at Lennie. As a result, we have added an 
                   animation of a couple of such robins coming to harass Lennie.         
                    <br /> 
                    <br /> 
                    The design and animations on this page have been created using SVG (scaleable vector graphics), html, css and javascript.
                    The design for the robins was created by referring to images of a robin and trying to recreate a representative example and in the  animation, representative movement. 
                    <br /> 
                    <br /> 
                    If you have any problems with the page and animations displaying correctly please could you let me know as usual, via the Problem Feedback button at the bottom of the home page
                    of this website. It is much appreciated as whilst all the designs are tested using developer tools across different device settings before release, sometimes the displays
                    will not run in the intended way and it is only by knowing about it I can try and correct it.
                    </section>

        {/* <section className="dateJanuary">January 1st 2025, Wednesday</section> 
                     <section className="newsheaderJanuary"> REVIEW OF 2024 AND PLANS FOR 2025</section> 
                    <section className="newsJanuary" style={{textAlign:"left"}}>
                   Happy New Year to everyone.
                    </section> */}

                    </div>
        </div>

        
    );
};