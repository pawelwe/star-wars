export const SET_BUSY = 'SET_BUSY';
export const SET_ERROR = 'SET_ERROR';

export const setBusy = isBusy => {
  return {
    type: SET_BUSY,
    payload: isBusy,
  };
};

export const setError = error => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};
