import React, { Component } from 'react'

export default class Score extends Component {


    basePoints = () =>{
        if (this.props.matchedPairs.length > 0){
            return this.props.matchedPairs.length * 10
        } else {
            return 0
        }
    }



    render() {
        return (
            <div>

            </div>
        )
    }
}
