import React from 'react';
import { Link } from "react-router-dom";

export default function May2024() {
  return (
    <div>
      <button id="backbutton">
          <Link to="/" className="backbuttonLink">Back</Link>
        </button>
      <h1>May 2024</h1>
    </div>
  )
}