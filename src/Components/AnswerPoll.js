import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import {connect} from 'react-redux';
import {handleSaveQuestionAnswer} from '../Actions/Questions';
import {formatQuestion} from '../Utils/Helper';
import PropTypes from 'prop-types';

class AnswerPoll extends Component {
state ={
    selected : ""
}
handleChange=(event) =>{
    this.setState({selected:event.target.value})
}
handleSubmit =(event)=>{
    event.preventDefault();
    const {dispatch,authedUser,  qid} = this.props;
    const answer =  this.state.selected;
    dispatch(handleSaveQuestionAnswer({authedUser , qid  , answer}));
}
render() {
    const {userQuestion} = this.props;
    const {selected} = this.state;
    return (
    <div className='containers'>
    <div className='score'>{userQuestion.author} asks:</div>
    <div className='horizontal-display'>
    <div className='avatar'>
        <Image src={require("../static/images/"+userQuestion.avatar)} roundedCircle/>
    </div>
    <form className=' left-border stretch' onSubmit={this.handleSubmit}>
        <h3>Would you rather...</h3>
        <div onChange={this.handleChange}>
        <input type="radio" name="answer" value="optionOne" /> {userQuestion.optionOne.text} <br/>
        <input type="radio" name="answer" value="optionTwo" /> {userQuestion.optionTwo.text} <br/>

        </div>
        <button className="btn btn-primary btn-block mt-4" type='submit'  disabled={selected===''}> Submit </button> 
    </form>
    </div> 
    </div>
    )
}
}

const mapStateToProps = ({questions,authedUser,users}, {qid}) =>{
    const question = questions[qid];
    const userQuestion = formatQuestion(question,users[question.author])
    return ({
      authedUser,
      userQuestion : userQuestion,
    })
}
export default connect(mapStateToProps)(AnswerPoll);