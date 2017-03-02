import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import {delay} from 'redux-saga';

import {makeSelectInput, makeSelectCurrentValue, makeSelectResult} from './selectors';

import {changeCurrentValue, changeResult, changeInput, start, stop, clear} from './actions';

import {
    BUTTON_CLICK
} from './constants';

export function* run(){
    try {
        while(true) {
            //START
            yield take(BUTTON_CLICK);
            yield put(start());

            const current_value = yield select(makeSelectInput());
            yield put(changeCurrentValue(current_value));

            var task = yield fork(generate);

            //STOP
            yield take(BUTTON_CLICK);
        
            yield cancel(task);

            yield put(stop());

            //CLEAR
            yield take(BUTTON_CLICK);

            yield put(clear());

        }
    }
    catch(err){
        console.log(err);
    }
    
   
}

export function* generate(){
    var current_value = yield select(makeSelectCurrentValue());

    while(current_value*2 < 100000){
        var next_value = current_value*2;

        var result = yield select(makeSelectResult());

        result += newLine(current_value, next_value);

        yield put(changeResult(result));

        yield put(changeCurrentValue(next_value));

        current_value = next_value;

        yield delay(800)
    }

    var result = yield select(makeSelectResult());
    result += "(The next result is greater than 100000)\n" 
            + "::: THE END :::"; 
    yield put(changeResult(result));

    yield put(stop());
        
}


function newLine(current_value, next_value){
    return (current_value + " + " + current_value + " = " + next_value + "\n");
}

export default [
    run
];