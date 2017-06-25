import React, { Component, PropTypes } from 'react';
import {Card, Rating} from 'semantic-ui-react';
import EvaluationForm from '../components/EvaluationForm';

const propTypes = {
};
const defaultProps = {
};
class Evaluation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            comment_datas: [
                {
                    user_email: "abcd@naver.com",
                    comment: "지원동기가 다소 짧지만 포트폴리오도 훌륭함. 성격도 꼼꼼해서 팀플 잘 할듯 ㅋㅋ 난 합격"
                },
                {
                    user_email: "twpower@gmail.com",
                    comment: "3학년이고 경험은 많아보임. 전체적으로 좋아보여. 근데 바빠보여서 자주 참여할 수 있을지 의문"
                },
                {
                    user_email: "twpower@gmail.com",
                    comment: "3학년이고 경험은 많아보임. 전체적으로 좋아보여. 근데 바빠보여서 자주 참여할 수 있을지 의문"
                }
            ]
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("handled");
        console.log(this.state.value);
        this.setState({
            value: "",
            comment_datas: [
                ...this.state.comment_datas,
                {
                    user_email: "wkdtjsgur100@naver.com",
                    comment: this.state.value
                }
            ]
        })
    }
    onChange = (e, data) => {
        this.setState({value: data.value});
    }
    render() {
        return(
            <EvaluationForm
                commentValue={this.state.value}
                commentDatas={this.state.comment_datas}
                handleSubmit={this.handleSubmit}
                onChange={this.onChange}
                />
        );
    }
}
Evaluation.propTypes = propTypes;
Evaluation.defaultProps = defaultProps;
export default Evaluation;
