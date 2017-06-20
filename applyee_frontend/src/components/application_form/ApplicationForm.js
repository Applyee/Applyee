import React, {Component} from 'react';

import { Table, Button, Card, Icon, Container } from 'semantic-ui-react';
import { reduxForm } from 'redux-form';

import ApplicationField from './ApplicationField';
import ApplicationTextAreaField from './ApplicationTextAreaField';
import {ShortAnswerRow, LongAnswerRow} from './AnswerRow';
import update from 'react-addons-update';

const buttonStyle={
    backgroundColor: "#35c1d6",
    color: "#ffffff",
    width: '163px',
    marginTop: '50px',
}

const ApplicationImageCard = ({closeCallback}) => (
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
                    onClick={closeCallback}
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
)

const AttachmentButton = ({closeCallback}) => (
    <div>
        <Button
            style={{marginTop: '50px',}}
            inverted color="blue">
            <Icon name='upload'/>
            30mb 파일 첨부
        </Button>
        <Icon
            onClick={closeCallback}
            color='red' name='close' link inverted circular/>
        <br/>
        포트폴리오 30mb 이내로 첨부해 주세요.<br/>
    </div>
)

class ApplicationForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            shortAnswerList : [1,2,3,4],
            lastIndexOfShortAnswer: 4,
            longAnswerList : [1,2,3,4],
            lastIndexOfLongAnswer: 4,
            isImageExisting: true,
            isAttachExisting: true,
        }
    }
    handleShortAnswerRemove = (index) => this.setState({
        shortAnswerList: update(
          this.state.shortAnswerList,
          {
              $splice: [[this.state.shortAnswerList.indexOf(index), 1]]
          }
        )
    });

    handleLongAnswerRemove = (index) => this.setState({
        longAnswerList: update(
          this.state.longAnswerList,
          {
              $splice: [[this.state.longAnswerList.indexOf(index), 1]]
          }
        )
    })
    addShortAnswer = () => {
        this.setState({
            shortAnswerList: update(
                this.state.shortAnswerList,{
                    $push: [this.state.lastIndexOfShortAnswer + 1]
                }
            ),
            lastIndexOfShortAnswer: this.state.lastIndexOfShortAnswer + 1
        })
    }
    addLongAnswer = () => {
        this.setState({
            longAnswerList: update(
                this.state.longAnswerList,{
                    $push: [this.state.lastIndexOfLongAnswer + 1]
                }
            ),
            lastIndexOfLongAnswer: this.state.lastIndexOfLongAnswer + 1
        })
    }

    render(){
        const mappingToShortAnswerComponent = () => {
            return this.state.shortAnswerList.map((index, i) => {
                return (<ShortAnswerRow index={index} key={i} handleShortAnswerRemove={() => this.handleShortAnswerRemove(index)}/>);
            });
        }
        const mappingToLongAnswerComponent = () => {
            return this.state.longAnswerList.map((index, i) => {
                return (<LongAnswerRow index={index} key={i} handleLongAnswerRemove={() => this.handleLongAnswerRemove(index)}/>);
            });
        }

        const addImageIcon = (
            <Icon
                onClick={() => this.setState({isImageExisting: true})}
                style={{marginTop: '130px'}}
                name='plus' link color='green' circular inverted
            />
        );

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
                                단답형 질문 추가
                                <Icon onClick={this.addShortAnswer}
                                    style={{margin: '10px'}} color='blue' circular inverted name='plus' link color='olive'/>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                </Table>
                <Table attached basic='very' compact>
                    <Table.Body>
                        <Table.Row verticalAlign="top">
                            <Table.Cell textAlign="center" width={3} rowSpan='2000'>
                                {
                                    (this.state.isImageExisting) ?
                                    (<ApplicationImageCard
                                        closeCallback={() => this.setState({isImageExisting: false})}/>) :
                                    (addImageIcon)
                                }
                            </Table.Cell>
                        </Table.Row>
                        {mappingToShortAnswerComponent()}
                    </Table.Body>
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
                                <Icon onClick={this.addLongAnswer}
                                    style={{margin: '10px'}} color='blue' circular inverted name='plus' link color='olive'/>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {mappingToLongAnswerComponent()}
                </Table>

                {
                    (this.state.isAttachExisting) ?
                        <AttachmentButton closeCallback = {() => this.setState({isAttachExisting: false})}/> :
                        <div>
                            <Icon
                                onClick={() => this.setState({isAttachExisting: true})}
                                style={{marginTop: '70px'}}
                                name='plus' link color='green' circular inverted
                            />
                            <br/>
                        </div>
                }

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
