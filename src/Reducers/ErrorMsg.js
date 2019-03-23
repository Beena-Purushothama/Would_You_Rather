import {ERR_MSG,CLEAR_ERR_MSG} from '../Actions/Types';

export const errMsg = (state="", action) => {
    switch(action.type) {
        case ERR_MSG : 
            return action.errMsg;
        case CLEAR_ERR_MSG : 
        return "";
        default :
            return state
    }

}