import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import { handleQuestions } from '../actions/questions'
import Question from './Question'
import TabNav from './tabnav/TabNav'
import Tab from './tabnav/Tab'


class Home extends Component {
    tabs = ['Unanswered Questions', 'Answered Questions']

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(handleQuestions())
    }

    render() {
        const { authedUser, loading, answeredQids, unansweredQids, users, questions } = this.props

        return (
            <div className="leaderboard-container">
                <Nav />
                { loading === true 
                    ? <p>Loading...</p>
                    : <div className="container-questions"> 
                        <TabNav tabs={this.tabs}>
                            <Tab lable={'Unanswered Questions'}>tab 1</Tab>
                            <Tab lable={'Answered Questions'}>tab 2</Tab>
                        </TabNav>
                      </div>
                }
                
            </div>
        )
    }
}

function mapStateToProps( {authedUser, questions, users} ) {

    const questionIds = Object.keys(questions).sort((a, b) => questions[b].timstamp - questions[a].timstamp)
    questionIds.map((id) => console.log(id))
    const answers = users[authedUser].answers
    const loading = Object.entries(questions).length === 0

    return {
        authedUser,
        loading : Object.entries(questions).length === 0,
        answeredQids: !loading ? Object.keys(answers).sort((a, b) => questions[b].timestamp - questions[a].timestamp) : [],
        unansweredQids: !loading ? questionIds.filter((id) => answers[id] === undefined ) : [],
        questions,
        users,
    }
}

export default connect(mapStateToProps)(Home)