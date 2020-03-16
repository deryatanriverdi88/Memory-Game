
import React, {Component} from 'react'
import Card from './Card'


export default class CardList extends Component {

    state = {
        firstCard: null, 
        secondCard: null,
        match: false
        // matchedPairs: []
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

    compareCards = () =>{
        if(this.state.firstCard ===  this.state.secondCard){
            this.setState({
                match: true
            })
            console.log('match')
        } else {
            console.log('no match')
        }
        this. clearCards()
    }

    clearCards = () => {
        this.setState({
            firstCard: null,
            secondCard: null
        })

    }


    // setSelected = (id, index) => {
    //     console.log('img selected')
    //     if(this.state.index === null)
    //     this.setState({
    //         imgId: id,
    //         index: index
    //     })
    //     else {
    //        if(this.state.imgId === id){
    //            console.log('match')
    //            //if  there is a match cards should stay up
    //            this.setState({

    //               match: true,
    //               matchedPairs: [...this.state.matchedPairs, id]

    //            })
            
              
    //        } else {
    //            console.log(" no match")
    //            this.setState({
    //                match: false,
            
    //            })
            
    //        }

    //        this.setState({
    //            index: null, 
    //            imgId: null
    //        })

    //    }
    //     // this method should compare two cards 
    //     //

    // }


    render() {
      console.log(this.state.firstCard, this.state.secondCard)
        
        return (
            <>
            {this.props.images.map((img, index )=>{
                return <Card img={img} index={index} match={this.state.match} key={index} choosenCards={this.choosenCards} matchedPairs={this.state.matchedPairs}/>
            })}
        </>
        )
    }
}

