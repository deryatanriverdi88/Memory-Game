import React, { Component } from 'react'

export default class Score extends Component {
    render() {
        return (
            <div>
                {this.props.gameStatus === "winner" ?
                    <div>
                    {/* <p>Your game score was: {this.props.score} </p>  */}
                    {/* <p> Your final score based on your time and moves is: </p>  */}
                    <p>{this.props.finalScore}</p>
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
