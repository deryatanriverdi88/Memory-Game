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

    matchedCards = () =>{
       if (this.props.match ===  false){
           this.setState({
               cardFaceDown: true
           })
       }
    }

    componentDidMount = () => {
        this.matchedCards()
    }

    render() {
        const {img, index, setSelected, match} = this.props
    
        return (
            <>
             {this.state.cardFaceDown ? 
              <CardBack img={img} index={index} setSelected={this.props.setSelected} flipOneCard={this.flipOneCard}/> : 

              <CardFront img={img} index={index}  />
            }
            </>
        )
    }
}



