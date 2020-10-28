import React, { Component } from "react";
import { connect } from "react-redux";
import { handleQuestions } from "../actions/questions";
import Nav from "./Navigation/Nav";
import TabNav from "./Navigation/tabnav/TabNav";
import Tab from "./Navigation/tabnav/Tab";
import Question from "./Questions/Question";

class Home extends Component {
  tabs = ["Unanswered Questions", "Answered Questions"];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleQuestions());
  }

  render() {
    const { loading, answeredQids, unansweredQids } = this.props;

    return (
      <div className="leaderboard-container">
        <Nav />
        {loading === true ? (
          <p>Loading...</p>
        ) : (
          <div className="container-questions">
            <TabNav tabs={this.tabs}>
              <Tab lable={"Unanswered Questions"}>
                { unansweredQids.length === 0 && 
                    <p style={{textAlign: 'center'}}>All questions are answred</p>
                }
                { unansweredQids.length > 0 && 
                   unansweredQids.map((id) => (
                  <Question key={id} id={id} />
                ))}
              </Tab>
              <Tab lable={"Answered Questions"}>
                { answeredQids.length === 0 && 
                    <p style={{textAlign: 'center'}}>No questions are answered yet. </p>
                }
                { answeredQids.length > 0 && 
                  answeredQids.map((id) => (
                  <Question key={id} id={id} isAnswered={true} />
                ))}
              </Tab>
            </TabNav>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timstamp - questions[a].timstamp
  );
  const answers = users[authedUser].answers;
  const loading = Object.entries(questions).length === 0;

  return {
    authedUser,
    loading: Object.entries(questions).length === 0,
    answeredQids: !loading
      ? Object.keys(answers).sort(
          (a, b) => questions[b].timestamp - questions[a].timestamp
        )
      : [],
    unansweredQids: !loading
      ? questionIds.filter((id) => answers[id] === undefined).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
      : [],
    questions,
    users,
  };
}

export default connect(mapStateToProps)(Home);
