import * as actions from '../../actions/';
import { mainReducer } from '../mainReducer';

describe('Main reducer', () => {
  it(`should handle ${actions.SET_BUSY} action`, () => {
    const action = actions.setBusy(true);
    const newState = mainReducer({}, action);

    expect(newState).toStrictEqual({ isBusy: true });
  });

  it(`should handle ${actions.SET_ERROR} action`, () => {
    const action = actions.setError('404');
    const newState = mainReducer({}, action);

    expect(newState).toStrictEqual({ error: '404' });
  });

  it(`should handle ${actions.SET_PAGE} action`, () => {
    const action = actions.setPage(2);
    const newState = mainReducer({}, action);

    expect(newState).toStrictEqual({ currentPage: 2 });
  });
});
