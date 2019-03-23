import {ERR_MSG,CLEAR_ERR_MSG} from './Types';

export const handleErrMsg = (errMsg) => ({
    type : ERR_MSG,
    errMsg
})

export const clearErrMsg =() => ({
    type: CLEAR_ERR_MSG
})