import { getInitialData, saveQuestionAnswer, addQuestion } from "../utils/api";
import { receiveUsers, saveQuestion, addQuestionToUser } from "./users";
import { saveAnswer, createQuestion } from "./questions";

/**
 * @description - Action creator to fetch users from api
 */

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users }) => {
      dispatch(receiveUsers(users));
    });
  };
}



/**
 * @description - Action creator - to save answer and question of unanswered question
 * @param {string} id - question id
 * @param {string} answer - answer opted by user
 */

export function handleSaveQuestionAnswer(id, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestionAnswer({
      authedUser,
      qid: id,
      answer,
    })
      .catch((err) => {
        console.warn("Error in saving selected answer", err);
        alert("There was an erro saving the answer. Try again");
      })
      .then(() => {
        dispatch(saveAnswer({ authedUser, id, answer }));
        dispatch(saveQuestion({ authedUser, id, answer }));
      });
  };
}



/**
 * @description - Action creator - to add question to questions and to users who created question
 * @param {Object} question - unformatted question
 */
export function handleCreateQuestion(question) {
  return (dispatch) => {
    return addQuestion(question).then((question) => {
      dispatch(createQuestion(question));
      dispatch(addQuestionToUser(question));
    });
  };
}
