import React from "react";
import "./buttons.css";

export default function Button(props) {
  return (
    <div>
      <button
        id="button"
        title="Click here to open dropdown menu"
        onClick={props.onClick}
      >
        <div>Blogs: Monthly & Expedition</div>
      </button>
    </div>
  );
}
