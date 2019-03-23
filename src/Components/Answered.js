import React, { Component,Fragment } from 'react'
import ViewPollQuestion from './viewPollQuestion';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Answered extends Component {
  render() {
    const {answeredQuestions} = this.props;
    return (
      <Fragment>
      <div className='container'>
        <ul>
        {answeredQuestions.map((id) => 
          <li key={id}> <ViewPollQuestion queId={id}/></li>
        )}
        </ul>
      </div>
      </Fragment>
    )
  }
}

Answered.propTypes = {
  answeredQuestions: PropTypes.string,// ids of answered questions by the authenticated user
};

const mapStateToProps =({authedUser,questions,users}) => {
  const answeredQuestions =  Object.keys(users[authedUser].answers);
  const sortedAnsweredQuestions =  answeredQuestions.sort((a,b) => (questions[b].timestamp - questions[a].timestamp));
  return({
    answeredQuestions : sortedAnsweredQuestions,
  })
}
export default connect(mapStateToProps)(Answered);