import { getQuestions } from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function handleQuestions () {
    return (dispatch) => {
        return getQuestions()
            .then(({questions}) => {
                dispatch(receiveQuestions(questions))
            })
    }
}