import swapi from '../apis/swapi';
import { setBusy, setError } from './';

export const SET_PEOPLE = 'SET_PEOPLE';
export const SET_CHARACTER = 'SET_CHARACTER';

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
