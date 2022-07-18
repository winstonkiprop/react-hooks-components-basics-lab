import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}
function About(){
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  )
}

{/* write an <About> component here */}


function App() {
  return (
    <div>
      <NavBar />
        
      {/* add the <Home> component here */}
      {/* add your <About> component here */}
      <Home/>
          <App/>
    </div>
  );
}

export default App;
