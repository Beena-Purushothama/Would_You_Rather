import React, { PureComponent } from 'react';
import Image from 'react-bootstrap/Image';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends PureComponent {
  render() {
    return (
      <div>
        <nav className='nav header'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
          New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
          LeaderBoard
          </NavLink>
        </li>
        
      </ul>
      { this.props.authedUser &&    
       <ul >
       <li>
        {this.props.name}
        </li>
        <li>
            <Image src={require("../static/images/"+this.props.image)} roundedCircle  />
        </li>
        <li>
        <a href="/logout">Logout</a>
        </li>
        </ul>
      }
    </nav>
      </div>
    )
  }
}

const mapStateToProps = ({authedUser,users}) => {
  return ({
  authedUser,
  name: authedUser?users[authedUser].name:"",
  image : authedUser?users[authedUser].avatarURL:""
})
}
export default connect(mapStateToProps)(Header);