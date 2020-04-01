import React, { Component } from 'react'

export default class CardFront extends Component {

    //This checks the img faceUp value. if it is true it does nothing.
    // Else it runs reverseCard.
    componentDidUpdate = () =>{
        if (this.props.img.faceUp === true){
            return
        } else {
            this.props.reverseCard()
        }
    }
    //

    render() {
        const {img} = this.props
        return (
            <div className="card front">
                 <img
                    src={img.url} alt={`${img.url}`} />
            </div>
        )
    }
}
