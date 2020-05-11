import { SET_VEHICLE, SET_VEHICLES, SET_USER_NAMES } from '../actions';

const initialState = {
  list: [],
  vehicle: null,
  userNames: [],
};

export const vehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VEHICLES:
      return { ...state, list: action.payload };
    case SET_VEHICLE:
      return { ...state, vehicle: action.payload };
    case SET_USER_NAMES:
      return { ...state, userNames: action.payload };
    default:
      return state;
  }
};
