import React from 'react';
import {Card, Icon, Container} from 'semantic-ui-react';
import {APPLICATION_CARD_SIZE} from '../../constants';

const ControlledIcon = ({name, onClick}) => (
    <Icon
        onClick={onClick}
        style={{color:'#9b9b9b', margin: '19px'}}
        name={name}
        size='big'
        link
        />
)

const headerStyle = {
    fontSize: '25px',
    marginTop: '39px',
}
const statisticsStyle = {
    color: '#35c1d6',
    fontSize: '31px',
    marginTop: '90px',
}
const dueDateStyle = {
    marginTop: '22px',
    fontSize: '31px'
}
const ApplicationCard = ({header, statistics, dueDate, onClick }) => (
<Card style={{width: APPLICATION_CARD_SIZE, height: APPLICATION_CARD_SIZE}}>
        <Card.Header style={headerStyle}>{header}</Card.Header>
        <a style={statisticsStyle}>{statistics}</a>
        <p style={dueDateStyle}>{dueDate}</p>
        <Container>
            <ControlledIcon name='pencil' onClick={onClick}/>
            <ControlledIcon name='trash outline'/>
            <ControlledIcon name='linkify'/>
        </Container>
    </Card>
);

export default ApplicationCard;
