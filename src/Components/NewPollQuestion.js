import React, { Component } from 'react';
import classnames from "classnames";
import { ActionHelp } from 'material-ui/svg-icons';
import {handleAddNewQuestion} from '../Actions/Questions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class NewPollQuestion extends Component {
  state ={
    optionOne:'',
    optionTwo :'',
    toHome : false ,
  }
  componentDidUpdate =(prevProps) => {
    console.log("prev ques leng",Object.keys(prevProps.questions).length) 
     console.log("current ques leng",Object.keys(this.props.questions).length) 
     if(Object.keys(this.props.questions).length > Object.keys(prevProps.questions).length){
       this.setState({toHome :true})
     }

  }

  handleChange = (event) => {
    const { target: { name, value } } = event
    this.setState({[name]:value});
  }

  handleSubmit =(event) =>{
    event.preventDefault();
    const {dispatch} = this.props;
    const data = new FormData(event.target);
    console.log("1 text ", data.get("optionOne"));
    console.log("2 text ", data.get("optionTwo"))

    dispatch(handleAddNewQuestion({ 
      
    optionOneText : data.get("optionOne"), 
    optionTwoText: data.get("optionTwo"),
    author : this.props.authedUser
     }))
  }

  render() {
      console.log("Render is called",this.props)
      const {optionOne,optionTwo,toHome} = this.state;

      if(toHome) {
        return <Redirect to="/"/>
      }
      const optionOneTextLeft = 100 - optionOne.length
      const optionTwoTextLeft = 100 - optionTwo.length

      
    return (
      <div className='main'>
        <h3 className='score'>Create new Question</h3>
        <hr/>
        <form onSubmit={this.handleSubmit}>
          Complete the Question
          <h5>Would you rather...</h5>
          <div className="form-group">
          <textarea 
          name="optionOne"
          placeholder="Enter option one here"
          value={optionOne}
          onChange={this.handleChange}
          className="form-control form-control-lg text" maxLength={100}/>
          </div>
          {optionOneTextLeft <= 20 && (
          <div className='tweet-length'>
            {optionOneTextLeft}
          </div>
          )}
          <h5 align='center'>OR</h5>
            <div className="form-group">
            <textarea 
            name="optionTwo"
            placeholder="Enter option two here"
            value={optionTwo}
            onChange={this.handleChange}
            className="form-control form-control-lg text" maxLength={100}/>
            {optionTwoTextLeft <= 20 && (
            <div className='tweet-length'>
              {optionTwoTextLeft}
            </div>
          )}
            </div>
            <button className="btn btn-primary btn-block mt-4" type='submit' disabled={optionOne === '' || optionTwo ===''}> Submit </button> 

        </form>
        </div>
    )
  }
}
const mapStateToProps =({questions,authedUser}) => {

  return ({
    questions,
    authedUser
  })
}
export default connect(mapStateToProps)(NewPollQuestion);