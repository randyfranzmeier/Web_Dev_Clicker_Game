//This file renders the players score
import '../styles/Scores.css'
import { useContext, useState, useRef } from 'react';
import { JelloContext } from '../JelloContext';
import ScoreList from './ScoreList';

export default function Scores() {
    //document.getElementById('userInput').textContent = "test";
    const { points, numClicks, itemsLeft, isGameDone, setIsGameDone} = useContext(JelloContext);
    const [errorMsg, setErrorMsg] = useState("");
    let inputRef = useRef(null); 
    const [listOfScores, setListOfScores] = useState([]);
    let renderScores = document.getElementById("renderScores");

     async function postData () {
        //make sure the game is over
        if (isGameDone) { //*****error handling for input*****
            document.getElementById("inputArea").style.visibility = 'hidden';
            
           let gameStats = {"uInitials": inputRef.current.value,
                            "score": points,
                            "numClicks": numClicks};

            await fetch('http://localhost:3001/api/v1/addPlayerScore', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(gameStats)
            }).then(response =>{
                if(response.ok) {
                    getData(); //on success, display scores to the user
                }
            }).catch(() => {
                setErrorMsg("--Unable to save score--");
                 })
            }
            
            }
          
        
        //once done call getData() to update the list
    
    async function getData() {
        //call once on load (change to useEffect and empty dependency array?) and once the data is posted
        //get the data
        const data = await fetch('http://localhost:3001/api/v1/getPlayerScore', {
            method: "GET", //get data
            headers: {"Content-Type": "application/json"}
        }).catch(error => { console.log(error) });
        //console.log(JSON.stringify(data));
        if(data.ok) {
            let dataObj = Array.of(await data.json()); 
            console.log("array created, mapping each element")
             renderScores.textContent = dataObj.forEach(x => {
                <ScoreList 
                uInitials = {x.uInitials}
                score = {x.score}
                numClicks = {x.numClicks}
                />
                console.log("done mapping, here is the first object:", dataObj[0] );
            })
            // setListOfScores(dataObj.map(([key, scores]) =>(
            //     <ScoreList 
            //                key = {key}
            //                uInitials = {scores.uInitials}
            //                score = {scores.score}
            //                numClicks = {scores.numClicks}
            //     /> 
           // )));
            
        }

    }
    //use result variable or something to store respones in, then updating each time I post the data
    return (
        <div className="leaderBoard">
            <h1>Leaderboard </h1>
            <div id="inputArea">
            <h2>Enter your 3 initials </h2> <input id="userInput" type="text" maxLength={3} size={3} ref={inputRef}></input>
            <button type='submit' id="userInitials" onClick={postData}>Enter</button>
            </div>
            <h3>{errorMsg}</h3>
            <div id="renderScores">{listOfScores}</div>

        </div>
    )
}