import {_getUsers} from '../Utils/_DATA.js';
import {RECEIVE_USERS} from './Types';
import { showLoading, hideLoading } from 'react-redux-loading'


export const receiveUser = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const fetchUsers = () => dispatch => {
    dispatch(showLoading());
    return _getUsers().then((users) => {
        dispatch(receiveUser(users));
        dispatch(hideLoading());
    })
}
