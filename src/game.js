//this file deals with the main logic for the game

const gameObject = {
        displayPoints: document.getElementById('points'),
        points: 0, //these are all game properties
        clicks: 0,
        storeItemsLeft: 8,
        jello: document.getElementById('jello'),
        isDoubleClick: false,
        isQuadClick: false,
        isMegaClick: false,
        keepAddingPoints: true
    }



    let observer = new MutationObserver(() =>{
        achievements.checkAchievements(); //pass function in object parameter to be called on element change
    }
    );

    observer.observe(gameObject.displayPoints, { //specifying which element should be observed
        childList: true,
        subtree: false,
        characterDataOldValue: true,    
    });

    
    

   
    
    let handleClick = () =>{
        if(gameObject.isDoubleClick){
            if(gameObject.isQuadClick) {
                if(gameObject.isMegaClick) {
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
        displayUserPoints();
        //achievements.checkAchievements();
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
          //store = {
            let perk1 = document.getElementById('perk1');
            let perk2 = document.getElementById('perk2');
            let perk3 = document.getElementById('perk3');
            let perk4 = document.getElementById('perk4');
            let perk5 = document.getElementById('perk5');
            let perk6 = document.getElementById('perk6');
            let perk7 = document.getElementById('perk7');
            let perk8 = document.getElementById('perk8');
            let displayItemCount = document.getElementById('itemCount');
      
            /*  CREATE EVENT LISTENER FOR EACH BUTTON, DEACTIVIATE UPON CLICK*/

            perk1.addEventListener('click', () =>{
                jelloStore(1);
                });

            perk2.addEventListener('click', () =>{
                jelloStore(2);
                });

            perk3.addEventListener('click', () =>{
                jelloStore(3);
                });
    
            perk4.addEventListener('click', () =>{
                jelloStore(4);
                });
            perk5.addEventListener('click', () =>{
                jelloStore(5);
                });
    
            perk6.addEventListener('click', () =>{
                jelloStore(6);
                });
        
            perk7.addEventListener('click', () =>{
                jelloStore(7);
                });
            
            perk8.addEventListener('click', () =>{
                jelloStore(8);
                });
                
            
                //possible idea: have store item dissappear upon purchase so it cannot be re-clicked
                let jelloStore = (num) => {
                        switch(num) {
                            case 1: 
                               if(gameObject.points >= 50) {
                                  document.getElementById('item1').style.visibility = 'hidden';
                                  gameObject.points -= 50;
                                  gameObject.storeItemsLeft -= 1;
                                  generateJPoints(1); //1 jp per second
                        }
                        break;
                            case 2:
                                if(gameObject.points >= 200) {
                                document.getElementById('item2').style.visibility = 'hidden';
                                gameObject.isDoubleClick = true;
                                gameObject.points -= 200;
                                displayUserPoints();
                                gameObject.storeItemsLeft -= 1;
                                }
                        break;
                            case 3:
                                if(gameObject.points >= 1000) {
                                    document.getElementById('item3').style.visibility = 'hidden';
                                    gameObject.points -= 1000;
                                    gameObject.storeItemsLeft -= 1;
                                    generateJPoints(4); //5 jp per second
                                }
                        break;
                            case 4:
                                if(gameObject.points >= 2500) {
                                    document.getElementById('item4').style.visibility = 'hidden';
                                    gameObject.points -= 2500;
                                    gameObject.storeItemsLeft -= 1;
                                    generateJPoints(5); //10 jp per second
                                }
                        break
                            case 5:
                                if(gameObject.points >= 4000) {
                                document.getElementById('item5').style.visibility = 'hidden';
                                gameObject.isQuadClick = true;
                                gameObject.points -= 4000;
                                displayUserPoints();
                                gameObject.storeItemsLeft -= 1;
                                }
                        break;
                            case 6:
                                if(gameObject.points >= 6000) {
                                    document.getElementById('item6').style.visibility = 'hidden';
                                    gameObject.points -=6000;
                                    gameObject.storeItemsLeft -= 1;
                                    generateJPoints(15); //25 jp per second
                                }
                        break;
                            case 7:
                                if(gameObject.points >= 8000) {
                                    document.getElementById('item7').style.visibility = 'hidden';
                                    gameObject.points -= 8000;
                                    gameObject.storeItemsLeft -= 1;
                                    generateJPoints(60); //75 jp per second
                                }
                        break
                            case 8:
                                if(gameObject.points >= 12000) {
                                    document.getElementById('item8').style.visibility = 'hidden';
                                    gameObject.isMegaClick = true;
                                    gameObject.points -= 12000;
                                    displayUserPoints();
                                    gameObject.storeItemsLeft -= 1;
                                }
                        break;

                        default: 
                        console.log("default switch encountered");
                }

                if(gameObject.storeItemsLeft === 0) {
                   displayItemCount.innerHTML = "Sold Out!!!";
                   displayItemCount.style.color = "red";
                }
                else{
                    displayItemCount.innerHTML = "Items left: " + gameObject.storeItemsLeft;
                }
            
                this.removeEventListener('click', () =>{
                    jelloStore});
                }
                
            
            
            let waitNumSeconds = (ms) => {
                return new Promise(resolve => {
                    setTimeout(resolve, ms);
                });
            }
            
            async function generateJPoints (num) {
                while(gameObject.keepAddingPoints) {
                    displayUserPoints();
                    gameObject.points += num;
                    await waitNumSeconds(1000);
                }
            }
            
            
            //}
            
            
            //------------------------------Achievements------------------------------------
            //achievements object to contain functions for achievements portion of page
            achievements = {
             goal1: document.getElementById('goal1'),
             goal2: document.getElementById('goal2'),
             goal3: document.getElementById('goal3'),
             goal4: document.getElementById('goal4'),
             goal5: document.getElementById('goal5'),
             goal6: document.getElementById('goal6'),
        
             checkAchievements() { //set up event listener for points, only works when jello is clicked. onchange event?
                
                if(gameObject.points >= 1000){
                    this.goal1.style.color = "green";
                }
                if(gameObject.storeItemsLeft <= 4) {
                    this.goal2.style.color = "green";
                }
                if(gameObject.clicks >= 200) {
                  this.goal3.style.color = "green";
                }
                if(gameObject.points >= 10000) {
                this.goal4.style.color = "green";
            }
            if(gameObject.storeItemsLeft === 0) {
                this.goal5.style.color = "green";
            }
            if(gameObject.points >= 50000) {
                console.log("reached 50k check");
                this.goal6.style.color = "green";
                gameObject.jello.style.width = 0; //jello disappears
                gameObject.jello.style.height = 0;
                gameObject.keepAddingPoints = false;
                gameObject.displayPoints.innerHTML = "Congrats, You win!!!"; //displays win message
            }
          }
        }
       
       
       
       