import React, { PureComponent } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
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
          <NavLink to='/newQuestion' activeClassName='active'>
          New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderBoard' activeClassName='active'>
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
            <Image src="https://tylermcginnis.com/would-you-rather/dan.jpg" roundedCircle  />
        </li>
        <li>
        <a href="#">Logout</a>
        </li>
        </ul>
      }
    </nav>
       {/* <div>
    <Navbar>
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Brand href="/newQuestion">New Question</Navbar.Brand>
    <Navbar.Brand href="/leaderBoard">LeaderBoard</Navbar.Brand>

    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      User name
      </Navbar.Text>
      <Navbar.Text>
      <div className='header-avatar'>
        <Image src="https://tylermcginnis.com/would-you-rather/dan.jpg" roundedCircle  />
      </div>
      </Navbar.Text>
      <Navbar.Text>
        <a href="#login">Logout</a>
      </Navbar.Text>
      <Navbar.Text>
        <Link to="/login">Login</Link>
      </Navbar.Text>
      </Navbar.Collapse>
      </Navbar>
      </div> */}
      </div>

    )
  }
}

const mapStateToProps = ({authedUser,users}) => {
  console.log("user",users);
  return ({
  authedUser,
  name: authedUser?users[authedUser].name:"",
  image : authedUser?users[authedUser].avatarURL:""
})
}
export default connect(mapStateToProps)(Header);