//This file renders the players score
import '../styles/Scores.css'
import { useContext, useState, useRef, useEffect } from 'react';
import { JelloContext } from '../JelloContext';
import ScoreList from './ScoreList.js';

export default function Scores() {
    //document.getElementById('userInput').textContent = "test";
    const { points, numClicks, itemsLeft, isGameDone, setIsGameDone } = useContext(JelloContext);
    const [errorMsg, setErrorMsg] = useState("");
    let inputRef = useRef(null);
    const [listOfScores, setListOfScores] = useState([]);
    const [lbTitle, setLbTitle] = useState("");
    const testObj = { "uInitials": "rrf", "score": 54, "numClicks": 13 };
    let mapKey = 1; //when I map each object in the array
    const [dataEntered, setDataEntered] = useState(false);

    async function postData() {
        //make sure the game is over

        if (isGameDone && dataEntered === false && inputRef.current.value.length === 3) { //*****error handling for input*****
           setDataEntered(true); //only alows user to enter data once per round
       
            let gameStats = {
                "uInitials": inputRef.current.value,
                "score": points,
                "numClicks": numClicks
            };

            await fetch('http://localhost:3001/api/v1/addPlayerScore', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(gameStats)
            }).then(response => {
                if (response.ok) {
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
            headers: { "Content-Type": "application/json" }
        }).catch(error => { console.log(error) });
        //console.log(JSON.stringify(data));
        if (response.ok) {
            let dataObj = await response.json();
            let dataArr = Array.from(dataObj).sort(({ score: x }, { score: y }) => y - x); //sort in descending order
            setLbTitle("Rank--Initials--Score--Clicks");
            setListOfScores(dataArr);
        }

    }
    //use result variable or something to store respones in, then updating each time I post the data
    return (
        <div className="leaderBoard">
            <div className="lbContainer">
                <h1 className="title">Leaderboard </h1>
            </div>

                <div className="inputArea">
                    <h2 id="prompt">Enter your 3 initials </h2> <input id="userInput" type="text" maxLength={3} size={3} ref={inputRef}></input>
                    <button type='submit' id="userInitials" onClick={postData}>Enter</button>
                </div>

                <div className="displayArea">
                <h3 id="error">{errorMsg}</h3>
                <h3 id="lbTitle">{lbTitle}</h3>
                {listOfScores.map(obj => {
                    return <ScoreList
                        rank={mapKey}
                        key={mapKey++}
                        uInitials={obj.uInitials}
                        score={obj.score}
                        numClicks={obj.numClicks} />
                })
                }
                </div>
        </div>
    )
}