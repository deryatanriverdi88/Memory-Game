import React from 'react'
import HighScores from './HighScores'

export default class Winner extends React.Component {
   state = {
       username: "",
       highScore: false,
       userId: null,
       playerScore: null
   }

   handleChange = (e) => {
    console.log( e.target.value)
    this.setState({
        [e.target.name]: e.target.value
    })
   }

   handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://total-recall-backend.herokuapp.com/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify({
            username: this.state.username
        })
    }).then(res => res.json())
      .then(user => {
      fetch('https://total-recall-backend.herokuapp.com/scores',{
            method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify({
           score: this.props.finalScore,
           user_id: user.id
          })
        }).then(res=> res.json())
          .then(score => {
              this.setState({
                highScore: true,
                playerScore: score
              })
          })
      })
   }


    render(){
        const {moves, resetGame} = this.props
        return (
            <div className="winner" >
              { !this.state.highScore ?
              <>
                <h1>
                    You Won!!!!
                </h1>
                <img src="../images/happy.gif"/>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Your name:</label>
                    <input id="username" name="username" value={this.state.username} type="text" onChange={(e) => this.handleChange(e)}/>
                    <input type="submit" id="submit"/>
                </form>
                </> :
                <HighScores playerScore={this.state.playerScore}/> }
                <button className='button' onClick={()=> resetGame()}>Reset</button>
            </div>
        )
    }
}