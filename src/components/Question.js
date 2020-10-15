import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import avatarLady from '../utils/icons/avatarLady.svg'

class Question extends Component {
    render() {
        const { question, user } = this.props
        const { id, author, timestamp, optionOne, optionTwo } = question

        if (question === null) {
            return <p>This question does not exists</p>
        }
        return (
            <div className="card">
                <h3 className="card-head">{user.name} asks :</h3>
                <div className="card-question">
                    <div className="card-question-avatar">
                        <img src={user.avatarURL ? user.avatarURL : avatarLady} alt="leader-avatar" className="avatar"/>
                    </div>
                    <div className="card-question-detail">
                        <h5 className="u-margin detail-head">Would you rather</h5>
                        <p className="text-ellipsis">{optionOne.text}</p>
                        <Link to={`/question/${id}`} className="router-link">View Poll</Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, users }, { id }) {
    const question = questions[id]
    const user = users[question.author]

    return {
        question,
        user
    }
}

export default connect(mapStateToProps)(Question)