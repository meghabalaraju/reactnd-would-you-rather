import {
    _getUsers,
    _getQuestions
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