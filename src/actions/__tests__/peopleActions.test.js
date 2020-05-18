import * as actions from '../../actions/';

describe('People actions', () => {
  it(`${actions.setPeople.name} has correct type`, () => {
    const action = actions.setPeople();

    expect(action.type).toEqual(actions.SET_PEOPLE);
  });

  it(`${actions.setCharacter.name} has correct type`, () => {
    const action = actions.setCharacter();

    expect(action.type).toEqual(actions.SET_CHARACTER);
  });

  it(`${actions.setWorld.name} has correct type`, () => {
    const action = actions.setWorld();

    expect(action.type).toEqual(actions.SET_WORLD);
  });

  it(`${actions.setUserVehicles.name} has correct type`, () => {
    const action = actions.setUserVehicles();

    expect(action.type).toEqual(actions.SET_USER_VEHICLES);
  });

  it(`${actions.setUserCachedData.name} has correct type`, () => {
    const action = actions.setUserCachedData();

    expect(action.type).toEqual(actions.SET_USER_CACHED_DATA);
  });
});
