import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import avatarLady from "../utils/icons/avatarLady.svg";

class AnsweredQuestion extends Component {
  render() {
    const { id, question, user, loggedAns } = this.props;
    const { author, timestamp, optionOne, optionTwo } = question;
    const { avatarURL, name } = user;

    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    const optionOneVotes = optionOne.votes.length
    const optionTwoVotes = optionTwo.votes.length

    const optionOnePercentage = optionOneVotes !== 0 ? Math.floor((optionOneVotes / totalVotes) * 100) : 0;
    const optionTwoPercentage = optionTwoVotes !== 0 ? Math.floor(( optionTwoVotes / totalVotes) * 100) : 0;

    console.log('perc', totalVotes, optionOneVotes, optionTwoVotes,  optionOnePercentage, optionTwoPercentage)

    let optionOneProgress = {
      width: `${optionOnePercentage}%`,
      color: 'white',
      textAlign: 'center',
      fontSize: '15px'
    }

    let optionTwoProgress = {
      width: `${optionTwoPercentage}%`,
      color: 'white',
      textAlign: 'center',
      fontSize: '15px'
    }

    if (question === null) {
      return (
        <div>
          <p>
            This question doesnot exists, Please continue to{" "}
            <Link to="/home"></Link>
          </p>
        </div>
      );
    }
    return (
      <div style={{width:'100%', margin:'0 auto'}}>
        <Nav />
        <div className="container-ans">
            <h2 className="head-ans">Asked by: {name}</h2>
            <div className="details-ans">
                <div style={{ borderRight: '1px dotted black', marginRight: '50px'}}>
                    <img 
                        className="avatar-ans"
                        src={avatarURL ? avatarURL : avatarLady}
                        alt="user-avatar"
                    />
                </div>
                <div className="details-ans-results">
                    <h3 style={{marginTop: '0'}}>Results: </h3>
                    <div className={`result-ans ${loggedAns === 'optionOne' ? "active-ans" : ""}` }>
                      <p>Would you rather {optionOne.text} ?</p>
                      <div id="progressbar">
                         <div style={optionOneProgress}>{optionOnePercentage}%</div>
                      </div>
                      <p className="votes">{optionOneVotes} out of {totalVotes} votes</p>
                    </div>
                    <div className={`result-ans ${loggedAns === 'optionTwo' ? "active-ans" : ""}`} >
                      <p>Would you rather {optionTwo.text} ?</p>
                      <div id="progressbar">
                          <div style={optionTwoProgress}>{optionTwoPercentage}%</div>
                      </div>
                      <p className="votes">{optionTwoVotes} out of {totalVotes} votes</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({authedUser, questions, users }, { id }) {
  const user = users[questions[id].author];
  const loggedAns = users[authedUser].answers[id]

  console.log(questions[id], loggedAns)
  return {
    question: id ? questions[id] : null,
    user,
    loggedAns
  };
}

export default connect(mapStateToProps)(AnsweredQuestion);
