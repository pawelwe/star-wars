import {
  SET_PLANET,
  SET_PLANETS,
  SET_RESIDENTS,
  SET_PLANETS_CACHED_DATA,
} from '../actions';

const initialState = {
  list: [],
  planet: null,
};

export const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANETS:
      return { ...state, list: JSON.parse(JSON.stringify(action.payload)) };
    case SET_PLANET:
      return { ...state, planet: JSON.parse(JSON.stringify(action.payload)) };
    case SET_RESIDENTS:
      return {
        ...state,
        planet: { ...state.planet, residentsNames: [...action.payload] },
      };
    case SET_PLANETS_CACHED_DATA:
      return {
        ...state,
        planet: JSON.parse(JSON.stringify(action.payload)),
      };
    default:
      return state;
  }
};
