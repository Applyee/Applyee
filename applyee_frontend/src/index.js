import React from 'react';
import ReactDOM from 'react-dom';

// semantic-ui-css
import 'semantic-ui-css/semantic.min.css';

// style
import './style/FormStyle.css';

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
import { SignUpPage } from './components/signup';
import { Navbar, Footer } from './components/mainpage';
import ApplicationListPage from './containers/application_list/ApplicationListPage';
import ApplicationMakingPage from './containers/ApplicationMakingPage';
import ApplicantListPage from './containers/ApplicantListPage';

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
                    <Route path="/signup" component={SignUpPage} />
                    <Route path="/application-list" component={ApplicationListPage} />
                    <Route path="/applicant-list" component={ApplicantListPage} />
                    <Route path="/application-making" component={ApplicationMakingPage} />
                </Switch>
                <Footer />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
