import React,{Component} from 'react';
import {Container, Button,TextArea, Form} from 'semantic-ui-react';
import EditApplierMailForm from './EditApplierMailForm';


class EditApplierMailPage extends Component {
    state = {
        modalOpen: false,
        modalMessage: "",
    }

    handleOpen = (e) => this.setState({modalOpen: true})

    handleClose = (e) => this.setState({modalOpen: false})

    handleSubmit = (values) => {
    }

    render() {

        const mainTitleStyle = {
            fontSize: '48px',
            color: '#9b9b9b',
            marginTop: '84px',
            marginBottom: '25px',
        }

        return (
            <Container text>
                <EditApplierMailForm onSubmit = {this.handleSubmit}/>
            </Container>
        );
    }
}

export default EditApplierMailPage;
