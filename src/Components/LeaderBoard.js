import React, { Component } from 'react'
import UserProfile from './UserProfile';
import {connect} from 'react-redux';


class LeaderBoard extends Component {
  render() {
    const {userId} = this.props;
    return (
      <div>
        <ul>
          { userId.map((id)=> (<li key={id}> <UserProfile id={id}/></li>)
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({users}) => { 
  return ({
  userId : Object.keys(users).sort((a,b) => ((users[b].questions.length + Object.keys(users[b].answers).length) -
     (users[a].questions.length + Object.keys(users[a].answers).length)))
})}

export default connect(mapStateToProps)(LeaderBoard);
