import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';
import {Container, Image, Button} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

const ButtonOnNavbar = ({history, to, children}) => (
    <Button
        onClick={()=> history.push(to)}
        style={{
            backgroundColor: '#ffffff',
            color: '#9b9b9b',
            width: '115px',
            height: '60px'
        }}>
        {children}
    </Button>
)
const Navbar = ({history}) => (
    <Container
        textAlign="right"
        style={{marginTop: '60px'}}
        >
        <ButtonOnNavbar
            history={history}
            to='/login'>
            로그인
        </ButtonOnNavbar>
    </Container>
)
export default withRouter(Navbar);
