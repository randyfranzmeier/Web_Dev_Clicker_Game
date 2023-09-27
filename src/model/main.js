import * as achievements from './achievement.js'
import * as store from './store.js';
import * as gameObject from './game.js';
/** this file deals with the main logic for the game
 *  I am only importing this file into the html, and this acts 
 *  as the driver that calls all the other files functions.
 *  */


let jelloImage = document.getElementById('jello');

let observer = new MutationObserver(() => {
    achievements.checkAchievements(); //pass function in object parameter to be called on element change
}
);

observer.observe(gameObject.displayPoints, { //specifying which element should be observed
    childList: true,
    subtree: false,
    characterDataOldValue: false,
});

export const observerObject = {
    stop() {
        observer.disconnect();
    }
}


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

jelloImage.addEventListener('click', handleClick);

jelloImage.addEventListener('dragend', penalty);

jelloImage.addEventListener('scroll', bonusScrollPoints);





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



let bonusScrollPoints = () => {
    gameObject.points += 5;
    gameObject.displayUserPoints();
}

let penalty = () => {
    gameObject.points < 50 ? gameObject.points = 0 : gameObject.points -= 50;
    alert("Don't steal the jello!!! Penalty applied!!!");
   gameObject.displayUserPoints();
}

