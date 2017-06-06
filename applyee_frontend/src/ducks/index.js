import { combineReducers } from 'redux';

import login, { loginSaga } from './Login';
import { reducer as formReducer } from 'redux-form';

export const reducers =  combineReducers({
    login,
    form: formReducer
});

export function* rootSaga() {
    yield [
        loginSaga()
    ];
};
