export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const REMOVE_AUTH = 'REMOVE_AUTH'


/**
 * @description - action for login
 * @param {string} id - author id 
 */

function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}


/**
 * @description - action creator to set authed User for login
 * @param {string} id - author id 
 */
export function handleSetAuthedUser (id) {
    return (dispatch) => {
        dispatch(setAuthedUser(id))
    }
}

/**
 * @description - action for logout
 * @param {string} id - author id 
 */
function logoutUser (id) {
    return {
        type: REMOVE_AUTH,
        id
    }
}

/**
 * @description - logout action creator
 * @param {string} id - author id 
 */
export function handleLogout (id) {
    return (dispatch) => {
        dispatch(logoutUser(id))
    }
}