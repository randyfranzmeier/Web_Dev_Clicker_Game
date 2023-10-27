import '../styles/Jello.css';
import jelloImage from '../images/jello.png';

export default function Jello() {
    

let jelloListener = document.getElementById('jello');//variable to set up event listeners for clicks

// /**this observer object call the 
//  *  @function checkAchievements()
//  * to check if any of the requirements have been met.
//   */
// let observer = new MutationObserver(() => {
//     achievements.checkAchievements();
// }
// );

// /** I am now using the object I created to observe any changes
//  * to the @param gameObject.displayPoints 
//  */
// observer.observe(gameObject.displayPoints, { //specifying which element should be observed
//     childList: true,
//     subtree: false, //don't want to observe the descendants of gameObject.displayPoints
//     characterDataOldValue: false, //don't need to record mutations
// });

// /**this object simply encapsulates a function 
//  * that establishes a disconnection from the 
//  * mutation observer object. We need this 
//  * because at some point the game will end.
//  */
// const observerObject = {
//     stop() {
//         observer.disconnect();
//     }
// }




// /**I thought it'd be funny if the user got 5 points every time they scroll on the jello */
// let bonusScrollPoints = () => {
    //     gameObject.points += 5;
    //     gameObject.displayUserPoints();
    // }
    
    
    
    
    
    
    
    
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

let penalty = () =>{
    gameObject.points < 50 ? gameObject.points = 0 : gameObject.points -= 50; //ternary operator
    alert("Don't steal the jello!!! Penalty applied!!!");
    gameObject.displayUserPoints(); //we need to show them their points after they misbehaved
}

    return (
        <div className="jelloListener">
                <h1 id="points">JPOINTS: 0 </h1>
                <img id="jello" src={jelloImage} alt='jello' onClick={handleClick} onDragEnd={penalty} onScroll={}/>
            </div>
    );
}

