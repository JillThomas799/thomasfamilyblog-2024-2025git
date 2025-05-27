import React from "react";
import "./snowmanshakerdisplay.css";

export default function SnowmanShakerDisplay({ title }) {
  return (
    <div>
      <div className="snowmanshaker">
        <div className="canvas">
          <div className="shadow"></div>
          <div className="base"></div>
          <div className="bowl">
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>

            <div className="snow"></div>
            <div className="ground"></div>

            <div className="something"></div>
          </div>
          <div className="bowl">
            <div className="reflection"></div>
          </div>
          <div className="base"></div>
        </div>

        <div className="MonthTitleDecember">{title}</div>
      </div>
    </div>
  );
}
