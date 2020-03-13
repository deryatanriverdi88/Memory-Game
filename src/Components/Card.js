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

    matchedCards = (id) =>{
        // this method should cycle through  the matched pairs array from card list
        // check the id's in matched pairs and comapre the id to the arrray
        // if its not  there it should flip them back over
        if (this.props.matchedPairs.legth){
            for(let i=0; i < this.props.matchedPairs.length; i++){
                if (this.props.matchedPairs !== id){
                    this.setState({
                        cardFaceDown:true
                    })
                }
            }
        }


        //    if (this.props.match ===  false){
    //        this.setState({
    //            cardFaceDown: true
    //        })
    //    }
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



