import React, { Component } from 'react'
import { connect } from 'react-redux';
import {clearErrMsg} from '../Actions/ErrorMsg'
import PropTypes from 'prop-types'

class ErrorPage extends Component {
  componentWillUnmount =() =>{
    this.props.dispatch(clearErrMsg());
  }
  render() {
    return (
      <div className='alert alert-danger'>
        {this.props.errMsg || "Something went wrong!"}
      </div>
    )
  }
}

ErrorPage.defaultProps = {
  errMsg: "Something went wrong"
};

ErrorPage.propTypes = {
  errMsg: PropTypes.string
}

const mapStatetoProps =({errMsg}) => ({
    errMsg
})
export default connect(mapStatetoProps)(ErrorPage);
