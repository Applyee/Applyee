import React, {Component} from 'react';

import { Table, Button, Card, Icon, Container } from 'semantic-ui-react';
import { reduxForm } from 'redux-form';

import ApplicationField from './ApplicationField';
import ApplicationTextAreaField from './ApplicationTextAreaField';
import {ShortAnswerRow, LongAnswerRow} from './AnswerRow';


const buttonStyle={
    backgroundColor: "#35c1d6",
    color: "#ffffff",
    width: '163px',
}

class ApplicationForm extends Component{
    render(){
        return(
            <form onSubmit={this.props.handleSubmit} >
                <ApplicationField
                    name="name"
                    type="text"
                    placeholder="지원서의 이름을 써주세요"
                    size="50px"
                    />
                <ApplicationTextAreaField
                    name="description"
                    rows={3}
                    placeholder="지원서에 대한 설명을 써주세요"/>
                <Table attached="top">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell
                                style={{fontSize: '20px'}}>
                                    지원자 기본 정보
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                textAlign="right">
                                <div>
                                    단답형 질문 추가
                                    <Icon style={{margin: '10px'}} color='blue' circular inverted name='plus' link color='olive'/>
                                </div>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                </Table>
                <Table attached basic='very' compact>
                    <Table.Row verticalAlign="top">
                        <Table.Cell width={3} rowSpan='2000'>
                            <Card
                                style={{
                                    width:'250px',
                                    height: '250px',
                                    marginTop: '30px'
                                }}
                                link
                                centered
                                >
                                <Container textAlign="center">
                                    <Container textAlign="right">
                                        <Icon
                                            style={{margin:'20px'}}
                                            color='red' name='close' link/>
                                    </Container>

                                    <Icon
                                        style={{backgroundColor: '#ffffff',color: '#dddddd'}}
                                        name='image'
                                        size='massive'/>
                                    <br/><br/>
                                    <p style={{color:'#dddddd'}}>지원자 사진 첨부</p>
                                </Container>
                            </Card>
                        </Table.Cell>
                    </Table.Row>
                    <ShortAnswerRow questionName="s_q1" answerName='s_a1'/>
                    <ShortAnswerRow questionName="s_q2" answerName='s_a2'/>
                    <ShortAnswerRow questionName="s_q3" answerName='s_a3'/>
                    <ShortAnswerRow questionName="s_q4" answerName='s_a4'/>
                    <ShortAnswerRow questionName="s_q5" answerName='s_a5'/>
                </Table>
                <Table attached="top">
                    <Table.Header style={{backgroundColor: '#f7f7f7'}}>
                        <Table.Row>
                            <Table.HeaderCell
                                style={{fontSize: '20px'}}
                                width={3}>
                                    질문
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                style={{fontSize: '20px'}}
                                width={7}>
                                    답
                            </Table.HeaderCell>
                            <Table.HeaderCell width={2}
                                textAlign="right">
                                장문형 질문 추가
                                <Icon style={{margin: '10px'}} color='blue' circular inverted name='plus' link color='olive'/>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <LongAnswerRow questionName="l_q1" answerName='l_a1'/>
                    <LongAnswerRow questionName="l_q2" answerName='l_a2'/>
                    <LongAnswerRow questionName="l_q3" answerName='l_a3'/>
                    <LongAnswerRow questionName="l_q4" answerName='l_a4'/>
                </Table>
                <Button
                    style={buttonStyle}
                    type="submit"
                    disabled={this.props.submitting} >
                    저장
                </Button>
            </form>
        )
    }
}
export default reduxForm({
    form: 'application-making'
})(ApplicationForm);
