import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/shared";
import avatarLady from "../utils/icons/avatarLady.svg";
import Nav from "./Nav";

class UnansweredQuestion extends Component {
  state = {
    selected: this.props.question.optionOne.text,
    answer: "optionOne",
  };

  handleChange = (e) => {
    const { value } = e.target;
    const { optionOne } = this.props.question;

    this.setState(() => ({
      selected: value,
      answer: value === optionOne.text ? "optionOne" : "optionTwo",
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { answer } = this.state;
    const { dispatch, question } = this.props;
    const { id } = question;

    dispatch(handleSaveQuestionAnswer(id, answer));
  };

  render() {
    const { question, user } = this.props;
    const { optionOne, optionTwo } = question;
    const { avatarURL } = user;
    const { selected } = this.state;
    return (
      <Fragment>
        <Nav />
        <div className="card card-unans">
          <h3 className="card-head">{user.name} asks :</h3>
          <div className="card-question">
            <div className="card-question-avatar">
              <img
                src={avatarURL ? avatarURL : avatarLady}
                alt="leader-avatar"
                className="avatar avatar-uans"
              />
            </div>
            <form className="card-question-detail" onSubmit={this.handleSubmit}>
              <h5 className="u-margin-top u-margin-small detail-head">
                Would you rather
              </h5>
              <div className="u-margin-small">
                <input
                  type="radio"
                  value={optionOne.text}
                  checked={selected === optionOne.text}
                  onChange={this.handleChange}
                />
                <label className="label-uans">{optionOne.text}</label>
              </div>

              <div className="u-margin-small">
                <input
                  type="radio"
                  value={optionTwo.text}
                  checked={selected === optionTwo.text}
                  onChange={this.handleChange}
                />
                <label className="label-uans">{optionTwo.text}</label>
              </div>
              <button className="u-margin-small-top btn-uans" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  const user = users[question.author];
  return {
    question,
    user,
  };
}

export default connect(mapStateToProps)(UnansweredQuestion);
