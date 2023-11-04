import '../styles/Goals.css';
import React, { useState, useEffect, useContext } from "react";
import { JelloContext } from '../JelloContext';

export default function Goals(){

    const {points, setPoints, numClicks, setNumClicks, itemsLeft, setItemsLeft} = useContext(JelloContext);
       
       let goal1 = document.getElementById('goal1');
       let goal2 = document.getElementById('goal2');
       let goal3 = document.getElementById('goal3');
       let goal4 = document.getElementById('goal4');
       let goal5 = document.getElementById('goal5');
       let goal6 = document.getElementById('goal6');
    
        /** Each time the points change, this function is called; it checks if any of the 6 goals have been met. */
        
    useEffect(()=>{
        if (points >= 10) {
            goal1.style.color = "green"; /**notice that the style will change to green, showing the task is complete */
        }
        if (itemsLeft <= 4) {
            goal2.style.color = "green";
        }
        if (numClicks >= 20) {
            goal3.style.color = "green";
        }
        if (points >= 10000) {
            goal4.style.color = "green";
        }
        if (itemsLeft === 0) {
            goal5.style.color = "green";
        }
        if (points >= 50000) {  /**Once this criteria is achieved, the game is over.*/
            // observerObject.stop(); //stop listening for changes where the points are displayed
            // gameObject.keepAddingPoints = false; //stop adding points
             goal6.style.color = "green";
            // gameObject.displayWinMessage(); //displays special win message to user
        }
   })


    // async function displayWinMessage() {
    //     await this.waitNumSeconds(2000);
    //     this.jello.style.visibility = 'hidden';
    //     this.displayPoints.textContent = "Congrats, You win!!!";
    //     this.points = 0;
    // }
    

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
                        <h2 id="goal6">Reach 50,000 points!</h2>
                    </li>
                </ul>
            </div>
    );
    }
