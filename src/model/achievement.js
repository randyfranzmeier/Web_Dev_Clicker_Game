import {gameObject} from './game.js';
import {observerObject} from './main.js';

//achievements object to contain functions for achievements portion of page
export const achievements = {
  goal1: document.getElementById('goal1'),
  goal2: document.getElementById('goal2'),
  goal3: document.getElementById('goal3'),
  goal4: document.getElementById('goal4'),
  goal5: document.getElementById('goal5'),
  goal6: document.getElementById('goal6'),

  checkAchievements() { //set up event listener for points, only works when jello is clicked. onchange event?

    if (gameObject.points >= 1000) {
      this.goal1.style.color = "green";
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
    if (gameObject.points >= 50000) {
      observerObject.stop();
      gameObject.keepAddingPoints = false;
      this.goal6.style.color = "green";
      gameObject.displayWinMessage();
    }
  }
}