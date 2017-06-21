import React from 'react';
import {Table, Icon} from 'semantic-ui-react';
import ApplicationField from './ApplicationField';
import ApplicationTextAreaField from './ApplicationTextAreaField';

export const LongAnswerRow = ({index, handleLongAnswerRemove}) => (
    <Table.Row colSpan="10">
        <Table.Cell width={2}>
            <ApplicationTextAreaField
                name={"l_q"+index}
                rows={3}
                placeholder="질문 타이틀"/>
        </Table.Cell>
        <Table.Cell width={6} >
            <ApplicationTextAreaField
                name={"l_a"+index}
                rows={3}
                placeholder="장문형 텍스트 공간"/>
        </Table.Cell>
        <Table.Cell textAlign="right" width={1}>
            <Icon onClick={handleLongAnswerRemove} name='x' circular inverted color='red' link/>
        </Table.Cell>
    </Table.Row>
);

export const ShortAnswerRow = ({index, handleShortAnswerRemove}) => (
    <Table.Row colSpan="10">
        <Table.Cell width={2}>
            <ApplicationTextAreaField
                name={"s_q"+index}
                rows={3}
                placeholder="질문 타이틀"/>
        </Table.Cell>
        <Table.Cell width={6} >
            <ApplicationField
                name={"s_a"+index}
                type="text"
                placeholder="단답형 텍스트 공간"
                size="17px"
                />
        </Table.Cell>
        <Table.Cell textAlign="right" width={1}>
            <Icon onClick={handleShortAnswerRemove} name='x' circular inverted color='red' link/>
        </Table.Cell>
    </Table.Row>
);
