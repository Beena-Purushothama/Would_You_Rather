import React, { Component,Fragment} from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import Header from './Header';
import NewPollQuestion from './NewPollQuestion';
import Home from './Home';
import {connect} from 'react-redux';
import PrivateRoute from './PrivateRoute'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
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
    const {authedUser} = this.props;
    return (
      <Router>
      <Fragment>
      <LoadingBar/>
      <div className="main-container">
       <Header/>
       <Switch>
       <Route path='/login' exact component={Login} />
       <Route path='/error' exact component={ErrorPage} />
       <PrivateRoute path="/" exact component={Home}  authenticated={authedUser !== null} />
       <PrivateRoute path='/leaderBoard' exact component={LeaderBoard} authenticated={authedUser !== null} />
       <PrivateRoute path='/newQuestion' exact component={NewPollQuestion} authenticated={authedUser !== null} />
       <PrivateRoute path='/question/:qid' exact component={Poll} authenticated={authedUser !== null} />
       <PrivateRoute path='/logout' exact component={Logout} authenticated={authedUser !== null} />
       <Route path='*' component={ErrorPage} />
       </Switch>
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
