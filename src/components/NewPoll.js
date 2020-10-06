import React, { Component } from 'react'
import logo from '../utils/icons/newPollBg.svg'

class NewPoll extends Component {
    render() {
        return (
            <div className='container' style={{
                                                backgroundImage: `url(${logo})`, 
                                                backgroundRepeat: 'no-repeat', 
                                                backgroundColor: '#ffffff'}}>
                <h2 className="center head-poll">Create a new poll</h2>
                <div className='poll-container'>
                        <h5 className="u-font-small"> would you rather </h5>
                        <form className='poll-form'>
                            <textarea
                                className='text-area'
                                placeholder='option one'
                                maxLength={100} />
                            <h5 className="u-font-small">OR</h5>
                            <textarea
                                className='text-area'
                                placeholder='Option two'
                                wrap="true"
                                maxLength={100} />
                            <p style={{opacity: 0}}>text left</p>
                            <button 
                                className='btn btn-create center'
                                >
                                Post
                            </button>
                        </form>
                    </div>
                    
            </div>
        )
    }
}

export default NewPoll


