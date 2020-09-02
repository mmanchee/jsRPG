import { Player } from './../src/js/player.js';

describe('Player', () => {

  test('should correctly create a player object from the constructor', () => {
      const player = new Player("Alma", "Montagues", "Scientist");
      expect(player.name).toEqual("Alma");
      expect(player.family).toEqual("Montagues");
      expect(player.charClass).toEqual("Scientist");
  });
});
describe('addStats', () => {

  test('should correctly add stats to player', () => {
    const player = new Player("Alma", "Montagues", "Scientist");
    const stats = player.addStats({name: 3});
    expect(player.stats).toEqual({name: 3});
  });
});
describe('addSkills', () => {

  test('should correctly add skills to player', () => {
    const player = new Player("Alma", "Montagues", "Scientist");
    const skills = player.addSkills({name: 3});
    expect(player.skills).toEqual({name: 3});
  });
});