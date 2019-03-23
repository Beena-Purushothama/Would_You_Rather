import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer,
    _saveQuestion
} from './_DATA'

export const getInitialData = () => {
    return Promise.all([_getUsers(),_getQuestions()]).then(([users,questions]) => {
        return {users,questions}
        })
}

export const saveQuestionAnswer = (info) => {
    return _saveQuestionAnswer(info)
}

export const saveQuestion = (question) => {
    return _saveQuestion(question)
}