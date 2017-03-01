import {fromJS} from 'immutable';

const initialState = fromJS({
    result: "This is a result",
    input: 10,
    currentValue: 20
});

function homeReducer(state = initialState, action){
    switch(action.type){
        case CHANGE_RESULT:
            return state
                .set('result', action.result);
        case CHANGE_INPUT:
            return state
                .set('input', action.input);
        case CHANGE_CURRENT_VALUE:
            return state
                .set('currentValue', action.currentValue);
        default:
            return state;
    }
}

export default homeReducer;