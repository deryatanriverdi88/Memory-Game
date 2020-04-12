import React, { Component } from 'react'

export default class HighScores extends Component {

    state = {
        highScores: [],
        scoreIndex: null,
        newScores: []

    }

    componentDidMount = () => {
        fetch('http://localhost:3000/scores')
        .then(res => res.json())
        .then(scoresArr =>  {
            let scores = scoresArr.slice(0,10)
            if (scores.find(score => score.id === this.props.playerScore.id)) {
                this.setState({
                    highScores: scores.slice(0,10)
                })
            }
            else {
                this.setState({
                    highScores: scores,
                    newScores: [...scores, this.props.playerScore],
                    scoreIndex: scoresArr.findIndex(score => score.id === this.props.playerScore.id)
                })
            }
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