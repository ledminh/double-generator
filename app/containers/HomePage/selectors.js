/**
 * Homepage selectors
 */

import {createSelector} from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectResult = () => createSelector(
    selectHome,
    (homeState) => homeState.get('result')
);

const makeSelectInput = () => createSelector(
    selectHome,
    (homeState) => homeState.get('input')
);

const makeSelectCurrentValue = () => createSelector(
    selectHome,
    (homeState) => homeState.get('current_value')
);

export {
    selectHome,
    makeSelectCurrentValue,
    makeSelectInput,
    makeSelectResult
}