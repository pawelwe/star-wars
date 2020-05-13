import {
  SET_PEOPLE,
  SET_CHARACTER,
  SET_WORLD,
  SET_USER_VEHICLES,
  SET_CACHED_DATA,
} from '../actions';

const initialState = {
  list: [],
  character: null,
  world: null,
  vehiclesNames: [],
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      return { ...state, list: action.payload };
    case SET_CHARACTER:
      return { ...state, character: action.payload };
    case SET_WORLD:
      return { ...state, world: action.payload };
    case SET_USER_VEHICLES:
      return { ...state, vehiclesNames: action.payload };
    case SET_CACHED_DATA:
      return {
        ...state,
        character: action.payload.character,
        world: action.payload.world,
        vehiclesNames: action.payload.vehiclesNames,
      };
    default:
      return state;
  }
};
