import swapi from '../apis/swapi';
import { setBusy, setError } from './';

export const SET_VEHICLES = 'SET_VEHICLES';
export const SET_VEHICLE = 'SET_VEHICLE';
export const ADD_MORE_INFO = 'ADD_MORE_INFO';

const setVehicles = data => {
  return {
    type: SET_VEHICLES,
    payload: data,
  };
};

const setVehicle = data => {
  return {
    type: SET_VEHICLE,
    payload: data,
  };
};

const addMoreInfo = data => {
  return {
    type: ADD_MORE_INFO,
    payload: data,
  };
};

export const fetchVehicles = () => async dispatch => {
  dispatch(setBusy(true));

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

export const fetchUsersInfo = (infoUrl, prop = 'usersNames') => async (
  dispatch,
  getState,
) => {
  dispatch(setBusy(true));

  try {
    const {
      data: { name },
    } = await swapi.get(infoUrl);

    const {
      vehicles: { vehicle },
    } = getState();

    const newData = {
      ...vehicle,
    };

    if (!vehicle[prop]) {
      vehicle[prop] = [];
    }

    newData[prop] = [...vehicle[prop], name];

    dispatch(addMoreInfo(newData));
    dispatch(setBusy(false));
  } catch ({ message }) {
    dispatch(setError(message));
    dispatch(setBusy(false));
  }
};
