import React, { Component, PropTypes } from 'react';
import {Card, Icon, Container} from 'semantic-ui-react';
import ApplicationCard from '../../components/application/ApplicationCard';

import {APPLICATION_CARD_SIZE} from '../../constants';
import {withRouter} from 'react-router-dom';

const propTypes = {
};
const defaultProps = {
};
class ApplicationListPage extends Component {
    render() {
        let cardStyle = {
            width: APPLICATION_CARD_SIZE,
            height: APPLICATION_CARD_SIZE,
            backgroundColor: '#35c1d6'
        };
        return(
            <Container textAlign="center" style={{marginTop: '106px'}}>
                <Card.Group>
                    <Card onClick={() => this.props.history.push('application-making')} style={cardStyle} link>
                        <Icon
                            style={{color:'#ffffff', marginLeft:'33%',marginTop:'33%'}}
                            size='massive'
                            name='plus'
                            />
                        <p style={{color:'#ffffff', fontSize: '20px', marginTop: '20%'}}>지원서 만들기</p>
                    </Card>
                    <ApplicationCard
                        header="어플리 동아리 3기 모집 지원서"
                        statistics="16명 제출"
                        dueDate="마감 D-7"
                        />
                </Card.Group>
            </Container>
        );
    }
}
ApplicationListPage.propTypes = propTypes;
ApplicationListPage.defaultProps = defaultProps;
export default withRouter(ApplicationListPage);
