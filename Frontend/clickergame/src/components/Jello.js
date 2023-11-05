import '../styles/Jello.css';
import React, { useState, useEffect, useContext } from "react";
import { JelloContext } from '../JelloContext';
import jelloImage from '../images/jello.png';

export default function Jello() {
    let jelloPicture = document.getElementById('jello');
    let displayPoints = document.getElementById('points');
    const {points, setPoints, isDoubleClick, setIsDoubleClick, isQuadClick, setIsQuadClick, isMegaClick, setIsMegaClick, 
        numClicks, setNumClicks, itemsLeft, setItemsLeft, isGameDone, setIsGameDone} = useContext(JelloContext);
    

let bonusPoints = () => {
    setPoints(points + 5);
    }
    
    useEffect(()=>{ //only use useEffect to check if achievements have been met
        if(isGameDone) {
            jelloPicture.style.visibility = 'hidden';
            displayPoints.textContent = "You Finished! Total points:  " + points;
        }
        });
    
    
    let handleClick = () => {
        //setPoints(points + 1);
        if (isDoubleClick) {
            if (isQuadClick) {
                if (isMegaClick) {
                    setPoints(points + 50);
                }
                else {
                    setPoints(points + 4)
                }
            }
            else {
                 setPoints(points + 2);
            }
        }
        else {
            setPoints(points + 1);
        }
        setNumClicks(numClicks + 1);
    }

let penalty = () =>{
    alert("Don't steal the jello!!! Penalty applied!!!");
    points < 50? setPoints(0): setPoints(points - 50);
   
}

    return (
        <div className="jelloListener">
                <h1 id="points">JPOINTS: {points} </h1>
                <img id="jello" src={jelloImage} alt='jello' onClick={handleClick} onDragEnd={penalty} onAuxClick={bonusPoints}/>
            </div>
    );
}

