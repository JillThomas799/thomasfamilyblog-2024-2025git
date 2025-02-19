import React from "react";
import './February2025.css';
import { Link } from "react-router-dom";
import Deer from 'components/deer';
import CatLennie from 'components/catlennie';
import BigBen15022025 from "./imagesresized/BigBen15022025.jpg";
import WestminsterBridge15022025 from "./imagesresized/WestminsterBridge15022025.jpg";
import HoPTour1 from "./imagesresized/HoPTour1.jpg";
import HoPTour2 from "./imagesresized/HoPTour2.jpg";
import HoPTour3 from "./imagesresized/HoPTour3.jpg";
import LunchZedel from "./imagesresized/LunchZedel.jpg";
import NickBuckinghamPalace from "./imagesresized/NickBuckinghamPalace.jpg";
import Coffee15022025 from "./imagesresized/Coffee15022025.jpg";
import GreenPark15022025 from "./imagesresized/GreenPark15022025.jpg";


export default function February2025() {
    return (
        <div className="bodyFeb2025">
            <div className="February2025header" > February 2025
               <button id="backbuttonFebruary2025">
                        <Link to="/" className="backbuttonLink" >Back</Link>
                      </button> 
                </div>
              
        <div className="stageBorder"> 
        <div className="snowScene">            
       
            {/* <div className="curtain1"> </div> */}
            < Deer />
            {/* <div className="curtain2"></div> */}
            <div className="groundSnow"></div>
            </div> 
            
        </div>
        <section className="dateFebruary" style={{marginTop:'0%'}}>February 1st - 28th 2025</section> 
                     <section className="newsheaderFebruary"> WELCOME TO OUR FEBRUARY BLOG</section> 
                    <section className="newsFebruary" style={{textAlign:"left"}}>
                   This month we are introducing as part of our header design some new animal friends who live near to us. These are the
                   3 deer who we see most days as we walk down to the lake. The design for the deer has been undertaken from first principles; 
                   analyzing photographic images and then using SVG to create a set of images which represent as closely as possible the deer 
                   whom we meet.  
                    <br /> 
                    <br /> 
                    </section>

                    <section className="dateFebruary" style={{marginTop:'0%'}}>February 15th 2025</section> 
                     <section className="newsheaderFebruary"> VISIT TO LONDON, HOUSES OF PARLIAMENT TOUR AND LUNCH AT BRASSERIE ZÉDEL, LONDON ..... Well OK, with one woman down.</section> 
                    <section className="newsFebruary" style={{textAlign:"left"}}>
                   This weekend, we had booked a <Link to="https://www.parliament.uk/visiting/visiting-and-tours/" target="_blank" title="Click here to discover more about the Houses of Parliament Tours" 
                   className="LinkFebruary2025"> tour </Link> of the Houses of Parliament together and invited Bernard's brother Nicholas along as, despite having worked close-by for many years, he had 
                   never been to visit inside the building. It seems to so often be the case that when you work in an area you never have the time to see the tourist sites on your doorstep!
                   We had never been to see inside the Houses of Parliament, although of course we have seen the debating chamber many times on TV and so had been awaiting this trip with anticipation.
                    There are 2 options for the tour: (1) <Link to="https://www.parliament.uk/visiting/visiting-and-tours/tours-of-parliament/guided-tours-of-parliament/" target="_blank" title="Click here to discover more about the guided tours of the Houses of Parliament." 
                   className="LinkFebruary2025"> A guided tour </Link> and (2) <Link to="https://tickets.parliament.uk/timeslot/uk-parliament-multimedia-tour" target="_blank" title="Click here to discover more about the guided tours of the Houses of Parliament." 
                   className="LinkFebruary2025"> A self-guided audio tour </Link>.  As things stand currently the tours run on Saturdays throughout the year and during the recess from Mondays to Saturdays. The current prices of the tours can 
                    be found  <Link to="https://www.parliament.uk/visiting/visiting-and-tours/tour-prices-from-1-april-2024/" target="_blank" title="Click here to discover more about pricing for the the Houses of Parliament Tours" 
                   className="LinkFebruary2025"> here </Link>. 
                    <br />
                    <br />
                    Following this, a meal had been booked at <Link to="https://www.brasseriezedel.com/" target="_blank"
                    title="Click here to discover more about Brasserie Zédel and some sample menus" className="LinkFebruary2025"> Brasserie Zédel</Link> , a Parisian Brasserie in 1930s style, which had been personally recommended to us.
                     
                    <br /> 
                    <br />  
                    Unfortunately, due to an unforeseen family emergency this weekend, Jill was unable to undertake the trip after all as she needed to stay back home to take care of things, but thankfully Bernard and Nicholas were still able to go.
                    As can be seen, the weather was typical for the UK in February with dark and gloomy skies. Nonetheless Bernard and Nicholas really enjoyed it and Jill is going to rearrange a visit for herself and Bernard later 
                    in the year.
                    </section>

                    <div className="blogPhotoDivFebruary">            
            <fig><section className = "blogPhotoFebruary" ><img src={BigBen15022025} alt="" /><figcaption className='Februaryfigcaption'><strong>Big Ben and the Houses of Parliament <br/> from Westminster Bridge</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoFebruary" ><img src={WestminsterBridge15022025} alt="" /><figcaption className='Februaryfigcaption'><strong>View from Westminster Bridge
            <br />looking down past the Houses <br/> of Parliament towards Canary Wharf</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoFebruary" ><img src={HoPTour1} alt="" /><figcaption className='Februaryfigcaption'><strong>Nicholas in Westminster Hall, the only part <br/> of the medieval palace of Westminster <br/> to survive a fire in 1834.</strong></figcaption></section>
            </fig>
            </div>

            <div className="blogPhotoDivFebruary">
            <fig><section className = "blogPhotoFebruary" ><img src={HoPTour2} alt="" /><figcaption className='Februaryfigcaption'><strong> Sited at the entrance to St Stephen’s Hall, <br/> Houses of Parliament, the light sculpture <br/> by Mary Branson (above) marking the <br/> centenary of votes for women.</strong></figcaption></section>
            </fig>            
            <fig><section className = "blogPhotoFebruary" ><img src={HoPTour3} alt="" /><figcaption className='Februaryfigcaption'><strong></strong>St Stephen's Hall with the statues of  <br/> famous parliamentarians.</figcaption></section>
            </fig>
            <fig><section className = "blogPhotoFebruary" ><img src={LunchZedel} alt="" /><figcaption className='Februaryfigcaption'><strong>Lunch at Brasserie Zédel</strong></figcaption></section>
            </fig>
            </div> 

            <div className="blogPhotoDivFebruary">
            <fig><section className = "blogPhotoFebruary" ><img src={NickBuckinghamPalace} alt="" /><figcaption className='Februaryfigcaption'><strong>Nicholas outside Buckingham Palace</strong></figcaption></section>
            </fig>            
            <fig><section className = "blogPhotoFebruary" ><img src={Coffee15022025} alt="" /><figcaption className='Februaryfigcaption'><strong></strong>Time for a well-earned coffee</figcaption></section>
            </fig>
            <fig><section className = "blogPhotoFebruary" ><img src={GreenPark15022025} alt="" /><figcaption className='Februaryfigcaption'><strong>Then time to head home ....</strong></figcaption></section>
            </fig>
            </div> 
     </div>
);
};
