import React, { Component } from 'react'

export default class CardBack extends Component {

    render() {
        const {img, index, setSelected} = this.props
        return (
            <div className="card">
                <img className="front" key={index}
                onClick={(e) => setSelected( e, img, index)} src="../logo192.png" alt={`${img}`} /> 
           </div>
        )
    }
}
