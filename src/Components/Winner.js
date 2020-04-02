import React from 'react'

export default class Winner extends React.Component {
   state = {
       username: ""
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
                <button className='button' onClick={()=> resetGame()}>Reset</button>
            </div>
        )
    }
}