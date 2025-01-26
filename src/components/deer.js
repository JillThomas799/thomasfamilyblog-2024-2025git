import React from "react";
import './deer.css';

export default function Deer() { 
    return (
        <div>
      <svg className="deerAnimation" version="1.1" x="0" y="0" width="100%" height="100%" viewBox="0 0 100vw 100%">
      < g className="deer1"  xmlns="http://www.w3.org/2000/svg">  

<defs>
            {/* <linearGradient id="gradBodyDeer" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style= {{ stopColor:"#A48D6A", stopOpacity: 1}} />
                <stop offset="30%" style={{ stopColor:"#C2B280", stopOpacity: 1}} />
                <stop offset="40%" style={{ stopColor:"#A48D6A", stopOpacity: 1}} /> 
                <stop offset="90%" style={{ stopColor:"#C2B280", stopOpacity: 1}} />
                <stop offset="100%" style={{ stopColor:"#C2B280", stopOpacity:1}} /> 
        </linearGradient> */}

        {/* <linearGradient id="gradLegsDeer" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
            <stop offset="30%" style={{ stopColor:"#B87333", stopOpacity:1}} />
            <stop offset="50%" style={{ stopColor:"#5C4033", stopOpacity:1}} /> 
            <stop offset="60%" style={{ stopColor:"#B87333", stopOpacity:1}} />
            <stop offset="70%" style={{ stopColor:"#5C4033", stopOpacity:1}} /> 
            <stop offset="100%" style={{ stopColor:"white", stopOpacity:1}} /> 
    </linearGradient> */}

    <linearGradient id="gradHeadDeer" x1="10%" y1="0%" x2="30%" y2="100%">
        <stop offset="0%" style={{ stopColor:"black", stopOpacity:1}} />
        <stop offset="40%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
        <stop offset="50%" style={{ stopColor:"#5C4033", stopOpacity:1}} /> 
        <stop offset="60%" style={{ stopColor:"#B87333", stopOpacity:1}} />
        <stop offset="100%" style={{ stopColor:"white", stopOpacity:1}} /> 
</linearGradient>

<radialGradient id="gradEarsDeer" cx="50%" cy="60%" r="50%" fx="50%" fy="80%">
    <stop offset="0%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} />  
    <stop offset="99%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
  </radialGradient>


  <filter id="blur1" x="0" y="0">    
    <feGaussianBlur in="SourceGraphic" stdDeviation="3.4" />
  </filter>
  <filter id="blur2" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" />
  </filter>
  <filter id="blur3" x="0" y="0">    
    <feGaussianBlur in="SourceGraphic" stdDeviation="6.7" />
  </filter>
  <filter id="blur4" x="0" y="0">    
    <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
  </filter>

  <linearGradient id="gradBodyDeer" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" style={{ stopColor:"#786D68", stopOpacity:1}} />    
    <stop offset="10%" style={{ stopColor:"#C2B280", stopOpacity:1}} />
    <stop offset="85%" style={{ stopColor:"#BA8759", stopOpacity:1}} />
    <stop offset="100%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} />
    </linearGradient>

    <linearGradient id="gradNeckDeer" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" style={{ stopColor:"#786D68", stopOpacity:1}} />
    <stop offset="20%" style={{ stopColor:"#BA8759", stopOpacity:1}} />
    <stop offset="50%" style={{ stopColor:"#C2B280", stopOpacity:1}} />
     </linearGradient>

    {/* <linearGradient id="gradLegsDeer" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" style={{ stopColor:"white", stopOpacity:1}} />
    <stop offset="5%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} />
    <stop offset="10%" style={{ stopColor:"#BA8759", stopOpacity:1}} />
    <stop offset="85%" style={{ stopColor:"#C2B280", stopOpacity:1}} />
    <stop offset="100%" style={{ stopColor:"#786D68", stopOpacity:1}} />
     </linearGradient> */}

     <linearGradient id="gradLegsDeer" x1="0%" y1="0%" x2="0%" y2="100%">
     <stop offset="0%" style={{ stopColor:"#BA8759", stopOpacity:1}} />
     <stop offset="80%" style={{ stopColor:"#C2B280", stopOpacity:1}} />
    <stop offset="95%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} />
    <stop offset="95%" style={{ stopColor:"#786D68", stopOpacity:1}} />
    <stop offset="100%" style={{ stopColor:"#786D68", stopOpacity:1}} />
     </linearGradient>    

</defs>        

        <g className="deer" color="#BA8759"  transform="matrix(1.3 0 0 1.3 0 -300)">

        <g className="deerNeck">
        <rect id="deerNeck" x="102"  y="460" width="25" height="70" rx="15" ry="15" transform="translate(90,-10) rotate(10)" fill="url(#gradNeckDeer)" opacity="1.0" filter="url(#blur2)" /> This is the deer neck.
        </g>

          <g className="deerBody">
          {/* <path d="M 10 500 L 30 495 130 500 A 30 30 330 0 1 105 543 L 50 543 15 535 Z" fill="url(#gradBodyDeer)" opacity="1.0" filter="url(#blur2)" /> This is the deer body */}
             <path d="M 10 505 Q 30 490 130 505 A 30 30 330 0 1 105 543 L 105 543 17 543 Q 6 525 15 505 Z" fill="url(#gradBodyDeer)" opacity="1.0" filter="url(#blur2)" /> This is the deer body
             {/* <ellipse cx="15" cy="514" rx="7" ry="10" fill="#ECD0B8" filter="url(#blur2)" /> This is the white deer tail */}
             <ellipse cx="15" cy="514" rx="7" ry="10" fill="white" filter="url(#blur2)" /> This is the white deer tail
          </g>

          <g id="deerLegLeftRear">
          <path d="M 16 535 L 1 565 0 605 5 605 8 565 29 535 Z" fill="url(#gradLegsDeer)" opacity="0.9" filter="url(#blur2)"></path>
        </g>

        <g id="deerLegRightRear">
          <path d="M 28 535 L 18 565 27 605 32 605 25 565 44 535 Z" fill="url(#gradLegsDeer)" opacity="0.9" filter="url(#blur2)"></path>
        </g>

        {/* <g id="deerLegLeftFront">
        <path d="M 98 535 L 106 565 101 605 106 605 112 565 116 535 " fill="url(#gradLegsDeer)" opacity="0.8" filter="url(#blur2)"></path>
        </g> */}

        {/* <g id="deerLegRightFront">
          <path d="M 107 535 L 115 565 112 605 117 605 121 565 123 530 " fill="url(#gradLegsDeer)" opacity="0.9" filter="url(#blur2)"></path>
        </g> */}

        <g id="deerLegRightFront">
          <path d="M 100 535 L 111 565 105 605 117 605 121 565 123 530 " fill="url(#gradLegsDeer)" opacity="0.9" filter="url(#blur2)"></path>
        </g>
     
        <g className="deerBib">
          <path id="deerBib" d="M 111 500 A 7 18 10 1 1 126 500" fill="white" filter="url(#blur2)" ></path>
        </g>

        <g className="deerMuzzle"  style={{transform:"translate(380px, 57px) rotate(45deg)"}} >
          <rect x="116" y="483" height="10" width="10" rx="5" ry="5" fill="black" filter="url(#blur2)" opacity="0.8" />
        </g>

        <g id="deerEars" style={{transform:"translate(21px, 88px) scale(0.8)"}}>
            <path id="deerEarRight" d="M 100 462 A 8 11 -30 1 0 101 461" fill="url(#gradEarsDeer)" filter="url(#blur2)" opacity="1.0" ></path>
            <path id="deerEarLeft" d="M 135 475 A 8 11 40 1 0 133 471" fill="url(#gradEarsDeer)" filter="url(#blur2)" opacity="1.0" ></path></g>
        </g>

        <g id="deerEyesRight" style={{transform:"translate(-81px, 51px) rotate(-15deg)"}}>
          <ellipse id="deerEyeWhiteRight" cx="150" cy="315" rx="3.5" ry="4.5" fill="#ECD0B8" opacity="0.7" filter="url(#blur2)"></ellipse>
          <ellipse id="deerEyeRight" cx="150" cy="317" rx="3" ry="4" fill="#36454F" filter="url(#blur2)" opacity="0.9" ></ellipse>
          </g>
          <g id="deerEyesLeft" style={{transform:"translate(89px, -30px) rotate(15deg)"}}>
            <ellipse id="deerEyeWhiteLeft" cx="166" cy="315" rx="3.5" ry="4.5" fill="#ECD0B8" opacity="0.7" filter="url(#blur2)"></ellipse>
          <ellipse id="deerEyeLeft" cx="166" cy="317" rx="3" ry="4" fill="#36454F" opacity="0.9" filter="url(#blur2)" style={{transform:"rotate(-20deg,128,490)"}}></ellipse>
        </g> 

          </g>
        
                         
          {/* </g> Closing tag for deer */}
    
                 
  </svg>
        </div>
    );
};


