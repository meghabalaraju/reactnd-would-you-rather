import { getQuestions } from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const CREATE_QUESTION = "CREATE_QUESTION"

// Code is organied to find Actions followed by Action creators


/**
 * @description - Action for fetching question
 * @param {object} questions - questions
 */

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}


/**
 * @description - Action creator to fetch questions
 */

export function handleQuestions() {
  return (dispatch) => {

    dispatch(showLoading());

    return getQuestions()
    .then(({ questions }) => {
      dispatch(receiveQuestions(questions));
    })
    .then(() => dispatch(hideLoading()))
  };
}






/**
 * @description - Action // related action creator is in shared
 * @param { string } authedUser - loggedin user
 * @param { string } id - question id 
 * @param { string } answer - answer opted by user 
 */

export function saveAnswer({ authedUser, id, answer}) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    id, 
    answer
  };
}






/**
 * @description - Action to add question when new poll is created
 * @param {object} questions - questions
 */
export function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question
  }
}
