import Navbar from './components/Navbar';
import Rules from './components/Rules';
import Jello from './components/Jello';
import Goals from './components/Goals';
import Store from './components/Store';
import Scores from './components/Scores';
import {JelloContext} from './JelloContext';
import React, {useState} from 'react';
import './styles/App.css';

function App() {
  
    const [points, setPoints] = useState(0);
    const [clickRate, setClickRate] = useState(1);
    const [numClicks, setNumClicks] = useState(0);
    const [itemsLeft, setItemsLeft] = useState(8);
    const [isGameDone, setIsGameDone] = useState(false);
    const [numAchievements, setNumAchievements] = useState(0);
    

  return (
    <div className="App">
      <JelloContext.Provider value={{points, setPoints, clickRate, setClickRate, numClicks, setNumClicks, 
        itemsLeft, setItemsLeft, isGameDone, setIsGameDone, numAchievements, setNumAchievements}}>

      <header className="App-header">
       <Navbar/>
      </header>
      <div className="container1">
        <Rules/>
        <Jello/>
        <Goals/>
      </div>

      <div className="container2">
        <div className="storeDisplayContainer"> 
        <Store/>
        </div>
        <div className="scoresDisplayContainer">
        <Scores/>
        </div>
      </div>
      
      </JelloContext.Provider>
    </div>
  );
}

export default App;
