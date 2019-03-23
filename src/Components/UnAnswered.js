import React, { Component } from 'react';
import ViewPollQuestion from './viewPollQuestion';
import {connect} from 'react-redux';


class UnAnswered extends Component {
  render() {
    const {unansweredQuestions} = this.props;
    return (
      <div >
        <ul>
          {unansweredQuestions.map((id) => 
            <li key={id}> <ViewPollQuestion queId={id}/></li>
          )}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = ({authedUser,questions,users}) =>{ 
  const answeredQuestions =  Object.keys(users[authedUser].answers);
  const sortedUnansweredQuestions = Object.keys(questions).filter((id) => !answeredQuestions.includes(id)).sort((a,b) => (questions[b].timestamp - questions[a].timestamp));
  return ({
  unansweredQuestions:sortedUnansweredQuestions,
})}

export default connect(mapStateToProps)(UnAnswered);