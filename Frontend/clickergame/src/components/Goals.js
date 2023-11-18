/***
 * Author: Randy Franzmeier
 * Date: 11-13-2023
 * This is the Goals component where the goals are
 * displayed to the user and if they're met, they turn 
 * a different color (green or gold).
 */
import '../styles/Goals.css';
import React, { useEffect, useContext } from "react"; //react hooks
import { JelloContext } from '../JelloContext'; //need access to context object values

export default function Goals() {

    const { points, numClicks, itemsLeft } = useContext(JelloContext); //need context object values

    let goal1 = document.getElementById('goal1');
    let goal2 = document.getElementById('goal2');
    let goal3 = document.getElementById('goal3');
    let goal4 = document.getElementById('goal4');
    let goal5 = document.getElementById('goal5');
    let goal6 = document.getElementById('goal6'); //elements that correspond to each goal

    /**
     * this @function useEffect() (technically a react hook) is
     * called whenever the page changes, and checks if the conditions
     * have been met. If they have, the text color is changed so the 
     * player knows they met that criteria.
     */

    useEffect(() => {
        if (points >= 1000) {
            goal1.style.color = "green"; //notice that the style will change to green, showing the task is complete 
        }
        if (itemsLeft <= 4) {
            goal2.style.color = "green";
        }
        if (numClicks >= 200) {
            goal3.style.color = "green";
        }
        if (points >= 10000) {
            goal4.style.color = "green";
        }
        if (itemsLeft === 0) { //Once this criteria is achieved, the game is over.
            goal5.style.color = "gold";
        }
        if (points >= 20000) {  
            goal6.style.color = "green";
        }
    })
    //displays the list of achievements 
    return (
        <div className="achievements">
            <h1>Goals to accomplish</h1> <br />
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
