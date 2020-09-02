import { Game } from './../src/js/game.js';

describe('Game', () => {

  test('should check whether Game constructor is correctly created', () => {
    const ourGame = new Game();
    expect(ourGame.exp).toEqual(0);
    expect(ourGame.previous).toEqual([]);
  });
});