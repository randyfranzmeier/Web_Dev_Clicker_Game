/***
 * Author: Randy Franzmeier
 * Date: 11-13-2023
 * This is a simple component that displays the
 * rules/game concept to the user.
 */
import '../styles/Rules.css';

export default function Rules() {
    //display the rules to the player
    return (
            <div className="rules">
                <h1>Game Concept:</h1>
                <ul>
                    <li>
                        <h2>click the jello as many times as possible</h2>
                    </li>
                    <li>
                        <h2>Buy power-ups from the jello store to unlock perks</h2>
                    </li>
                    <li>
                        <h2>Discover hidden feature to gain extra points</h2>
                    </li>
                    <li>
                        <h2>Purchase all items from the Jello store to win!</h2> 
                    </li>
                    <li>
                        <h2>Can you beat the high score?</h2>
                    </li>
                </ul>
            </div>
    );
}