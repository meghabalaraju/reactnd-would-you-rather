// import all reducers
// combine all reducers by invoking Redux.combineReducers()

import { combineReducers } from "redux"
import authedUser from './authedUser'
import users from "./users"
import questions from "./questions"

export default combineReducers({
    authedUser,
    users,
    questions
})