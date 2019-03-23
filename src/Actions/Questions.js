import {RECEIVE_QUESTIONS,ADD_QUESTION_ANSWER,DELETE_QUESTION_ANSWER,ADD_QUESTION} from './Types';
import {saveQuestionAnswer,saveQuestion} from '../Utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';


export const receiveQuestions =(questions) => ({
    type: RECEIVE_QUESTIONS,
    questions
})

export const addQuestionAnswer = ({ authedUser, qid, answer }) => ({
    type: ADD_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
})

export const removeQuestionAnswer = ({ authedUser, qid, answer }) => ({
    type: DELETE_QUESTION_ANSWER,
     authedUser,
    qid,
    answer
})

const addNewQuestion =(question) =>({
    type : ADD_QUESTION,
    question
})

export const handleSaveQuestionAnswer = (info) => dispatch => {
    dispatch(addQuestionAnswer(info));
    saveQuestionAnswer(info).catch((e) => {
        dispatch(removeQuestionAnswer(info));
        alert('There was an error while saving your answer. Try again.');
    })
}

export const handleAddNewQuestion = (question) => dispatch => {
    dispatch(showLoading())
    saveQuestion(question).then((newQuestion) => {
        dispatch(addNewQuestion(newQuestion))
    })
    .then(() => dispatch(hideLoading()))
}