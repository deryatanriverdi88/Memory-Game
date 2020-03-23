import React from 'react'

export default function Winner({moves, resetGame }) {

    return (
        <div className="winner" >
            <h1 className="moves" > Moves : {moves}</h1>
            <h1>
                You Won!!!!  
            </h1>
            <img src="../images/happy.gif" /> 
            <button className='button' onClick={()=> resetGame()}>Reset</button>
        </div>
    )
}