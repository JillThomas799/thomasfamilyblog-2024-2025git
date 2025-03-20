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
import SuttonHooTitled from './imagesresized/SuttonHooTitled.jpg';

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
                    <div style={{textAlign:"center"}}>Over the coming few weeks we will be working to update the March blog with our news .....</div>
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
                    

           <section className="dateMarch2025" >13th - 16th March 2025</section> 
                     <section className="newsheaderMarch2025"> VISIT TO RELATIVES DOWN SOUTH INCLUDING A DAY OUT TO SUTTON HOO SUFFOLK.</section> 
                    <section className="newsMarch2025" style={{textAlign:"left"}}> We have just returned from a visit down to the South and South East visiting relatives, and 
                      whilst there took the opportunity to go and visit <Link to="https://www.nationaltrust.org.uk/visit/suffolk/sutton-hoo" className="LinkMarch2025"> Sutton Hoo </Link> in Suffolk. It is a really interesting location and well worth a visit for anyone 
                      who has not been. We lasted visited the site back in 2009 and had been meaning to revisit for sometime but unfortunately it is only open at weekends 
                      over the winter period, so this was the first opportunity that we had had. 
                      <br />
                      <br />
                      I will not write too much here about the history of Sutton Hoo and the findings there because there is plenty of information on the site accessed by the link above and online, suffice it to 
                      say that Sutton Hoo is the site of an Anglo-Saxon burial ground dating back to the 6th and 7th centuries. Excavations in 1939, just as World War 2 was starting, revealed an Anglo-Saxon ship burial 
                      containing many treasures in what came to be called 'Mound 1'. It is thought, due to the riches found buried there, that it was most likely the grave of Raedwald, an east Anglian king who died in the 620s. This is one of only three Anglo-Saxon 
                      ship burials in this country. The second and lesser ship burial was found at Sutton Hoo in Mound Two and the other was found in nearby Snape.
                      <br />
                      <br />
                      One of the conditions of the National Trust owning the Sutton Hoo site is that the site has to have an educational purpose, so we had a fantastic local guide Catriona
                      who was one of the original excavating team of Mound 2 back in the 1980s. She was very interesting and entertaining in our hour long talk and it was fascinating to hear about life on the dig back then.
                      If anyone is a Time Team fan, <Link to="https://www.nationaltrust.org.uk/visit/suffolk/sutton-hoo/time-team-announcement" target="_blank" className="LinkMarch2025"> Time Team </Link> are back on the site from the 19th May 2025 - 13th June 2025.
                      <br />
                      <br />
                      Following on from our visit to Sutton Hoo we caught up with the 2021 film <Link to="https://www.nationaltrust.org.uk/visit/suffolk/sutton-hoo/digging-the-dirt-at-sutton-hoo-the-true-story-behind-the-dig" target="_blank" className="LinkMarch2025">'The Dig'</Link> starring Ralph Fiennes as the archeologist Basil Brown 
                      exploring the story of the excavation of the Great Ship Burial at Sutton Hoo in 1939 and which is currently available on Netflix.
                      It is an enjoyable film in its own right which, whilst it is based on a true story and accurately portrays the Sutton Hoo excavation, it is a also in parts a fictionalized account with liberties taken for dramatic purposes especially with the relationships between certain of the characters 
                      and the addition of fictional characters such as Rory Lomax who were added for dramatic effect.  We felt that it was a pity it was not able to be filmed on site using Tranmer House. There is an interesting article 
                      <Link to="https://www.eadt.co.uk/news/21324495.ralph-fiennes-basil-brown-remarkable-man/" target="_blank" className="LinkMarch2025"> here </Link> in the East Anglian Times about 
                      Ralph Fiennes when he was preparing for the film.
                      <br />
                      <br />
                      Whilst visiting in the South East, we were also able to catch up on progress with Jill's relatives garden project, which is making good progress.
                                        </section>

            <div className="SlideshowHostPhotoMarch2025">
            <div className="slideshowinstructionsMarch2025"> <strong>Click on the image below to open the album of our visit to Sutton Hoo and progress with the South East garden project (see photo album).</strong> 
                    <br /> <br />
            <Link to ="https://photos.app.goo.gl/512sy4tKr39WbLVP7" target="_blank" className="LinkMarch2025">
                    <img className="slideshowentryMarch2025" src={SuttonHooTitled} alt="" />
                    </Link>
                    </div>   {/*Closing div slideshowinstructionsMarch*/}
                            
      </div>
           
      {/* <section className="dateMarch2025" >8th March 2025 onwards</section> 
                     <section className="newsheaderMarch2025"> THE TALE OF A RAT ..... AND OTHER POTENTIAL PETS FOR ELENA</section> 
                    <section className="newsMarch2025" style={{textAlign:"left"}}>
                      Elena has for some time expressed the desire to introduce a pet into her home, it has just been a case of her deciding which pet would be best...
                      As could be imagined, various family members and friends have had their own suggestions to offer including Harry who initially suggested chickens
                      <br />
                      <br />
                      
                    </section> */}
      </div>
      </div>
      
      );
      };
