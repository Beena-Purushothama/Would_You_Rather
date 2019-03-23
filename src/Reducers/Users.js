import {RECEIVE_USERS,ADD_QUESTION_ANSWER,DELETE_QUESTION_ANSWER,ADD_QUESTION} from '../Actions/Types';


export const users = (state={} ,action) =>{
    switch(action.type) {
    case RECEIVE_USERS  :
    return {...state,
            ...action.users
        }
    case ADD_QUESTION_ANSWER :
    return  {
        ...state,
        [action.authedUser] : {
            ...state[action.authedUser],
            answers : {
                ...state[action.authedUser].answers,
                [action.qid] : action.answer
            }
        }
    }
    case DELETE_QUESTION_ANSWER:
    return  {
        ...state,
        [action.authedUser] : {
            ...state[action.authedUser],
            answers : Object.keys(state[action.authedUser].answers).reduce((object, key) => {
                if (key !== action.qid) {
                  object[key] = state[action.authedUser].answers[key]
                }
                return object
              }, {})            
        }
    }
    case ADD_QUESTION :
        return {
            ...state,
            [action.question.author] : {
            ...state[action.question.author],
            questions : state[action.question.author].questions.concat([action.question.id])}
        }
    default :
    return state
}
}
