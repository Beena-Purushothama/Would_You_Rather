import {LOGIN_USER,LOGOUT_USER} from './Types';

export const login = (autheduser) => ({
    type: LOGIN_USER,
    autheduser
})

export const logout =() => ({
    type:LOGOUT_USER
})