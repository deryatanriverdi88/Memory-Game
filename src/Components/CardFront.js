import React, { Component } from 'react'

export default class CardFront extends Component {
    render() {
        // console.log(this.props)
        const {img, index, setSelected} = this.props
        return (
            <div className="card ">
                    <img className="back" key={index}
                     src={img.url} alt={`${img}`} /> 
            </div>
        )
    }
}
