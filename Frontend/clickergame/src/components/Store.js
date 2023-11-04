//parent component
import React, { useState, useEffect, useContext } from "react";
import { JelloContext } from '../JelloContext';
import '../styles/Store.css';

export default function Store() {
    //create 2-value list then send to product component to be rendered in this page

    const { points, setPoints, isDoubleClick, setIsDoubleClick, isQuadClick, setIsQuadClick, isMegaClick, setIsMegaClick,
        numClicks, setNumClicks, itemsLeft, setItemsLeft,
        keepLooping, setKeepLooping, jelloPerSecond, setJelloPerSecond } = useContext(JelloContext);

    let displayItemCount = document.getElementById('itemCount');

    useEffect(() => { /** this function displays the status of the number of items in the store */
        if (itemsLeft === 0) {
            displayItemCount.textContent = "Sold Out!!!"; //This makes it so the user doesn't see an empty page
            displayItemCount.style.color = "red";
        }
    })

    let waitNumSeconds = (ms) => {
        console.log("waitNumSeconds function called!");
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }
    /**this function operates asychroneously, generating a certain
     * number of points each second
     * @param num is the number to be added per second
     */
    async function generateJPoints() {
        console.log("generateJPoints functions called! keepLooping: " + keepLooping);
        while (keepLooping) {
            setPoints(points + jelloPerSecond);
            await waitNumSeconds(1000);
        }
    }

    let jelloStore = (num) => {
        switch (num) {
            /**each if statement validates the button press  */
            case 1:
                if (points >= 5) { //50
                    document.getElementById('item1').style.visibility = 'hidden';
                    setPoints(points - 5);
                    setItemsLeft(itemsLeft - 1);
                    console.log(jelloPerSecond);
                    setJelloPerSecond(jelloPerSecond + 1); //continuosly generate 1 jp per second
                    console.log(jelloPerSecond);
                    if (!keepLooping) { //call function only if it isn't already running
                        console.log(keepLooping);
                        setKeepLooping(true);
                        console.log(keepLooping);
                        generateJPoints();
                    }
                }
                break;
            case 2:
                if (points >= 2) { //200
                    document.getElementById('item2').style.visibility = 'hidden';
                    setIsDoubleClick(true); // clicks are worth 2 points
                    setPoints(points - 2);
                    setItemsLeft(itemsLeft - 1);
                }
                break;
            case 3:
                if (points >= 10) { //1000
                    document.getElementById('item3').style.visibility = 'hidden';
                    setPoints(points - 10);
                    setItemsLeft(itemsLeft - 1);
                    setJelloPerSecond(jelloPerSecond + 5); // continuosly generate 5 jp per second
                    if (keepLooping === false) {
                        setKeepLooping(true);
                        generateJPoints();
                    }
                }
                break;
            case 4:
                if (points >= 25) { //2500
                    document.getElementById('item4').style.visibility = 'hidden';
                    setPoints(points - 25);
                    setItemsLeft(itemsLeft - 1);
                    setJelloPerSecond(jelloPerSecond + 10); //continuosly generate 10 jp per second
                    if (keepLooping === false) {
                        setKeepLooping(true);
                        generateJPoints();
                    }
                }
                break
            case 5:
                if (points >= 40) { //4000
                    document.getElementById('item5').style.visibility = 'hidden';
                    setIsQuadClick(true); //clicks are worth 4 points
                    setPoints(points - 40);
                    setItemsLeft(itemsLeft - 1);
                }
                break;
            case 6:
                if (points >= 60) { //60
                    document.getElementById('item6').style.visibility = 'hidden';
                    setPoints(points - 60);
                    setItemsLeft(itemsLeft - 1);
                    setJelloPerSecond(jelloPerSecond + 30); //continuosly generate 30 jp per second
                    if (keepLooping === false) {
                        setKeepLooping(true);
                        generateJPoints();
                    }
                }
                break;
            case 7:
                if (points >= 80) { //80
                    document.getElementById('item7').style.visibility = 'hidden';
                    setPoints(points - 80);
                    setItemsLeft(itemsLeft - 1);
                    setJelloPerSecond(jelloPerSecond + 75);//continuosly generate 75 jp per second
                    if (keepLooping === false) {
                        setKeepLooping(true);
                        generateJPoints();
                    }
                }
                break
            case 8:
                if (points >= 120) { //12000
                    document.getElementById('item8').style.visibility = 'hidden';
                    setIsMegaClick(true); //clicks are worth 50 points
                    setPoints(points - 120);
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
                        <h1>More Jello</h1>
                        <h2>Points: 50</h2><button id="perk1" onClick={() => jelloStore(1)}>buy</button>
                    </li>
                    <li id="item2">
                        <h1>2x click's</h1>
                        <h2>points: 200</h2><button id="perk2" onClick={() => jelloStore(2)}>buy</button>
                    </li>
                </div>

                <div className="store-second-half">
                    <li id="item3">
                        <h1>Jello party</h1>
                        <h2>points: 1000</h2><button id="perk3" onClick={() => jelloStore(3)}>buy</button>
                    </li>
                    <li id="item4">
                        <h1>Jello Blast</h1>
                        <h2>points: 2500</h2><button id="perk4" onClick={() => jelloStore(4)}>buy</button>
                    </li>
                </div>

                <div className="store-third-half">
                    <li id="item5">
                        <h1>4x click's</h1>
                        <h2>points: 4000</h2><button id="perk5" onClick={() => jelloStore(5)}>buy</button>
                    </li>
                    <li id="item6">
                        <h1>Jello fever</h1>
                        <h2>points: 6000</h2><button id="perk6" onClick={() => jelloStore(6)}>buy</button>
                    </li>
                </div>

                <div className="store-fourth-half">
                    <li id="item7">
                        <h1>Jello frenzy</h1>
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