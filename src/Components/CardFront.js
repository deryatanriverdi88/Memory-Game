import React, { Component } from 'react'

export default class CardFront extends Component {

    componentDidUpdate = () =>{
        if (this.props.img.faceUp === true){
            return
        } else {
            this.props.reverseCard()
        }
    }

    render() {
        const {img} = this.props
        return (
            <div className="card ">
                 <img className="front"
                    src={img.url} alt={`${img.url}`} />
            </div>
        )
    }
}
