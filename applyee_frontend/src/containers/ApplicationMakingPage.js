import React, { Component, PropTypes } from 'react';
import { Container } from 'semantic-ui-react';

import ApplicationForm from '../components/application_form/ApplicationForm';

const propTypes = {
};
const defaultProps = {
};

const formInitalValues = {
    s_q1: '이름',
    s_q2: '생년월일',
    s_q3: '이메일 주소',
    s_q4: '연락처',
    l_q1: '지원분야와 지원 동기',
    l_q2: '사용가능한 툴',
    l_q3: '면접 가능한 날짜',
    l_q4: '평소 생각해 본 아이디어',
}
class ApplicationMakingPage extends Component {
    _handleSubmit = (values) => {
        console.log(values.name,values.description);
    }
    render() {
        return(
            <Container>
                <ApplicationForm onSubmit={this._handleSubmit} initialValues={formInitalValues}/>
            </Container>
        );
    }
}
ApplicationMakingPage.propTypes = propTypes;
ApplicationMakingPage.defaultProps = defaultProps;

export default ApplicationMakingPage;
