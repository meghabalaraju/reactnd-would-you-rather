import React, { Component } from 'react'
import { connect } from 'react-redux'
import Leaders from './Leaders'
import Nav from './Nav'

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
    const leaders = Object.keys(users).map((id) => users[id])

    return {
        leaders,
        authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard)