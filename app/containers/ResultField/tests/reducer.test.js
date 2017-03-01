
import { fromJS } from 'immutable';
import resultFieldReducer from '../reducer';

describe('resultFieldReducer', () => {
  it('returns the initial state', () => {
    expect(resultFieldReducer(undefined, {})).toEqual(fromJS({}));
  });
});
