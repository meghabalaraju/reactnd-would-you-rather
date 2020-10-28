export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const ADD_QUESTION =  'ADD_QUESTION'

/**
 * @description - Action to fetch users from api/ _DATA.js in this case
 * @param {object} users - object with user related data
 */
export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}


/**
 * @description - Question and answer will be added to related user
 * @param { string } authedUser - loggedin user
 * @param { string } id - question id 
 * @param { string } answer - answer opted by user 
 */

export function saveQuestion({ authedUser, id, answer}) {
    return {
      type: SAVE_QUESTION,
      authedUser,
      id, 
      answer
    };
  }

export function addQuestionToUser(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}