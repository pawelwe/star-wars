import {
  extractLastUrlPartFromUrlString,
  compareValues,
  calculateVisibleRange,
} from '../utils';

describe('Utils', () => {
  it('should extract last url part', () => {
    const param = extractLastUrlPartFromUrlString(
      'http://swapi.dev/api/films/2/',
    );

    expect(param).toBe(2);
  });

  it('should sort by key', () => {
    const array = [{ name: 'Luke' }, { name: 'Anakin' }];
    const sortedArray = array.sort(compareValues('name'));

    expect(sortedArray).toStrictEqual([{ name: 'Anakin' }, { name: 'Luke' }]);
  });

  it('should calculate correct items range', () => {
    const itemsArray = [
      { name: 'Luke' },
      { name: 'Anakin' },
      { name: 'Vader' },
      { name: 'Lea' },
      { name: 'R2D2' },
      { name: 'Star Trooper' },
    ];
    const page1 = calculateVisibleRange(itemsArray, 1);

    expect(page1.length).toEqual(4);
  });
});
