import {LOGIN_USER} from '../Actions/Types';
    
export const authedUser = (state=null,action) => {
    switch(action.type) {
        case LOGIN_USER : 
        return action.autheduser
        default :
        return state
    }
}