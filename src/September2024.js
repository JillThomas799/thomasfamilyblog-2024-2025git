import React from 'react';
import { Link } from "react-router-dom";
import './September2024.css';
import AbbotsfordCafe from "./imagesresized/AbbotsfordCafe.jpg";
import AbbotsfordGargoyles from "./imagesresized/AbbotsfordGargoyles.jpg";
import EntranceAbbotsford from "./imagesresized/EntranceAbbotsford.jpg";
import WalterScottsCat from "./imagesresized/WalterScottsCat.jpg";
import AbbotsfordRear from "./imagesresized/AbbotsfordRear.jpg";
import AbbotsfordLibrary from "./imagesresized/AbbotsfordLibrary.jpg";
import AbbotsfordfromGarden from "./imagesresized/AbbotsfordfromGarden.jpg";
import AbbotsfordfromGarden2 from "./imagesresized/AbbotsfordfromGarden2.jpg";
import BustWalterScott from "./imagesresized/BustWalterScott.jpg";
import DrawingRoomAbbotsford from "./imagesresized/DrawingRoomAbbotsford.jpg";
import HallShieldsAbbotsford from "./imagesresized/HallShieldsAbbotsford.jpg";
import HallAbbotsford from "./imagesresized/HallAbbotsford.jpg";

export default function September2024() {
    return (
      <div style={{background:"#585123"}}>
        <div className="SeptemberHeader"> 
          <button id="backbuttonSeptember">
            <Link to="/" className="backbuttonLink">Back</Link>
          </button>
        </div>
        {/* <h1> </h1> */}
        <div className="SeptemberHeader">September 2024</div>
        

        <div className="datenewsDivSeptember" style={{marginTop:"5%"}}>
            {/* <section className="dateSeptember">1st - 30th September 2024</section> */}
            <section className="newsheaderSeptember">Welcome to our September 2024 blog</section> 
            <section className="newsSeptember" style={{textAlign:"center"}}>
            {/* Welcome to our September blog.  */}
            The summer is almost over, but despite the poor weather and the cold, we have still managed to have a very enjoyable time over the summer.
            As we have previously written, we managed to successfully complete our Hadrian's Wall Path trek and now the schools are back and it is a little quieter, there is still
            a long list of walks we would like to do and trips we would like to take so hopefully this month we will be able to bring a little news about those.
            <br />
            <br />
            To start off with though, here is our blog about the first of these trips, a long-awaited visited to Abbotsford, Walter Scott's home in the 
            Scottish Borders. This is well worth a visit if you are in the area......
            </section>
            </div>

            <div className="datenewsDivSeptember">
            <section className="dateSeptember">3rd September 2024</section> 
            <section className="newsheaderSeptember"> Visit to Sir Walter Scott's House, Abbotsford</section>  
            <br />
            <section className="newsSeptember">  <strong>Who was Sir Walter Scott: <br /> </strong> <Link to ="https://en.wikipedia.org/wiki/Walter_Scott" target="_blank" title="Click here to discover more about Sir Walter Scott" className="LinkSeptember"> 
            <strong> Sir Walter Scott </strong> </Link> (August 1771 - 1832) was a Scottish poet, novelist and historian. 
            Many of his works remain classics of European and Scottish literature, notably the novels <Link to="https://www.goodreads.com/book/show/6440.Ivanhoe" target="_blank" className="LinkSeptember">
            Ivanhoe (1819) </Link>, <Link to="https://www.goodreads.com/book/show/543686.Rob_Roy" target="_blank" className="LinkSeptember"> Rob Roy (1817) </Link>, <Link to="https://www.goodreads.com/book/show/539025.Waverley" target="_blank" className="LinkSeptember"> Waverley (1814) </Link>, 
            <Link to="https://www.goodreads.com/book/show/699603.Old_Mortality" target="_blank" className="LinkSeptember"> Old Mortality (1816) </Link> , 
            <Link to="https://www.goodreads.com/book/show/699484.The_Heart_of_Mid_Lothian" target="_blank" className="LinkSeptember"> The Heart of Mid-Lothian (1818) </Link>, 
            and <Link to="https://www.goodreads.com/book/show/49495.The_Bride_of_Lammermoor" target="_blank" className="LinkSeptember"> The Bride of Lammermoor (1819) </Link> , along with the narrative poems             
            <Link to="http://www.walterscott.lib.ed.ac.uk/works/poetry/marmion.html" target="_blank" className="LinkSeptember"> Marmion (1808) </Link> and 
            <Link to="http://www.walterscott.lib.ed.ac.uk/works/poetry/lady.html" target="_blank" className="LinkSeptember"> The Lady of the Lake (1810) </Link>. 
            <br />
            <br />
            He was also an antiquarian and collector. He was an advocate, judge, and legal administrator by profession, but he combined 
            writing and editing with his daily work as Clerk of Session and Sheriff-Depute of Selkirkshire. He had great success in his life but also great 
            tragedy. He was, after Byron, the most widely read and influential writer of the Romantic period and made significant earnings from his writing as a result.
            However later Scott suffered two major financial crises, in 1813 and 1825-26, both sparked by the collapse of his publishers. In 1825 Sir Walter Scott was at the height of his power and fame. 
            By January 1826 he was financially ruined with enormous debts that vastly exceeded his assets. His wife Charlotte Charpenter also died in 1826 and then
            he received news of the death of his ten year old grandson John Hugh Lockhart whilst in Italy in December 1831.
            <br />
            <br />
            <strong>What factors contributed to Walter Scott's becoming a writer? :</strong>
            < div className="SeptemberList">
            <li><strong>Childhood Polio :</strong> In 1773, when he was still under 2 years old, Scott suffered from a bout of polio which left him lame.
            His parents sent him to recover at his grandfather's farm near Kelso in the Borders. Here he was taught to read by his aunt and learned from her the 
            speech patterns and many of the tales and legends that he would use later in his work. </li>
            <li><strong>Childhood Explorations :</strong> During his convalescence, he explored the nearby countryside and as a result, developed a love of natural beauty and a deep interest in and appreciation 
            of the historic struggles of his Scottish forefathers. He often used these to create the backdrop to the plots of a many of his novels.</li>
            <li><strong>A fascination with the history and culture of his native Scotland</strong> : He loved reading poetry, history, drama, and fairy tales and romances. 
            Visitors recall him reciting poetry with great enthusiasm and dramatic skill, which was helped by his remarkable memory.</li>
            </div>
            <br />
            <strong>What and where is Abbotsford? :</strong> Abbotsford is situated in the Scottish Borders, near Galashiels, on the south bank of the River Tweed and to quote the information provided by the Abbotsford Trust, is 'one of the finest examples of a writer's home anywhere in the world.'
            After his death in 1832, it was maintained by generations of his family until 2007, when the Abbotsford Trust, an independent charitable trust was set up to take over responsibility. 
            They have undertaken restoration work to ensure that visitors today see the house as it would have been when Scott died in 1832.
            <br />
            <br />
            <strong>What we liked :</strong> Having now visited Abbotsford, we can understand why it remains such a popular attraction. It is situated in the Borders of Scotland by the
            River Tweed and the drive from the north west of England takes you along the A7 and the Borders Historic Route to Edinburgh, passing through Hawick. This is as much a part of the trip as the house itself as it is necessary 
            to know and understand the countryside and culture he fell in love with in order to understand Abbotsford. 
            <br />
            <br />
            Unlike many historic houses, Abbotsford is reasonably modest in size. It is easy to imagine how it must have been when Walter Scott was living here and it is easy to understand why he loved it so much.He is known to have called it 'The Delilah 
            of his imagination'. It is a classic story of riches to ruin, with his building the house with the extensive proceeds of all his writing work but later fell into serious debt.
            <br />
            <br />
            The Abbotsford Trust have done a very good job of making this an enjoyable and interesting attraction. We particularly liked 
             the choice of audio guides, we chose the one with an actor playing the part of Walter Scott narrating his own story which was really clever 
             and very effective. The audio guide gives lots of information, but it is also worth buying a copy of the guidebook as this has far more information
             about the contents of the house which Walter Scott collected throughout his lifetime. 
             <br />
            <br />
              The walled gardens are a really pleasant and sheltered place to sit, and then it is possible to go and do the walks by the River Tweed.
              Overall, this visit was even better than anticipated and we plan to return at some point. If in the area, it is well worth a visit...
            <br />
            <br />

            <div className="blogPhotoDivSeptember">
            <fig><section className = "blogPhotoSeptember" ><img src={AbbotsfordCafe} alt="" /><figcaption className='augustfigcaption'><strong>It had been a very impressive but <br /> long(ish) drive  
            so first and foremost on arrival, it was time for a café stop... </strong></figcaption></section>
            </fig>
              <fig><section className = "blogPhotoSeptember" ><img src={EntranceAbbotsford} alt="" /><figcaption className='augustfigcaption'><strong>Entrance to Abbotsford ... it is easy to see why Sir Walter Scott liked this house so much.</strong></figcaption></section>
              </fig>
              <fig><section className = "blogPhotoSeptember" ><img src={HallAbbotsford} alt="" /><figcaption className='augustfigcaption'><strong>This is the entrance hall - <br /> Walter Scott was also known as an antiquarian <br /> and collector and all of these items are of historical interest....</strong></figcaption></section>
            </fig>
              <fig><section className = "blogPhotoSeptember" ><img src={HallShieldsAbbotsford} alt="" /><figcaption className='augustfigcaption'><strong> The shields of Walter Scott's Ancestors are 
             these down the centre <br /> of the ceiling and those of the principal border families are painted around the cornice...  </strong></figcaption></section>
              </fig>           
            </div>

            <div className="blogPhotoDivSeptember">
           
              <fig><section className = "blogPhotoSeptember" ><img src={AbbotsfordLibrary} alt="" /><figcaption className='augustfigcaption'><strong>Walter Scott's library, Abbotsford...Here are about 7000 of the 9000 books Walter Scott collected,
                each in the same spot as Walter Scott placed them.</strong></figcaption></section>
              </fig>
              <fig><section className = "blogPhotoSeptember" ><img src={BustWalterScott} alt="" /><figcaption className='augustfigcaption'><strong>...and here is the bust of Sir Walter Scott which was moved here from the drawing room by Walter Scott the younger.</strong></figcaption></section>
            </fig>
              <fig><section className = "blogPhotoSeptember" ><img src={DrawingRoomAbbotsford} alt="" /><figcaption className='augustfigcaption'><strong>Evening leisure pursuits were centred on the the drawing room next door, a room which Scott's wife Charlotte preferred. Their daughter Sophia would play the harp and sing here.</strong></figcaption></section>
              </fig>
              <fig><section className = "blogPhotoSeptember" ><img src={AbbotsfordGargoyles} alt="" /><figcaption className='augustfigcaption'><strong>Sir Walter Scott's armoury, intended for the display of his collections of fine arms and armoury but often used as his private sitting room.
              Walter Scott loved gothic architecture and weird and grotesque carvings...</strong></figcaption></section>
            </fig>
           
            </div>

            <div className="blogPhotoDivSeptember">
            
            <fig><section className = "blogPhotoSeptember" ><img src={AbbotsfordRear} alt="" /><figcaption className='augustfigcaption'><strong> Abbotsford as seen from the rear. <br /> The central section of the house is the original. </strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoSeptember" ><img src={AbbotsfordfromGarden2} alt="" /><figcaption className='augustfigcaption'><strong>Sir Walter Scott's gardens at Abbotsford were also an extension <br /> of his creative talent....</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoSeptember" ><img src={AbbotsfordfromGarden} alt="" /><figcaption className='augustfigcaption'><strong>View of Abbotsford from a seat in the walled garden.</strong></figcaption></section>
            </fig>
            <fig><section className = "blogPhotoSeptember" ><img src={WalterScottsCat} alt="" /><figcaption className='augustfigcaption'><strong>Although Walter Scott was a passionate dog-lover, <br /> in later life he also grew to like cats.  He said <br /> ' Cats are a very mysterious kind of folk. 
              There is always more passing in their minds than we are <br /> aware of. Here is a painting of his cat, Hinse of Hinsefeldt ....</strong></figcaption></section>
            </fig>
            </div>

            </section>
 
          
          </div> 
          </div>

);
};