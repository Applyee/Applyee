import React, { Component, PropTypes } from 'react';
import { Header, Button, Container, Modal, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

import { loginRequest } from '../../ducks/Login';

import {withRouter, Redirect} from 'react-router-dom';

const propTypes = {
};

const defaultProps = {
};
class LoginPage extends Component {
    state = {
        modalOpen: false,
        modalMessage: "",
    }

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
    componentWillReceiveProps(nextProps){
        if(nextProps.payload){
            let message = "No Message";

            if(nextProps.payload.response != undefined){
                switch(nextProps.payload.response.status){
                    case 404:
                        message = "아이디나 비밀번호가 올바르지 않습니다";
                        break;
                    case 200:
                        message = "로그인에 성공했습니다.";
                        break;
                    default:
                        message = "Internal Server Error :" + nextProps.payload.response;
                        break;
                }
            }
            else
                message = "네트워크를 확인하세요.";

            this.setState({
                modalMessage: message
            });
            this.handleOpen();
        }
    }
    render() {
        return (
            <Container text>
                { this.props.loggedIn && <Redirect to={this._handleRedirect()}/> }
                <Header style={{marginTop: '30px'}}>로그인</Header>

                <LoginForm onSubmit = {this._handleLoginSubmit} submitting={this.props.fetching} />
                <Button onClick={() => {this.props.history.push('/signup')}} content="회원가입" fluid />

                <Container textAlign="right">아이디 / 비밀번호 찾기</Container>
                <Modal
                    open={this.state.modalOpen}
                    onClose={() => this.setState({modalOpen: false})} >

                    <Modal.Content>
                        로그인에 실패하였습니다. <br />
                        {this.state.modalMessage}
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            color="green"
                            onClick={() => this.setState({modalOpen: false}) }>
                            <Icon name='checkmark' /> 확인
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Container>
        );
    }
}

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    return {
        loggedIn : state.login.loggedIn,
        fetching : state.login.fetching,
        payload : state.login.payload
    }
};

export default withRouter(connect(mapStateToProps, {
    loginRequest
})(LoginPage));
