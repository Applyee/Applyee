import axios from 'axios';
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { DEFAULT_REQUEST_URL } from '../constants'
// actions
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAIL = 'SING_UP_FAIL';

// action creators
export function signUpRequest(username, password){
    return {
        type : SIGN_UP_REQUEST,
        username,
        password
    };
}

export function signUpSuccess(payload){
    return {
        type : SIGN_UP_SUCCESS,
        payload
    };
}

export function signUpFail(payload){
    return {
        type : SIGN_UP_FAIL,
        payload
    };
}


// reducer
const initialState = {
    username : 'initial value',
    password : 'initial value',
    payload : undefined,
    isSucceeded : false,
};

export default function signUpReducer(state = initialState, action){
    switch(action.type){
        case SIGN_UP_REQUEST:
            return {
                ...state,
                username : action.username,
                password : action.password
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                payload : action.payload,
                isSucceeded : true,
            };
        case SIGN_UP_FAIL:
            return {
                ...state,
                payload : action.payload,
                isSucceeded : false,
            };
        default:
            return state;
    }
}

// axios
export function signUpRequestToServer(username, password){
    return axios.post(DEFAULT_REQUEST_URL + '/users/', {
        "username": username,
        "password" : password
    }).catch((e) => {
        console.log(e);
    });
}

// saga
function* watchSignUpRequest(action){
    try{
        const [response] = yield [
            call(signUpRequestToServer, action.username, action.password)
        ];
        yield put(signUpSuccess(response));
    }catch(e){
        yield put(signUpFail(e));
    }

}

function* watchSignUp(){
    yield takeEvery(SIGN_UP_REQUEST, watchSignUpRequest);
}

export function* signUpSaga(){
    yield fork(watchSignUp);
}
