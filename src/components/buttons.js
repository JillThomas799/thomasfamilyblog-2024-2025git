 import React from 'react'
import './buttons.css';

export default function Button(props) {
  return (
    <button id="button" title="Click here to open dropdown menu" onClick={props.onClick}>
      Monthly Blogs
    </button>
  );
};


