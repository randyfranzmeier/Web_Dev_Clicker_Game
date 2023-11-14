/***
 * Author: Randy Franzmeier
 * Date: 11-13-2023
 * This is the parent component. In other
 * words, it is the component that renders all the other 
 * components to formulate a page. The nice thing about
 * this framework (react) is that its modular, and if a part of
 * a page has an error, it is easier to debug.
 */
import Navbar from './components/Navbar';
import Rules from './components/Rules';
import Jello from './components/Jello';
import Goals from './components/Goals';
import Store from './components/Store'; 
import Scores from './components/Scores';//import components that are to be rendered on this page
import {JelloContext} from './JelloContext'; //import context of jello properties
import React, {useState} from 'react'; //import useState hook as well as React
import './styles/App.css'; //style the page

/**
 * This @function App() is a component that
 * @returns a page full of child components.
 * It also gives all the components nested in 
 * the JelloContext.provider access to variables
 * within the context object.
 */

function App() {
  
    /**these are react hooks that are basically 
    shorthand getters and setters. I am declaring them
    here so the child components can get and set values
    as needed */
    const [points, setPoints] = useState(0);
    const [clickRate, setClickRate] = useState(1);
    const [numClicks, setNumClicks] = useState(0);
    const [itemsLeft, setItemsLeft] = useState(8);
    const [isGameDone, setIsGameDone] = useState(false);
    const [numAchievements, setNumAchievements] = useState(0);
    
  //notice I'm wrapping everything in a div element, as well as
  //using other div/header elements to style the page
  return (
    <div className="App">
      {/*Everything wrapped in this tag gets access to these values */}
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

export default App; //make sure this component can be accessed by index.js
