import { Skills } from './../src/js/skills';

describe('Skills', () => {

  test('should show that skills are properly assigned', () => {
    const ourSkills = new Skills(1,2,3,4,5,6,7,8);
    expect(ourSkills.lockPick).toEqual(1);
    expect(ourSkills.forestry).toEqual(2);
    expect(ourSkills.intuition).toEqual(3);
    expect(ourSkills.persuasion).toEqual(4);
    expect(ourSkills.hide).toEqual(5);
    expect(ourSkills.fight).toEqual(6);
    expect(ourSkills.powerGain).toEqual(7);
    expect(ourSkills.science).toEqual(8);
  });
});

