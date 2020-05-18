import * as actions from '../../actions/';

describe('Main actions', () => {
  it(`${actions.setBusy.name} has correct type`, () => {
    const action = actions.setBusy();

    expect(action.type).toEqual(actions.SET_BUSY);
  });

  it(`${actions.setError.name} has correct type`, () => {
    const action = actions.setError();

    expect(action.type).toEqual(actions.SET_ERROR);
  });

  it(`${actions.setPage.name} has correct type`, () => {
    const action = actions.setPage();

    expect(action.type).toEqual(actions.SET_PAGE);
  });
});
