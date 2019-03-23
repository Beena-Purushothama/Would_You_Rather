import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {formatQuestion} from '../Utils/Helper';


class ViewPollQuestion extends Component {

  render() {
    const {userQuestion} =this.props;
    return (
        <div className='viewPoll containers'>
        <div className='score'>{userQuestion.userName} asks:</div>
        <div className='horizontal-display'>
        <div className='avatar'>
              <Image src={require("../static/images/"+userQuestion.avatar)} roundedCircle  />
          </div>
        <div className=" left-border stretch">
        <h3>Would you rather...</h3>
        <div className="form-group ">
        <span>{userQuestion.optionOne.text} </span><br/>
        <span> {userQuestion.optionTwo.text} </span>
        </div>
        <Link className="btn btn-primary btn-block mt-4" to={`question/${userQuestion.id}`} > view poll </Link> 
        </div>
        </div>
        </div>
    )
  }
}
const mapStateToProps = ({questions,users},{queId}) => {
  const question = questions[queId];
  const userQuestion =formatQuestion(question, users[question.author]);
  return ({
    userQuestion : userQuestion
  })}
export default connect(mapStateToProps)(ViewPollQuestion);