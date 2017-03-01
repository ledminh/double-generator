/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { createStructuredSelector } from 'reselect';
import {makeSelectInput, makeSelectResult, makeSelectCurrentValue} from './selectors';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

HomePage.propTypes = {
    buttonOnClick: React.PropTypes.func,
    onChangeInPut: React.PropTypes.func,
    result: React.PropTypes.string,
    input: React.PropTypes.number,
    currentValue: React.PropTypes.number    
}

function mapDisPatchToProps(dispatch) {
  return {
    buttonOnClick : (e) => dispatch(start()),
    onChangeInPut: (e) => dispatch(changeInput(e.target.value))
  }
}

const mapStateToProps = createStructuredSelector({
    result: makeSelectResult(),
    input: makeSelectInput(),
    currentValue: makeSelectCurrentValue()
});

export default connect(mapStateToProps, mapDisPatchToProps)(HomePage);