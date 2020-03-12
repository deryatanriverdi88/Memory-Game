import React, { Component } from 'react'

export default class CardFront extends Component {

    componentDidUpdate = () => {
        this.props.matchedCards()
    }

    render() {
        const {img, index, setSelected} = this.props
        return (
            <div className="card ">

                    <img className="back" key={index}
                     src={img.url} alt={`${img}`} /> 
            </div>
        )
    }
}
