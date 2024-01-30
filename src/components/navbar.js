import React from 'react';

function Button(props) {
  return (
    <button id="button" title="Click here to open dropdown menu" onClick={props.onClick}>
      Menu
    </button>
  );
}

export default Button;




export function Navigation() { return (
  <button id="button" title="Click here to open dropdown menu" onclick={props.onClick}><span id="menuUnderline">Menu</span></button>


  // <div>
  //   <div div id="myDiv" style = {{visibility: "hidden"}} >
  //     <div div id="menu">
  //      
  //     </div>
  //   </div>

  

// export function NavigationMembers() {
//   return (
//     <>
//       <li><a className="Member" href = "indexbiojill" id="Jill" title="Click here to go to find out more about Jill" style={{color: "white"}}>Jill</a></li>
//     </>
//   );
// }
// href = "/indexbiojill/"
