import React, { Component } from 'react'

export default class Score extends Component {


    basePoints = () =>{
        if (this.props.matchedPairs.length > 0){
            return this.props.matchedPairs.length * 10
        } else {
            return 0
        }
    }

    timeMultiplier = (t) =>{
        if(t <= 30){
            return 2
        } else if(t <= 60){
            return 1.5
        } else {
            return 1
        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
