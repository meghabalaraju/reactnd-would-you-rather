import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer
} from './_DATA.js'

export function getInitialData () {
    
    return _getUsers().then((users) => ({
        users
    }))
}

export function getQuestions () {
    return _getQuestions()
            .then((questions) => ({
            questions,
    }))
}

export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info)
}