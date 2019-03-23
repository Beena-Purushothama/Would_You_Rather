import React, { Component,Fragment } from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import Header from './Header';
import NewPollQuestion from './NewPollQuestion';
import Home from './Home';
import { Route } from 'react-router-dom'
import {fetchUsers} from '../Actions/Users';
import {connect} from 'react-redux';
import PrivateRoute from './PrivateRoute'
import { BrowserRouter as Router } from 'react-router-dom';
import Poll from './Poll';
import {handleInitialData} from '../Actions/Shared';
import Logout from './Logout';
import ErrorPage from './ErrorPage';
import LoadingBar from 'react-redux-loading';



class App extends Component {
  componentDidMount = () =>{
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log("App :auuser=",this.props.authedUser)
    const {authedUser} = this.props;
    return (
      <Router>
      <Fragment>
      <LoadingBar/>
      <div className="main-container">
       <Header/>
       <Route path='/login' component={Login} />
       <Route path='/error' component={ErrorPage} />
       <PrivateRoute path="/" exact component={Home}  authenticated={authedUser !== null} />
       <PrivateRoute path='/leaderBoard' component={LeaderBoard} authenticated={authedUser !== null} />
       <PrivateRoute path='/newQuestion' component={NewPollQuestion} authenticated={authedUser !== null} />
       <PrivateRoute path='/question/:qid' component={Poll} authenticated={authedUser !== null} />
       <PrivateRoute path='/logout' component={Logout} authenticated={authedUser !== null} />
       </div>
      </Fragment>
    </Router>
    );
  }
}
const mapStateToProps = ({authedUser}) =>({
  authedUser
})
export default connect(mapStateToProps)(App);
