/***
 * Author: Randy Franzmeier
 * Date: 11-13-2023
 * This is the Jello component where the jello, points, 
 * and background are displayed. All the functions that 
 * are called when the jello is clicked are in this file.
 */
import '../styles/Jello.css';
import React, { useEffect, useContext } from "react"; //hooks for functionality
import { JelloContext } from '../JelloContext';
import jelloImage from '../images/jello.png';

export default function Jello() {
    let jelloPicture = document.getElementById('jello'); //elements on the page
    let displayPoints = document.getElementById('points');
    let informUserToEnterInitials = document.getElementById('instructions');

    //gaining access to context object values and functions
    const { points, setPoints, clickRate, numClicks, setNumClicks,
        isGameDone } = useContext(JelloContext);

    /**
     * this @function bonusPoints() is called
     * whenever the user clicks the right side
     * of the mouse. The function awards the user
     * 5 points instead of one, while still 
     * incrementing the amount of clicks.
     */

    let bonusPoints = () => {
        setPoints(points + 5);
        setNumClicks(numClicks + 1);
    }

    /**
     * this @function useEffect() (which is really a hook)
     * is called everytime the page changes, and it checks
     * if the game is done. If it is, a message is displayed 
     * to the user and prompts them to save their score.
     */

    useEffect(() => { 
        if (isGameDone) {
            jelloPicture.style.visibility = 'hidden';
            displayPoints.textContent = "You won! Total points:  " + points;
            informUserToEnterInitials.textContent = "*Enter your initials to save your score*";
        }
    });

    /**
     * this @function handleClick() is called 
     * whenever the player clicks the jello. The
     * number of points added depend on the click
     * rate. Also, the number of clicks are updated.
     */

    let handleClick = () => {
        setPoints(points + clickRate);
        setNumClicks(numClicks + 1);
    }

    /**
     * this @function penalty() is called whenever the 
     * user drags the jello. It alerts them and then 
     * takes 50 points away from them. If they have less
     * than 50 points, their score is reset to 0.
     */

    let penalty = () => {
        alert("Don't steal the jello!!! Penalty applied!!!");
        points < 50 ? setPoints(0) : setPoints(points - 50);

    }

    //display the jello, while adding event handlers to the image
    return (
        <div className="jelloListener">
            <h1 id="points">JPOINTS: {points} </h1>
            <h1 id="instructions"></h1>
            <img id="jello" src={jelloImage} alt='jello' onClick={handleClick} onDragEnd={penalty} onAuxClick={bonusPoints} />
        </div>
    );
}

