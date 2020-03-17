
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

    choosenCards = (imgId) => {
         if(this.state.firstCard === null){
            console.log(this.state.firstCard)
            this.setState({
                firstCard: imgId
            }) 
        } else if(this.state.firstCard){
            this.setState({
                secondCard: imgId
            })
        } 
    }

    componentDidUpdate= () => {
        if (this.state.firstCard && this.state.secondCard) 
        this.compareCards()
    }

    compareCards = () => {
        if(this.state.firstCard ===  this.state.secondCard){
            this.setState({
                match: true,
                matchedPairs: [...this.state.matchedPairs, this.state.firstCard]
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

