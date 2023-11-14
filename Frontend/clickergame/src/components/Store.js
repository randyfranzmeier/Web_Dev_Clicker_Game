/***
 * Author: Randy Franzmeier
 * Date: 11-13-2023
 * This is the Store component. It deals with all the logic 
 * necessary to purchase items, and it renders all 8 products.
 */
import React, { useState, useEffect, useContext } from "react";
import { JelloContext } from '../JelloContext'; //need access to context object values
import '../styles/Store.css';

export default function Store() {
    //gaining access to context object values and functions
    const { points, setPoints, clickRate, setClickRate, itemsLeft, setItemsLeft, setIsGameDone} = useContext(JelloContext);

    let displayItemCount = document.getElementById('itemCount');

    useEffect(() => { /** this function displays the status of the number of items in the store */
        if (itemsLeft === 0) {
            displayItemCount.textContent = "Sold Out!!!"; //This makes it so the user doesn't see an empty page
            displayItemCount.style.color = "red";
            setIsGameDone(true);
        }
    })      

    /**
     * this @function jelloStore() takes in 
     * a @param num and sends it to a switch statement.
     * Each number corresponds to an item in the store.
     * If the player has enough points, they can purchase it
     * and then a power up is applied. Notice the usage of my
     * JelloContext objects as it is necessary for the 
     * functionality of this game.
     */

    let jelloStore = (num) => {
        switch (num) {
            /**each if statement validates the button press  */
            case 1:
                if (points >= 50) { 
                    document.getElementById('item1').style.visibility = 'hidden'; //hide item
                    setItemsLeft(itemsLeft - 1);//decrement store item count
                    let random = Math.floor(Math.random() * 150) + 25; //generate random number for mystery box
                    alert("Congrats: you recieved " + random + " bonus points"); //alert user of mystery box
                    setPoints((points + random) - 50); //update points
                    
                }
                break;
            case 2:
                if (points >= 200) { 
                    document.getElementById('item2').style.visibility = 'hidden';
                    if(clickRate === 1) {
                        setClickRate(clickRate + 1); //only change if its at 1.
                    }
                    setPoints(points - 200);//update points
                    setItemsLeft(itemsLeft - 1);//update store item count
                }
                break;
            case 3:
                if (points >= 500) { 
                    document.getElementById('item3').style.visibility = 'hidden';
                    setItemsLeft(itemsLeft - 1); //update store item count
                    let random = Math.floor(Math.random() * 1500) + 250; //generate mystery box
                    alert("Congrats: you recieved " + random + " bonus points");
                    setPoints((points + random) - 500); //update points
                    
                }
                break;
            case 4:
                if (points >= 900) { 
                    document.getElementById('item4').style.visibility = 'hidden';
                    setItemsLeft(itemsLeft - 1); //update store item count
                    let random = Math.floor(Math.random() * 2000) + 600; //generate mystery box
                    alert("Congrats: you recieved " + random + " bonus points");
                    setPoints((points + random) - 900); //update points
                    
                }
                break
            case 5:
                if (points >= 1200) { 
                    document.getElementById('item5').style.visibility = 'hidden';
                    if(clickRate === 1) { //make sure proper clickrate is set
                        setClickRate(clickRate + 3);
                    }
                    if(clickRate === 2) {
                        setClickRate(clickRate + 2);
                    }
                    setPoints(points - 1200); //update points
                    setItemsLeft(itemsLeft - 1); //update store item count
                }
                break;
            case 6:
                if (points >= 1800) { 
                    document.getElementById('item6').style.visibility = 'hidden';
                    setItemsLeft(itemsLeft - 1); //update store item count
                    let random = Math.floor(Math.random() * 3500) + 1500; //generate mystery box
                    alert("Congrats: you recieved " + random + " bonus points");
                    setPoints((points + random) - 1800); //update points
                    
                }
                break;
            case 7:
                if (points >= 2500) { 
                    document.getElementById('item7').style.visibility = 'hidden';
                    setItemsLeft(itemsLeft - 1); //update store item count
                    let random = Math.floor(Math.random() * 5000) + 2000; //generate mystery box
                    alert("Congrats: you recieved " + random + " bonus points");
                    setPoints((points + random) - 2500); //update points
                   
                }
                break
            case 8:
                if (points >= 3500) { 
                    document.getElementById('item8').style.visibility = 'hidden';
                    if(clickRate === 1) { //make sure click rate is set properly
                        setClickRate(clickRate + 49);
                    }
                    if(clickRate === 2) {
                        setClickRate(clickRate + 48);
                    }
                    if(clickRate === 4) {
                        setClickRate(clickRate + 46);
                    }
                    setPoints(points - 3500); //update points
                    setItemsLeft(itemsLeft - 1); //update store item count
                }
                break;

            default:
                console.log("default switch encountered"); //if some error occurs
        }
    }


    //I am returning 8 store items (power ups) that call the jelloStore
    //function when clicked
    return (
        <div className="store">

            <h1>Jello Store!</h1> <br />

            <div id="itemCount">Items left: {itemsLeft}</div>
            <ul className="storeItemContainer">

                <div className="store-first-half">
                    <li id="item1">
                        <h1>Mystery box #1</h1>
                        <h2>50 pts</h2><button id="perk1" onClick={() => jelloStore(1)}>buy</button>
                    </li>
                    <li id="item2">
                        <h1>2x click's</h1>
                        <h2>200 pts</h2><button id="perk2" onClick={() => jelloStore(2)}>buy</button>
                    </li>
                </div>

                <div className="store-second-half">
                    <li id="item3">
                        <h1>Mystery box #2</h1>
                        <h2>500 pts</h2><button id="perk3" onClick={() => jelloStore(3)}>buy</button>
                    </li>
                    <li id="item4">
                        <h1>Mystery box #3</h1>
                        <h2>900 pts</h2><button id="perk4" onClick={() => jelloStore(4)}>buy</button>
                    </li>
                </div>

                <div className="store-third-half">
                    <li id="item5">
                        <h1>4x click's</h1>
                        <h2>1200 pts</h2><button id="perk5" onClick={() => jelloStore(5)}>buy</button>
                    </li>
                    <li id="item6">
                        <h1>Mystery box #4</h1>
                        <h2>1800 pts</h2><button id="perk6" onClick={() => jelloStore(6)}>buy</button>
                    </li>
                </div>

                <div className="store-fourth-half">
                    <li id="item7">
                        <h1>Mega Mystery</h1>
                        <h2>2500 pts</h2><button id="perk7" onClick={() => jelloStore(7)}>buy</button>
                    </li>
                    <li id="item8">
                        <h1>Mega click's</h1>
                        <h2>3500 pts</h2><button id="perk8" onClick={() => jelloStore(8)}>buy</button>
                    </li>
                </div>

            </ul>

        </div>
    );
}