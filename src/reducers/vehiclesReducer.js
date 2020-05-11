import { SET_VEHICLE, SET_VEHICLES } from '../actions';

const initialState = {
  list: [],
  vehicle: null,
};

export const vehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VEHICLES:
      return { ...state, list: action.payload };
    case SET_VEHICLE:
      return { ...state, vehicle: action.payload };
    default:
      return state;
  }
};
