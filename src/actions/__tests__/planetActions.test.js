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

  it(`${actions.fetchPlanets.name} dispatches correct actions`, async () => {
    const responseMock = [
      {
        name: 'Alderan',
        population: 10000000,
      },
    ];

    mockAdapter.onGet(swapi.baseUrl).replyOnce(200, {
      results: responseMock,
    });

    const mockStore = configureStore([thunkMiddleware]);
    const store = mockStore({});

    await store.dispatch(actions.fetchPlanets()).then(() => {
      const storeActions = store.getActions();

      expect(storeActions[0]).toEqual(actions.setError(null));
      expect(storeActions[1]).toEqual(actions.setBusy(true));
      expect(storeActions[2]).toEqual(actions.setPage(1));
      expect(storeActions[3]).toEqual(actions.setPlanets(responseMock));
      expect(storeActions[4]).toEqual(actions.setBusy(false));
    });
  });

  it(`${actions.fetchPlanet.name} dispatches correct actions`, async () => {
    const responseMock = {
      name: 'Alderan',
      population: 10000000,
    };

    mockAdapter.onGet(swapi.baseUrl).replyOnce(200, responseMock);

    const mockStore = configureStore([thunkMiddleware]);
    const store = mockStore({});

    await store.dispatch(actions.fetchPlanet(1)).then(() => {
      const storeActions = store.getActions();

      expect(storeActions[0]).toEqual(actions.setError(null));
      expect(storeActions[1]).toEqual(actions.setBusy(true));
      expect(storeActions[2]).toEqual(actions.setPlanet(responseMock));
      expect(storeActions[3]).toEqual(actions.setBusy(false));
    });
  });
});
