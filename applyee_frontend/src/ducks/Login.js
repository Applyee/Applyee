import axios from 'axios';
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { DEFAULT_REQUEST_URL } from '../constants'
// actions
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';

// action creators
export function loginRequest(username, password){
    return {
        type : LOGIN_REQUEST,
        username,
        password
    };
}
export function logout(){
    localStorage.removeItem('applyee_token');
    return {
        type : LOGOUT
    };
}

export function loginSuccess(payload){
    localStorage.setItem('applyee_token', payload.data.token);
    return {
        type : LOGIN_SUCCESS,
        payload
    };
}

export function loginFail(payload){
    return {
        type : LOGIN_FAIL,
        payload
    };
}


// reducer
const initialState = {
    username : 'initial value',
    password : 'initial value',
    fetching : false,
    payload : undefined,
    loggedIn : localStorage.hasOwnProperty('applyee_token') ? true : false
};

export default function loginReducer(state = initialState, action){
    switch(action.type){
        case LOGOUT:
            return {
                ...state,
                loggedIn : false
            };
        case LOGIN_REQUEST:
            return {
                ...state,
                username : action.username,
                password : action.password,
                fetching : true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                fetching : false,
                payload : action.payload,
                loggedIn : true
            };
        case LOGIN_FAIL:
            return {
                ...state,
                fetching : false,
                payload : action.payload,
                loggedIn : false
            };
        default:
            return state;
    }
}

// axios
export function loginRequestToServer(username, password){
    return axios.post(DEFAULT_REQUEST_URL + '/login/', {
        "username": username,
        "password" : password
    }).catch((e) => {
        console.log(e);
    });
}

// saga
function* watchLoginRequest(action){
    try{
        const [response] = yield [
            call(loginRequestToServer, action.username, action.password)
        ];
        yield put(loginSuccess(response));
    }catch(e){
        yield put(loginFail(e));
    }

}

function* watchLogin(){
    yield takeEvery(LOGIN_REQUEST, watchLoginRequest);
}

export function* loginSaga(){
    yield fork(watchLogin);
}
