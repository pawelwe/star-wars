import swapi from '../apis/swapi';
import { setBusy, setError, setPage } from './';

export const SET_VEHICLES = 'SET_VEHICLES';
export const SET_VEHICLE = 'SET_VEHICLE';
export const SET_USER_NAMES = 'SET_USER_NAMES';
export const SET_VEHICLES_CACHED_DATA = 'SET_VEHICLES_CACHED_DATA';

export const setVehicles = data => {
  return {
    type: SET_VEHICLES,
    payload: data,
  };
};

export const setVehicle = data => {
  return {
    type: SET_VEHICLE,
    payload: data,
  };
};

export const setUserNames = data => {
  return {
    type: SET_USER_NAMES,
    payload: data,
  };
};

export const setVehiclesCachedData = data => {
  return {
    type: SET_VEHICLES_CACHED_DATA,
    payload: data,
  };
};

export const fetchVehicles = () => async dispatch => {
  dispatch(setError(null));
  dispatch(setBusy(true));
  dispatch(setPage(1));

  try {
    const {
      data: { results },
    } = await swapi.get('/vehicles');

    dispatch(setVehicles(results));
    dispatch(setBusy(false));
  } catch ({ message }) {
    dispatch(setError(message));
    dispatch(setBusy(false));
  }
};

export const fetchVehicle = id => async dispatch => {
  dispatch(setError(null));
  dispatch(setBusy(true));

  try {
    const { data } = await swapi.get(`/vehicles/${id}`);

    dispatch(setVehicle(data));
    dispatch(setBusy(false));
  } catch ({ message }) {
    dispatch(setError(message));
    dispatch(setBusy(false));
  }
};

export const fetchAdditionalUsersData = dataUrlArray => dispatch => {
  dispatch(setError(null));
  dispatch(setBusy(true));

  const dataPromises = dataUrlArray.map(item => swapi.get(item));

  return Promise.all(dataPromises)
    .then(values => {
      const mappedData = values.map(item => {
        return item.data.name;
      });
      dispatch(setUserNames(mappedData));
      dispatch(setBusy(false));
    })
    .catch(({ message }) => {
      dispatch(setError(message));
      dispatch(setBusy(false));
    });
};
