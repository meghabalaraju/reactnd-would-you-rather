import React, { Component } from 'react'

class TabNav extends Component {
    state = {
        active: this.props.children[0].props.lable
    }

    setSelected = (e, tab) => {
        e.preventDefault()
        this.setState(() =>({
            active: tab
        }))
    }

    render() {
        const { tabs } = this.props
        const { active } = this.state

        return (
            <div>
                <ul className="nav-tab">
                    {tabs.map((tab) => {
                        return (
                            <li key={tab} className={`nav-item-tab ${tab === active ? 'nav-active' : ''}`} onClick={(e) => this.setSelected(e, tab) }> 
                                {tab}
                            </li>
                        )
                    })}
                </ul>
                {this.props.children.map((child, i) => child.props.lable === active &&
                    (<div key={i} style={{padding: '10px'}}>{child.props.children}</div>)
                )}
            </div>
        )
    }
}

export default TabNav