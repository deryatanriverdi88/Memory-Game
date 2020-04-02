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

    render() {
        return (
            <div>

            </div>
        )
    }
}
