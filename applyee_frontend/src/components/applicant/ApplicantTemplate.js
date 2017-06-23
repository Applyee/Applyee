import React, { Component } from 'react';
import {Header, Table, Image, Container, Icon} from 'semantic-ui-react';

const mappingToAnswerComponent = (answers) => {
    return answers.map( (answer, i) => {
        return (
            <Table.Row>
                <Table.Cell><b>{answer.q}</b></Table.Cell>
                <Table.Cell>{answer.a}</Table.Cell>
            </Table.Row>
        );
    });
};

const ApplicantTemplate = ({datas}) => (
    <Container>
        <Header style={{fontSize: '50px'}}>{datas.name}</Header>
        <p>{datas.description}</p>
        <a href=""><Icon name='download' />{datas.attachment}</a>
        <Table attached="top">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell
                        style={{fontSize: '20px'}}>
                            지원자 기본 정보
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        </Table>
        <Table attached basic='very'>
            <Table.Body>
                <Table.Row verticalAlign="top">
                    <Table.Cell textAlign="center" width={3} rowSpan='2000'>
                        <Image src={datas.profile_image_url}/>
                    </Table.Cell>
                </Table.Row>
                {mappingToAnswerComponent(datas.shortAnswers)}
            </Table.Body>
        </Table>
        <Table>
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
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {mappingToAnswerComponent(datas.longAnswers)}
            </Table.Body>
        </Table>
    </Container>
)
export default ApplicantTemplate;
