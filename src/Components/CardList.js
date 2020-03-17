
import React, {Component} from 'react'
import Card from './Card'


export default class CardList extends Component {

    state = {
        firstCard: null, 
        secondCard: null,
        images: [...this.props.images],
        match: false,
        matchedPairs: []
    }

    choosenCards = (img) => {
         if(this.state.firstCard === null){
            console.log(this.state.firstCard)
            this.setState({
                firstCard: {...img, faceUp:true}
            }) 
        } else if(this.state.firstCard){
            this.setState({
                secondCard: {...img, faceUp:true}
            })
        } 
    }

    componentDidUpdate= () => {
        if (this.state.firstCard && this.state.secondCard) 
        this.compareCards()
        
    }

    handleFaceUp = (images, card) => {
       return images.map(image => {
            if (image.id === card.id) {
               return card
            } else {
                return image
            }
        })
    }

    compareCards = () => {
        if(this.state.firstCard.id ===  this.state.secondCard.id){
            const newImages= this.handleFaceUp(this.state.images, this.state.firstCard)
            this.setState({
                images: newImages,
                matchedPairs:[ ...this.state.matchedPairs, this.state.firstCard.id]
            })
            console.log('match')
        } else {
            this.setState({
                match: false
            })
            console.log('no match')
        }
        this.clearCards()
    }
    
    clearCards = () => {
        this.setState({
            firstCard: null,
            secondCard: null
        })

    }

    render() {
      console.log(this.state.matchedPairs, this.state.match)
        
        return (
            <>
            {this.props.images.map((img, index )=>{
                return <Card img={img} index={index} match={this.state.match} key={index} choosenCards={this.choosenCards} matchedPairs={this.state.matchedPairs}/>
            })}
        </>
        )
    }
}

