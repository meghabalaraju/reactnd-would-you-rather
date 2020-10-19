import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class AnsweredQuestion extends Component {
    render() {
        const { id, question } = this.props
        if( question === null ) {
            return (
                <div>
                    <p>This question doesnot exists, Please continue to <Link to="/home"></Link></p>
                </div>
            )
        }
        return (
            <div>
                Deatailed submission answered
            </div>
        )
    }
}

function mapStateToProps({questions}, { id }) {
    return {
        question: id ? questions[id]: null
    }
}

export default connect(mapStateToProps)(AnsweredQuestion)