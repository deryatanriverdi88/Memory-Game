import React, { Component } from 'react'

export default class HighScores extends Component {

    state = {
        highScores: []
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/scores')
        .then(res => res.json())
        .then(scores => {
           this.setState({
               highScores:  scores
           })
        })
    }

    render() {
        return (
            <div>
              
            </div>
        )
    }
}
