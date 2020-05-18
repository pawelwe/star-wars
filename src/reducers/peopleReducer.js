import {
  SET_PEOPLE,
  SET_CHARACTER,
  SET_WORLD,
  SET_USER_VEHICLES,
  SET_USER_CACHED_DATA,
} from '../actions';

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
    case SET_WORLD:
      return {
        ...state,
        character: { ...state.character, world: action.payload },
      };
    case SET_USER_VEHICLES:
      return {
        ...state,
        character: { ...state.character, vehiclesNames: action.payload },
      };
    case SET_USER_CACHED_DATA:
      return {
        ...state,
        character: Object.assign({}, action.payload),
      };
    default:
      return state;
  }
};
