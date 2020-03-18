import React from 'react'

export default function Winner({redirect}) {
    return (
        <div>
            <h1>
                You Won!!!!  
            </h1>
            <button onClick={()=> redirect('play')}>Reset</button>
        </div>
    )
}
