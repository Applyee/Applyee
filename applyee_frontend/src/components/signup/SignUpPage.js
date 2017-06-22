import React, { Component, PropTypes } from 'react';
import { Header, Button, Container, Modal, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';

import { signUpRequest } from '../../ducks/SignUp';

import {withRouter, Redirect} from 'react-router-dom';

const propTypes = {
};

const defaultProps = {
};

class SignUpPage extends Component {
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

    _handleSignUpSubmit = (values) => {

        if(values.password != values.password_check){
            this.setState({modalOpen: true, modalMessage: "비밀번호가 일치하는지 확인해주세요.",})
        }

        this.props.signUpRequest(values.username, values.password);
    }

    _handleRedirect = () => {
        return '/'
    }

    componentWillReceiveProps(nextProps){
        let message = "No Message";

        if(nextProps.isSucceeded){
            message = "회원가입이 완료되었습니다.";
        }

        else if(nextProps.payload){
            if(nextProps.payload.response.status != undefined){
                switch(nextProps.payload.response.status){
                    case 400:
                        message = "중복된 아이디입니다.";
                        break;
                    default:
                        message = "Internal Server Error :" + nextProps.payload.response;
                        break;
                }
            }
            else
                message = "네트워크를 확인하세요.";
        }

        this.setState({
            modalMessage: message
        });

        this.handleOpen();
    }

    render() {
        const mainTitleStyle = {
            fontSize: '31px',
            color: '#9b9b9b',
            marginTop: '90px',
            textAlign: 'center',
            marginBottom: '0px',
        }
        const subTitleStyle = {
            color: '#9b9b9b',
            fontSize: '25px',
            marginTop: '0px',
            marginBottom: '86px',
            textAlign: 'center'
        }
        return (
            <Container text style={{marginBottom: '528px'}}>
                { this.props.isSucceeded && !this.state.modalOpen && <Redirect to={this._handleRedirect()}/> }
                <p style={mainTitleStyle}>회원가입</p>
                <p style={subTitleStyle}>Join Us</p>

                <SignUpForm onSubmit = {this._handleSignUpSubmit}/>

                <Modal
                    open={this.state.modalOpen}
                    onClose={() => this.setState({modalOpen: false})} >

                    <Modal.Content>
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

SignUpPage.propTypes = propTypes;
SignUpPage.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    return {
        isSucceeded : state.signUp.isSucceeded,
        payload : state.signUp.payload,
    }
};

export default withRouter(connect(mapStateToProps, {
    signUpRequest
})(SignUpPage));
