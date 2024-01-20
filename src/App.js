
import './App.css';

function MyButton() {
       return (
         <button id="button" title="Click here to open dropdown menu" onclick="myFunction()"><span id="menuUnderline" >Menu</span></button>
       );
     }

function MyMenu() {
       return (
              <div id="menu">
                        <ul>
                                <li><a className="nav-link" href = "April_2024.html"  title = "Click here to go to April 2024 blogs">April 2024</a></li>
                                <li><a className="nav-link" href = "May_2024.html"  title = "Click here to go to May 2024 blogs">May 2024</a></li>
                                <li><a className="nav-link" href = "June_2024.html" id="menu" title = "Click here to go to June 2024 blogs">June 2024</a></li>
                        </ul>
              </div>
       );
}

function ProfileJill() {
  const user = {
    name: 'Jill',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
    };
    
    return (
      <>
      <h1>{user.name}</h1>
      <img
       className="avatar"
       src={user.imageUrl}
       alt={'Photo of ' + user.name}
        style={{
         width: user.imageSize,
         height: user.imageSize
       }}
  />
          </>
         )
}



export default function App() {
  return (
<body>
    <div className="App">
    <MyButton />
    <MyMenu />
    <h1 id="the_Thomas_Family_Blog">Thomas Family Blog</h1>
    <ProfileJill />
    </div>
</body>
  );
}


