function MyButton() {
  return (
    <button id="button" title="Click here to open dropdown menu" onclick="myFunction()"><span id="menuUnderline" >Menu</span></button>
  );
}

export default function MyApp() {
  return (
    <div>
      <MyButton />
      <h1>Thomas Family Blog</h1> 
    </div>
  );
}