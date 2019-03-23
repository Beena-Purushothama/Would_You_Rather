import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import {connect} from 'react-redux';
import {handleSaveQuestionAnswer} from '../Actions/Questions';

class AnswerPoll extends Component {
state ={
    selected : ""
}
handleChange=(event) =>{
    console.log(event.target.value);
    this.setState({selected:event.target.value})
}
handleSubmit =(event)=>{
    event.preventDefault();
    const {dispatch,authedUser,  qid} = this.props;
    const data = new FormData(event.target);
    const answer =  this.state.selected;
    dispatch(handleSaveQuestionAnswer({authedUser , qid  , answer}));
}
render() {
    const {question} = this.props;
    const {selected} = this.state;
    return (
    <div className='containers'>
    <div className='score'>{question.author} asks:</div>
    <div className='horizontal-display'>
    <div className='avatar'>
        <Image src="https://tylermcginnis.com/would-you-rather/dan.jpg" roundedCircle/>
    </div>
    <form className=' left-border stretch' onSubmit={this.handleSubmit}>
        <h3>Would you rather...</h3>
        <div onChange={this.handleChange}>
        <input type="radio" name="answer" value="optionOne" /> {question.optionOne.text} <br/>
        <input type="radio" name="answer" value="optionTwo" /> {question.optionTwo.text} <br/>

        </div>
        <button className="btn btn-primary btn-block mt-4" type='submit'  disabled={selected===''}> Submit </button> 
    </form>
    </div> 
    </div>
    )
}
}

const mapStateToProps = ({questions,authedUser}, {qid}) =>{
    return ({
      authedUser,
      question : questions[qid],
    })
}
export default connect(mapStateToProps)(AnswerPoll);