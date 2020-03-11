import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class Card extends Component {

    state = {
        cardFaceDown: true
    }

 
    flipOneCard = () => {
        // if a card is clicked it should set the state of cardFacedown
        console.log(this.props.index)
        this.setState({
            cardFaceDown: false
        })
    }

    render() {
        const {img, index, setSelected} = this.props
        return (
            <>
             {this.state.cardFaceDown ? 
              <CardBack img={img} index={index} setSelected={this.setSelected} flipOneCard={this.flipOneCard}/> : 

              <CardFront img={img} index={index} />
            }
             
{/*  
              <CardFront img={img} index={index} setSelected={setSelected}/>

              <CardBack img={img} index={index} setSelected={setSelected}/> */}
            </>
        )
    }
}



