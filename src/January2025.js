import React from "react";
import { Link } from "react-router-dom";
import './January2025.css';
import './January2025.scss';
import CatLennie from 'components/catlennie'
import Snowstorm from 'components/snowstorm'

export default function January2025() {
    return (
        <div>
            <div div className="January2025Header" > January 2025
               <button id="backbuttonDecember">
                        <Link to="/" className="backbuttonLink" style={{color:"black"}}>Back</Link>
                      </button>
<Snowstorm />
<CatLennie />
        </div>
        </div>
    );
};