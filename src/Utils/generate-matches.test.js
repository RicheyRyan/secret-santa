import { shuffle, createPairs } from './generate-matches.js';

describe('shuffle', () => {
  test('Shuffled array should have different order to original array', () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle(original);
    expect(original).not.toEqual(shuffled);
  });
});

describe('createPairs', () => {
  test('Array should be paired up', () => {
    const original = ['1', '2', '3', '4', '5', '6'];
    const paired = createPairs(original);
    const expected = {
      '1': '2',
      '2': '3',
      '3': '4',
      '4': '5',
      '5': '6',
      '6': '1',
    };
    expect(paired).toEqual(expected);
  });
});
