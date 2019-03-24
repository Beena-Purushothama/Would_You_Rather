import React, { Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {login} from '../Actions/LoggedInUser';
import { Redirect } from 'react-router-dom'


class Login extends Component {
  state ={
    selected : ""
  }

  handleChange=(event) =>{
    this.setState({selected:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {dispatch} = this.props;
    const data = new FormData(event.target);
    dispatch(login(data.get("user")));
  }

  render() {
    const {users,authedUser,loading} = this.props;
    const {selected} = this.state;
    let { from } = this.props.location.state || { from: { pathname: "/" } };

    if(from.pathname === '/logout') {
      from = {
        pathname: "/"
      }
    }

    if (authedUser !== null) return <Redirect to={from} />;
    return (
      <Fragment>
      {loading ? null :
        <div className='containers'>
        <form onSubmit={this.handleSubmit}>
        <div className='score'>
          <h3>Welcome to the Would You Rather App!</h3>
          <span>Please sign in to continue..</span>
        </div>
          <h4>Sign In</h4>
          <div className='form-group'>
              <select name="user" onChange={this.handleChange} className='form-control form-control-lg text'>
                <option value="">select a user..</option>
                {users.map((user) => <option key={user}>{user}</option>)}
              </select>
          </div>
          <button className="btn btn-primary btn-block mt-4" type='submit' disabled={selected===''}> Submit </button> 
          </form>
        </div>
      }
      </Fragment>
    )
  }
}

const mapsStateToProps = ({users,authedUser}) =>({
  authedUser,
  loading : Object.keys(users).length === 0,
  users : Object.keys(users),
})
export default connect(mapsStateToProps)(Login);


