import React from "react";
import "./hwpdailytemplate.css";

export default function HwpDailyTemplate(props) {
  return (
    <div>
      <div className="datenewsDivHwp">
        <section className="dateHwp">1st June 2024, Saturday</section>
        <section className="newsheaderHwp">
          <strong>Day 1 - Wallsend to Newcastle Swing Bridge</strong>
        </section>
        <div className="newsHwp">
          <div className="componentWalkDetails">
            <strong className="headTitles">Details of the Walk </strong>
            <ul className="hwpIntroList">
              <li>
                <strong className="titles">Parking:</strong>{" "}
              </li>
              <li>
                <strong className="titles">Distance:</strong> <strong></strong>{" "}
                <strong>Descent:</strong>30 metres, 98 feet.{" "}
              </li>
              <li>
                <strong className="titles">Refreshments:</strong>{" "}
              </li>
            </ul>
            <strong className="headTitles">Good</strong>
            <ul className="hwpIntroList">
              <div className="listItemsAlign">
                <li>
                  <strong className="titles">Ambience :</strong>
                </li>
                <li>
                  <strong className="titles">Sights: </strong>
                </li>
                <li>
                  <strong className="titles">Information boards:</strong>
                </li>
                <li>
                  <strong className="titles">Weather:</strong>
                </li>
              </div>
            </ul>
            <br />
            <strong className="headTitles">Not so good</strong>
            <ul className="hwpIntroList">
              <li>
                <strong></strong>
              </li>
            </ul>
            <strong className="headTitles">Hike Rating</strong> 8 (out of 10)
          </div>{" "}
          {/* Closing tag ComponentWalkDetails Class*/}
          <br />
          <div className="hwpDailyNarrative"></div>{" "}
          {/* Closing tag for newsHwp div*/}
        </div>{" "}
        {/*Closing tag for hwpDailyNarrative div */}
        <div className="slideshowHostPhotoHwp">
          <figure>
            {/* <Link to="https://photos.app.goo.gl/sRhBPqCMEbCajSdf9" target="_blank">
            <img className="slideshowentryHwp" src={NewcastleQuayside} alt="" />
            </Link> */}
          </figure>
        </div>{" "}
        {/* Closing div SlideshowHostPhotoHwp */}
      </div>{" "}
      {/*</div>Closing tag datenewsDivHwp*/}
    </div>
  );
}
