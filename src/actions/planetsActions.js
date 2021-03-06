import swapi from '../apis/swapi';
import { setBusy, setError, setPage } from './';

export const SET_PLANETS = 'SET_PLANETS';
export const SET_PLANET = 'SET_PLANET';
export const SET_RESIDENTS = 'SET_RESIDENTS';
export const SET_PLANETS_CACHED_DATA = 'SET_PLANETS_CACHED_DATA';

export const setPlanets = data => {
  return {
    type: SET_PLANETS,
    payload: data,
  };
};

export const setPlanet = data => {
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

export const setPlanetsCachedData = data => {
  return {
    type: SET_PLANETS_CACHED_DATA,
    payload: data,
  };
};

export const fetchPlanets = () => async dispatch => {
  dispatch(setError(null));
  dispatch(setBusy(true));
  dispatch(setPage(1));

  try {
    const {
      data: { results },
    } = await swapi.get('/planets');

    dispatch(setPlanets(results));
    dispatch(setBusy(false));
  } catch ({ message }) {
    dispatch(setError(message));
    dispatch(setBusy(false));
  }
};

export const fetchPlanet = id => async dispatch => {
  dispatch(setError(null));
  dispatch(setBusy(true));

  try {
    const { data } = await swapi.get(`/planets/${id}`);

    dispatch(setPlanet(data));
    dispatch(setBusy(false));
  } catch ({ message }) {
    dispatch(setError(message));
    dispatch(setBusy(false));
  }
};

export const fetchAdditionalResidentsData = dataUrlArray => dispatch => {
  dispatch(setError(null));
  dispatch(setBusy(true));

  const dataPromises = dataUrlArray.map(item => swapi.get(item));

  return Promise.all(dataPromises)
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
