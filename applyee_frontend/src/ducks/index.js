import { combineReducers } from 'redux';

import login, { loginSaga } from './Login';
import signUp, {signUpSaga} from './SignUp'
import { reducer as formReducer } from 'redux-form';

export const reducers =  combineReducers({
    login,
    signUp,
    form: formReducer
});

export function* rootSaga() {
    yield [
        loginSaga(),
        signUpSaga(),
    ];
};
