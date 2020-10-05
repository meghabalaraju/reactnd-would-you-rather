import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'

class Wrapper extends Component {

    render() {
        const { users } = this.props;

        return (
            <div className='wrapper'>
                <div className='log-header'>
                    <h3 className='log-header-font'>Welcome to would you ratherapp!</h3>
                    <p>Please sign in to continue</p>
                </div>
                <Login users={users} />
            </div>
        )
    }
}

function mapStateToProps ({users}) {
    const userIds = Object.keys(users)

    return {
        users: userIds.map((id) => users[id])
    }
}

export default connect(mapStateToProps)(Wrapper)