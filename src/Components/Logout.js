import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {logout} from '../Actions/LoggedInUser';

class Logout extends Component {
componentDidMount =() => {
    console.log("cdm logout");
    const {dispatch} = this.props;
    dispatch(logout());
}
  render() {
    if(this.props.authedUser === null) {
        console.log(" logout au null");

       return  <Redirect to="/"/>
    }
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps =({authedUser}) => ({
    authedUser
})
export default connect(mapStateToProps)(Logout);