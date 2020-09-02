import { Player } from './../src/js/player.js';

describe('Player', () => {

  test('should correctly create a player object from the constructor', () => {
      const player = new Player("Alma", "Montagues", "Scientist");
      expect(player.name).toEqual("Alma");
      expect(player.family).toEqual("Montagues");
      expect(player.charClass).toEqual("Scientist");
  });
});