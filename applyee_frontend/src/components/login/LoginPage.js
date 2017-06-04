import React, { Component, PropTypes } from 'react';
import LoginForm from './LoginForm';

const propTypes = {
};
const defaultProps = {
};
class LoginPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <LoginForm />
        );
    }
}
LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;
export default LoginPage;
