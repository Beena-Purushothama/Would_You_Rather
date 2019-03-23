import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import PollResult from './PollResult'
import AnswerPoll from './AnswerPoll';
import { Redirect } from 'react-router-dom'
import {handleErrMsg} from '../Actions/ErrorMsg';

class PollQuestion extends Component {

  componentDidMount =()=>{
    if(!this.props.isValid) {
      this.props.dispatch(handleErrMsg("Invalid Question Id"));
    }
  }

  render() {
    const {qid,answered,isValid} = this.props;
    console.log("qid",qid,"answered",answered,isValid);

    if(!isValid){
        return <Redirect to="/error"/>
    }
    return (
      <Fragment>
      {answered ? 
        <PollResult qid={qid}/>
        :
        <AnswerPoll qid={qid}/>
      }
      </Fragment>
    )
  }
}

const mapStateToProps = ({questions,users,authedUser}, props) =>{
  const {qid} = props.match.params;
  console.log("qid poll",qid,"-----",questions[qid])
  return ({
    qid, 
    answered : Object.keys(users[authedUser].answers).includes(qid),
    isValid : questions[qid] !== null && questions[qid] !== undefined
  })
}

export default connect(mapStateToProps)(PollQuestion);
