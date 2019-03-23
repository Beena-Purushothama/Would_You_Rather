import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image';
import {connect} from 'react-redux';
import {formatQuestion} from '../Utils/Helper';

class PollResult extends Component {
  render() {
    const { userQuestion,authedUser,totalVotes,optionOneVotes,optionTwoVotes,optionOnePercentile,optionTwoPercentile } = this.props;
    return (
      <div className='poll-result containers '>
        <h5 className='bottom-border'> Asked by {userQuestion.userName}</h5>
        <div className='horizontal-display'>
        <div className='avatar'>
            <Image src={require("../static/images/"+userQuestion.avatar)} roundedCircle  />
        </div>
        <div className='left-border stretch'>
            <h5>Results</h5>
            <div className='vertical-display boarder'>
            {userQuestion.optionOne.votes.includes(authedUser) && <span className="badge badge-secondary">your Answer</span>}
            <div>
            <span>{userQuestion.optionOne.text}</span>
            <ProgressBar now={optionOnePercentile} label={`${optionOnePercentile}%`} />
            <span> {optionOneVotes} out of {totalVotes} votes</span>
            </div>
            </div>
            <div className='vertical-display boarder'>
            {userQuestion.optionTwo.votes.includes(authedUser) && <span className="badge badge-secondary">your Answer</span>}
            <div>
            <span>{userQuestion.optionTwo.text}</span>
            <ProgressBar now={optionTwoPercentile} label={`${optionTwoPercentile}%`} />
            <span> {optionTwoVotes} out of {totalVotes} votes</span>
            </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({questions,authedUser,users},{qid}) => {
  const question = questions[qid];
  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  return ({
    userQuestion : formatQuestion(question,users[question.author]),
    authedUser,
    totalVotes,
    optionOneVotes,
    optionTwoVotes,
    optionOnePercentile : (optionOneVotes > 0) ?((optionOneVotes/totalVotes) *100).toFixed(2): 0 ,
    optionTwoPercentile : (optionTwoVotes >0) ? ((optionTwoVotes/totalVotes)*100).toFixed(2): 0
  })
}
export default connect(mapStateToProps)(PollResult);
