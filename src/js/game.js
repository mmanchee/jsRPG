export class Game {
  constructor() {
    this.character,
    this.exp = 0,
    this.previous = [],
    this.pages = [],
    this.choices = []         // array of arrays [choice 1 = [1, 2, 3], choice 2 = [3, 4, 2], ...] array = [nextPage = #, item = "", exp = #, power = #]
  }
  addPlayer(player) {
    this.character = player;
    this.previous.push(0);
  }
  // Choice Function
  choices() {
    // take in decision, one number equaling the game.choices[] index
    // decision Function
    // expGain Function
    // powerLevel Function
    // display Function
    // returns new info to HTML
  }
  // Decision Function
  decision() {
    // takes in the players choice, one number equaling the choices[] index
    // adds exp
    // adds power
    // adds item if any
    // push page to game.pages[]
    // clears game.choices[]
  }
  // ExpGain Function
  expGain() {
    // checks exp total to see if it has reached a new level
    // add points to skills if needed
    // add points to stats if needed
  }
  //PowerLevel Function
  powerLevel() {
    // check power level and determine level 
    // if it is too low, alert player "you need to take it easy for a bit"
  }
  // Display Function
  display() {
    // check last page in game.pages[]
    // parse page information
    // changes game.choices[]
    // sets text of new page
    // determine which choices are available, pages.test
    // sets options of new page as buttons
    // returns new display
  }
  // Upgrade Function
  upgrade() {
    // take in upgrade info, type (stats or skills) and quantity
    // upgrade as needed
      // subtract points 
      // add skills or stats
  }
  
}
