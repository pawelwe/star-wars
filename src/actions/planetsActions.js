import swapi from '../apis/swapi';
import { setBusy, setError } from './';

export const SET_PLANETS = 'SET_PLANETS';
export const SET_PLANET = 'SET_PLANET';
export const SET_RESIDENTS = 'SET_RESIDENTS';

const setPeople = data => {
  return {
    type: SET_PLANETS,
    payload: data,
  };
};

const setCharacter = data => {
  return {
    type: SET_PLANET,
    payload: data,
  };
};

export const setResidents = data => {
  return {
    type: SET_RESIDENTS,
    payload: data,
  };
};

export const fetchPlanets = () => async dispatch => {
  dispatch(setBusy(true));

  try {
    const {
      data: { results },
    } = await swapi.get('/planets');

    dispatch(setPeople(results));
    dispatch(setBusy(false));
  } catch ({ message }) {
    dispatch(setError(message));
    dispatch(setBusy(false));
  }
};

export const fetchPlanet = id => async dispatch => {
  dispatch(setBusy(true));

  try {
    const { data } = await swapi.get(`/planets/${id}`);

    dispatch(setCharacter(data));
    dispatch(setBusy(false));
  } catch ({ message }) {
    dispatch(setError(message));
    dispatch(setBusy(false));
  }
};

export const fetchAdditionalResidentsData = dataUrlArray => async dispatch => {
  dispatch(setBusy(true));

  const dataPromises = dataUrlArray.map(item => swapi.get(item));

  Promise.all(dataPromises)
    .then(values => {
      const mappedData = values.map(item => {
        return item.data.name;
      });
      dispatch(setResidents(mappedData));
      dispatch(setBusy(false));
    })
    .catch(({ message }) => {
      dispatch(setError(message));
      dispatch(setBusy(false));
    });
};
