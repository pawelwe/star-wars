import swapi from '../apis/swapi';
import { setBusy, setError } from './';

export const SET_PEOPLE = 'SET_PEOPLE';
export const SET_CHARACTER = 'SET_CHARACTER';
export const SET_WORLD = 'SET_WORLD';
export const SET_USER_VEHICLES = 'SET_USER_VEHICLES';

export const setPeople = data => {
  return {
    type: SET_PEOPLE,
    payload: data,
  };
};

export const setCharacter = data => {
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

export const setUserVehicles = data => {
  return {
    type: SET_USER_VEHICLES,
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

export const fetchPlanetInfo = infoUrl => async dispatch => {
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

export const fetchAdditionalPeopleData = dataUrlArray => dispatch => {
  dispatch(setBusy(true));

  const dataPromises = dataUrlArray.map(item => swapi.get(item));

  Promise.all(dataPromises)
    .then(values => {
      const mappedData = values.map(item => {
        return item.data.name;
      });
      dispatch(setUserVehicles(mappedData));
      dispatch(setBusy(false));
    })
    .catch(({ message }) => {
      dispatch(setError(message));
      dispatch(setBusy(false));
    });
};
