import React from "react";
import { Link } from "react-router-dom";
import './March2025.css';
import Pheasant from 'components/pheasant';
import pheasantGarden from './imagesresized/pheasantGarden.jpg';
import OutsideAucklandPalace from './imagesresized/OutsideAucklandPalace.jpg';
import AucklandPalaceBH from './imagesresized/AucklandPalaceBH.jpg'; 
import CafeAucklandPalace from './imagesresized/CafeAucklandPalace.jpg';
import AucklandPalaceWelcome from './imagesresized/AucklandPalaceWelcome.jpg';
import AucklandPalaceThroneRoom from './imagesresized/AucklandPalaceThroneRoom.jpg'; 
import AucklandPalaceThrone from './imagesresized/AucklandPalaceThrone.jpg'; 
import AucklandPalace from './imagesresized/AucklandPalace.jpg'; 
import BishopsAuckland from './imagesresized/BishopsAuckland.jpg'; 

export default function March2025() {

    return (
      <div>
        <div className="backgroundMarch2025">
         <div className="March2025Header" > March 2025
                       <button id="backbuttonMarch2025">
                                <Link to="/" className="backbuttonLink" style={{color:"black"}}>Back</Link>
                              </button>
      </div>
      
      <div>
      
      < Pheasant />
      </div>
      <section className="dateAllMarch2025" >March 1st - 31st 2025</section> 
                     <section className="newsheaderMarch2025"> WELCOME TO OUR MARCH BLOG</section> 
                    <section className="newsMarch2025" style={{textAlign:"left"}}>
                  Apologies for the delay in posting this month's blog but we have been very busy. Not with anything very interesting I am afraid,
                  just a number of more difficult routine matters which have taken a period of time to sort out.....
                  <br /> 
                  <br /> 
                  Anyhow, here we are at last and would like to introduce our 
                  new 'pet', a pheasant which has decided  it really likes our garden. I think this may be because we hang bird feeders out for the smaller birds,
                  who eat the seeds and nuts and in the process drop the seed on to the floor. The pheasant then comes along several times a day 
                  to eat all the dropped seed. Every morning now we look out of the kitchen window to see the pheasant slowly making its way up our drive to have its breakfast.
                    <br /> 
                    <br /> 
                    Our header picture for this month is therefore our pet garden pheasant. This has taken a while to construct as it is a little complicated and there is still
                    more work to be done but I thought I would get this update posted and I can continue to work on improving the design as the month continues....
                    <img className="slideshowentryJuly" src={pheasantGarden} alt="" />
                    
                    <br /> 
                    <br />
                    Over the coming few weeks we will be working to update the March blog with our news .....
                    <br /> 
                    <br />
                    </section>

                    <section className="dateMarch2025" >1st March Saturday</section> 
                     <section className="newsheaderMarch2025"> VISIT TO AUCKLAND PALACE AND BISHOPS AUCKLAND</section> 
                    <section className="newsMarch2025" style={{textAlign:"left"}}>Auckland Palace was the residence of the Prince Bishops of Durham from approximately 1183 and was their primary residence
                      from 1832 to 2012 when the Castle and its contents were sold to the Auckland Castle Trust, now known as the Auckland Project. It still houses the Bishop's offices. It is one of the best-preserved Bishop's palaces in Europe.
                      <br />
                      <br />
                      The displays and information boards throughout the Palace provide information about the individual Bishops in a chronological order. Auckland Palace was only the home of the individual
                      Prince Bishop of Durham for as long as they held office, it did not belong to them and could not be passed on to their offspring.
                      <br />
                      <br />
                      The status of the Prince Bishops was unique as they had a social rank on a par with a duke and political power exceeded only by the monarch.
                      <br />
                      <br />
                      This was, although a long(ish) drive, an enjoyable day out as we had never visited before. We used our historic houses membership for entry. This gained us entry to the house 
                      but not to the tower and all the exhibitions.
                      <br />
                      <br />
                      The Palace displays are laid out in a very interesting manner with plenty of helpful information boards. The 12 paintings by Zurbarán of Jacob and his sons (well, 9 were present actually as Joseph and Asher
                      have gone to the National Gallery in London for conservation work, and the painting of Benjamin is a copy), are very impressive and are hung in the long dining room.
                    </section>

                    <div className="blogPhotoDivMarch2025">
                    <fig><section className = "blogPhotoMarch2025" ><img src={OutsideAucklandPalace} alt="" /><figcaption className='March2025figcaption'><strong>'The Team': Bernard, Elena and Harry outside Auckland Palace</strong></figcaption></section></fig>            
            <fig><section className = "blogPhotoMarch2025" ><img src={AucklandPalaceBH} alt="" /><figcaption className='March2025figcaption'>Bernard and Harry preparing to enter Auckland Palace<strong></strong></figcaption>
            </section></fig> 
            <fig><section className = "blogPhotoMarch2025" ><img src={CafeAucklandPalace} alt="" /><figcaption className='March2025figcaption'><strong>First though, after a long drive, <br /> it is time for a coffee and cake..... </strong>
           </figcaption></section></fig>
            <fig><section className = "blogPhotoMarch2025" ><img src={AucklandPalaceWelcome} alt="" /><figcaption className='March2025figcaption'><strong>There are plenty of very informative signs as <br /> you enter and go on to <br /> explore the property.</strong></figcaption></section>
            </fig>           
            </div> 

            <div className="blogPhotoDivMarch2025">
            <fig><section className = "blogPhotoMarch2025" ><img src={AucklandPalaceThroneRoom} alt="" /><figcaption className='March2025figcaption'><strong>Throne Room, where the Bishops would behave <br /> in the manner expected of a high-ranking <br /> individual.</strong></figcaption></section></fig>            
            <fig><section className = "blogPhotoMarch2025" ><img src={AucklandPalaceThrone} alt="" /><figcaption className='March2025figcaption'><strong>It is likely that the presence of the throne was <br /> symbolic, a reminder of the Bishop's authority. </strong></figcaption>
            </section></fig>
            <fig><section className = "blogPhotoMarch2025" ><img src={AucklandPalace} alt="" /><figcaption className='March2025figcaption'><strong>Bishops Auckland Palace</strong>
           </figcaption></section></fig>
            <fig><section className = "blogPhotoMarch2025" ><img src={BishopsAuckland} alt="" /><figcaption className='March2025figcaption'><strong>Looking towards Bishops Auckland town <br /> from the entrance to the Castle.</strong></figcaption></section>
            </fig>           
            </div> 
                    </div>

                    
      </div>
      );
      };
