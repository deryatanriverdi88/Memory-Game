import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class Card extends Component {

    state = {
        cardFaceDown: true
    }

    // renderCard = () => {
    //     console.log(this.state)
    //     const {img, index, setSelected} = this.props
    //     if(this.state.cardFaceDown){
    //         return  <div className="card "><img className="back" key={index}
    //         onClick={(e) => setSelected( e, img, index)} src={img.url} alt={`${img}`} /> </div>
    //        } else {
    //         return  <div className="card"><img className="front" key={index}
    //         onClick={(e) => setSelected( e, img, index)} src={img.url} alt={`${img}`} /> </div>
    //        }
    // }

    flipOneCard = () => {
        // if a card is clicked it should set the state of cardFacedown
        console.log(this.props.index)
        this.setState({
            cardFaceDown: !this.state.cardFaceDown
        })
    }

    render() {
   
        const {img, index, setSelected} = this.props
        return (
            <>
             {this.state.cardFaceDown ? 
              <CardBack img={img} index={index} setSelected={setSelected}/> : 

              <CardFront img={img} index={index} setSelected={setSelected}/>
            }
             
{/*  
              <CardFront img={img} index={index} setSelected={setSelected}/>

              <CardBack img={img} index={index} setSelected={setSelected}/> */}
            </>
        )
    }
}



