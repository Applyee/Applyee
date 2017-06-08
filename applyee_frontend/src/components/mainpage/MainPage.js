import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

const mainTitleStyle = {
    fontSize: '48px',
    color: '#9b9b9b',
    marginTop: '84px',
    marginBottom: '25px',
}
const subTitleStyle = {
    color: '#9b9b9b',
    fontSize: '25px',
    marginBottom: '59px'
}

const MainPage = ({history}) => (
    <Container text textAlign="center">
        <p style={mainTitleStyle}> 지원서 정리를 한번에 어플리 </p>
        <p style={subTitleStyle}>
            신입 뽑을 때마다 넘쳐나는 지원서, 힘드셨죠? <br/>
        어플리는 지원서 정리에서 면접까지 한번에 관리해 드립니다.
        </p>
        <Button
            color='blue' inverted
            style={{width:'250px', marginBottom: '80px'}}
            onClick={()=>history.push('/application-list')}>
            무료로 사용하기
        </Button>
    </Container>
)

export default withRouter(MainPage);
