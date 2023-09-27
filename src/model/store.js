import * as gameObject from './game.js';

//store contains functions pertaining to the store section of the page
export const store = {
     perk1: document.getElementById('perk1'),
     perk2: document.getElementById('perk2'),
     perk3: document.getElementById('perk3'),
     perk4: document.getElementById('perk4'),
     perk5: document.getElementById('perk5'),
     perk6: document.getElementById('perk6'),
     perk7: document.getElementById('perk7'),
     perk8: document.getElementById('perk8'),
     displayItemCount: document.getElementById('itemCount'),    

    jelloStore: (num) => {
        switch (num) {
            case 1:
                if (gameObject.points >= 50) {
                    document.getElementById('item1').style.visibility = 'hidden';
                    gameObject.points -= 50;
                    gameObject.displayUserPoints();
                    gameObject.storeItemsLeft -= 1;
                    gameObject.generateJPoints(1); //1 jp per second
                }
                break;
            case 2:
                if (gameObject.points >= 200) {
                    document.getElementById('item2').style.visibility = 'hidden';
                    gameObject.isDoubleClick = true;
                    gameObject.points -= 200;
                    gameObject.displayUserPoints();
                    gameObject.storeItemsLeft -= 1;
                }
                break;
            case 3:
                if (gameObject.points >= 1000) {
                    document.getElementById('item3').style.visibility = 'hidden';
                    gameObject.points -= 1000;
                    gameObject.displayUserPoints();
                    gameObject.storeItemsLeft -= 1;
                    gameObject.generateJPoints(4); //5 jp per second
                }
                break;
            case 4:
                if (gameObject.points >= 2500) {
                    document.getElementById('item4').style.visibility = 'hidden';
                    gameObject.points -= 2500;
                    gameObject.displayUserPoints();
                    gameObject.storeItemsLeft -= 1;
                    gameObject.generateJPoints(5); //10 jp per second
                }
                break
            case 5:
                if (gameObject.points >= 4000) {
                    document.getElementById('item5').style.visibility = 'hidden';
                    gameObject.isQuadClick = true;
                    gameObject.points -= 4000;
                    gameObject.displayUserPoints();
                    gameObject.storeItemsLeft -= 1;
                }
                break;
            case 6:
                if (gameObject.points >= 6000) {
                    document.getElementById('item6').style.visibility = 'hidden';
                    gameObject.points -= 6000;
                    gameObject.displayUserPoints();
                    gameObject.storeItemsLeft -= 1;
                    gameObject.generateJPoints(15); //25 jp per second
                }
                break;
            case 7:
                if (gameObject.points >= 8000) {
                    document.getElementById('item7').style.visibility = 'hidden';
                    gameObject.points -= 8000;
                    gameObject.displayUserPoints();
                    gameObject.storeItemsLeft -= 1;
                    gameObject.generateJPoints(60); //75 jp per second
                }
                break
            case 8:
                if (gameObject.points >= 12000) {
                    document.getElementById('item8').style.visibility = 'hidden';
                    gameObject.isMegaClick = true;
                    gameObject.points -= 12000;
                    gameObject.displayUserPoints();
                    gameObject.storeItemsLeft -= 1;
                }
                break;

            default:
                console.log("default switch encountered");
        }

        if (gameObject.storeItemsLeft === 0) {
            this.displayItemCount.innerHTML = "Sold Out!!!";
            this.displayItemCount.style.color = "red";
        }
        else {
            this.displayItemCount.innerHTML = "Items left: " + gameObject.storeItemsLeft;
        }
    },
}