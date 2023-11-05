//parent component
import React, { useState, useEffect, useContext } from "react";
import { JelloContext } from '../JelloContext';
import '../styles/Store.css';

export default function Store() {

    const { points, setPoints, isDoubleClick, setIsDoubleClick, isQuadClick, setIsQuadClick, isMegaClick, setIsMegaClick,
        numClicks, setNumClicks, itemsLeft, setItemsLeft, isGameDone, setIsGameDone} = useContext(JelloContext);

    let displayItemCount = document.getElementById('itemCount');

    useEffect(() => { /** this function displays the status of the number of items in the store */
        if (itemsLeft === 0) {
            displayItemCount.textContent = "Sold Out!!!"; //This makes it so the user doesn't see an empty page
            displayItemCount.style.color = "red";
            setIsGameDone(true);
        }
    })



    let jelloStore = (num) => {
        switch (num) {
            /**each if statement validates the button press  */
            case 1:
                if (points >= 50) { //50
                    document.getElementById('item1').style.visibility = 'hidden';
                    setItemsLeft(itemsLeft - 1);
                    let random = Math.floor(Math.random() * 150) + 25;
                    alert("Congrats: you recieved " + random + " bonus points");
                    setPoints((points + random) - 50);
                    
                }
                break;
            case 2:
                if (points >= 200) { //200
                    document.getElementById('item2').style.visibility = 'hidden';
                    setIsDoubleClick(true); // clicks are worth 2 points
                    setPoints(points - 200);
                    setItemsLeft(itemsLeft - 1);
                }
                break;
            case 3:
                if (points >= 1000) { //1000
                    document.getElementById('item3').style.visibility = 'hidden';
                    setItemsLeft(itemsLeft - 1);
                    let random = Math.floor(Math.random() * 2500) + 250;
                    alert("Congrats: you recieved " + random + " bonus points");
                    setPoints((points + random) - 1000);
                    
                }
                break;
            case 4:
                if (points >= 2500) { //2500
                    document.getElementById('item4').style.visibility = 'hidden';
                    setItemsLeft(itemsLeft - 1);
                    let random = Math.floor(Math.random() * 4500) + 1000;
                    alert("Congrats: you recieved " + random + " bonus points");
                    setPoints((points + random) - 2500);
                    
                }
                break
            case 5:
                if (points >= 4000) { //4000
                    document.getElementById('item5').style.visibility = 'hidden';
                    setIsQuadClick(true); //clicks are worth 4 points
                    setPoints(points - 4000);
                    setItemsLeft(itemsLeft - 4000);
                }
                break;
            case 6:
                if (points >= 6000) { //6000
                    document.getElementById('item6').style.visibility = 'hidden';
                    setItemsLeft(itemsLeft - 1);
                    let random = Math.floor(Math.random() * 9500) + 2000;
                    alert("Congrats: you recieved " + random + " bonus points");
                    setPoints((points + random) - 6000);
                    
                }
                break;
            case 7:
                if (points >= 8000) { //8000
                    document.getElementById('item7').style.visibility = 'hidden';
                    setItemsLeft(itemsLeft - 1);
                    let random = Math.floor(Math.random() * 16000) + 5000;
                    alert("Congrats: you recieved " + random + " bonus points");
                    setPoints((points + random) - 8000);
                   
                }
                break
            case 8:
                if (points >= 12000) { //12000
                    document.getElementById('item8').style.visibility = 'hidden';
                    setIsMegaClick(true); //clicks are worth 50 points
                    setPoints(points - 12000);
                    setItemsLeft(itemsLeft - 1);
                }
                break;

            default:
                console.log("default switch encountered"); //if some error occurs
        }
    }



    return (
        <div className="store">

            <h1>Jello Store!</h1> <br />

            <div id="itemCount">Items left: {itemsLeft}</div>
            <ul className="storeItemContainer">

                <div className="store-first-half">
                    <li id="item1">
                        <h1>Mystery box #1</h1>
                        <h2>Points: 50</h2><button id="perk1" onClick={() => jelloStore(1)}>buy</button>
                    </li>
                    <li id="item2">
                        <h1>2x click's</h1>
                        <h2>points: 200</h2><button id="perk2" onClick={() => jelloStore(2)}>buy</button>
                    </li>
                </div>

                <div className="store-second-half">
                    <li id="item3">
                        <h1>Mystery box #2</h1>
                        <h2>points: 1000</h2><button id="perk3" onClick={() => jelloStore(3)}>buy</button>
                    </li>
                    <li id="item4">
                        <h1>Mystery box #3</h1>
                        <h2>points: 2500</h2><button id="perk4" onClick={() => jelloStore(4)}>buy</button>
                    </li>
                </div>

                <div className="store-third-half">
                    <li id="item5">
                        <h1>4x click's</h1>
                        <h2>points: 4000</h2><button id="perk5" onClick={() => jelloStore(5)}>buy</button>
                    </li>
                    <li id="item6">
                        <h1>Mystery box #4</h1>
                        <h2>points: 6000</h2><button id="perk6" onClick={() => jelloStore(6)}>buy</button>
                    </li>
                </div>

                <div className="store-fourth-half">
                    <li id="item7">
                        <h1>Mega Mystery box</h1>
                        <h2>points: 8000</h2><button id="perk7" onClick={() => jelloStore(7)}>buy</button>
                    </li>
                    <li id="item8">
                        <h1>Mega click's</h1>
                        <h2>points: 12000</h2><button id="perk8" onClick={() => jelloStore(8)}>buy</button>
                    </li>
                </div>

            </ul>

        </div>
    );
}