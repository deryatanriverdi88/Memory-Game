import React, { Component } from 'react'

export default class CardBack extends Component {
    

    render() {
        const {img,flipOneCard} = this.props
        return (
            <div className="card" onClick={() => flipOneCard(img)}>
                <img className="front" 
               src="../logo192.png" alt={`${img}`}  /> 
           </div>
        )
    }
}
