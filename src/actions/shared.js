import { getInitialData, saveQuestionAnswer } from "../utils/api"
import { receiveUsers, saveQuestion } from "./users"
import { saveAnswer } from "./questions"

/**
 * @description - Action creator to fetch users from api
 */

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
        .then(({users}) => {
            dispatch(receiveUsers(users))
        })
    }
}


/**
 * 
 * @param {string} id - question id 
 * @param {string} answer - answer opted by user 
 */

export function handleSaveQuestionAnswer(id, answer) {
    return (dispatch, getState) => {
  
      const { authedUser } = getState();
  
      dispatch(saveAnswer({ authedUser, id, answer}));
      dispatch(saveQuestion({ authedUser, id, answer}));
      
      return saveQuestionAnswer({
        authedUser,
        qid: id,
        answer,
      }).catch((err) => {
          console.warn('Error in saving selected answer', err)

          dispatch(saveAnswer({authedUser, id, answer}));
          dispatch(saveQuestion({authedUser, id, answer}));

          alert('There was an erro saving the answer. Try again')
      })
    };
  }