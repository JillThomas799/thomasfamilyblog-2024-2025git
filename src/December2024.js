import React from "react";
import { Link } from "react-router-dom";
import './December2024.css';
import SnowmanShakerDisplay from 'components/snowmanshakerdisplay';

export default function December2024() {

    return (
      <div>
        <div className="December2024header" >
          <SnowmanShakerDisplay title="December 2024"/> 
        <button id="backbuttonDecember">
          <Link to="/" className="backbuttonLink" style={{color:"black"}}>Back</Link>
        </button>
        </div>

        <div className="mainDecember">
        <section className="dateDecember">December 1st - 31st 2024</section> 
             <section className="newsheaderDecember"> WELCOME TO OUR CHRISTMAS AND DECEMBER BLOG</section> 
            <section className="newsDecember" style={{textAlign:"center"}}>
           Welcome to our December blog. This year we have developed the animation for the header one step further to create a snow-globe, which
           if you click on it with your mouse will raise and the globe will shake causing the snow to start falling, just as in real life.
           <br />
           <br /> 
           There is quite a lot going on this month as we will be away visiting relatives in the South and South East for some some of the time, and we are back in London
           with a trip to the Victoria and Albert Museum. Christmas will be back home though with Elena and Harry and Lennie here, 
           so we are looking forward to that. We have already made the Christmas puddings, just the Christmas cake left to make.
            </section>
            </div>
        </div>
        
        
        );
        };