import { SET_PLANET, SET_PLANETS } from '../actions';

const initialState = {
  list: [],
  planet: null,
};

export const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANETS:
      return { ...state, list: action.payload };
    case SET_PLANET:
      return { ...state, planet: action.payload };
    default:
      return state;
  }
};
