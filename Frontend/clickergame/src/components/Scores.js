//This file renders the players score
import '../styles/Scores.css'
import { useContext, useState, useRef, useEffect } from 'react';
import { JelloContext } from '../JelloContext';
import ScoreList from './ScoreList';

export default function Scores() {
    //document.getElementById('userInput').textContent = "test";
    const { points, numClicks, itemsLeft, isGameDone, setIsGameDone} = useContext(JelloContext);
    const [errorMsg, setErrorMsg] = useState("");
    let inputRef = useRef(null); 
    const [listOfScores, setListOfScores] = useState([]);
    const test = [{uInitials: "rrf", score: 55, numClicks: 13}];
    //let renderScores = document.getElementById("renderScores");
    //let scoreList = [];

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
        const response = await fetch('http://localhost:3001/api/v1/getPlayerScore', {
            method: "GET", //get data
            headers: {"Content-Type": "application/json"}
        }).catch(error => { console.log(error) });
        //console.log(JSON.stringify(data));
        if(response.ok) {
            let dataObj = await response.json();
            //console.log("data before conversion to array: ", dataObj);
            const dataArr = Array.from(dataObj);
            setListOfScores(dataArr);
            console.log("list of scores: ", listOfScores);
            //console.log("copied scoreList: ",scoreList);
            //console.log("array created, mapping each element", typeof(dataObj));
            //console.log("dataArr:", dataArr);
            //console.log("done mapping, here is the first object:", dataArr[0] );            
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

            {/* {test.forEach((obj) => {
                    <ScoreList 
                    uInitials = {obj.uInitials}
                    score = {obj.score}
                    numClicks = {obj.numClicks} />})
                } */}

                {test.map(obj => { //or [key, obj]
                    <ScoreList 
                    uInitials = {obj.uInitials}
                    score = {obj.score}
                    numClicks = {obj.numClicks} />})
                }           
        </div>
    )
}