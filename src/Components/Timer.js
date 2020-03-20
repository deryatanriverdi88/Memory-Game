import React, { Component } from 'react'

export default class Timer extends Component {

    // state ={ timer: 0}
    
    // start =
    //     setInterval(
    //         () => this.setState({ timer: this.state.timer + 1}),
    //           1000
    //     );

    // componentDidMount= () =>{
    //     if(this.props.gameStatus === "play"){
    //         return this.start
    //      }
    // }
       
    // componentDidUpdate= () => {
    //     if(this.props.gameStatus ==="winner"){
    //         clearInterval(this.start)
    //     }
    // }

    render() {
        return (
            <div className="timer">
                {this.props.gameStatus === "play"  ? <h1>Time : {this.props.timer}</h1> : <h1> Your time was : {this.props.timer} </h1>}
            </div>
        )
    }
}
