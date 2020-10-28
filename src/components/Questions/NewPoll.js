import React, { Component } from "react";
import { connect } from "react-redux";
import { handleCreateQuestion } from "../../actions/shared";
import logo from "../../utils/icons/newPollBg.svg";
import Nav from "../Navigation/Nav";

class NewPoll extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch, authedUser } = this.props;
    const { optionOneText, optionTwoText } = this.state;

    const question = Object.create({
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
      author: authedUser,
    });

    dispatch(handleCreateQuestion(question));

    this.setState(() => ({
      optionOneText: "",
      optionTwoText: "",
    }));

    this.props.history.push("/home");
  };

  render() {
    const { optionOneText, optionTwoText } = this.state;
    const isDiabled =
      optionOneText === "" || optionTwoText === "" ? true : false;

    return (
      <div className="leaderboard-container">
        <Nav />
        <div
          className="container"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#ffffff",
            backgroundPosition: "0% 0%",
          }}
        >
          <h2 className="center head-poll">Create a new poll</h2>
          <div className="poll-container">
            <h5 className="u-font-small"> would you rather </h5>
            <form className="poll-form" onSubmit={this.handleSubmit}>
              <textarea
                className="text-area"
                placeholder="option one"
                name="optionOneText"
                value={optionOneText}
                onChange={this.handleChange}
                maxLength={100}
              />
              <h5 className="u-font-head-small">OR</h5>
              <textarea
                className="text-area"
                placeholder="Option two"
                name="optionTwoText"
                value={optionTwoText}
                onChange={this.handleChange}
                maxLength={100}
              />
              <p style={{ opacity: 0, margin: "5px" }}>text left</p>
              <button
                className="btn btn-create center"
                type="submit"
                disabled={isDiabled}
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewPoll);
