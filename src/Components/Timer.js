// import React, { Component } from 'react'



// export default class Timer extends Component {

//     state ={ 
//         timer: 0,
//         winTime: 0
//     }
    
//     start =
//         setInterval(
//             () => this.setState({ timer:( this.state.timer + 1)}),
//               1000
//         );

//     componentDidMount= () =>{
//         if(this.props.gameStatus === "play"){
//             return this.start
//          }
//     }
       
    
//     componentWillUnmount =() => {
//         clearInterval(this.start)
//     }

  
//     renderWinTime = () => {
//         if (this.props.gameStatus==='winner') 
//             this.setState(prevState => {
//                 return {winTime: prevState.timer}
//             })
//         return <h3>{this.state.winTime}</h3>
//     }



//     {this.props.gameStatus === "play"  ?  <h3>  Time : {this.state.timer} seconds</h3> : <h3> Your time was : {this.renderWinTime()} seconds</h3>}


//     render() {
//         return (
//             <div className="timer">
//                 {/* {this.resetTime()} */}

//             </div>
//         )
//     }
// }
