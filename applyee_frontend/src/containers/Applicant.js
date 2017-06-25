import React, { Component, PropTypes } from 'react';

import {ApplicantTemplate} from '../components/applicant';
import {DEFAULT_REQUEST_URL} from '../constants';

const propTypes = {
};
const defaultProps = {
};
class Applicant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "어플리 동아리 3기 신입 모집지원서",
            description: "어플리 동아리는 개발자와 디자이너가 같이 작업을 할 수 있는 동아리 입니다. 지원서는 5월 25일까지입니다. 문의사항이 있으시면 applyee@naver.com으로 연락주세요 :)",
            attachment: "이민지 디자인 포트폴리오.pdf",
            attachment_url: "/",
            profile_image_url: DEFAULT_REQUEST_URL + "/",
            shortAnswers: [
                {
                    q: "이름",
                    a: "이민지",
                },
                {
                    q: "생년월일",
                    a: "900817",
                },
                {
                    q: "거주지",
                    a: "서울시 마포구",
                },
                {
                    q: "연락처",
                    a: "010 3495 9339",
                },
            ],
            longAnswers: [
                {
                    q: "지원분야와 지원동기를 말해주세요",
                    a: "저는 현재 시각디자인과 3학년입니다. 평소 ux ui에 관심이 많은데 이번 기회에 실제로 서비스를 개발하고 디자인 해보고 싶어서 지원하게 되었습니다. \
                    저는 현재 시각디자인과 3학년입니다.  평소 ux ui에 관심이 많은데 이번 기회에 실제로 서비스를 개발하고 디자인 해보고 싶어서 지원하게 되었습니다."
                },
                {
                    q: "사용 가능한 툴",
                    a: "어도비 일러스트레이터, 포토샵"
                },
                {
                    q: "평소 생각해 본 아이디어가 있나요?",
                    a: "저는 평소에 음식에 관심이 많습니다. 맛집 탐방과 관련된 아이디어로 기획을 한 적이 있어서 그걸로 작업해보고 싶어요!!"
                },
                {
                    q: "면접 가능 날짜",
                    a: "6월 23일, 25일 가능합니다"
                }
            ]
        }
    }
    render() {
        return(
            <ApplicantTemplate datas={this.state}/>
        );
    }
}
Applicant.propTypes = propTypes;
Applicant.defaultProps = defaultProps;
export default Applicant;
