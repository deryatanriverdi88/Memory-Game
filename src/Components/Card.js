import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class Card extends Component {

    state = {
        cardFaceDown: true
    }

 
    flipOneCard = (imgId, index) => {
        this.setState({
            cardFaceDown: false
        })
        this.props.setSelected(imgId, index)
    }

    matchedCards = () =>{
       if (this.props.match ===  false){
           this.setState({
               cardFaceDown: true
           })
       }
    }

    render() {
      
        const {img, index, setSelected, match} = this.props
    
        return (
            <>
             {this.state.cardFaceDown ? 
              <CardBack img={img} index={index} flipOneCard={this.flipOneCard}/> : 

              <CardFront img={img} index={index} matchedCards={this.matchedCards} />
            }
            </>
        )
    }
}



