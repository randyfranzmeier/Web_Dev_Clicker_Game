/***
 * Author: Randy Franzmeier
 * Date: 11-13-2023
 * This is the Score component and it renders the
 * users scores if they decide to log their score.
 * This is also the place where the apis are called.
 */
import '../styles/Scores.css'
import { useContext, useState, useRef} from 'react'; //react hooks
import { JelloContext } from '../JelloContext'; //need access to context object values
import ScoreList from './ScoreList.js'; //child component to map data to 

export default function Scores() {
    const { points, numClicks, isGameDone } = useContext(JelloContext);//gaining access to context object values
    const [errorMsg, setErrorMsg] = useState(""); //error message string
    let inputRef = useRef(null); //useRef hook to store the input value
    const [listOfScores, setListOfScores] = useState([]); //contains the list of data from the backend
    const [lbTitle, setLbTitle] = useState(""); //leaderboard title string
    let mapKey = 1; //when I map each object in the array
    const [dataEntered, setDataEntered] = useState(false); //boolean variable to track if the user entered their score

    /**
     * this @function postData() is called whenever the user presses 
     * the enter button when entering their initials. If the game is over
     * and they entered their initials correctly, the data is saved to
     * the backend JSON file. If the data saves correctly, 
     * the @function getData() is called to display the scores
     */

    async function postData() {
        //make sure the game is over
        if (isGameDone && dataEntered === false && inputRef.current.value.length === 3) { //*****error handling for input*****
           setDataEntered(true); //only alows user to enter data once per round
       
            let gameStats = {
                "uInitials": inputRef.current.value,
                "score": points,
                "numClicks": numClicks
            }; //request body

            await fetch('http://localhost:3001/api/v1/addPlayerScore', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(gameStats) //add request body to post request
            }).then(response => {
                if (response.ok) {
                    getData(); //on success, display scores to the user
                }
            }).catch(() => {
                setErrorMsg("--Unable to save score--"); //elegantly display error message to user
            })
        }

    }

    /**
     * this function @getData calls the backend
     * to recieve the list of scores, and on success
     * it converts the response to a list of scores and sorts it
     * by the highest score. After the title is displayed, the 
     * list of scores is updated so each value can be mapped
     * and shown on the screen.
     */
    
    async function getData() {
        //get the data
        const response = await fetch('http://localhost:3001/api/v1/getPlayerScore', {
            method: "GET", //get data
            headers: { "Content-Type": "application/json" }
        }).catch(error => { console.log(error) }); //catch any errors that may occur
        if (response.ok) {
            let dataObj = await response.json();
            let dataArr = Array.from(dataObj).sort(({ score: x }, { score: y }) => y - x); //sort in descending order
            setLbTitle("Rank--Initials--Score--Clicks"); //display title
            setListOfScores(dataArr); //update list
        }
    }

    /**
     *  I'm returning a title, input area, button, and a
     *  mapped ScoreList. However, the list of scores
     *  are only shown when there is data in them, and then each
     *  value in each object is mapped to the child component
     *  called ScoreList
     */
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