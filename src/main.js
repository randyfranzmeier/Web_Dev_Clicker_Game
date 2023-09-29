
/** 
 * Author: Randy Franzmeier
 * Date: 9-29-23
 * Class: Web Development 2
 * this file deals with the main logic for the game.
 *  Notice the use of objects to seperate properties 
 *  and functions.
 *  */


/**achievements object to contain functions and properties for achievements portion of page*/
const achievements = {
    /** Here are the six goal variables that change when their criteria is met*/
    goal1: document.getElementById('goal1'),
    goal2: document.getElementById('goal2'),
    goal3: document.getElementById('goal3'),
    goal4: document.getElementById('goal4'),
    goal5: document.getElementById('goal5'),
    goal6: document.getElementById('goal6'),

    /** Each time the points change, this function is called; it checks if any of the 6 goals have been met. */
    checkAchievements() {

        if (gameObject.points >= 1000) {
            this.goal1.style.color = "green"; /**notice that the style will change to green, showing the task is complete */
        }
        if (gameObject.storeItemsLeft <= 4) {
            this.goal2.style.color = "green";
        }
        if (gameObject.clicks >= 200) {
            this.goal3.style.color = "green";
        }
        if (gameObject.points >= 10000) {
            this.goal4.style.color = "green";
        }
        if (gameObject.storeItemsLeft === 0) {
            this.goal5.style.color = "green";
        }
        if (gameObject.points >= 50000) {  /**Once this criteria is achieved, the game is over.*/
            observerObject.stop(); //stop listening for changes where the points are displayed
            gameObject.keepAddingPoints = false; //stop adding points
            this.goal6.style.color = "green";
            gameObject.displayWinMessage(); //displays special win message to user
        }
    }
}
//-------------------------------------------------


/**game object to store game properties and frequently used functions.
 * notice the object notation instead of variable assigmnent. I chose
 * this to better protect my properties, rather than having them global.
 */
const gameObject = {
    displayPoints: document.getElementById('points'), //this is important as the user needs to see their points
    points: 0, //points the user obtains
    clicks: 0,
    storeItemsLeft: 8,
    jello: document.getElementById('jello'),
    isDoubleClick: false, /**When these are true, the user gets more points per clicks */
    isQuadClick: false,
    isMegaClick: false,
    keepAddingPoints: true, //flag variable

    updateItemCount() { /** this function displays the status of the number of items in the store */
        if (this.storeItemsLeft === 0) {
            store.displayItemCount.textContent = "Sold Out!!!"; //This makes it so the user doesn't see an empty page
            store.displayItemCount.style.color = "red";
        }
        else {
            store.displayItemCount.textContent = "Items left: " + gameObject.storeItemsLeft;
        }
    },
    /**this function waits 2 seconds for the points to stop adding up.
     * then it makes the jello disappear and and display a win message.
     * The points are reset to 0.
     */

    async displayWinMessage() {
        await this.waitNumSeconds(2000);
        this.jello.style.visibility = 'hidden';
        this.displayPoints.innerHTML = "Congrats, You win!!!";
        this.points = 0;
    },
    /**this function simply displays the users points on the page, changing the color to gold if above or at 50k */
    displayUserPoints() {
        this.displayPoints.innerHTML = "JPOINTS: " + this.points;
        this.points >= 50000 ? this.displayPoints.style.color = "gold" : this.displayPoints.style.color = "black";
    },
    /**this function returns a promise; it waits a specified number of seconds 
     * @param ms is the number of milliseconds to wait before continuing
    */
    waitNumSeconds(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    },
    /**this function operates asychroneously, generating a certain
     * number of points each second
     * @param num is the number to be added per second
     */
    async generateJPoints(num) {
        while (this.keepAddingPoints) {
            this.displayUserPoints();
            this.points += num;
            await this.waitNumSeconds(1000);
        }
    }

}
//-------------------------------------------------

/**this store object contains the properties for each store item 
 * available for purchase. The main function handles and validates
 * each purchase.
 */
const store = {
    perk1: document.getElementById('perk1'),
    perk2: document.getElementById('perk2'),
    perk3: document.getElementById('perk3'),
    perk4: document.getElementById('perk4'),
    perk5: document.getElementById('perk5'),
    perk6: document.getElementById('perk6'),
    perk7: document.getElementById('perk7'),
    perk8: document.getElementById('perk8'),
    displayItemCount: document.getElementById('itemCount'), //displays the number of items left in the store  

    /**This function uses a switch statememt to determine 
     * which button was clicked. the item then disappears,
     * the points get subtracted, the store count gets updated,
     * the right power ups are activated, and the count of items
     * are displayed in the store.
     * @param num is the number correlating to one of eight possible buttons to be pressed
     */
    jelloStore: (num) => {
        switch (num) {
            /**each if statement validates the button press  */
            case 1:
                if (gameObject.points >= 50) {
                    document.getElementById('item1').style.visibility = 'hidden';
                    gameObject.points -= 50;
                    gameObject.storeItemsLeft -= 1;
                    gameObject.updateItemCount();
                    gameObject.generateJPoints(1); //continuosly generate 1 jp per second
                }
                break;
            case 2:
                if (gameObject.points >= 200) {
                    document.getElementById('item2').style.visibility = 'hidden';
                    gameObject.isDoubleClick = true; // clicks are worth 2 points
                    gameObject.points -= 200;
                    gameObject.storeItemsLeft -= 1;
                    gameObject.updateItemCount();
                }
                break;
            case 3:
                if (gameObject.points >= 1000) {
                    document.getElementById('item3').style.visibility = 'hidden';
                    gameObject.points -= 1000;
                    gameObject.storeItemsLeft -= 1;
                    gameObject.updateItemCount();
                    gameObject.generateJPoints(4); // continuosly generate 5 jp per second
                }
                break;
            case 4:
                if (gameObject.points >= 2500) {
                    document.getElementById('item4').style.visibility = 'hidden';
                    gameObject.points -= 2500;
                    gameObject.storeItemsLeft -= 1;
                    gameObject.updateItemCount();
                    gameObject.generateJPoints(5); // continuosly generate 10 jp per second
                }
                break
            case 5:
                if (gameObject.points >= 4000) {
                    document.getElementById('item5').style.visibility = 'hidden';
                    gameObject.isQuadClick = true; //clicks are worth 4 points
                    gameObject.points -= 4000;
                    gameObject.storeItemsLeft -= 1;
                    gameObject.updateItemCount();
                }
                break;
            case 6:
                if (gameObject.points >= 6000) {
                    document.getElementById('item6').style.visibility = 'hidden';
                    gameObject.points -= 6000;
                    gameObject.storeItemsLeft -= 1;
                    gameObject.updateItemCount();
                    gameObject.generateJPoints(15); // continuously generate 25 jp per second
                }
                break;
            case 7:
                if (gameObject.points >= 8000) {
                    document.getElementById('item7').style.visibility = 'hidden';
                    gameObject.points -= 8000;
                    gameObject.storeItemsLeft -= 1;
                    gameObject.updateItemCount();
                    gameObject.generateJPoints(60); // continously generate 75 jp per second
                }
                break
            case 8:
                if (gameObject.points >= 12000) {
                    document.getElementById('item8').style.visibility = 'hidden';
                    gameObject.isMegaClick = true; //clicks are worth 50 points
                    gameObject.points -= 12000;
                    gameObject.storeItemsLeft -= 1;
                    gameObject.updateItemCount();
                }
                break;

            default:
                console.log("default switch encountered"); //if some error occurs
        }

    }
}
//-------------------------------------------------

/**The remaining code is like the 'controller' that uses
 * all the objects to perform the actions in the game.
 */

let jelloImage = document.getElementById('jello');//variable to set up event listeners for clicks

/**this observer object call the 
 *  @function checkAchievements()
 * to check if any of the requirements have been met.
  */
let observer = new MutationObserver(() => {
    achievements.checkAchievements();
}
);

/** I am now using the object I created to observe any changes
 * to the @param gameObject.displayPoints 
 */
observer.observe(gameObject.displayPoints, { //specifying which element should be observed
    childList: true,
    subtree: false, //don't want to observe the descendants of gameObject.displayPoints
    characterDataOldValue: false, //don't need to record mutations
});

/**this object simply encapsulates a function 
 * that establishes a disconnection from the 
 * mutation observer object. We need this 
 * because at some point the game will end.
 */
const observerObject = {
    stop() {
        observer.disconnect();
    }
}

/**This is the entry point of the game. In other words,
 * it is the first function called when the button is clicked.
 * It first checks if the user has power ups from the store 
 * activated, and applies them if they are set to true. 
 * It then increments clicks and displays the current
 * number of points.
 */
let handleClick = () => {
    if (gameObject.isDoubleClick) {
        if (gameObject.isQuadClick) {
            if (gameObject.isMegaClick) {
                gameObject.points += 50;
            }
            else {
                gameObject.points += 4;
            }
        }
        else {
            gameObject.points += 2;
        }
    }
    else {
        gameObject.points += 1;
    }

    gameObject.clicks++;
    gameObject.displayUserPoints();
}


/**I thought it'd be funny if the user got 5 points every time they scroll on the jello */
let bonusScrollPoints = () => {
    gameObject.points += 5;
    gameObject.displayUserPoints();
}

/**If the user trys to steal the jello, they will lose 50 points
 * or be reset to 0 if they have less than 50 points.
 */
let penalty = () => {
    gameObject.points < 50 ? gameObject.points = 0 : gameObject.points -= 50; //ternary operator
    alert("Don't steal the jello!!! Penalty applied!!!");
    gameObject.displayUserPoints(); //we need to show them their points after they misbehaved
}

/**Each of these event listeners call the 
 * @function jelloStore() 
 * with the number corresponding to the button
 * to ensure it gets checked correctly
 */
store.perk1.addEventListener('click', () => {
    store.jelloStore(1);
});

store.perk2.addEventListener('click', () => {
    store.jelloStore(2);
});

store.perk3.addEventListener('click', () => {
    store.jelloStore(3);
});

store.perk4.addEventListener('click', () => {
    store.jelloStore(4);
});

store.perk5.addEventListener('click', () => {
    store.jelloStore(5);
});

store.perk6.addEventListener('click', () => {
    store.jelloStore(6);
});

store.perk7.addEventListener('click', () => {
    store.jelloStore(7);
});

store.perk8.addEventListener('click', () => {
    store.jelloStore(8);
});
/**Last but not least, these event listeners call 
 * the specified function after a certain action is performed.
 */

jelloImage.addEventListener('click', handleClick);

jelloImage.addEventListener('dragend', penalty);


