import React from 'react';
import { Link } from "react-router-dom";
import './June2024.css';
import June2024HeaderPhoto1 from "./imagesresized/June2024HeaderPhoto1.jpg";
import CygnetSwans1 from "./imagesresized/CygnetSwans1.jpg";
import CygnetSwans2 from "./imagesresized/CygnetSwans2.jpg";
import CygnetSwans3 from "./imagesresized/CygnetSwans3.jpg";
import DuckDucklings1 from "./imagesresized/DuckDucklings1.jpg";
import DuckDucklings2 from "./imagesresized/DuckDucklings2.jpg";
import ChickMoorhen from "./imagesresized/ChickMoorhen.jpg";
import TalkinTarnView from "./imagesresized/TalkinTarnView.jpg";
import StrawberryBed from "./imagesresized/StrawberryBed.jpg";
import RaisedBed1 from "./imagesresized/RaisedBed1.jpg";
import RaisedBed2 from "./imagesresized/RaisedBed2.jpg";
import RaisedBed2Distant from "./imagesresized/RaisedBed1.jpg";
import RaisedBed3 from "./imagesresized/RaisedBed3.jpg";
import RaisedBed4 from "./imagesresized/RaisedBed4.jpg";
import ProductiveGarden from "./imagesresized/ProductiveGarden.jpg";
import NepetaMichelmas from "./imagesresized/NepetaMichelmas.jpg";
import NepetaInBloom2 from "./imagesresized/NepetaInBloom2.jpg";
import NepetaInBloom1 from "./imagesresized/NepetaInBloom2.jpg";
import Meadow2 from "./imagesresized/Meadow2.jpg";
import Meadow1 from "./imagesresized/Meadow1.jpg";
import GoatsbeardBorder from "./imagesresized/GoatsbeardBorder.jpg";
import GardenView from "./imagesresized/GardenView.jpg";
import FoxglovesPatio3 from "./imagesresized/FoxglovesPatio3.jpg";
import BlueTitNesting from "./imagesresized/BlueTitNesting.jpg";

export default function June2024() {
    return (
      <div>
        <div className="June2024header"> 
          <button id="backbutton">
            <Link to="/" className="backbuttonLink">Back</Link>
          </button>
        </div>
        <h1 style={{background:"#0492c2", borderRadius:"0", marginBottom:"0px", border:"solid #b5a642 4px" }}><img src= {June2024HeaderPhoto1} alt="" className="headerPhotoJune" /></h1>

        <div className="datenewsDivJune" style={{marginTop:"5%"}}>
            <section className="dateJune">1st - 30th June 2024</section>
            <section className="newsheaderJune">Welcome to our June 2024 blog</section> 
            <section className="newsJune">Welcome to this, our June 2024 blog. We hope everyone is keeping well and happy in spite of the poor June weather so far.<br/><br/>
              The header photo this month was taken returning along the Old Military Road which runs along Hadrian's Wall in Northumberland and Cumbria. We had been out in the car 
              doing some route-planning for our Hadrian's Wall Expedition and this photograph just about sums up life up here. Everyone found the sign very amusing and, given this 
              is usually a road which people tend to drive quite fast along, it was no mean achievement of the farmer's to get everyone sitting waiting quite patiently in their cars until all the cows had been successfully moved!<br/><br/>
              From this month we have set up a separate page, the  <Link to="/hwp2024"> Hadrian's Wall Path Expedition page </Link> , narrating our 84 (or so) mile Hadrian's Wall Path expedition which we will be undertaking in day-long segments over the coming weeks and months.
              We are hoping we will be able to provide tips and guidance to anyone else thinking of walking the path in this manner, as the challenges are a little different to when doing it as one block over 4-9 days.
              In part, this is why the blog will seem a little quieter this month as we have been busy planning out the <em>Great Expedition</em> . 
              <br /> 
              <br /> 
              In addition, Jill and Elena have been making good progress with further developing the blog website so that it can run on a server hosted by ourselves and where everyone will be able 
              to log in with their own password. The raspberry pi computer has been purchased and set up to act as the server. We now have to create the page 
              to log in and a secure database and all the background security required. This has necessitated Jill having to learn Linux operating system with <Link to = "https://www.futurelearn.com/courses/linux-operating-system-essentials" 
              target="_blank" title="Click here to learn more about the Linux Operating System Essentials course"> Future Learn </Link> ( with rather a lot of tutting and eye-rolling from Elena at the same time......). However, the good news is that we are progressing slowly but surely.
              We will let everyone know in plenty of time when the change to a personalised log in will come into play.
            <br />
            <br />
            
            </section>
            </div>

            <div className="datenewsDivJune">
            <section className="dateJune">1st June 2024</section> 
            <section className="newsheaderJune"> Stage 1 of our Hadrian's Wall Path Expedition successfully completed</section>  
            <br />
            <section className="newsJune">Today we successfully completed Stage 1 of our Hadrian's Wall Path Expedition. All the information 
              about this trip for today and for the remaining stages over the forthcoming weeks and months, please come and join us at our  <Link to="/hwp2024"> Hadrian's Wall Path Expedition page </Link>
            </section>
          
          </div> 

            <div className="datenewsDivJune">
            <section className="dateJune">10th - 12th June 2024</section> 
            <section className="newsheaderJune">Cygnets, ducklings and moorhen chicks - the tarn is a veritable nursery!</section>  
            <br />
            <section className="newsJune">There has been lots of activity down at the tarn recently as many of the birds are having their families. Each time we visit there seem to have been more additions... All 
              apart from the cygnets grow so quickly though and are soon adults. The cygnets are slower, taking 4-5 months to reach maturity.
             </section>
          
          </div> 

          <div className="blogPhotoDivJune">
          <fig><section className = "blogPhotoJune" ><img src={CygnetSwans1} alt="" /><figcaption className='junefigcaption'><strong>The swans have had cygnets this year, <br /> seen here tucked under the trees <br /> on the far left of the photo </strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoJune" ><img src={CygnetSwans2} alt="" /><figcaption className='junefigcaption'><strong> The two parents are <em>very</em> defensive of their young <br /> and keep hissing at all passers by...</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoJune" ><img src={CygnetSwans3} alt="" /><figcaption className='junefigcaption'><strong>They have to be defensive though. <br /> The first year we were here <br /> one of the little cygnets died...</strong></figcaption></section>
            </fig>
            
          </div>

          <div className="blogPhotoDivJune">
          <fig><section className = "blogPhotoJune" ><img src={DuckDucklings2} alt="" /><figcaption className='junefigcaption'><strong> Meanwhile, elsewhere on the tarn <br /> a number of the ducks have had ducklings...</strong></figcaption></section>
          </fig>
          <fig><section className = "blogPhotoJune" ><img src={DuckDucklings1} alt="" /><figcaption className='junefigcaption'><strong>The little ducklings grow very quickly <br /> and soon learn from their parents. </strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoJune" ><img src={ChickMoorhen} alt="" /><figcaption className='junefigcaption'><strong>...and tucked away undercover <br /> in another area of the tarn <br /> 
            out of sight is the moorhen with her chicks.</strong></figcaption></section>
            </fig>
          </div>

          <div className="datenewsDivJune">
            <section className="newsheaderJune">A June Garden Update </section>  
            <br />
            <section className="newsJune">The productive garden is doing well. Following the success of the raised beds last year, we have added another 2 raised beds, so we are now growing: 
              mixed lettuce, leeks, peas, rhubarb, courgettes, tomatoes, runner beans, strawberries, blackberries and raspberries.
              <br />
              <br />
              Meanwhile, in the main garden, with the weather having been so cold with average temperatures similar to those in April, the plants generally and particularly the bedding plants are some
               weeks behind in their growth and there has not been much opportunity for sitting outside.
               <br />
               <br />
               Bernard is creating a meadow at the bottom of the main lawn and in time, hopefully wild flowers and grasses will grow there,
               attracting wildlife. All the plants which have been planted along the border of the long wall are now starting to really get 
               established, even the ferns!!... The Skimmia and the viburnum tinea plants are particularly doing well. The trailing aubretia
               which we planted last year have done really well and are expanding happily. Many people grow them in this area, so it seems 
               they suit the climate and were a wise choice.
              <br />
              <br /> 
              It is easy to think sometimes that the garden is not achieving what is intended in some areas, but then, when a comparison is undertaken of photos 
              taken this time last year and the year before, then it can be clearly seen that things actually are going to plan and everything has grown and filled out.

            </section>
          
          </div> 
        ; 
        ; <div className="datenewsDivJune">
          <div className="blogPhotoDivJune">
          <fig><section className = "blogPhotoJune" ><img src={RaisedBed1} alt="" /><figcaption className='junefigcaption'><strong> Raised bed 1 - Mixed lettuce and Leeks </strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoJune" ><img src={RaisedBed2} alt="" /><figcaption className='junefigcaption'><strong> Raised Bed 2 - Peas and rhubarb </strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoJune" ><img src={RaisedBed3} alt="" /><figcaption className='junefigcaption'><strong>Raised bed 3 - Courgettes and tomatoes</strong></figcaption></section>
            </fig>    
          </div>
          </div>

          <div className="datenewsDivJune">
          <div className="blogPhotoDivJune">
          <fig><section className = "blogPhotoJune" ><img src={RaisedBed4} alt="" /><figcaption className='junefigcaption'><strong> Raised bed 4 - Runner beans</strong></figcaption></section>
          </fig>
          <fig><section className = "blogPhotoJune" ><img src={StrawberryBed} alt="" /><figcaption className='junefigcaption'><strong> The strawberry beds  </strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoJune" ><img src={ProductiveGarden} alt="" /><figcaption className='junefigcaption'><strong> The productive garden </strong></figcaption></section>
            </fig>            
          </div>
          </div>
          
        ;  <div className="datenewsDivJune">
          <div className="blogPhotoDivJune">
          <fig><section className = "blogPhotoJune" ><img src={NepetaInBloom1} alt="" /><figcaption className='junefigcaption'><strong>The nepeta are currently in their first <br /> flowering of the year.  
          They look beautiful <br /> and the bees love them... </strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoJune" ><img src={NepetaMichelmas} alt="" /><figcaption className='junefigcaption'><strong>Bernard has intermingled them with some <br />  michelmas daisies 
            and the contrasting <br /> white and blue works very well.</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoJune" ><img src={TalkinTarnView} alt="" /><figcaption className='junefigcaption'><strong>There are some atmospheric views out <br /> towards the tarn.</strong></figcaption></section>
            </fig>
            </div>
            </div>
          ; 
          <div className="datenewsDivJune">
            <div className="blogPhotoDivJune">
          <fig><section className = "blogPhotoJune" ><img src={Meadow1} alt="" /><figcaption className='junefigcaption'><strong> Bernard has created a meadow <br /> at the bottom of the main lawn. </strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoJune" ><img src={Meadow2} alt="" /><figcaption className='junefigcaption'><strong> Hopefully, over time, wild flows will grow <br /> and it will attract wildlife.</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoJune" ><img src={BlueTitNesting} alt="" /><figcaption className='junefigcaption'><strong>There are baby blue tits nesting in the nesting box.</strong></figcaption></section>
            </fig>
            </div>
            </div>

            <div className="datenewsDivJune">
            <div className="blogPhotoDivJune">
            <fig><section className = "blogPhotoJune" ><img src={GoatsbeardBorder} alt="" /><figcaption className='junefigcaption'><strong> The borders are <br /> filling 
            out nicely.... </strong></figcaption></section>
            </fig>  
          <fig><section className = "blogPhotoJune" ><img src={FoxglovesPatio3} alt="" /><figcaption className='junefigcaption'><strong> There are quite a lot of <br /> 
          foxgloves growing in the <br /> borders this year. </strong></figcaption></section>
          </fig>
          <fig><section className = "blogPhotoJune" ><img src={GardenView} alt="" /><figcaption className='junefigcaption'><strong> View looking down the main garden </strong></figcaption></section>
            </fig>          
          </div>
          </div>

        
        </div>
    );
}