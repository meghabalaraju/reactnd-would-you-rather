import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestions } from '../actions/questions'
import Nav from './Nav'
import TabNav from './tabnav/TabNav'
import Tab from './tabnav/Tab'
import Question from './Question'

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
                            <Tab lable={'Unanswered Questions'}>
                                {unansweredQids.map((id) => (
                                    <Question key={id} id={id}/>
                                ))}
                            </Tab>
                            <Tab lable={'Answered Questions'}>
                                {answeredQids.map((id) => (
                                    <Question key={id} id={id} isAnswered={true}/>
                                ))}
                            </Tab>
                        </TabNav>
                      </div>
                }
                
            </div>
        )
    }
}

function mapStateToProps( {authedUser, questions, users} ) {

    const questionIds = Object.keys(questions).sort((a, b) => questions[b].timstamp - questions[a].timstamp)
    const answers = users[authedUser].answers
    const loading = Object.entries(questions).length === 0
    const answeredQids = questionIds.map((qid) => {
        const { optionOne, optionTwo, id } = questions[qid]
        if ( optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser)) {
            console.log("It is here", optionOne.votes, optionTwo.votes, id)
            return qid
        }
    })

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