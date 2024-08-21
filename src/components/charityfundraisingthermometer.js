import React from 'react'
import './charityfundraisingthermometer.css';

export default function HWPThermometer() {
  return (
    <div>

<div className="chartWrapper">
  <ul className="chartY">
  <li>100%</li>
  <li>90%</li>
  <li>80%</li>
  <li>70%</li>
  <li>60%</li>
  <li>50%</li>
  <li>40%</li>
  <li>30%</li>
  <li>20%</li>
  <li>10%</li>
  <li>0%</li>
   </ul>

  <ul className="chartX">
    <ul className="chartX1"></ul>
  </ul>

  <ul className="chartLabels">
  <li> 90.18% Completed by August 18th 2024</li>
  {/* <li>73.93% Completed by August 3rd 2024</li> */}
  {/* <li>July 13th 2024 - 46.9%</li>
  <li>July 7th 2024 - 31.9%</li>
  <li>July 6th 2024 -  24.76%</li>
  <li>June 30th 2024 - 17.62%</li>
  <li>June 29th 2024 - 10.83%</li>
  <li>June 1st 2024 - 6.07%</li>
  <li>May 31st 2024 - 0%</li> */}
  </ul>

</div>
</div>

  );
};
