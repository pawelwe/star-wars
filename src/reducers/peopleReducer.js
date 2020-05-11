import { SET_PEOPLE, SET_CHARACTER } from '../actions';

const initialState = {
  list: [],
  character: null,
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      return { ...state, list: action.payload };
    case SET_CHARACTER:
      return { ...state, character: action.payload };
    default:
      return state;
  }
};
