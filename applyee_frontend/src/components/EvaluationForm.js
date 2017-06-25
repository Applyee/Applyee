import React from 'react';
import {Form, Button, Header, Comment, Card, Icon, Rating, TextArea} from 'semantic-ui-react';

const black = {color: "#000000"}

const mappingToCommentCard = (commentDatas) => {
    return commentDatas.map((data, i) => {
        return (
            <Comment>
              <Comment.Avatar><Icon name='user'/></Comment.Avatar>
              <Comment.Content>
                <Comment.Author as='a'>{data.user_email}</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>{data.comment}</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
        );
    });
}
const EvaluationForm = ({commentValue, handleSubmit, onChange, commentDatas}) => (
    <Card style={{width: '25%', padding: "3%"}}>
        <Header as='h3' dividing>평균 별점</Header>
        <Rating defaultRating={4} maxRating={5} icon='star' disabled size="massive"/>
        <Comment.Group>
            <Header style={{marginTop: "50px"}} as='h3' dividing>의견</Header>
            {mappingToCommentCard(commentDatas)}
        </Comment.Group>

        <Header style={{marginTop: "30px"}} as='h3' dividing>내 의견</Header>
        <Form reply onSubmit={handleSubmit}>
            <TextArea value={commentValue} onChange={onChange}/>
            <p>
                <Rating defaultRating={3} maxRating={5} icon='star' size="huge"/>
                <Button type='submit' content='댓글 달기' labelPosition='left' icon='edit' primary />
            </p>
        </Form>
    </Card>
)

export default EvaluationForm;
