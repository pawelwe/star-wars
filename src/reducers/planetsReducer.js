import { SET_PLANET, SET_PLANETS, ADD_MORE_INFO, SET_RESIDENTS } from '../actions';

const initialState = {
  list: [],
  planet: null,
  residentsNames: [],
};

export const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANETS:
      return { ...state, list: action.payload };
    case SET_PLANET:
      return { ...state, planet: action.payload };
    case ADD_MORE_INFO:
      return { ...state, planet: { ...state.planet, ...action.payload } };
    case SET_RESIDENTS:
      return { ...state, residentsNames: action.payload };
    default:
      return state;
  }
};
