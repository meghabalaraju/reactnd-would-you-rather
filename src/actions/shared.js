import { getInitialData } from "../utils/api"
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users"


/**
 * Fetch all users on app loading
 * you should be in 
 */

export function handleInitialData () {
    return (dispatch) => {

        // Fettching data from API then storing in store
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}