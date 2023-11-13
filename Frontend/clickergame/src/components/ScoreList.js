//styles
import '../styles/ScoreList.css';

export default function ScoreList (props){
    const spacer = "-----";
    return (
        <div className="scoreList">
            <h3 className="displayText">{props.rank} {spacer} {props.uInitials} {spacer} {props.score} {spacer} {props.numClicks}</h3>
        </div>
    );
}