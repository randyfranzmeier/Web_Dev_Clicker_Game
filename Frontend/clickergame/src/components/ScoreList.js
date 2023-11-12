//styles

export default function ScoreList (props){
    return (
        <div className="scores">
            <h3>{props.uInitials} {props.score} {props.numClicks}</h3>
        </div>
    );
}