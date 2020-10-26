import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";

class QuestionDetail extends Component {
  render() {
    const { isAnswered, id } = this.props;
    if (isAnswered === null) {
      return (
        <div>
          <p>
            Please login to continue <Link to="/">Login</Link>
          </p>
        </div>
      );
    }

    return (
      <div style={{width: '50%', margin: '0 auto'}}>
        {isAnswered ? (
          <AnsweredQuestion id={id} />
        ) : (
          <UnansweredQuestion id={id} />
        )}
      </div>
    );
  }
}
function mapStateToProps({ questions, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  const isAnswered = !question
    ? null
    : question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
    ? true
    : false;
  return {
    id,
    isAnswered,
  };
}
export default connect(mapStateToProps)(QuestionDetail);
