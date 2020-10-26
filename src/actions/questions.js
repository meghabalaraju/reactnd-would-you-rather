import { getQuestions } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_ANSWER = "SAVE_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function handleQuestions() {
  return (dispatch) => {
    return getQuestions().then(({ questions }) => {
      dispatch(receiveQuestions(questions));
    });
  };
}


/**
 * @description -  Answers will be added to related question
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
