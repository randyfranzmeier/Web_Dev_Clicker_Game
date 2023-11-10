import '../styles/Goals.css';
import React, { useState, useEffect, useContext } from "react";
import { JelloContext } from '../JelloContext';

export default function Goals(){

    const {points, numClicks, itemsLeft} = useContext(JelloContext);
       
       let goal1 = document.getElementById('goal1');
       let goal2 = document.getElementById('goal2');
       let goal3 = document.getElementById('goal3');
       let goal4 = document.getElementById('goal4');
       let goal5 = document.getElementById('goal5');
       let goal6 = document.getElementById('goal6');
    
        /** Each time the points change, this function is called; it checks if any of the 6 goals have been met. */
        
    useEffect(()=>{
        if (points >= 1000) {
           // setNumAchievements(numAchievements + 1);
            goal1.style.color = "green"; /**notice that the style will change to green, showing the task is complete */
        }
        if (itemsLeft <= 4) {
            //setNumAchievements(numAchievements + 1);
            goal2.style.color = "green";
        }
        if (numClicks >= 200) {
            //setNumAchievements(numAchievements + 1);
            goal3.style.color = "green";
        }
        if (points >= 10000) {
            //setNumAchievements(numAchievements + 1);
            goal4.style.color = "green";
        }
        if (itemsLeft === 7) {
            //setNumAchievements(numAchievements + 1);
            goal5.style.color = "gold";
        }
        if (points >= 20000) {  /**Once this criteria is achieved, the game is over.*/
            // setNumAchievements(numAchievements + 1);
             goal6.style.color = "green";
        }
   })////////////////////////////////////////////

    return (
        <div className="achievements">
                <h1>Goals to accomplish</h1> <br/>
                <ul>
                    <li>
                        <h2 id="goal1">Reach 1,000 points!</h2>
                    </li>
                    <li>
                        <h2 id="goal2">Purchase 4 items from the jello store</h2>
                    </li>
                    <li>
                        <h2 id="goal3">Click the jello 200 times</h2>
                    </li>
                    <li>
                        <h2 id="goal4">Reach 10,000 points</h2>
                    </li>
                    <li>
                        <h2 id="goal5">Clean the jello store out!</h2>
                    </li>
                    <li>
                        <h2 id="goal6">Reach 20,000 points!</h2>
                    </li>
                </ul>
            </div>
    );
    }
