import React, { Component } from 'react'

export default class CardBack extends Component {

    render() {
        const {img, index, setSelected, flipOneCard} = this.props
        return (
            <div className="card" onClick={() => flipOneCard(img.id, index)}>
                <img className="front" key={index}
               src="../logo192.png" alt={`${img}`}  /> 
           </div>
        )
    }
}
