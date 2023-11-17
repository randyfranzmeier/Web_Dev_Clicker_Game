/***
 * Author: Randy Franzmeier
 * Date: 11-13-2023
 * This is a child component that recieves 
 * data in the props object and maps the 
 * corresponding data each time it is called
 */
import '../styles/ScoreList.css';

export default function ScoreList (props){
    //return an individual score list
    return (
        <div className="scoreList">
            <tr className="displayText">
                <td>{props.rank}</td>
                <td>{props.uInitials}</td>
                <td>{props.score}</td>
                <td>{props.numClicks}</td>
            </tr>
        </div>
    );
}