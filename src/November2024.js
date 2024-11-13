import React from "react";
import { Link } from "react-router-dom";
import './November2024.css';
import BonfireAnimation from 'components/BonfireAnimation';
import SycamoreExhibition1 from './imagesresized/SycamoreExhibition1.jpg';
import SycamoreExhibition2 from './imagesresized/SycamoreExhibition2.jpg';
import SycamoreExhibition3 from './imagesresized/SycamoreExhibition3.jpg';
import SycamoreExhibition4 from './imagesresized/SycamoreExhibition4.jpg';
import Birdoswald1Nov2nd2024 from './imagesresized/Birdoswald1Nov2nd2024.jpg';
import Birdoswald2Nov2nd2024 from './imagesresized/Birdoswald2Nov2nd2024.jpg';
import Birdoswald3Nov2nd2024 from './imagesresized/Birdoswald3Nov2nd2024.jpg';
import Birdoswald4Nov2nd2024 from './imagesresized/Birdoswald4Nov2nd2024.jpg';
import BlacksmithsMeal1Nov4th2024 from './imagesresized/BlacksmithsMeal1Nov4th2024.jpg';
import BlacksmithsMeal2Nov4th2024 from './imagesresized/BlacksmithsMeal2Nov4th2024.jpg';
import BlacksmithsEandH4112024 from './imagesresized/BlacksmithsEandH4112024.jpg';
import BlacksmithsBernard4112024 from './imagesresized/BlacksmithsBernard4112024.jpg';

export default function November2024() {

    return (
      <div>
        < div className="November2024header" > 
        
        <div className="FireworkContainer">          
        <div className="pyro"> <div className="titleNovember">November 2024</div>
                    <div className="before"></div>
                    <div className="after"></div>
        </div> {/*Closing div pyro*/}
        <button id="backbuttonNovember">
          <Link to="/" className="backbuttonLink" style={{color:"black"}}>Back</Link>
        </button>
        <BonfireAnimation title="November 2024" /> 
        
        </ div> {/*Closing div FireworkContainer*/}
        <div className="earth"></div>
      

       <section className="dateNovember" style={{marginTop:'0%'}}>November 1st - 30th 2024</section> 
             <section className="newsheaderNovember"> WELCOME TO OUR GUY FAWKE'S BONFIRE AND FIREWORKS PARTY!</section> 
            <section className="newsNovember" style={{textAlign:"center"}}>
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


<section className="dateNovember">November 1st, 2024</section> 
             <section className="newsheaderNovember"> VISIT TO THE SYCAMORE GAP EXHIBITION AT THE SILL</section> 
            <section className="newsNovember" style={{textAlign:"center"}}> We took the time today to go to see the temporary exhibition entitled 'Sycamore Gap: One Year On'
            by the artist Charlie Whinney which is being hosted at 'The Sill' between the 28th September and the 3rd November 2024. The Guardian newspaper recently 
            published an article regarding this exhibition which can be read here: <Link to="https://www.theguardian.com/uk-news/2024/sep/27/sycamore-gap-tree-exhibition-opens-to-mark-a-year-since-its-felling"
            target="_black" title="Click here ot open Guardian article re the Sycamore Gap tree exhibition 27th September 2027" className="LinkNovember">Sycamore Gap Tree Exhibition opens to mark a year since its felling</Link>.
            <br />
            <br />
            The felling of the Sycamore Gap Tree in the early hours of the morning on the 28th September 2023 gained widespread media coverage with people from all over the world adding 
            their contributions as to the significance of this particular tree to their lives and experiences. As a result of this and in order to try and gain something hopeful and positive 
            out of such a destructive event, the artist Charlie Whinney and Creative Communities CIC, have created the Sycamore Gap: One Year On exhibition. 
            <br /> 
            <br />  
            This exhibition encourages contemplation of events and features the largest remaining section of the original tree. 
            As part of the exhibition, it seeks the participation of the public with visitors being invited to make promises to nature, which will be incorporated into the second and final phase of the commission, set to open by Easter 2025. 
            It is the first part of a 2 part exhibition in which the second and final part will see the wood installed permanently into The Sill and this will open by Easter 2025.
            <br /> 
            <br />  
            As part of the Trees of Hope initiative, all 15 UK National Parks will also receive a sapling that will find new homes 
            in some of the most beautiful landscapes in the UK.
            <br /> 
            <br /> 
            For all the information about our Hadrian's Wall Path trek this Summer, please come and join us at our  
            <Link to="/hwp2024" className="LinkNovember"> Hadrian's Wall Path Expedition page. </Link>
            </section>
            
            <div className="blogPhotoDivNovember">
            
            <fig><section className = "blogPhotoNovember" ><img src={SycamoreExhibition1} alt="" /><figcaption className='Novemberfigcaption'><strong>The largest section of the original  < br /> tree’s wood forms the centre piece <br />  of the exhibition display, as can <br /> be seen here.</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoNovember" ><img src={SycamoreExhibition2} alt="" /><figcaption className='Novemberfigcaption'><strong>It is framed by the artwork <br /> of the wood behind....</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoNovember" ><img src={SycamoreExhibition3} alt="" /><figcaption className='Novemberfigcaption'><strong>There are additional alcoves to the exhibition <br /> containing galleries where people have sent in <br /> their  own pictures of the Sycamore Gap tree</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoNovember" ><img src={SycamoreExhibition4} alt="" /><figcaption className='Novemberfigcaption'><strong>As well as the pictures shown here, <br /> there are also books of people's <br /> descriptions of what they were doing <br /> when they heard about the tree's < br /> abrupt and unexpected demise.</strong></figcaption></section>
            </fig>
            </div>

                      
            <section className="dateNovember">2nd November 2024, Saturday</section>
            <section className="newsheaderNovember"><strong>ADDITIONAL DAY - CATCH-UP VISIT TO BIRDOSWALD FORT</strong></section>
             <section className="newsNovember" style={{textAlign:"center"}}>
           When we walked the Birdowswald Fort section of Hadrian's Wall on the 28th July 2024, there was not time to call in and explore the fort more fully, so we promised
           that sometime over the quieter Winter months we would pay Birdoswald Fort a visit, especially as Harry had never had the opportunity to visit.
            <br /> 
            <br />  
            It was lovely and quiet at the fort, so there was plenty of opportunity and time to study the information boards and findings carefully. 
            It is an interesting fort and well worth a visit if you are in the area! It is probably worthwhile obtaining a copy of the English Heritage guidebook 
            though as it contains some additional helpful information to provide further clarification.
            <br /> 
            <br /> 
            For all the information about our Hadrian's Wall Path trek this Summer, please come and join us at our  
            <Link to="/hwp2024" className="LinkNovember"> Hadrian's Wall Path Expedition page. </Link>
            </section>                

            <div className="blogPhotoDivNovember">            
            <fig><section className = "blogPhotoNovember" ><img src={Birdoswald1Nov2nd2024} alt="" /><figcaption className='Novemberfigcaption'><strong>Birdoswald Farmhouse, which <br /> stands on the site of the old Roman Fort Banna.</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoNovember" ><img src={Birdoswald2Nov2nd2024} alt="" /><figcaption className='Novemberfigcaption'><strong>We are standing here on the Via Principalis, <br /> about to enter what was the West Gate.</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoNovember" ><img src={Birdoswald3Nov2nd2024} alt="" /><figcaption className='Novemberfigcaption'><strong>There are helpful information boards, <br /> this one concerning the West Gate.</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoNovember" ><img src={Birdoswald4Nov2nd2024} alt="" /><figcaption className='Novemberfigcaption'><strong>It is well worth purchasing this <br /> English Heritage guidebook <br /> about the fort as it provides <br /> more detailed information.</strong></figcaption></section>
            </fig>
           </div>

           <section className="dateNovember">November 4th, 2024</section> 
             <section className="newsheaderNovember"> BLACKSMITH'S ARMS FOR DINNER</section> 
            <section className="newsNovember" style={{textAlign:"center"}}> The whole family met up today to go out for dinner at the Blacksmith's Arms. It was lovely, 
              being relatively quiet and there was an open fire. The food was great also and reasonably priced. <br /> A great time was had by all.
            </section>
            
            <div className="blogPhotoDivNovember">
            
            <fig><section className = "blogPhotoNovember" ><img src={BlacksmithsMeal1Nov4th2024} alt="" /><figcaption className='Novemberfigcaption'><strong>Cumberland Sausage and mash</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoNovember" ><img src={BlacksmithsMeal2Nov4th2024} alt="" /><figcaption className='Novemberfigcaption'><strong>Trout, new potatoes and vegetables</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoNovember" ><img src={BlacksmithsEandH4112024} alt="" /><figcaption className='Novemberfigcaption'><strong>The 'A' team - Elena and Harry</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoNovember" ><img src={BlacksmithsBernard4112024} alt="" /><figcaption className='Novemberfigcaption'><strong>Bernard enjoying the most important <br /> thing .... the beer.</strong></figcaption></section>
            </fig>
            </div>

           </div>
           </div>
        
        
    )
        };