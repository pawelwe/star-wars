import { extractLastUrlPartFromUrlString, compareValues } from '../utils';

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
});
