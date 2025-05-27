import React from "react";
import "./cyclistaugustheader.css";

export default function Cyclistaugustheader() {
  return (
    <div>
      <div id="AugustHeader">
        <span id="AugustTitle">August 2024</span>
        <div class="bikeRiding">
          <div className="clouds"></div>
          <div className="shadow"></div>
          <div className="cyclist">
            <div className="bike">
              <div className="leftTyre">
                <div className="spokes"></div>
              </div>

              <div className="rightTyre">
                <div className="spokes"></div>
              </div>

              <div className="wheel"></div>
              <div className="pedals"></div>
              <div className="chain"></div>
            </div>{" "}
            {/*Closing div for bike*/}
            <div className="girl">
              <div className="top"></div>
              <div className="rightArm"></div>
              <div className="leftArm"></div>
              <div className="head"></div>
              <div className="hair"></div>
              <div className="strap"></div>
              <div className="trousers">
                <div className="leftLeg">
                  <div className="leftcalf"></div>
                </div>
                <div className="rightLeg">
                  <div className="calf"></div>
                </div>
              </div>{" "}
              {/*Closing div for trousers*/}
            </div>{" "}
            {/* closing div for class girl */}
          </div>{" "}
          {/*closing div for class cyclist*/}
        </div>{" "}
        {/*Closing div for class bike-riding*/}
      </div>{" "}
      {/*closing div for id AugustHeader*/}
    </div>
  );
}
