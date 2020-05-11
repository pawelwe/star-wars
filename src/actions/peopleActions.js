import swapi from '../apis/swapi';
import { setBusy, setError } from './';

export const SET_PEOPLE = 'SET_PEOPLE';
export const SET_CHARACTER = 'SET_CHARACTER';
export const SET_WORLD = 'SET_WORLD';
export const SET_VEHICLES = 'SET_VEHICLES';

const setPeople = data => {
  return {
    type: SET_PEOPLE,
    payload: data,
  };
};

const setCharacter = data => {
  return {
    type: SET_CHARACTER,
    payload: data,
  };
};

export const setWorld = data => {
  return {
    type: SET_WORLD,
    payload: data,
  };
};

export const setVehicles = data => {
  return {
    type: SET_VEHICLES,
    payload: data,
  };
};

export const fetchPeople = () => async dispatch => {
  dispatch(setBusy(true));

  try {
    const {
      data: { results },
    } = await swapi.get('/people');

    dispatch(setPeople(results));
    dispatch(setBusy(false));
  } catch ({ message }) {
    dispatch(setError(message));
    dispatch(setBusy(false));
  }
};

export const fetchPlanetInfo = (infoUrl, prop = 'planet') => async dispatch => {
  dispatch(setBusy(true));

  try {
    const {
      data: { name },
    } = await swapi.get(infoUrl);

    dispatch(setWorld(name));
    dispatch(setBusy(false));
  } catch ({ message }) {
    dispatch(setError(message));
    dispatch(setBusy(false));
  }
};

export const fetchCharacter = id => async dispatch => {
  dispatch(setBusy(true));

  try {
    const { data } = await swapi.get(`/people/${id}`);

    dispatch(setCharacter(data));
    dispatch(setBusy(false));
  } catch ({ message }) {
    dispatch(setError(message));
    dispatch(setBusy(false));
  }
};
