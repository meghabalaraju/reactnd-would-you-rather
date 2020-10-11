import { getInitialData } from "../utils/api"
import { receiveUsers } from "./users"


/**
 * Fetch all users on app loading
 * you should be in 
 */

export function handleInitialData () {
    return (dispatch) => {

        // Fettching data from API then storing in store
        return getInitialData()
        .then(({users}) => {
            dispatch(receiveUsers(users))
        })
    }
}