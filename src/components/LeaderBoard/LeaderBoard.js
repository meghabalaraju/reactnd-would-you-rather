import React, { Component } from 'react'
import { connect } from 'react-redux'
import Leaders from './Leaders'
import Nav from '../Navigation/Nav'

class LeaderBoard extends Component {
    render () {

        const { leaders } = this.props
        return (
            <div className="leaderboard-container">
                <Nav />
                {
                    leaders.map((key, i) => (
                        <Leaders key={key.id} userData={key}/>
                    ))
                }                
            </div>
        )
    }
}

function mapStateToProps ({users, authedUser}) {
    const leadersList = Object.keys(users).map((id) => users[id])

    const leaders = leadersList.map((leader) => {
        const leaderscore = Object.keys(leader.answers).length + leader.questions.length
        leader["score"] = leaderscore
        return leader;
    }).sort((a, b) => b.score - a.score)


    return {
        leaders,
        authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard)