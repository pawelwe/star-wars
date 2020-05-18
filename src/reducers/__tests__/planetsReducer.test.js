import * as actions from '../../actions/';
import { planetsReducer } from '../planetsReducer';

describe('Planets reducer', () => {
  it(`should handle ${actions.SET_PLANETS} action`, () => {
    const action = actions.setPlanets([{ planet: 'Mars' }]);
    const newState = planetsReducer({}, action);

    expect(newState).toEqual({ list: [{ planet: 'Mars' }] });
  });

  it(`should handle ${actions.SET_PLANET} action`, () => {
    const action = actions.setPlanet({ name: 'Mars' });
    const newState = planetsReducer({}, action);

    expect(newState).toEqual({ planet: { name: 'Mars' } });
  });

  it(`should handle ${actions.SET_RESIDENTS} action`, () => {
    const action = actions.setResidents(['Luke', 'Leia']);
    const newState = planetsReducer({}, action);

    expect(newState).toEqual({ planet: { residentsNames: ['Luke', 'Leia'] } });
  });

  it(`should handle ${actions.SET_PLANETS_CACHED_DATA} action`, () => {
    const action = actions.setPlanetsCachedData([{ planet: 'Mars' }]);
    const newState = planetsReducer({}, action);

    expect(newState).toEqual({
      planet: [{ planet: 'Mars' }],
    });
  });
});
