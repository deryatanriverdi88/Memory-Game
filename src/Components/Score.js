import React, { Component } from 'react'

export default class Score extends Component {
    render() {
        return (
            <div>
                {this.props.gameStatus === "winner" ?
                    <div>
                    <p>Score : {this.props.score}</p>
                    <p>Bonus: {this.props.finalScore - this.props.score }</p>
                    <p>Total : {this.props.finalScore}</p>
                    </div>
                    :
                    <>
                    <p> score: {this.props.score} </p>
                    <p> current streak: {this.props.streak} </p>
                    </>}
            </div>
        )
    }
}
