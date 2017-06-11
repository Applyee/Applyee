import React,{Component} from 'react';
import {Container, Button,TextArea, Form} from 'semantic-ui-react';

class EditApplierMailPage extends Component {
    state = {
        modalOpen: false,
        modalMessage: ""
    }

    handleOpen = (e) => this.setState({modalOpen: true})

    handleClose = (e) => this.setState({modalOpen: false})


    handlePreviousSection = () => {}
    handleCancel = () => {}
    handleSave = () => {}


    render() {

        const placeholder = "메일의 내용을 입력해주세요.\n"+
        "applyee에서 지원서를 작성하고 제출한 모든 지원자에게 자동으로 이 메일이 보내집니다.\n\n"+
        "ex ) 어플리 신입지원에 참여해주셔서 감사합니다. 합격자 발표는 00월 00일에 알려드리도록 하겠습니다.";

        const mainTitleStyle = {
            fontSize: '48px',
            color: '#9b9b9b',
            marginTop: '84px',
            marginBottom: '25px',
        }

        return (
            <Container text>
                <Form style={{marginTop:"64px"}}>
                    <Form.Field>
                        <label style={{color:"#999999"}} >메일 제목</label>
                        <input placeholder='지원자에게 보낼 메일의 제목을 입력하세요 '/>
                    </Form.Field>
                    <Form.Field>
                        <label style={{color:"#999999"}} >메일 내용</label>
                        <TextArea style={{height:'330px'}} placeholder={placeholder}/>
                    </Form.Field>
                    <div style={{marginTop : "72px", marginBottom: '852px'}}>
                        <Button style={{color: '#FFFFFF', backgroundColor: '#f0ad4e', width: '163px', height: '43px'}} onClick={this.handlePreviousSection}>이전 단계</Button>
                        <Button style={{color: '#FFFFFF', backgroundColor: '#35c1d6', marginLeft:'13px', width: '173px', height: '43px'}} onClick={this.handleSave}  floated="right">저장</Button>
                        <Button style={{color: '#9b9b9b', backgroundColor: '#ffffff', width: '99px', height: '43px', border: 'solid 1px #cccccc'}} onClick={this.handleCancel} floated="right">취소</Button>
                    </div>
            </Form>
            </Container>
        );
    }
}

export default EditApplierMailPage;
