import React, { Component, PropTypes } from 'react';
import { Header, Button, Container } from 'semantic-ui-react'
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

import { loginRequest } from '../../ducks/Login';

import {withRouter, Redirect} from 'react-router-dom';

const propTypes = {
};

const defaultProps = {
};
class Login extends Component {
    state = { modalOpen: false }

    handleOpen = (e) => this.setState({
        modalOpen: true,
    })

    handleClose = (e) => this.setState({
        modalOpen: false,
    })

    _handleLoginSubmit = (values) => {
        this.props.loginRequest(values.username, values.password);
    }
    _handleRedirect = () => {
        let item = localStorage.getItem("redirectUrlOnCompletion");

        if(!localStorage.hasOwnProperty("redirectUrlOnCompletion") || item === "undefined")
            item = "/";

        localStorage.removeItem("redirectUrlOnCompletion");

        return item;
    }
    render() {
        return (
            <Container text>
                { this.props.loggedIn && <Redirect to={this._handleRedirect()}/> }
                <Header style={{marginTop: '30px'}}>로그인</Header>

                <LoginForm onSubmit = {this._handleLoginSubmit} submitting={this.props.fetching} />
                <Button onClick={() => {this.props.history.push('/signup_selection')}} content="회원가입" fluid />
                
                <Container textAlign="right">아이디 / 비밀번호 찾기</Container>
            </Container>
        );
    }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    return {
        loggedIn : state.login.loggedIn,
        fetching : state.login.fetching,
        payload : state.login.payload
    }
};

export default withRouter(connect(mapStateToProps, {
    loginRequest
})(Login));
