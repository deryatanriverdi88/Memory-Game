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

    // componentDidMount = () => {
        
    //         for(let i = 0; i < this.props.matchedPairs.length; i++){
    //             console.log(this.props.matchedPairs[i] , this.props.img.id)
    //             if(this.props.matchedPairs[i] === this.props.img.id){
    //                 this.setState({
    //                     cardFaceDown: false
    //                 })
    //             } else {
    //                 this.setState({
    //                     cardFaceDown: true
    //                 })
    //             }
    //         }
        
    // }


    render() {
      
        const {img, index, setSelected, match} = this.props
    
        return (
            <>
             {this.state.cardFaceDown ? 
              <CardBack img={img} index={index} flipOneCard={this.flipOneCard}/> : 

              <CardFront img={img} index={index} />
            }
            </>
        )
    }
}



