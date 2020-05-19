import * as actions from '../../actions/';
import { cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import swapi from '../../apis/swapi';
import MockAdapter from 'axios-mock-adapter';

let mockAdapter;

beforeEach(() => {
  mockAdapter = new MockAdapter(swapi);
});

afterEach(() => {
  cleanup();
  mockAdapter = null;
});

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

  it(`${actions.fetchVehicles.name} dispatches correct actions`, async () => {
    const responseMock = [
      {
        name: 'X-wing',
        speed: 6,
      },
    ];

    mockAdapter.onGet(swapi.baseUrl).replyOnce(200, {
      results: responseMock,
    });

    const mockStore = configureStore([thunkMiddleware]);
    const store = mockStore({});

    await store.dispatch(actions.fetchVehicles()).then(() => {
      const storeActions = store.getActions();

      expect(storeActions[0]).toEqual(actions.setError(null));
      expect(storeActions[1]).toEqual(actions.setBusy(true));
      expect(storeActions[2]).toEqual(actions.setPage(1));
      expect(storeActions[3]).toEqual(actions.setVehicles(responseMock));
      expect(storeActions[4]).toEqual(actions.setBusy(false));
    });
  });

  it(`${actions.fetchVehicle.name} dispatches correct actions`, async () => {
    const responseMock = {
      name: 'Alderan',
      population: 10000000,
    };

    mockAdapter.onGet(swapi.baseUrl).replyOnce(200, responseMock);

    const mockStore = configureStore([thunkMiddleware]);
    const store = mockStore({});

    await store.dispatch(actions.fetchVehicle(1)).then(() => {
      const storeActions = store.getActions();

      expect(storeActions[0]).toEqual(actions.setError(null));
      expect(storeActions[1]).toEqual(actions.setBusy(true));
      expect(storeActions[2]).toEqual(actions.setVehicle(responseMock));
      expect(storeActions[3]).toEqual(actions.setBusy(false));
    });
  });
});
