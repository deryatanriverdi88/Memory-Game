import React, { Component } from 'react'

export default class CardFront extends Component {
    render() {
        // console.log(this.props)
        const {img, index, setSelected, flipOneCard} = this.props
        return (
            <div className="card " onClick={() =>flipOneCard()}>
                    <img className="back" key={index}
                    onClick={(e) => setSelected( e, img, index)} src={img.url} alt={`${img}`} /> 
            </div>
        )
    }
}
