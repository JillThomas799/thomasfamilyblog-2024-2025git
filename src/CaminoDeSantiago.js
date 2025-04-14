import React from "react";
import { Link } from "react-router-dom";
import './CaminoDeSantiago.css';
import Caminologo from 'components/caminodesantiagologo';
import HwpIntro from "./imagesresized/HwpIntro.jpg";
import HWPThermometer from 'components/charityfundraisingthermometer';
import CdSHeaderPhoto from "./imagesresized/CdSHeaderPhoto.jpg";


export default function CaminoDeSantiago() {
    return (

        <div className="bodyCdS">
        <div className="CdSHeader">
          <button id="backbutton" style={{backgroundColor:"#FFD700"}}>
            <Link to="/" className="backbuttonLink" style={{color:"black"}}>Back</Link>
          </button>
          </div>
        <h1 className="CdSTitle" style={{backgroundColor:"#4682B4", color:"#FFD700", borderRadius:"0"}}><div style={{paddingBottom:"10%"}}>Camino de Santiago 2025</div>
        <Caminologo />
        {/* <HWPThermometer /> */}
        <div className="introHostPhotoCdS">
        <img className="CdSIntroPhoto" src={CdSHeaderPhoto} alt="" />
        </div>

        <div className="datenewsDivCdS">
                <section className="dateCdS">6th May 2025 onwards .... Camino de Santiago Pilgrimage </section>
                <div className="newsheaderCdS">Why the Camino de Santiago?.....</div> 
                <div className="newsCdS">
                < div className="CdSDailyNarrative">
                  The Spanish Camino de Santiago is one of the world's oldest walking routes, dating back to the 9th century. The 'Camino de Santiago'
                  is composed of different pathways commencing in different locations. However they all gradually combine into one leading to the cathedral
                  of Santiago de Compostela, believed to be the last resting place of St James who was one of Jesus's 12 original disciples, 
                  whom Jesus mentored directly during his life and who took his message to the world after his death.
                  <br />
                  <br />
                  The decision to make this journey came about following our completion of the Hadrian's Wall Path last year. That expedition had been so enjoyable and informative and the experience itself
                  something exceptional in a way we had never anticipated that we wanted to undertake a similar venture but may be this time somewhere over seas.
                  <br />
                  <br />
                  In 2011, we did actually walk a section of an alternative route option for the Camino de Santiago, the Camino del Norte from Ainhoa (see album below) a village in the Basque Country of France which is located on Camino del Norte toute of the Camino de Santiago and also along the GR10 (Grande Randonnée 10) hiking trail. 
                  We remember seeing the the pilgrims and the crosses and people, thinking we too were pilgrims, wishing us 'Buen Camino'.
                </div> {/*Closing tab for hwpDailyNarrative div */}
                </div>  {/*Closing tab for newsCdS div */}
                </div>  {/*Closing tab for datenewsDivCdS div */}

                <div className="datenewsDivCdS">
            <section className="newsheaderCdS"><strong>A Brief History of the Camino de Santiago</strong>
            </section>
            
            <section className="dateCdS"></section>
             <div className="newsCdS">
            <div className="CdSDailyNarrative">
            The <Link to="https://en.wikipedia.org/wiki/Santiago_de_Compostela" target="_blank" className="LinkCdS">Wikipedia page </Link> about the Santiago de Compostela informs us how it is thought that the name Compostela comes
            originally from the Latin word <em>tella</em> meaning a well-ordered burial ground, possibly referring to an ancient burial ground on the site of the Church of Santiago de Compostela that pre-dates the Christian building.
            <br />
            <br />
            According to local legend however, the name Compostela derives from the Latin: Campus Stellae ('field of the star').
            as a legend tells of how a local shepherd was guided to a spot in a field ('campo') by a star ('stella') where he found the remains of St James ('Sant Iago').
            As a result the name Santiago de Compostela originated. 
            <br />
            <br />
            There is evidence since the 9th Century (the time of King Alfonso II of Asturias and when it is believed that the remains of St James the Apostle were first discovered in Northern Spain) that this has been a route of pilgrimage 
            so its history goes back <em>a very long time.....</em>   
            <br />
            <br />
            Tim Mathis in his book 'The Camino for the Rest of Us' explains how King Alfonso II completed the first pilgrimage to see the bone 
            and then went on to develop the pilrgrimage and encourage others to visit, a fact made easier by the fact the site was on an existing trade route, with a relatively clear path.
            <br />
            <br />
            By 1300, Santiago de Compostela, together with Rome and Jerusalem, had become one of the most important pilgrimage sites in the ancient Christian world. 
            In the 12th century, the first Camino guide book '  Calixtinus' was written, though we doubt it was available on Kindle!.
            The church saw the pilgrimage as a means by which people could have their sins forgiven and they constructed the current cathedral. 
            <br />
            <br />
            The Camino had not just religious but also important political significance as the large number of pilgrims helped to hold back the Muslim conquest that was occurring throughout the southern part of modern day Spain. 
            The church at Santiago established Knight's Templar to protect the Way and the North of Spain from Islamic conquerors. James himself became Spain's Patron Saint and frequently was said to have appeared in the heat of battle to lead Christian soldiers to victory.
            Chaucer mentioned the Camino in 'The Canterbury Tales'. 
            <br />
            <br />
            After the reformation, for 500 years until the 1980s , the Camino fell out of favour. European pilgrimage practices grew up as part of the Catholic tradition in the Middle Ages. During the Reformation however, Protestantism replaced Catholicism in much of Northern Europe and the Protestants attacked pilgrimage as a corrupt practice and a means of earning God's favour through works outside of faith. These religious attacks, alongside the political upheaval which went alongside them, dried up and cut off the old pilgrimage routes through Europe from the 16th Century onwards.
            In 1993 the Camino was made a UNESCO World Heritage Site. 
            <br />
            <br />
            This pilgrimage became established alongside other pilgrimages throughout the world. 
             However whilst each of these pilgrimages had their own unique traditions, they also all shared certain characteristics  involving 3 major criteria:
            <ol style={{marginLeft:"2%"}}>
              <li className="bulleted">An extended physical journey (usually, but not always, by walking).</li>
              <li className="bulleted">To an important place.</li>
              <li className="bulleted">While being in community.</li>
              </ol>
            <br />
            <br />
            The symbol of the trail is represented by a scallop shell which indicates the joining together of all the routes into one place, namely Santiago de Compostela.
            It is due to the symbolism of the scallop shell and what it represents that it is used as the well-recognised Camino de Santiago logo and is why 
            we have chosen to create a header design for our Camino de Santiago blog based on this symbol.      
            </div> {/*Closing tag for CdSDailyNarrative div */}
            </div>
            </div>

        </h1>
        </div>
    );
}
