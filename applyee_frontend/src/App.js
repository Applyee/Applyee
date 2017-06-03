import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/mainpage';
import {Container} from 'semantic-ui-react';

const App = () => (
    <Container text>
        <Navbar />
    </Container>
)

export default App;
