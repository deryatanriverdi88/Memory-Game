import React, { Component } from 'react'

export default class CardFront extends Component {

    componentDidUpdate = () => {
        this.props.matchedCards(this.props.img.id)
        // console.log(this.props.img.id)
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
