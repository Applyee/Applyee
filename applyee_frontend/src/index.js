import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducers } from './ducks';

import { LoginPage } from './components/login';

const store = createStore(
    reducers,
);

ReactDOM.render(
    <Provider store = {store} >
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/login" component={LoginPage} />
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
