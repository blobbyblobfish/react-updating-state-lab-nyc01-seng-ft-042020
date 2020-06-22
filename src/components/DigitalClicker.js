// Code DigitalClicker Component Here

import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor(props) {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    render() {
        return (<button onClick={() => {this.setState(previousState => {return {timesClicked: previousState.timesClicked + 1}})}}>{this.state.timesClicked}</button>)
    }
}