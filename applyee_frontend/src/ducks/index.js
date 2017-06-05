import { combineReducers } from 'redux';

import login from './Login';
import { reducer as formReducer } from 'redux-form';

export const reducers =  combineReducers({
    login,
    form: formReducer
});
