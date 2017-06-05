import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducers } from './ducks';

import { LoginPage } from './components/login';
import { Navbar } from './components/mainpage';

const store = createStore(
    reducers,
);

ReactDOM.render(
    <Provider store = {store} >
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
