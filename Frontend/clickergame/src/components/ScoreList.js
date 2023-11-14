/***
 * Author: Randy Franzmeier
 * Date: 11-13-2023
 * This is a child component that recieves 
 * data in the props object and maps the 
 * corresponding data each time it is called
 */
import '../styles/ScoreList.css';

export default function ScoreList (props){
    const spacer = "-----"; //so the items are spaced out
    //return an individual score list
    return (
        <div className="scoreList">
            <h3 className="displayText">{props.rank} {spacer} {props.uInitials} {spacer} {props.score} {spacer} {props.numClicks}</h3>
        </div>
    );
}