import React from "react";
import { Link } from "react-router-dom";
import './December2024.css';
import SnowmanShakerDisplay from 'components/snowmanshakerdisplay';
import Dinosaur1224Titled from './imagesresized/Dinosaur1224Titled.jpg';
import XmasDayMeal20241Title from './imagesresized/XmasDayMeal20241Title.jpg';

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
           There is quite a lot going on this month as we will be away visiting relatives in the South and South East for some of the time, and we are back in London
           with a trip to the Victoria and Albert Museum. Christmas will be back home though with Elena and Harry and Lennie here, 
           so we are looking forward to that. We have already made the Christmas puddings, just the Christmas cake left to make.
            </section>

            <section className="dateDecember">December 10th - 14th, 2024</section> 
             <section className="newsheaderDecember"> VISIT TO LONDON AND THE SOUTH EAST</section> 
            <section className="newsDecember" style={{textAlign:"left"}}>
          It was time to go visiting and distributing cards and presents in time for Christmas, so we packed up the car and headed down South; firstly to Leicestershire 
          to catch up on news with friends and then on to the South East of England. 
          <br />
          <br />
          <div className='dateNewsDecember'>Wednesday, December 11th 2024:</div>
          <br /> 
          We had a very enjoyable visit and Christmas lunch out at <Link to="https://www.rhs.org.uk/gardens/hyde-hall"
          target="_blank" title="Click here to discover more about Hyde Hall" className="LinkDecember2024">Hyde Hall</Link>, the 
          Royal Horticultural Society garden in Essex. 
          <br />
           <br /> 
          The Christmas lunch was lovely and we had a very enjoyable meal: 
          <li>For starters there was a choice of: Seared Scallop with Chorizo, Fennel and Apple; Celeriac, cauliflower and rosemary soup topped with crushed hazelnuts and served with crusty bread;
          or truffled mushroom pate with classic melba toast.</li>
          <li>For main course, there was a choice of: Roast turkey with Hyde Hall Stuffing, pig in blanket, roast 
          potatoes, honey roast parsnips, braised red cabbage, brussel sprouts with smoked bacon & chestnuts and turkey gravy; grilled seabass fillet with a 
          bombay potato croquette, spiced tender stem broccoli, light korma sauce and almond cauliflower popcorn; or pumpkin, sage and courgette filo tart topped with a 
          spiced fruit chutney served with roast potatoes, braised red cabbage, tender stem broccoli and a vegan jus </li>  
          <li>For desserts there was a choice of: Pear tarte tatin with a pecan praline and poire william chantilly cream, 
          bread and butter christmas pudding with custard, or chocolate ganache tart with ginger crumb and sour cherry ice-cream </li>
          <br />
          <br /> 
          <div className='dateNewsDecember'>Thursday, December 12th 2024:</div>
          <br />
          We went over to visit Bernard's father and to cook him 'Christmas' lunch. I know it was not Christmas day, but it was near enough.
          There was also Christmas pudding which we had made. 
          <br />
          <br /> 
          <div className='dateNewsDecember'>Friday, December 13th 2024:</div>
          <br />
          We went into London on the train and met up with Bernard's brother for the day. We had the chance to visit the Victoria and 
          Albert Museum, where we also had lunch, and the Natural History Museum in South Kensington, to have a walk through Hyde park and see the sights including the 
          Royal Albert Hall. In the afternoon we walked as far as Harrods and saw how the other half live in South Kensington before walking in the twilight 
          back to the tube station via Hyde Park and onwards to our base. We worked out by the end of the day we had walked 10 miles in total.

            </section>

            
            <div className="SlideshowHostPhotoDecember">
            <Link to ="https://photos.app.goo.gl/j4Xmhghp8sc9uLKb9" target="_blank" title="Click on the link and read the full comments on each photo to accompany us on our trip to London and the South East." ><strong>
            <div className="slideshowinstructionsDecember"> Click on the image below to open the photo album of our trip to London and the South East. 
            <br /> <br />The individual comments on the photos will take you through the full story of our trip.
            </div>   {/*Closing div slideshowinstructionsDecember*/}

            <img className="slideshowentryDecember" src={Dinosaur1224Titled} alt="" />
            </strong> 
            </Link>
            </div> 
            {/*Closing div SlideshowHostPhotoDecember*/}
            
            <section className="dateDecember">December 24th - 26th, 2024</section> 
             <section className="newsheaderDecember"> CHRISTMAS 2024</section> 
            <section className="newsDecember" style={{textAlign:"left"}}>
          It is Christmas 2024 and Elena and Harry are here for the holiday. The home-made Christmas puddings and Christmas cake (with over half a bottle of sherry in it) are cooked and ready.
          The food shopping has been done (thanks to ELena and Jill's intrepid voyage into town food shopping on the 21st December 2024 - say no more! ). 
          <br />
          <br />
          The tree has been erected and decorated and Lennie has been happily eating his way through the cat advent calendar from which Harry has been merrily
          feeding him each day. Needless to say Harry is now Lennie' favourite human being, so much so that Lennie starts purring when Harry even enters the room 
          in a morning.....
          <br />
          <br />
          There is however one problem, Lennie does not yet realise that advent calendar treats only run for 24 days 
          until the 24th December and then they stop for a year! There may be difficult times ahead I think.....
          <br />
          <br />
          </section>
            
          <div className="SlideshowHostPhotoDecember">
            <Link to ="https://photos.app.goo.gl/BSWeChYShX1Axteo7" target="_blank" title="Click on the link and read the full comments on each photo to join us in our Christmas 2024 celebrations." ><strong>
            <div className="slideshowinstructionsDecember"> Click on the image below to open the photo album and join us in our Christmas 2024 celebrations. 
            <br /> <br />
            </div>   {/*Closing div slideshowinstructionsDecember*/}

            <img className="slideshowentryDecember" src={XmasDayMeal20241Title} alt="" />
            </strong> 
            </Link>
            </div> 
            {/*Closing div SlideshowHostPhotoDecember*/}
            </div>
           
        </div>
        
        
        );
        };