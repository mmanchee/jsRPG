export class Game {
  constructor() {
    this.character,
    this.exp = 0,
    this.previous = [],
    this.pages = [],
    this.choices = []         // array of arrays [choice 1 = [1, 2, 3], choice 2 = [3, 4, 2], ...]
  }
  addPlayer(player) {
    this.character = player;
    this.previous.push(0);
  }
}
