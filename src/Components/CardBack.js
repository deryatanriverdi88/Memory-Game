import React, { Component } from 'react'

export default class CardBack extends Component {
    

    render() {
        const {img,flipOneCard} = this.props
        return (
            <div className="card back" onClick={() => flipOneCard(img)} >
                <img src="../svg/logo.svg" alt='logo'/>
           </div>
        )
    }
}
