import {
    BUTTON_CLICK,
    CHANGE_INPUT,
    CHANGE_RESULT,
    CHANGE_CURRENT_VALUE,
    RUNNING,
    STOP,
    CLEAR
} from './constants';

export function click(){
    return {
        type: BUTTON_CLICK
    };
}

export function changeInput(input){
    return {
        type: CHANGE_INPUT,
        input: input
    };
}

export function changeCurrentValue(value){
    return {
        type: CHANGE_CURRENT_VALUE,
        value: value
    };
}

export function changeResult(result){
    return {
        type: CHANGE_RESULT,
        result: result
    }
}

export function start(){
    return {
        type: RUNNING
    }
}

export function stop(){
    return {
        type: STOP
    }
}

export function clear(){
    return {
        type: CLEAR
    }
}