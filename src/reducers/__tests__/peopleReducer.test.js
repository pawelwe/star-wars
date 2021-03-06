import * as actions from '../../actions/';
import { peopleReducer } from '../peopleReducer';
import { vehiclesReducer } from '../vehiclesReducer';

describe('People reducer', () => {
  it(`should handle ${actions.SET_PEOPLE} action`, () => {
    const action = actions.setPeople([{ name: 'Luke' }]);
    const newState = peopleReducer({}, action);

    expect(newState).toEqual({ list: [{ name: 'Luke' }] });
  });

  it(`should handle ${actions.SET_CHARACTER} action`, () => {
    const action = actions.setCharacter({ name: 'Luke' });
    const newState = peopleReducer({}, action);

    expect(newState).toEqual({ character: { name: 'Luke' } });
  });

  it(`should handle ${actions.SET_WORLD} action`, () => {
    const action = actions.setWorld('Tatooine');
    const newState = peopleReducer({}, action);

    expect(newState).toEqual({ character: { world: 'Tatooine' } });
  });

  it(`should handle ${actions.SET_USER_VEHICLES} action`, () => {
    const action = actions.setUserVehicles(['x-wing']);
    const newState = peopleReducer({}, action);

    expect(newState).toEqual({
      character: {
        vehiclesNames: ['x-wing'],
      },
    });
  });

  it(`should handle ${actions.SET_USER_CACHED_DATA} action`, () => {
    const action = actions.setUserCachedData([{ name: 'Anakin' }]);
    const newState = peopleReducer({}, action);

    expect(newState).toEqual({
      character: [{ name: 'Anakin' }],
    });
  });
});
