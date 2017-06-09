import React from 'react';
import ReactDOM from 'react-dom';

// semantic-ui-css
import 'semantic-ui-css/semantic.min.css';

// App
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// react-router
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// saga
import createSagaMiddleware from 'redux-saga';

// etc
import { reducers, rootSaga } from './ducks';

import { LoginPage } from './components/login';
<<<<<<< HEAD
import { SignUpPage } from './components/signup';
import { Navbar } from './components/mainpage';
=======
import { Navbar, Footer } from './components/mainpage';
import ApplicationListPage from './containers/application_list/ApplicationListPage';
>>>>>>> c50bd4bf634dcfc5040322a44c99b24c4f2eb4be

const sagaMiddleware = createSagaMiddleware();
const middleware = sagaMiddleware;

const store = createStore(
    reducers,
    applyMiddleware(middleware),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store = {store} >
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/login" component={LoginPage} />
<<<<<<< HEAD
                    <Route path="/signup" component={SignUpPage} />
=======
                    <Route path="/application-list" component={ApplicationListPage} />
>>>>>>> c50bd4bf634dcfc5040322a44c99b24c4f2eb4be
                </Switch>
                <Footer />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
