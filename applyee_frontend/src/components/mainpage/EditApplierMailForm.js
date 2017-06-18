import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import {Container, Button,TextArea, Form} from 'semantic-ui-react';

const titleRequired = value => value ? undefined : '이메일을 입력해주세요'
const contentRequired = value => value ? undefined : '비밀번호를 입력해주세요'

const placeholder = "메일의 내용을 입력해주세요.\n"+
        "applyee에서 지원서를 작성하고 제출한 모든 지원자에게 자동으로 이 메일이 보내집니다.\n\n"+
        "ex ) 어플리 신입지원에 참여해주셔서 감사합니다. 합격자 발표는 00월 00일에 알려드리도록 하겠습니다.";

const cancelButtonStyle = {
    color: '#9b9b9b',
    backgroundColor: '#ffffff',
    width: '99px',
    height: '43px',
    border: 'solid 1px #cccccc',
}
const saveButtonStyle = {
    color: '#FFFFFF',
    backgroundColor: '#35c1d6',
    marginLeft:'13px',
    width: '173px',
    height: '43px',
}
const previousButtonStyle = {
    color: '#FFFFFF',
    backgroundColor: '#f0ad4e',
    width: '163px',
    height: '43px',
}

const spanErrorStyle ={
    color: "#FF5A5A",
};

const renderTitleField = ({ input, label, type, htmlFor, labelText, meta: { touched, error, warning } }) => (
    <div style={{marginTop: "20px"}}>
        <label style={{color:"#999999"}} htmlFor={htmlFor}>{labelText}</label>
        <div>
        <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span style={spanErrorStyle}>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const renderContentField = ({ input, label, type, htmlFor, labelText, meta: { touched, error, warning } }) => (
    <div style={{marginTop: "20px"}}>
        <label style={{color:"#999999"}} htmlFor={htmlFor}>{labelText}</label>
        <div>
        <textarea {...input} placeholder={label} type="text"/>
            {touched && ((error && <span style={spanErrorStyle}>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

class EditApplierMailForm extends Component{
    constructor(props){
        super(props);
    }

    moveToPreviousTab = () => {
    }

    handleCancel = () => {
    }

    render() {
        return (
            <Form style={{marginTop:"64px"}} onSubmit={this.props.handleSubmit}>
                <Field name="title" component={renderTitleField} htmlFor="title" labelText="메일 제목" type="text" label='지원자에게 보낼 메일의 제목을 입력하세요 ' validate={titleRequired}/>
                <Field name="content" height="330px" component={renderContentField} htmlFor="content" labelText="메일 내용" type="text" label={placeholder}  validate={contentRequired}/>
                <div style={{marginTop : "72px", marginBottom: '852px'}}>
                    <Button style={previousButtonStyle} onClick={this.moveToPreviousTab} type="button">이전 단계</Button>
                    <Button style={saveButtonStyle} floated="right" type="submit">저장</Button>
                    <Button style={cancelButtonStyle} floated="right" onClick={this.handleCancel} type="button">취소</Button>
                </div>
            </Form>
        );
    }
}

export default reduxForm({
    form: 'editApplierMail'
})(EditApplierMailForm);
