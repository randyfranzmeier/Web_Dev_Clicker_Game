//this file deals with the main logic for the game

//declare boolean variables for power ups

    let displayPoints = document.getElementById('points');
     points =  0;
     clicks = 0;
     let perk1 = document.getElementById('perk1')






     

    let handleClick = () =>{
         clicks++;
         setPoints(getPoints() + 1);
         displayUserPoints();

     }

     let generateCookies = (num) => {
        while(true) {
            setTimeout(()=>{
                setPoints(getPoints() + num);
            }, 1000); //add specified number of points each second
        }
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
        
        let displayUserPoints = () => {
            displayPoints.innerHTML = "JPOINTS: " + getPoints();
            if(getPoints() >= 50000) {displayPoints.style.color = "gold";}
            else {displayPoints.style.color = "white";}
        }

        //------------------------------Store------------------------------------------
        //store contains functions pertaining to the store section of the page
        let store = {
           // addEventListener()
            purchaseItem (num) {
                //switch statement, each number correlates to button pressed?
                
            }

        }


        //------------------------------Achievements------------------------------------
        //achievements object to contain functions for achievements portion of page
        let achievements = {

        }
        
    
      
    
    

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

