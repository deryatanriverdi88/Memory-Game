import React from 'react'

export default class Winner extends React.Component {
   state = {
       username: ""
   }

   handleChange = (e) => {
    console.log( e.target.value)
    this.setState({
        [e.target.name]: e.target.value
    })
   }

   handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify({
            username: this.state.username
        })
    }).then(res => res.json())
       .then(console.log('fetch finished'))
   }

    render(){
        const {moves, resetGame} = this.props
        return (
            <div className="winner" >
                <h1 className="moves" > Moves : {moves}</h1>
                <h1>
                    You Won!!!!
                </h1>
                <img src="../images/happy.gif"/>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Your name:</label>
                    <input id="username" name="username" value={this.state.username} type="text" onChange={(e) => this.handleChange(e)}/>
                    <input type="submit" id="submit"/>
                </form>
                <button className='button' onClick={()=> resetGame()}>Reset</button>
            </div>
        )
    }
}