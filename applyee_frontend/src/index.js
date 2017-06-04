import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { LoginPage } from './components/login';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={LoginPage} />
        </Switch>
    </Router>
    , document.getElementById('root'));

registerServiceWorker();
