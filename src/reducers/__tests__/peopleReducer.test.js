import * as actions from '../../actions/';
import { peopleReducer } from '../peopleReducer';

describe('People reducer', () => {
  it(`should handle ${actions.SET_PEOPLE} action`, () => {
    const action = actions.setPeople([{ name: 'Luke' }]);
    const newState = peopleReducer({}, action);

    expect(newState).toStrictEqual({ list: [{ name: 'Luke' }] });
  });

  it(`should handle ${actions.SET_CHARACTER} action`, () => {
    const action = actions.setCharacter({ name: 'Luke' });
    const newState = peopleReducer({}, action);

    expect(newState).toStrictEqual({ character: { name: 'Luke' } });
  });

  it(`should handle ${actions.SET_WORLD} action`, () => {
    const action = actions.setWorld('Tatooine');
    const newState = peopleReducer({}, action);

    expect(newState).toStrictEqual({ world: 'Tatooine' });
  });

  it(`should handle ${actions.SET_USER_VEHICLES} action`, () => {
    const action = actions.setUserVehicles(['x-wing']);
    const newState = peopleReducer({}, action);

    expect(newState).toStrictEqual({ vehiclesNames: ['x-wing'] });
  });
});
