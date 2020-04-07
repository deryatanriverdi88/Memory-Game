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

    renderHighScores = () => {
        let i = 1
        return this.state.highScores.map(score => {
        return <p key={score.id}>{i++} - {score.user.username} - {score.score}</p>
        })
    }

    render() {
        return (
            <div>
                <h2>Top 10 High Scores</h2>
                {this.renderHighScores()}
            </div>
        )
    }
}