import React, { Component } from "react";
import logo from "../utils/icons/newPollBg.svg";
import Nav from "./Nav";

class NewPoll extends Component {
  render() {
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
            <form className="poll-form">
              <textarea
                className="text-area"
                placeholder="option one"
                maxLength={100}
              />
              <h5 className="u-font-head-small">OR</h5>
              <textarea
                className="text-area"
                placeholder="Option two"
                wrap="true"
                maxLength={100}
              />
              <p style={{ opacity: 0, margin: "5px" }}>text left</p>
              <button className="btn btn-create center">Post</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPoll;
