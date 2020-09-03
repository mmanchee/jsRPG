import { story } from './pages.js';

export class Game {
  constructor() {
    this.character,           // character = {name: , family: , charClass: ,items: [], stats: {availPoints: ,strength: ,intellect: ,charm: ,wisdom: ,power: }, ..
                              // .. skills: {availPoints: ,lockPick: , forestry: , intuition: , persuasion: , hide: , fight: , powerGain: , science: }}
    this.exp = 0,
    this.previous = [],
    this.pages = [],
    this.choices = []         // array of arrays [[0]choice 1 = [1, 2, 3], [1]choice 2 = [3, 4, 2], ...] 
                              // array = [[0] = nextPage = #, [1] = item = "", [2] = exp = #, [3] = power = #]
  }
  addPlayer(player) {
    this.character = player;
    this.previous.push(0);
    this.book = story;
  }

  // Choice Function
  choices(decisionNum) {
    // take in decision, one number equaling the game.choices[] index
    // decision Function
    this.decision(decisionNum);
    // expGain Function
    this.expGain();
    // powerLevel Function
    this.powerLevel();
    // display Function
    let newDisplay = this.display();
    // returns new info to HTML
    return newDisplay;
  }
  // Decision Function
  decision(choiceNum) {
    // takes in the players choice, one number equaling the game.choices[] index
    // adds exp
    this.exp += this.choices[2];
    // adds power
    this.character.stats.power += this.choices[3];
    // push item if any
    this.character.items.push(this.choices[1]);
    // push page to game.pages[]
    this.pages.push(choices[0]);
    // clears game.choices[]
    this.choices = [];
  }
  
  //PowerLevel Function
  powerLevel() {
    if (this.character.stats.power < 2) {
      alert("you need to take it easy for a bit");
    }
    // check power level and determine level    
    // if it is too low, alert player "you need to take it easy for a bit"
  }
  // Display Function
  display() {
    let page;
    // check last page in game.pages[]
    let currentPage = this.pages.unshift();
    // parse page information
    for (let i = 0; i < this.book.length; i++) {
      if (this.book[i].page === currentPage) {
        page = this.book[i];
        break;
      } 
    }
    // identify skill name
    // get its value
    // compare to value of same skill in player
    // sets text of new page
    let textToHTML = "<p>" + page.text + "</p>";
    let skill = this.character.skills;
    let stat = this.character.stats;
    let inv = this.character.items;
    let a = 0;
    for (let i = 0; i < page.choices.length; i++) {
      let test = page.choice[i].test;
      for (let key in test) {
        if (test[key] < skill[key] || test[key] < stat[key] || inv.includes(test[key])) {
          // create HTML button
          // push game.choices
          a++;
          break;
        }
      }
    }
    // changes game.choices[]
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
  // ExpGain Function
  expGain() {
    // checks exp total to see if it has reached a new level
    // add points to skills if needed
    // add points to stats if needed
  }
}
