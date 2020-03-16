import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class Card extends Component {

    state = {
        cardFaceDown: true
    }

    flipOneCard = (imgId) => {
        this.setState({
            cardFaceDown: false
        })
        this.props.choosenCards(imgId)
    }

    reverseCard = () => {
        if (this.props.match  === false)
        for (let i = 0; i < this.props.matchedPairs.length; i++ )
            if(this.props.matchedPairs[i]=== this.props.img.id){
                this.setState({
                            cardFaceDown: false
                })
            }
    }

    renderCards = () => {
        const {img, index} = this.props
        if (this.state.cardFaceDown){
            return <CardBack img={img} index={index} flipOneCard={this.flipOneCard}/>
        } else{
            return <CardFront img={img} index={index} />
          }
    }

    renderMatchedCards = () => {
        console.log('i am here')
        const {img, index, matchedPairs, match} = this.props
        if (matchedPairs){
            console.log(match)
            for (let i = 0; i < matchedPairs.length; i++ )
                if(matchedPairs[i] !== img.id){
                    return <CardBack img={img} index={index} flipOneCard={this.flipOneCard}/>
                } else {
                    return <CardFront img={img} index={index} />
                }
        }
    }

    render() {
      
        const {img, index, setSelected, match} = this.props
    
        return (
            <>
             {matchedPairs.length?  this.renderMatchedCards(): this.renderCards()}
            </>
        )
    }
}



