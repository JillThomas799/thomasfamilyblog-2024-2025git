import React from "react";
import './deer.css';

export default function Deer() { 
    return (
        <div>
      <svg className="deerAnimation" version="1.1" x="0" y="0" width="100%" height="100%" viewBox="0 0 100vw 100%">
      < g className="deer1"  xmlns="http://www.w3.org/2000/svg">  

<defs>
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

     <linearGradient id="gradLegsDeer" x1="0%" y1="0%" x2="0%" y2="100%">
     <stop offset="0%" style={{ stopColor:"#BA8759", stopOpacity:1}} />
     <stop offset="80%" style={{ stopColor:"#C2B280", stopOpacity:1}} />
    <stop offset="100%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} />
    {/* <stop offset="95%" style={{ stopColor:"#786D68", stopOpacity:1}} />
    <stop offset="100%" style={{ stopColor:"#786D68", stopOpacity:1}} /> */}
     </linearGradient>    

</defs>        

        <g className="deer" color="#BA8759"  transform="matrix(1.3 0 0 1.3 0 -300)">

        <g className="deerNeck">
        <rect id="deerNeck" x="102"  y="460" width="25" height="70" rx="15" ry="15" transform="translate(90,-10) rotate(10)" fill="url(#gradNeckDeer)" opacity="1.0" filter="url(#blur2)" /> This is the deer neck.
        </g>

          <g className="deerBody">
             <path d="M 10 505 Q 30 490 130 505 A 30 30 330 0 1 105 543 L 105 543 17 543 Q 6 525 15 505 Z" fill="url(#gradBodyDeer)" opacity="1.0" filter="url(#blur2)" /> This is the deer body
             <ellipse cx="15" cy="514" rx="7" ry="10" fill="white" filter="url(#blur2)" /> This is the white deer tail
          </g>

          <g id="deerLegLeftRear">
          <path d="M 16 535 L 5 565 4 605 13 605 16 565 38 535 Z" fill="url(#gradLegsDeer)" opacity="0.9" filter="url(#blur2)"></path>
        </g>

        <g id="deerLegRightRear">
          <path d="M 28 535 L 18 565 27 605 36 605 29 565 48 535 Z" fill="url(#gradLegsDeer)" opacity="0.9" filter="url(#blur2)"></path>
        </g>

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

        
        
        <g className="deer2" xmlns="http://www.w3.org/2000/svg"> This is deer 2 
        <defs>
    <linearGradient id="gradHeadDeer2" x1="10%" y1="0%" x2="30%" y2="100%">
        <stop offset="0%" style={{ stopColor:"black", stopOpacity:1}} />
        <stop offset="40%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
        <stop offset="50%" style={{ stopColor:"#5C4033", stopOpacity:1}} /> 
        <stop offset="60%" style={{ stopColor:"#B87333", stopOpacity:1}} />
        <stop offset="100%" style={{ stopColor:"white", stopOpacity:1}} /> 
</linearGradient>

<radialGradient id="gradEarsLeftDeer2" cx="50%" cy="60%" r="50%" fx="50%" fy="80%">
    <stop offset="0%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} />  
    <stop offset="99%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
  </radialGradient>

  <radialGradient id="gradEarsRightDeer2" cx="50%" cy="60%" r="50%" fx="50%" fy="80%">
    <stop offset="0%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} />  
    <stop offset="60%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
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

  <linearGradient id="gradBodyDeer2" x1="0%" y1="0%" x2="0%" y2="100%">  
  <stop offset="0%" style={{ stopColor:"#786D68", stopOpacity:1}} /> 
    <stop offset="30%" style={{ stopColor:"#C2B280", stopOpacity:1}} />
    <stop offset="85%" style={{ stopColor:"#BA8759", stopOpacity:1}} />
    {/* <stop offset="100%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} /> */}
    </linearGradient>

    <linearGradient id="gradNeckDeer2" x1="100%" y1="0%" x2="0%" y2="0%">
    <stop offset="0%" style={{ stopColor:"#786D68", stopOpacity:1}} />
    <stop offset="50%" style={{ stopColor:"#C2B280", stopOpacity:1}} />
     </linearGradient>

     <linearGradient id="gradLegsDeer2" x1="0%" y1="0%" x2="0%" y2="100%">
     <stop offset="0%" style={{ stopColor:"#BA8759", stopOpacity:1}} />
     <stop offset="80%" style={{ stopColor:"#C2B280", stopOpacity:1}} />
    <stop offset="100%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} />
     </linearGradient>    

</defs>    

        <g className="deer2Neck">
        <rect id="deer2Neck" x="900"  y="460" width="36" height="100" rx="15" ry="15" transform="translate(-100,130) rotate(-8)"  fill="url(#gradNeckDeer2)" opacity="1.0" filter="url(#blur2)" /> This is the deer neck.
        </g>

        <g id="deer2Ears" style={{transform:"translate(730px, -86px) scale(1.15)"}}>
            <path id="deer2EarRight" d="M 100 462 A 8 11 -30 1 0 101 461" fill="url(#gradEarsRightDeer2)" filter="url(#blur2)" opacity="1.0" ></path>
            <path id="deer2EarLeft" d="M 135 475 A 8 11 40 1 0 133 471" fill="url(#gradEarsLeftDeer2)" filter="url(#blur2)" opacity="1.0" ></path></g>

        <g id="deer2EyesLeft" style={{transform:"translate(786px, 129px) rotate(12deg)"}}>
            <ellipse id="deer2EyeWhiteLeft" cx="166" cy="315" rx="4.1" ry="5.2" fill="#ECD0B8" opacity="0.7" filter="url(#blur2)"></ellipse>
          <ellipse id="deer2EyeLeft" cx="166" cy="317" rx="3.7" ry="4.5" fill="#36454F" opacity="0.9" filter="url(#blur2)" style={{transform:"rotate(-20deg,128,490)"}}></ellipse>
        </g> 

        <g id="deer2EyesRight" style={{transform:"translate(634px, 207px) rotate(-15deg)"}}>
          <ellipse id="deer2EyeWhiteRight" cx="150" cy="315" rx="4.5" ry="5.5" fill="#ECD0B8" opacity="0.7" filter="url(#blur2)"></ellipse>
          <ellipse id="deer2EyeRight" cx="150" cy="317" rx="3.5" ry="4.5" fill="#36454F" filter="url(#blur2)" opacity="0.9" ></ellipse>
          </g>

        <g className="deer2Body">  
        <path d="M 900 500 Q 950 510 1000 500 A 30 30 240 0 1 1000 570 L 900 570 Q 840 550 900 500" fill="url(#gradBodyDeer2)" opacity="1.0" filter="url(#blur2)" /> This is the deer body
          </g>

        <g className="deer2Muzzle"  style={{transform:"translate(1257px, -155px) rotate(45deg) scale(1.5)"}} >
          <rect x="116" y="483" height="10" width="8" rx="5" ry="5" fill="black" filter="url(#blur2)" opacity="0.7" />
        </g>

        <g className="deer2Bib">
          <path id="deer2Bib" d="M 113 496 A 6 10 0 0 0 124 495" style={{transform:"translate(731px, -78px) scale(1.15)"}} fill="white" filter="url(#blur2)" ></path>
        </g>

        <g id="deer2LegRightFront">
          <path d="M 876 551 L 870 613 865 653 874 653 882 613 901 568 " fill="url(#gradLegsDeer2)" opacity="0.9" filter="url(#blur2)"></path>
        </g>

        <g id="deer2LegLeftFront">
          <path d="M 908 561 L 909 613 910 653 919 653 925 613 930 568 " fill="url(#gradLegsDeer2)" opacity="0.9" filter="url(#blur2)"></path>
        </g>

        <g  id="deer2LegRightRear" >
          <path d="M 950 550 Q 970 590 965 610 Q 950 650 962 650 L 962 650 Q 984 600 987 550 " fill="url(#gradLegsDeer2)" opacity="0.9" filter="url(#blur2)"></path>
        </g>
        <g  id="deer2LegLeftRear">
          <path d="M 995 550 Q 1003 580 1002 610 Q 1000 630 1000 650 L 1009 650 Q 1012 630 1027 558"  fill="url(#gradLegsDeer2)" opacity="0.9" filter="url(#blur2)"></path>
        </g>
        </g>




      
        <g className="deer3" xmlns="http://www.w3.org/2000/svg"> This is deer 3

        <defs>
<radialGradient id="gradEarsLeftDeer3" cx="56%" cy="50%" r="48%" fx="35%" fy="90%">
    <stop offset="0%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
    <stop offset="10%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
    <stop offset="50%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} /> 
    <stop offset="70%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} />   
    <stop offset="100%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
  </radialGradient>

  <radialGradient id="gradEarsRightDeer3" cx="40%" cy="60%" r="45%" fx="70%" fy="70%">
    <stop offset="0%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
    <stop offset="10%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
    <stop offset="50%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} /> 
    <stop offset="90%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} />   
    <stop offset="100%" style={{ stopColor:"#5C4033", stopOpacity:1}} />
  </radialGradient>


  <filter id="blur1" x="0" y="0">    
    <feGaussianBlur in="SourceGraphic" stdDeviation="3.4" />
  </filter>
  <filter id="blur2" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" />
    </filter>
    <filter id="blur5" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
  </filter>
  <filter id="blur3" x="0" y="0">    
    <feGaussianBlur in="SourceGraphic" stdDeviation="6.7" />
  </filter>
  <filter id="blur4" x="0" y="0">    
    <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
  </filter>
  <filter id="blur5" x="0" y="0">    
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.6" />
  </filter>

  <linearGradient id="gradBodyADeer3" x1="0%" y1="40%" x2="45%" y2="100%">  
    <stop offset="0%" style={{ stopColor:"#786D68", stopOpacity:1}} />
    <stop offset="80%" style={{ stopColor:"#C2B280", stopOpacity:1}} />
  </linearGradient>

  <linearGradient id="gradBodyBDeer3" x1="0%" y1="0%" x2="100%" y2="0%"> 
  <stop offset="0%" style={{ stopColor:"#786D68", stopOpacity:1}} /> 
    <stop offset="60%" style={{ stopColor:"#C2B280", stopOpacity:1}} />
    <stop offset="80%" style={{ stopColor:"#BA8759", stopOpacity:1}} />
    </linearGradient>

  <radialGradient id="gradNeckBibDeer3" cx="0%" cy="100%" x2="23%" y2="100%">
    <stop offset="0%" style={{ stopColor:"white", stopOpacity:1}} />
    <stop offset="40%" style={{ stopColor:"#C2B280", stopOpacity:1}} />    
     </radialGradient>  

     <linearGradient id="gradLegsDeer3" x1="0%" y1="0%" x2="0%" y2="100%">
     {/* <stop offset="0%" style={{ stopColor:"#BA8759", stopOpacity:1}} /> */}
     <stop offset="0%" style={{ stopColor:"#C2B280", stopOpacity:1}} />
     <stop offset="50%" style={{ stopColor:"#786D68", stopOpacity:1}} />
     <stop offset="90%" style={{ stopColor:"#C2B280", stopOpacity:1}} />
    <stop offset="100%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} />
     </linearGradient>    

     <linearGradient id="gradHeadDeer3" x1="0%" y1="0%" x2="0%" y2="100%"> 
     <stop offset="0%" style={{ stopColor:"#786D68", stopOpacity:1}} />
     <stop offset="10%" style={{ stopColor:"#786D68", stopOpacity:1}} />  
    <stop offset="40%" style={{ stopColor:"#C2B280", stopOpacity:1}} />
    <stop offset="70%" style={{ stopColor:"#C2B280", stopOpacity:1}} />
    <stop offset="80%" style={{ stopColor:"#f3e2d6", stopOpacity:1}} />
    <stop offset="80%" style={{ stopColor:"white", stopOpacity:1}} />
    <stop offset="100%" style={{ stopColor:"white", stopOpacity:1}} />

    </linearGradient>

</defs>   

<g id="deer3LegRightFront">
          <path d="M 562 399 L 551 453 542 500 551 500 564 453 577 418 " fill="url(#gradBodyADeer3)" opacity="0.9" filter="url(#blur2)"></path>
        </g>

        <g id="deer3LegLeftFront">
          <path d="M 590 407 L 594 458 598 508 607 508 608 458 612 410 " fill="url(#gradLegsDeer3)" opacity="0.9" filter="url(#blur2)"></path>
        </g>

        <g id="deer3LegLeftRear">
          <path d="M 620 410 L 635 458 633 505 642 505 647 458 643 410" fill="url(#gradLegsDeer3)" opacity="0.9" filter="url(#blur2)"></path>
        </g>

        <g id="deer3LegRightRear">
          <path d="M 654 390 Q 665 408 670 438 L 668 493 678 493 678 473 684 418 Q 684 398 689 375 Q 665 393 654 403 " fill="url(#gradLegsDeer3)" opacity="0.9" filter="url(#blur2)"></path> 
        </g>
      
      <g className="deer3Body" style={{transform:"translate(-45px, 66px) rotate(-7deg)"}}>  
        <path d="M 573 350 Q 600 370 670 348 A 30 30 25 0 1 670 410 Q 647 435 573 428 Q 553 415  560 388" fill="url(#gradBodyBDeer3)" opacity="1.0" filter="url(#blur2)" /> This is the deer body
        <path d="M 573 350 Q 600 370 670 348 A 30 30 25 0 1 670 410 Q 647 435 573 428 Q 553 415  560 388" fill="url(#gradBodyADeer3)" opacity="0.6" filter="url(#blur2)" /> This is the deer body with the 2nd color gradient overlaid.
          </g>

        <g className="deer3Head">
          {/* <ellipse cx="577" cy="340" rx="19" ry="27" fill="url(#gradHeadDeer3)" opacity="0.95" filter="url(#blur2)" /> */}
          <rect x="560" y="306"  width="35" height="59" rx="30" ry="30" fill="url(#gradHeadDeer3)" opacity="0.95" filter="url(#blur2)" />
        </g>

        <g id="deer3Ears" style={{transform:"translate(433px, -226px) scale(1.15)"}}>
            <path id="deer3EarRight" d="M 106 457 A 8 12 -20 1 0 111 460" fill="url(#gradEarsRightDeer3)" filter="url(#blur2)" opacity="1.0" ></path>
            <path id="deer3EarLeft" d="M 139 475 A 8.5 12 30 1 0 137 475" fill="url(#gradEarsLeftDeer3)" filter="url(#blur2)" opacity="1.0" ></path></g>
               

        <g id="deer3EyesRight" style={{transform:"translate(340px, 66px) rotate(-15deg)"}} filter="url(#blur2)">
          <ellipse id="deer3EyeWhiteRight" cx="150" cy="315" rx="3.5" ry="4.5" fill="#ECD0B8" filter="url(#blur2)" opacity="0.7" ></ellipse>
          <ellipse id="deer3EyeRight" cx="150" cy="317" rx="3" ry="4.5" fill="#36454F"  opacity="0.9" ></ellipse>
          </g>
          <g id="deer3EyesLeft" style={{transform:"translate(510px, -15px) rotate(15deg)"}} filter="url(#blur2)">
            <ellipse id="deer3EyeWhiteLeft" cx="166" cy="315" rx="3.5" ry="4.5" fill="#ECD0B8" opacity="0.7" filter="url(#blur2)"></ellipse>
          <ellipse id="deer3EyeLeft" cx="166" cy="317" rx="3" ry="4.5" fill="#36454F" opacity="0.9" style={{transform:"rotate(-20deg,128,490)"}}></ellipse>
        </g> 

<g className="deer3Muzzle"  style={{transform:"translate(968px, -294px) rotate(45deg) scale(1.5)"}} >
          <rect x="116" y="483" height="10" width="8" rx="5" ry="5" fill="black" filter="url(#blur5)" opacity="0.7" />
        </g>

        {/* <g className="deer3Bib">
          <path id="deer3Bib" d="M 113 496 A 6 10 0 0 0 124 495" style={{transform:"translate(731px, -78px) scale(1.15)"}} fill="white" filter="url(#blur2)" ></path>
        </g> */}
        </g>

        {/* <g className="treeFeb1"> 
          <rect id="treeTrunk" x="50" y="500" width="100" height="3" rx="15" ry="15" style={{transform:"translate(250px, 50px) rotate(25deg)"}} opacity="0.7" fill="black"></rect>
        </g> */}
  </svg>
        </div>
    );
};


