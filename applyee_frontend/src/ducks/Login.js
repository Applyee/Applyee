const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';

// action creator
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

export function loginSuccess(payload, user_info, participated_dates){
    localStorage.setItem('applyee_token', payload.data.token);
    return {
        type : LOGIN_SUCCESS,
        payload
    };
}

export function loginFailure(payload){
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
    loggedIn : localStorage.hasOwnProperty('token') ? true : false
};

export default function login(state = initialState, action){
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
