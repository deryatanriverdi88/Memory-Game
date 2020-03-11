import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class Card extends Component {

    state = {
        cardFaceDown: true
    }

 
    flipOneCard = () => {
        this.setState({
            cardFaceDown: false
        })
    }

    render() {
        const {img, index, setSelected} = this.props
    
        return (
            <>
             {this.state.cardFaceDown ? 
              <CardBack img={img} index={index} setSelected={this.props.setSelected} flipOneCard={this.flipOneCard}/> : 

              <CardFront img={img} index={index} />
            }
             
{/*  
              <CardFront img={img} index={index} setSelected={setSelected}/>

              <CardBack img={img} index={index} setSelected={setSelected}/> */}
            </>
        )
    }
}



