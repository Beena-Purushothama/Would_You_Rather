import React, { Component } from 'react'
import { connect } from 'react-redux';
import {clearErrMsg} from '../Actions/ErrorMsg'
import { ActionHelp } from 'material-ui/svg-icons';

class ErrorPage extends Component {
    componentWillUnmount =() =>{
     this.props.dispatch(clearErrMsg());
      console.log("in hrereee")
    }
  render() {
    return (
      <div className='alert alert-danger'>
        {this.props.errMsg}
      </div>
    )
  }
}

const mapStatetoProps =({errMsg}) => ({
    errMsg
})
export default connect(mapStatetoProps)(ErrorPage);
