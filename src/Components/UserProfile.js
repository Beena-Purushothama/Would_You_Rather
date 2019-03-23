import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Image from 'react-bootstrap/Image';
import {connect} from 'react-redux';


class UserProfile extends Component {
  render(){
  const { user } = this.props;
  return (
    <div className=' userProfile main'>
    <div className='horizontal-display'>
      <div className='avatar'>
      <Image src="https://tylermcginnis.com/would-you-rather/dan.jpg" roundedCircle  />
      </div>
      <div className=' left-border vertical-display'>
        <h3> {user.name}</h3>
        <span> Answered Questions - {Object.keys(user.answers).length}</span>
        <span> Created Questions  - {user.questions.length}</span>
      </div>
      <div className='end vertical-display border left-border'>
      <span className='score'>Score</span>
      <span className='circle'>{Object.keys(user.answers).length + user.questions.length}</span>
      </div>
    </div>
    </div>
  )
}
}

const mapStateToPeops = ({users},{id}) => {
  return ({
    user : users[id]
  })
}
export default connect(mapStateToPeops)(UserProfile)
;