import Navbar from './components/Navbar';
import Rules from './components/Rules';
import Jello from './components/Jello';
import Goals from './components/Goals';
import Store from './components/Store';
import {JelloContext} from './JelloContext';
import React, {useState} from 'react';
import './styles/App.css';

function App() {
  
    const [points, setPoints] = useState(0);
    const [isDoubleClick, setIsDoubleClick] = useState(false);
    const [isQuadClick, setIsQuadClick] = useState(false);
    const [isMegaClick, setIsMegaClick] = useState(false);
    const [numClicks, setNumClicks] = useState(0);
    const [itemsLeft, setItemsLeft] = useState(8);
    const [isGameDone, setIsGameDone] = useState(false);
    //keep looping variable?
    

  return (
    <div className="App">
      <JelloContext.Provider value={{points, setPoints, isDoubleClick, setIsDoubleClick, isQuadClick, setIsQuadClick,
      isMegaClick, setIsMegaClick, numClicks, setNumClicks, itemsLeft, setItemsLeft, isGameDone, setIsGameDone}}>

      <header className="App-header">
       <Navbar/>
      </header>
      <div className="container1">
        <Rules/>
        <Jello/>
        <Goals/>
      </div>

      <div>
        <Store/>
      </div>
      
      </JelloContext.Provider>
    </div>
  );
}

export default App;
