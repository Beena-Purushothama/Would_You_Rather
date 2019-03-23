import {combineReducers} from 'redux';
import {users} from './Users';
import {authedUser} from './LoggedInUser'
import {questions} from './Questions';
import {errMsg} from './ErrorMsg';
import { loadingBarReducer } from 'react-redux-loading';

/*export default combineReducers({
    users,
    authedUser,
    questions,
    errMsg,
    loadingBar: loadingBarReducer,
})*/
const appReducer = combineReducers({
    users,
    authedUser,
    questions,
    errMsg,
    loadingBar: loadingBarReducer,
})

export default  (state, action) => {
    if (action.type === 'LOGOUT_USER') {
      state = undefined
    }
  
    return appReducer(state, action)
}
