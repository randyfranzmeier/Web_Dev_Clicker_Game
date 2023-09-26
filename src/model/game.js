/** this file sets up the games properties, while implementing core functions.
 *  Notice I'm using objects instead of classes, as I find them easier to work with.
*/

export const gameObject = {
    displayPoints: document.getElementById('points'),
    points: 0, //these are all game properties
    clicks: 0,
    storeItemsLeft: 8,
    jello: document.getElementById('jello'),
    isDoubleClick: false,
    isQuadClick: false,
    isMegaClick: false,
    keepAddingPoints: true,

    async displayWinMessage() {
        await this.waitNumSeconds(2000);
       this.jello.style.visibility = 'hidden'; //jello disappears
       this.displayPoints.innerHTML = "Congrats, You win!!!"; //displays win message
       this.points = 0; //reset so user can't buy anything
    },
    
     displayUserPoints () {
        this.displayPoints.innerHTML = "JPOINTS: " + this.points;
        this.points >= 50000 ? this.displayPoints.style.color = "gold" : this.displayPoints.style.color = "black";
    },

    waitNumSeconds(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    },

    async generateJPoints(num) {
    while (this.keepAddingPoints) {
        this.displayUserPoints();
        this.points += num;
        await this.waitNumSeconds(1000);
    }
}

}
























