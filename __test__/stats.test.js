import { Stats } from './../src/js/stats';

describe('Stats', () => {

  test('should correctly create a stats object from the constructor', () => {
    const stats = new Stats(1, 2, 3, 4, 5);
    expect(stats.strength).toEqual(1);
    expect(stats.intellect).toEqual(2);
    expect(stats.charm).toEqual(3);
    expect(stats.wisdom).toEqual(4);
    expect(stats.power).toEqual(5);
  })
}) 