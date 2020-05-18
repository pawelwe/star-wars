import * as actions from '../../actions/';
import { vehiclesReducer } from '../vehiclesReducer';

describe('Planets reducer', () => {
  it(`should handle ${actions.SET_VEHICLES} action`, () => {
    const action = actions.setVehicles([{ vehicle: 'X-wing' }]);
    const newState = vehiclesReducer({}, action);

    expect(newState).toEqual({ list: [{ vehicle: 'X-wing' }] });
  });

  it(`should handle ${actions.SET_VEHICLE} action`, () => {
    const action = actions.setVehicle({ name: 'X-wing' });
    const newState = vehiclesReducer({}, action);

    expect(newState).toEqual({ vehicle: { name: 'X-wing' } });
  });

  it(`should handle ${actions.SET_USER_NAMES} action`, () => {
    const action = actions.setUserNames(['Luke', 'Leia']);
    const newState = vehiclesReducer({}, action);

    expect(newState).toEqual({ vehicle: { userNames: ['Luke', 'Leia'] } });
  });

  it(`should handle ${actions.SET_VEHICLES_CACHED_DATA} action`, () => {
    const action = actions.setVehiclesCachedData([{ vehicle: 'X-wing' }]);
    const newState = vehiclesReducer({}, action);

    expect(newState).toEqual({
      vehicle: [{ vehicle: 'X-wing' }],
    });
  });
});
