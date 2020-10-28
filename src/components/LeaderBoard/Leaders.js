import React, { Component } from 'react'
import avatarLady from '../../utils/icons/avatarLady.svg'

class Leaders extends Component {
    render() {
        const { userData } = this.props
        const { name, avatarURL, answers, questions, score } = userData 
        const noAnsweredQuestions = Object.keys(answers).length;

        return(
            <div className="leader-container">
                <div className="leader-avatar">
                    <img src={avatarURL ? avatarURL : avatarLady} alt="leader-avatar" className="avatar"/>
                    <p className="leader-name">{name}</p>
                </div>
                <div className="leader-qa">
                    <p>Answered Questions &ensp;{noAnsweredQuestions} </p>
                    <p>Created Questions &ensp;{questions.length}</p>
                </div>
                <div className="leader-score">
                    <h5 className="score-head">Score</h5>
                    <p className="score">{score}</p>
                </div>
            </div>
        )
    }
}

export default Leaders