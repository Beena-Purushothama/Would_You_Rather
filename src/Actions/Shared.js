import {getInitialData} from '../Utils/api';
import {receiveUser} from './Users';
import {receiveQuestions} from './Questions';
import { showLoading, hideLoading } from 'react-redux-loading';

export const handleInitialData = () => dispatch => {
    console.log("shared Action")
    dispatch(showLoading());
        return getInitialData().then(({users,questions}) => {
        dispatch(receiveUser(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
    } )
}