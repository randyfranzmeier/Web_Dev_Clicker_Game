//this file deals with the main logic for the game

//declare boolean variables for power ups


const gameObject = {
        displayPoints: document.getElementById('points'),
        points: 0, //these are all game properties
        clicks: 0,
        storeItemsLeft: 8,
        jello: document.getElementById('jello'),

        //object function to decrease store items by 1
        decrementStoreItems(){
            this.storeItemsLeft--;
        }
    }

     let perk1 = document.getElementById('perk1');
     let perk2 = document.getElementById('perk2');
     let perk3 = document.getElementById('perk3');
     let perk4 = document.getElementById('perk4');
     let perk5 = document.getElementById('perk5');
     let perk6 = document.getElementById('perk6');
     let perk7 = document.getElementById('perk7');
     let perk8 = document.getElementById('perk8');



     //achievements
     let goal1 = document.getElementById('goal1');
     let goal2 = document.getElementById('goal2');
     let goal3 = document.getElementById('goal3');
     let goal4 = document.getElementById('goal4');
     let goal5 = document.getElementById('goal5');
     let goal6 = document.getElementById('goal6');

    let handleClick = () =>{
         gameObject.clicks++;
         gameObject.points++;
         displayUserPoints();
         checkAchievements();
     }

     
     
     let bonusScrollPoints = () => {
         gameObject.points += 5;
         displayUserPoints();
        }
        
        let penalty = () => {
            gameObject.points < 50? gameObject.points = 0: gameObject.points -= 50;
            alert("Don't steal the jello!!! Penalty applied!!!");
            displayUserPoints();
        }
        
        
        
        
        
        let displayUserPoints = () => {
            gameObject.displayPoints.innerHTML = "JPOINTS: " + gameObject.points;
            gameObject.points >= 50000? gameObject.displayPoints.style.color = "gold": gameObject.displayPoints.style.color = "black";
        }
        
        //------------------------------Store------------------------------------------
        //store contains functions pertaining to the store section of the page
        //let store = {
            /*  CREATE EVENT LISTENER FOR EACH BUTTON, DEACTIVIATE UPON CLICK*/
            // perk1.addEventListener('click', e =>{
            //     jelloStore(1, e);
            // });

            
            
            // jelloStore(num, e) {
            //     switch(num) {
            //         case 1: 
            //         if(getPoints() >= 50) {
            //             setPoints(getPoints() - 50);
            //             generateJPoints(1);
            //             storeItemsLeft--;
            //         }
            //         break;

            //         default: 
            //            console.log("default switch encountered");
            //     }

            //     e.target.removeEventListener('click', () =>{
            //         jelloStore});
            //     }
                
            

            let waitNumSeconds = (ms) => {
                return new Promise(resolve => {
                    setTimeout(resolve, ms);
                });
             }
       
             async function generateJPoints (num) {
               while(true) {
                   displayUserPoints();
                   gameObject.points += num;
                   await waitNumSeconds(1000);
               }
            }


        //}


        //------------------------------Achievements------------------------------------
        //achievements object to contain functions for achievements portion of page
        // let achievements = {
            
            let checkAchievements = () => { //set up event listener for points, only works when jello is clicked. onchange event?
                
              if(gameObject.points >= 10){
                goal1.style.color = "green";
              }
              if(gameObject.storeItemsLeft === 4) {
                goal2.style.color = "green";
              }
              if(gameObject.clicks >= 200) {
                goal3.style.color = "green";
              }
              if(gameObject.points >= 100) {
                goal4.style.color = "green";
              }
              if(gameObject.storeItemsLeft === 0) {
                goal5.style.color = "green";
              }
              if(gameObject.points >= 500) {
                goal6.style.color = "green";
                gameObject.jello.style.width = 0; //jello disappears
                gameObject.jello.style.height = 0;
                gameObject.displayPoints.innerHTML = "Congrats, You win!!!"; //displays win message
              }
            }
       // }
        

