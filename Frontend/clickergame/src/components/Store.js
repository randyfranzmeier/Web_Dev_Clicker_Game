//parent component
import React, { useState, useEffect, useContext } from "react";
import { JelloContext } from '../JelloContext';
import '../styles/Store.css';

export default function Store() {

    const { points, setPoints, clickRate, setClickRate, itemsLeft, setItemsLeft, setIsGameDone} = useContext(JelloContext);

    let displayItemCount = document.getElementById('itemCount');

    useEffect(() => { /** this function displays the status of the number of items in the store */
        if (itemsLeft === 7) {
            displayItemCount.textContent = "Sold Out!!!"; //This makes it so the user doesn't see an empty page
            displayItemCount.style.color = "red";
            setIsGameDone(true);
        }
    })      //////////////////////////////////////////////////////////



    let jelloStore = (num) => {
        switch (num) {
            /**each if statement validates the button press  */
            case 1:
                if (points >= 50) { 
                    document.getElementById('item1').style.visibility = 'hidden';
                    setItemsLeft(itemsLeft - 1);
                    let random = Math.floor(Math.random() * 150) + 25;
                    alert("Congrats: you recieved " + random + " bonus points");
                    setPoints((points + random) - 50);
                    
                }
                break;
            case 2:
                if (points >= 200) { 
                    document.getElementById('item2').style.visibility = 'hidden';
                    if(clickRate === 1) {
                        setClickRate(clickRate + 1); //only change if its at 1.
                    }
                    setPoints(points - 200);
                    setItemsLeft(itemsLeft - 1);
                }
                break;
            case 3:
                if (points >= 500) { 
                    document.getElementById('item3').style.visibility = 'hidden';
                    setItemsLeft(itemsLeft - 1);
                    let random = Math.floor(Math.random() * 1500) + 250;
                    alert("Congrats: you recieved " + random + " bonus points");
                    setPoints((points + random) - 500);
                    
                }
                break;
            case 4:
                if (points >= 900) { 
                    document.getElementById('item4').style.visibility = 'hidden';
                    setItemsLeft(itemsLeft - 1);
                    let random = Math.floor(Math.random() * 2000) + 600;
                    alert("Congrats: you recieved " + random + " bonus points");
                    setPoints((points + random) - 900);
                    
                }
                break
            case 5:
                if (points >= 1200) { 
                    document.getElementById('item5').style.visibility = 'hidden';
                    if(clickRate === 1) {
                        setClickRate(clickRate + 3);
                    }
                    if(clickRate === 2) {
                        setClickRate(clickRate + 2);
                    }
                    setPoints(points - 1200);
                    setItemsLeft(itemsLeft - 1);
                }
                break;
            case 6:
                if (points >= 1800) { 
                    document.getElementById('item6').style.visibility = 'hidden';
                    setItemsLeft(itemsLeft - 1);
                    let random = Math.floor(Math.random() * 3500) + 1500;
                    alert("Congrats: you recieved " + random + " bonus points");
                    setPoints((points + random) - 1800);
                    
                }
                break;
            case 7:
                if (points >= 2500) { 
                    document.getElementById('item7').style.visibility = 'hidden';
                    setItemsLeft(itemsLeft - 1);
                    let random = Math.floor(Math.random() * 5000) + 2000;
                    alert("Congrats: you recieved " + random + " bonus points");
                    setPoints((points + random) - 2500);
                   
                }
                break
            case 8:
                if (points >= 3500) { 
                    document.getElementById('item8').style.visibility = 'hidden';
                    if(clickRate === 1) {
                        setClickRate(clickRate + 49);
                    }
                    if(clickRate === 2) {
                        setClickRate(clickRate + 48);
                    }
                    if(clickRate === 4) {
                        setClickRate(clickRate + 46);
                    }
                    setPoints(points - 3500);
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
                        <h2>points: 500</h2><button id="perk3" onClick={() => jelloStore(3)}>buy</button>
                    </li>
                    <li id="item4">
                        <h1>Mystery box #3</h1>
                        <h2>points: 900</h2><button id="perk4" onClick={() => jelloStore(4)}>buy</button>
                    </li>
                </div>

                <div className="store-third-half">
                    <li id="item5">
                        <h1>4x click's</h1>
                        <h2>points: 1200</h2><button id="perk5" onClick={() => jelloStore(5)}>buy</button>
                    </li>
                    <li id="item6">
                        <h1>Mystery box #4</h1>
                        <h2>points: 1800</h2><button id="perk6" onClick={() => jelloStore(6)}>buy</button>
                    </li>
                </div>

                <div className="store-fourth-half">
                    <li id="item7">
                        <h1>Mega Mystery box</h1>
                        <h2>points: 2500</h2><button id="perk7" onClick={() => jelloStore(7)}>buy</button>
                    </li>
                    <li id="item8">
                        <h1>Mega click's</h1>
                        <h2>points: 3500</h2><button id="perk8" onClick={() => jelloStore(8)}>buy</button>
                    </li>
                </div>

            </ul>

        </div>
    );
}