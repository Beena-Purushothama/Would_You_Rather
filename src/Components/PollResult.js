import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image';
import {connect} from 'react-redux';
import {formatQuestion} from '../Utils/Helper';

class PollResult extends Component {
  render() {
    const { question,authedUser,totalVotes,optionOneVotes,optionTwoVotes,optionOnePercentile,optionTwoPercentile } = this.props;
    return (
      <div className='poll-result containers '>
        <h5 className='bottom-border'> Asked by {question.userName}</h5>
        <div className='horizontal-display'>
        <div className='avatar'>
            <Image src="https://tylermcginnis.com/would-you-rather/dan.jpg" roundedCircle  />
        </div>
        <div className='left-border stretch'>
            <h5>Results</h5>
            <div className='vertical-display boarder'>
            {question.optionOne.votes.includes(authedUser) && <span className="badge badge-secondary">your Answer</span>}
            <div>
            <span>{question.optionOne.text}</span>
            <ProgressBar now={optionOnePercentile} label={`${optionOnePercentile}%`} />
            <span> {optionOneVotes} out of {totalVotes} votes</span>
            </div>
            </div>
            <div className='vertical-display boarder'>
            {question.optionTwo.votes.includes(authedUser) && <span className="badge badge-secondary">your Answer</span>}
            <div>
            <span>{question.optionTwo.text}</span>
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
    question : formatQuestion(question,users[question.author]),
    authedUser,
    totalVotes,
    optionOneVotes,
    optionTwoVotes,
    optionOnePercentile : (optionOneVotes > 0) ?((optionOneVotes/totalVotes) *100).toFixed(2): 0 ,
    optionTwoPercentile : (optionTwoVotes >0) ? ((optionTwoVotes/totalVotes)*100).toFixed(2): 0
  })
}
export default connect(mapStateToProps)(PollResult);
