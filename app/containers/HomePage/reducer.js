import {fromJS} from 'immutable';

import {
    CHANGE_RESULT,
    CHANGE_INPUT,
    CHANGE_CURRENT_VALUE,
    RUNNING,
    STOP,
    CLEAR
} from './constants';

const initialState = fromJS({
    result: "",
    input: 0,
    current_value: 0,
    button_text: "START"
});

function homeReducer(state = initialState, action){
    switch(action.type){
        case CHANGE_RESULT:
            return state
                .set('result', action.result);
        case CHANGE_INPUT:
            if(!action.input.error)
                return state
                    .set('input', action.input.value);
        case CHANGE_CURRENT_VALUE:
            return state
                .set('current_value', action.value);
        case RUNNING:
            return state
                .set('button_text', 'STOP'); 
        case STOP:
            return state
                .set('button_text', 'CLEAR');
        case CLEAR:
            return initialState;

        default:
            return state;
    }
}

export default homeReducer;