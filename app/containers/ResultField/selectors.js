import { createSelector } from 'reselect';

/**
 * Direct selector to the resultField state domain
 */
const selectResultFieldDomain = () => (state) => state.get('result');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ResultField
 */

const makeSelectResultField = () => createSelector(
  selectResultFieldDomain(),
  (result) => result.toJS()
);

export default makeSelectResultField;
export {
  selectResultFieldDomain,
};
