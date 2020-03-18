import React from 'react'

export default function Winner({redirect, moves }) {
    return (
        <div>
            <h1> Moves : {moves}</h1>
            <h1>
                You Won!!!!  
            </h1>
            <button onClick={()=> redirect('play')}>Reset</button>
        </div>
    )
}
