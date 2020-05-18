import * as actions from '../../actions/';

describe('Planet actions', () => {
  it(`${actions.setPlanets.name} has correct type`, () => {
    const action = actions.setPlanets();

    expect(action.type).toEqual(actions.SET_PLANETS);
  });

  it(`${actions.setPlanet.name} has correct type`, () => {
    const action = actions.setPlanet();

    expect(action.type).toEqual(actions.SET_PLANET);
  });

  it(`${actions.setResidents.name} has correct type`, () => {
    const action = actions.setResidents();

    expect(action.type).toEqual(actions.SET_RESIDENTS);
  });

  it(`${actions.setPlanetsCachedData.name} has correct type`, () => {
    const action = actions.setPlanetsCachedData();

    expect(action.type).toEqual(actions.SET_PLANETS_CACHED_DATA);
  });
});
