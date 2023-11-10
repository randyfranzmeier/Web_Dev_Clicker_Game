import '../styles/Jello.css';
import React, { useState, useEffect, useContext } from "react";
import { JelloContext } from '../JelloContext';
import jelloImage from '../images/jello.png';

export default function Jello() {
    let jelloPicture = document.getElementById('jello');
    let displayPoints = document.getElementById('points');
    let informUserToEnterInitials = document.getElementById('instructions');
    const {points, setPoints, clickRate, setClickRate, numClicks, setNumClicks,
         itemsLeft, setItemsLeft, isGameDone, setIsGameDone} = useContext(JelloContext);
    

let bonusPoints = () => {
    setPoints(points + 5);
    setNumClicks(numClicks +1);
    }
    
    useEffect(()=>{ //only use useEffect to check if achievements have been met
        if(isGameDone) {
            jelloPicture.style.visibility = 'hidden';
            displayPoints.textContent = "You won! Total points:  " + points;
            informUserToEnterInitials.textContent = "*Enter your initials to save your score*";
        }
        });//////////////////////////////////////////
    
    
    let handleClick = () => {
        setPoints(points + clickRate);
        setNumClicks(numClicks + 1);
    }

let penalty = () =>{
    alert("Don't steal the jello!!! Penalty applied!!!");
    points < 50? setPoints(0): setPoints(points - 50);
   
}

    return (
        <div className="jelloListener">
                <h1 id="points">JPOINTS: {points} </h1>
                <h1 id="instructions"></h1>
                <img id="jello" src={jelloImage} alt='jello' onClick={handleClick} onDragEnd={penalty} onAuxClick={bonusPoints}/>
            </div>
    );
}

