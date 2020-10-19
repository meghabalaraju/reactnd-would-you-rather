import React, { Component } from 'react'
import { connect } from 'react-redux'
import avatarLady from '../utils/icons/avatarLady.svg'

class UnansweredQuestion extends Component {

    state = {
        slected: 
    }

    handleChange = (e) => {
        e.preventDefault()
        const option = e.target.value

        console.log(option)
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        const { question, user } = this.props
        const { id, author, timestamp, optionOne, optionTwo } = question
        const { avatarURL } = user
        return (
            <div className="card card-unans">
                <h3 className="card-head">{user.name} asks :</h3>
                <div className="card-question">
                    <div className="card-question-avatar">
                        <img src={avatarURL ? avatarURL : avatarLady} alt="leader-avatar" className="avatar"/>
                    </div>
                    <div className="card-question-detail">
                        <h5 className="u-margin detail-head">Would you rather</h5>
                        <div>
                            <input type="radio" id="huey" name="drone" value={optionOne.text}  onChange={(e)=> this.handleChange(e)} />
                            <label for="huey">{optionOne.text}</label>
                        </div>

                        <div>
                            <input type="radio" id="dewey" name="drone" value={optionTwo.text} onChange={(e)=> this.handleChange(e)} />
                            <label for="dewey">{optionTwo.text}</label>
                        </div>
                        <button type="submit" onClick={(e) => this.handleSubmit(e)}>Submit</button>                      
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users}, { id }) {
    const question = questions[id]
    const user = users[question.author]
    return {
        question,
        user
    }
}

export default connect(mapStateToProps)(UnansweredQuestion)