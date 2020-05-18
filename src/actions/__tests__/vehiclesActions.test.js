import * as actions from '../../actions/';

describe('Vehicle actions', () => {
  it(`${actions.setVehicles.name} has correct type`, () => {
    const action = actions.setVehicles();

    expect(action.type).toEqual(actions.SET_VEHICLES);
  });

  it(`${actions.setVehicle.name} has correct type`, () => {
    const action = actions.setVehicle();

    expect(action.type).toEqual(actions.SET_VEHICLE);
  });

  it(`${actions.setUserNames.name} has correct type`, () => {
    const action = actions.setUserNames();

    expect(action.type).toEqual(actions.SET_USER_NAMES);
  });

  it(`${actions.setVehiclesCachedData.name} has correct type`, () => {
    const action = actions.setVehiclesCachedData();

    expect(action.type).toEqual(actions.SET_VEHICLES_CACHED_DATA);
  });
});
