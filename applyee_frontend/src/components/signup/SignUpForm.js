import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'semantic-ui-react';

const emailRequired = value => value ? undefined : '이메일을 입력해주세요'
const emailCorrectForm = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    '올바른 이메일 형식이 아닙니다' : undefined
const passwordRequired = value => value ? undefined : '비밀번호를 입력해주세요'
const passwordCheckRequired = value => value ? undefined : '비밀번호 확인을 입력해주세요'

const spanErrorStyle ={
    color: "#FF5A5A",
};

const renderField = ({ input, label, type, htmlFor, labelText, ref ,meta: { touched, error, warning } }) => (
    <div style={{marginTop: "20px"}}>
        <label htmlFor={htmlFor}>{labelText}</label>
        <div>
            <input {...input} ref={ref} placeholder={label} type={type}/>
            {touched && ((error && <span style={spanErrorStyle}>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);


class SignUpForm extends Component{

    render() {

        const buttonStyle = {
            marginTop: '5px',
            color: '#FFFFFF',
            backgroundColor: '#5FA1D7'
        };

        return (
            <Form onSubmit={this.props.handleSubmit}>
                <Field name="username" component={renderField} htmlFor="username" labelText="이메일" type="text" validate={[emailRequired, emailCorrectForm]}/>
                <Field name="password" component={renderField} htmlFor="password" labelText="비밀번호" type="password" validate={[passwordRequired,]}/>
                <Field name="password_check" component={renderField} htmlFor="password_check" labelText="비밀번호 확인" type="password" validate={[passwordCheckRequired,]}/>
                <Form.Button style={buttonStyle} fluid>회원 가입</Form.Button>
            </Form>
        );
    }
}

export default reduxForm({
    form: 'signup'
})(SignUpForm);
