import React, { Component, PropTypes } from 'react';
import {Container} from 'semantic-ui-react';
import { reduxForm } from 'redux-form';

import ApplicationField from '../components/application_form/ApplicationField';

const propTypes = {
};
const defaultProps = {
};
class ApplicationMakingPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Container text>
                <form>
                    <ApplicationField
                        tag="name"
                        type="text"
                        placeholder="지원서의 이름을 써주세요"
                        size="50px"
                        />
                </form>
            </Container>
        );
    }
}
ApplicationMakingPage.propTypes = propTypes;
ApplicationMakingPage.defaultProps = defaultProps;

export default reduxForm({
    form: 'application-making'
})(ApplicationMakingPage);
