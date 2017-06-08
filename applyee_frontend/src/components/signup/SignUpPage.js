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


    componentWillReceiveProps(nextProps){
                console.log(nextProps);
        if(nextProps.payload){
            let message = "No Message";
            if(nextProps.payload.response != undefined){
                switch(nextProps.payload.response.status){
                    case 404:
                        message = "아이디나 비밀번호가 올바르지 않습니다";
                        break;
                    case 200:
                        message = "회원가입에 성공하였습니다.";
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
                <Header style={{marginTop: '30px'}}>회원가입</Header>

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
