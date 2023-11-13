//styles
import '../styles/ScoreList.css';

export default function ScoreList (props){
    return (
        <div>
            <h3 className="displayText">initials: {props.uInitials} score: {props.score} jello clicks: {props.numClicks}</h3>
        </div>
    );
}