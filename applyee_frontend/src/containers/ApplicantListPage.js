import React, { Component, PropTypes } from 'react';
import {Table,Card, Checkbox, Dropdown, Container, Button} from 'semantic-ui-react';
import update from 'react-addons-update';
import Applicant from './Applicant';
import Evaluation from './Evaluation';

const propTypes = {
};
const defaultProps = {
};
class ApplicantListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerDatas: ["이름","생년월일","거주지","연락처", "지원분야와 지원동기","사용 가능한 툴","평소 생각한 아이디어"],
            datas: [
                ["이민지", "900817", "서울시 마포구", "010 3495 9339", "저는 현재 시각디자인..", "어도비 일러스트..","저는 평소에 음식에.."],
                ["장선혁", "920226", "서울시 강남구", "010 1231 4158", "안드로이드 앱에 관하여..", "안드로이드 스튜..","만들기 쉬운.."],
            ],
            checkedNums: [
                {
                    checked: false,
                    clicked: false,
                },
                {
                    checked: false,
                    clicked: false,
                }
            ]
        }
    }
    updateCheckedNum = (index) => this.setState({
        checkedNums: update(this.state.checkedNums, {
              [index]: {
                  checked: { $set: !this.state.checkedNums[index].checked },
              }
        })
    })

    updateClickedNum = (index) => this.setState({
        checkedNums: update(this.state.checkedNums, {
              [index]: {
                  clicked: { $set: !this.state.checkedNums[index].clicked },
              }
        })
    })

    render() {
        const mappingHeaderComponent = (datas) => {
            return datas.map((data, i) => {
                return (<Table.HeaderCell>{data}</Table.HeaderCell>)
            }
        )}

        const mappingToTableCellComponent = (all_datas) => {
            let cells = all_datas.map((datas, row_i) => {
                const cellStyle={
                    backgroundColor: '#fcf8e2'
                }
                return (
                    <Table.Row onClick={() => {this.updateClickedNum(row_i)}}>
                        <Table.Cell style={(this.state.checkedNums[row_i].checked) ? cellStyle : undefined}>
                            <Checkbox onClick={(e) => {
                                    e.stopPropagation();
                                    this.updateCheckedNum(row_i)
                                }
                            } />
                        </Table.Cell>
                        {
                            datas.map((data, i) => {
                                return (<Table.Cell style={(this.state.checkedNums[row_i].checked) ?
                                            cellStyle : undefined}>
                                            {data}
                                        </Table.Cell>);
                            })
                        }
                    </Table.Row>
                );
            })
            for(var i=0;i<this.state.checkedNums.length;i++){
                if(this.state.checkedNums[i].clicked){
                    cells.splice( i+1,0,
                        <Table.Row>
                            <Table.Cell style={{backgroundColor:'#4a4a4a'}} colSpan='2000'>
                                <Card.Group itemsPerRow={2}>
                                    <Applicant />
                                    <Evaluation />
                                </Card.Group>
                            </Table.Cell>
                        </Table.Row>);
                }
            }
            return cells;
        }
        const options=[
            {
                text: '날짜 오름 순',
                value: 'date_order'
            },
            {
                text: '이름 순',
                value: 'name_order'
            }
        ]
        return(
            <div>
                <div style={{textAlign: 'right'}}>
                    <Button style={{backgroundColor: '#f0ad4e', marginRight: '109px', color: '#ffffff', width: '154px'}}>
                        메일 보내기
                    </Button>
                </div>
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>선택</Table.HeaderCell>
                            {mappingHeaderComponent(this.state.headerDatas)}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {mappingToTableCellComponent(this.state.datas)}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}
ApplicantListPage.propTypes = propTypes;
ApplicantListPage.defaultProps = defaultProps;
export default ApplicantListPage;
