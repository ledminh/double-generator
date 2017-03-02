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
import {makeSelectInput, makeSelectResult, makeSelectCurrentValue, makeSelectButtonText} from './selectors';

import {click, changeInput} from './actions';

import parseValue from 'utils/parse-value';
import formatResult from 'utils/format-result';

import {connect} from 'react-redux';

import Input from 'components/Input';
import Block from 'components/Block';
import Button from 'components/Button';
import TextField from 'components/TextField';

import {HORIZONTAL_CENTER} from 'components/Block/constants';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Block type={HORIZONTAL_CENTER} height="200px">
            <TextField>
              {formatResult(this.props.result)}
            </TextField>
        </Block>

        <Block type={HORIZONTAL_CENTER} height="50px">
            <Input value={this.props.input}
                   onChange={this.props.onChangeInput}/>
        </Block>        
        
         <Block type={HORIZONTAL_CENTER} height="50px">
            <Button onClick={this.props.buttonOnClick} text={this.props.button_text}/>
        </Block>

        
      </div>     
        
    );
  }
}

HomePage.propTypes = {
    buttonOnClick: React.PropTypes.func,
    onChangeInPut: React.PropTypes.func,
    result: React.PropTypes.string,
    input: React.PropTypes.number,
    currentValue: React.PropTypes.number,
    button_text: React.PropTypes.string    
}

function mapDisPatchToProps(dispatch) {
  return {
    buttonOnClick : (e) => dispatch(click()),
    onChangeInput: (e) => dispatch(changeInput(parseValue({value: e.target.value})))
  }
}

const mapStateToProps = createStructuredSelector({
    result: makeSelectResult(),
    input: makeSelectInput(),
    currentValue: makeSelectCurrentValue(),
    button_text: makeSelectButtonText()
});

export default connect(mapStateToProps, mapDisPatchToProps)(HomePage);