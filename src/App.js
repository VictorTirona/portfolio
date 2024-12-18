import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';

function App() {
  const [mousePosition, setMousePosition] = React.useState({
    x: -1000,
    y: -1000
  })

  document.body.style.setProperty("--mouse-x",`${mousePosition.x}px`)
  document.body.style.setProperty("--mouse-y",`${mousePosition.y}px`)

  React.useEffect(function(){
    console.log("you a bitch")

    function updateMousePosition(clientWindow){
      //the input for clientWindow is obtained from addEventListener. It is a callback function!
      setMousePosition(function(){
        return(
          {
            x:clientWindow.pageX,
            y:clientWindow.pageY
          }
        )
      })
    }
    window.addEventListener ("mousemove", updateMousePosition )
  },[])
  
  return (
    <div className="App">
      <Header/>
      <Main/>
      
    </div>
  );
}

export default App;
