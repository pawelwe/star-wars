import * as actions from '../../actions/';
import { cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import swapi from '../../apis/swapi';
import MockAdapter from 'axios-mock-adapter';

let mockAdapter = new MockAdapter(swapi);

afterEach(cleanup);

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

  it(`${actions.fetchPeople.name} dispatches correct actions`, async () => {
    const responseMock = [
      {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
      },
    ];

    mockAdapter.onGet(swapi.baseUrl).replyOnce(200, {
      results: responseMock,
    });

    const mockStore = configureStore([thunkMiddleware]);
    const store = mockStore({});

    await store.dispatch(actions.fetchPeople()).then(() => {
      const storeActions = store.getActions();

      expect(storeActions[0]).toEqual(actions.setError(null));
      expect(storeActions[1]).toEqual(actions.setBusy(true));
      expect(storeActions[2]).toEqual(actions.setPage(1));
      expect(storeActions[3]).toStrictEqual(actions.setPeople(responseMock));
      expect(storeActions[4]).toEqual(actions.setBusy(false));
    });
  });
});
