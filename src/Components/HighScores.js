import React, { Component } from 'react'

export default class HighScores extends Component {

    state = {
        highScores: [],
        scoreIndex: null,
        newScores: []

    }

    componentDidMount = () => {
        fetch('https://total-recall-backend.herokuapp.com/scores')
        .then(res => res.json())
        .then(scoresArr =>  {
            let scores = scoresArr.slice(0,10)
            if (scores.find(score => score.id === this.props.playerScore.id)) {
                this.setState({
                    highScores: scores
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
        const {playerScore} = this.props
        if (this.state.newScores.length){
            return this.state.newScores.map(score => {
                if (score.id === playerScore.id) {
                    return <p key={playerScore.id}> {this.state.scoreIndex + 1} - {playerScore.user.username} - {playerScore.score}</p>
                } else {
                    return <p key={score.id}>{i++} - {score.user.username} - {score.score}</p>
                }
            })
        } else {
            return this.state.highScores.map(score => {
                    return <p key={score.id}>{i++} - {score.user.username} - {score.score}</p>
                })
            }
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