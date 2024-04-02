import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css';

export default function Footer(props) {
  return (
    <footer className="footer">
        <ul>
        <li className="sendFeedback">
            <button className="buttonFooter" id="problemfeedback"><Link to="https://forms.gle/DFrwNqE4mH28M3LY6" target="_blank" title="Please complete and submit this form if this website is not displaying correctly on your device">Problem Feedback Form</Link></button>
        </li>
        </ul>
        </footer>
  );
};