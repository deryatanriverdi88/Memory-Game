import React, { Component } from 'react'

export default class CardFront extends Component {

    render() {
        const {img} = this.props
        return (
            <div className="card ">
                 <img className="back"
                      src={img.url} alt={`${img}`} /> 
            </div>
        )
    }
}
