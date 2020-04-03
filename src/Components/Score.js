import React, { Component } from 'react'

export default class Score extends Component {

    timeMultiplier = (t) =>{
        if(t <= 30){
            return 2
        } else if(t <= 60){
            return 1.5
        } else {
            return 1
        }
    }


    moveMultiplier = (m) =>{
        if(m === 12){
            return 10
        } else if(m <= 20){
            return 2
        }else if(m <= 45){
            return 1.5
        } else if(m > 45){
            return 1
        }
    }

    finalScore = ()=>{
        return this.basePoints()* this.timeMultiplier(this.props.timer) * this.moveMultiplier(this.props.moves)
    }

    render() {
        return (
            <div>
                {this.props.gameStatus === "winner" ? this.finalScore() :  this.basePoints()}
            </div>
        )
    }
}
