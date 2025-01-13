import React from "react";
import { Link } from "react-router-dom";
import './January2025.css';
import './January2025.scss';
import CatLennie from 'components/catlennie'
import Snowstorm from 'components/snowstorm'
import SnowTalkinFell09012025Title  from './imagesresized/SnowTalkinFell09012025Title.jpg';

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
          < div className="backgroundJanuary2025">
         <section className="dateJanuary" style={{marginTop:'0%'}}>January 1st - 31st 2025</section> 
                     <section className="newsheaderJanuary"> WISHING EVERYONE A VERY HAPPY NEW YEAR!</section> 
                    <section className="newsJanuary" style={{textAlign:"left"}}>
                   Welcome to our January blog. 
                   <br />
                   <br />
                   This month, as it is January, we have returned to our snowy scene. However, given Lennie does not like the snow
                   and he likes to keep warm, on our header design this month, we have created an igloo for him, a heated mat to lie on and some dinner to eat, which he is enjoying.
                   <br />
                   <br />
                   We have added 2 robins to the animation as he likes to sleep in his basket right by the patio window and look outside to survey his domain.
                   Often birds can be seen hopping towards the glass and looking in at Lennie, and then hopping away again happily as they know he is inside.
                    <br /> 
                    <br /> 
                    The design and animations on this page have been created using SVG (scaleable vector graphics), html, css and javascript.
                    The design for the robins was created by referring to images of a robin and trying to recreate a representative example of what we see in real lifeine. 
                    <br /> 
                    <br /> 
                    If you have any problems with the page and animations displaying correctly please could you let me know as usual, via the Problem Feedback button at the bottom of the home page
                    of this website. It is much appreciated as whilst all the designs are tested using developer tools across different device settings before release, sometimes the displays
                    will not run in the intended way and it is only by knowing about it I can try and correct it.
                    <br /> 
                    <br /> 
                    </section>

        <section className="dateJanuary">January 9th 2025, Thursday</section> 
                     <section className="newsheaderJanuary"> SNOWY WONDERLAND: 6.7 mile walk into the local hills. </section> 
                    <section className="newsJanuary" style={{textAlign:"left"}}>
                   Since the 5th January we have had snow which has persisted due to freezing temperatures and clear skies. Bernard has gained 
                   weight since Christmas so decided we needed to get some exercise! Hence, we entered today into a brilliantly sunny, freezing, snowy wonderland.
                   With snow boots on our feet and taking appropriate care, we ventured out into the icy wilderness feeling rather like Captain Scott
                   on his final journey into the Antarctic.....
                   <br /> 
                   <br /> 
                    </section>

                    <div className="SlideshowHostPhotoJanuary">
                    <div className="slideshowinstructionsJanuary"> <strong>Click on the image below to open the photo album and see the snowy wonderland.</strong> </div>   {/*Closing div slideshowinstructionsJanuary*/}
                    <br /> <br />
                    <Link to ="https://photos.app.goo.gl/EZC9TLLSs9eX22tS9" target="_blank" title="Click on the link and read the full comments on each photo to see the best and worst of Lennie 2024." >
                    <img className="slideshowentryJanuary" src={SnowTalkinFell09012025Title} alt="" />
                    </Link>
                    </div> 

            </div>
            </div>
    );
};