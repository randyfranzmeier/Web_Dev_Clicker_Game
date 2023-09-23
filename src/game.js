//this file deals with the main logic for the game

//declare boolean variables for power ups

    let displayPoints = document.getElementById('points');
     points =  0;
     clicks = 0;
     let storeItemsLeft = 8;

     let jello = document.getElementById('jello');
    // let storeItems = new Array(8).fill(0);
     let perk1 = document.getElementById('perk1');



     //achievements
     let goal1 = document.getElementById('goal1');
     let goal2 = document.getElementById('goal2');
     let goal3 = document.getElementById('goal3');
     let goal4 = document.getElementById('goal4');
     let goal5 = document.getElementById('goal5');
     let goal6 = document.getElementById('goal6');

    let handleClick = () =>{
         clicks++;
         setPoints(getPoints() + 1);
         displayUserPoints();
     }

     
     
     let bonusScrollPoints = () => {
         let bonus = 5;
         setPoints(bonus + getPoints());
         displayUserPoints();
        }
        
        let penalty = () => {
            getPoints() < 50? setPoints(0): setPoints(getPoints() - 50);
            alert("Don't steal the jello!!! Penalty applied!!!");
            displayUserPoints();
        }
        
        
        
        let getPoints = () =>{
            return points;
        }
        
        let setPoints = (points) =>{
            this.points = points;
        }

        let getClicks = () =>{
            return clicks;
        }
        
        let setClicks = (clicks) =>{
            this.clicks = clicks;
            checkAchievements();
        }
        
        
        let displayUserPoints = () => {
            displayPoints.innerHTML = "JPOINTS: " + getPoints();
            getPoints() >= 50000? displayPoints.style.color = "gold": displayPoints.style.color = "black";
        }
        
        //------------------------------Store------------------------------------------
        //store contains functions pertaining to the store section of the page
        //let store = {
            /*  CREATE EVENT LISTENER FOR EACH BUTTON, DEACTIVIATE UPON CLICK*/
            let waitNumSeconds = (ms) => {
                return new Promise(resolve => {
                    setTimeout(resolve, ms);
                });
             }
       
             async function generateJPoints () {
               while(true) {
                   displayUserPoints();
                   setPoints(getPoints() + 1);
                   await waitNumSeconds(1000);
               }
            }
            function purchaseItem () {
                if(getPoints() >= 50) {
                    setPoints(getPoints() - 50);
                    generateJPoints();
                }
                //switch statement, each number correlates to button pressed?
                
            }

        //}


        //------------------------------Achievements------------------------------------
        //achievements object to contain functions for achievements portion of page
        // let achievements = {
            
            let checkAchievements = () => { //set up event listener for points, only works when jello is clicked. onchange event?
                
              if(getPoints() >= 10){
                goal1.style.color = "green";
              }
              if(storeItemsLeft === 4) {
                goal2.style.color = "green";
              }
              if(getClicks() >= 200) {
                goal3.style.color = "green";
              }
              if(getPoints() >= 100) {
                goal4.style.color = "green";
              }
              if(storeItemsLeft === 0) {
                goal5.style.color = "green";
              }
              if(getPoints() >= 500) {
                goal6.style.color = "green";
                jello.style.width = 0; //jello disappears
                jello.style.height = 0;
                displayPoints.innerHTML = "Congrats, You win!!!"; //display win message
              }


            }
       // }
        
    
      
    
    

/*class driver { 
    displayPoints = document.getElementById("points");
    points = 0;


    gameLoaded = () =>{
        if (getPoints() > 0) {
            alert("Are you sure you want to lose all your points?");
        }
    }

    getPoints = () =>{
        return points;
    }

    setPoints = (points) =>{
        this.points = points;
    }

   displayUserPoints = () => {
        displayPoints.innerHTML = "POINTS: + ${getPoits}";
    }

}
class game {
    displayPoints = document.getElementById("points");
    constructor(points){this.points = points;}
    
    handleClick = () =>{
        setPoints(points + 1);
        displayUserPoints();
    }
    
    
    
}
*/

