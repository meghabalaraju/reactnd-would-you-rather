import { SET_AUTHED_USER, REMOVE_AUTH } from '../actions/authedUser';

export default function authedUser ( state = null, action ) {

    switch(action.type) {

        case SET_AUTHED_USER:
            return action.id

        case REMOVE_AUTH:
            return action.id = null

        default:
            return state
            
    }
}