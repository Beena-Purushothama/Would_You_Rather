import React, { Component } from 'react'
import { connect } from 'react-redux';
import {clearErrMsg} from '../Actions/ErrorMsg'

class ErrorPage extends Component {
    componentWillUnmount =() =>{
     this.props.dispatch(clearErrMsg());
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
