import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class Card extends Component {

    state = {
        cardFaceDown: true
    }

 
    flipOneCard = () => {
        // if a card is clicked it should set the state of cardFacedown
        console.log(this.props.index)
        this.setState({
            cardFaceDown: false
        })
    }

      
       OpenImage(index, img){
         console.log( "an image with a index of"+ index + " opened")
       }
     
       CloseImage(key){
         console.log("an image with a index of"+ key + " closed")
       }
     
       setSelected = (e, img,index) =>{
     
         if(this.state.index==null)
         { 
           this.setState({
             index: index, 
             imgId: img.id, 
             
           })
           
           this.OpenImage(index, img);
           //console.log("first image opened");
       
         }else{
           
           if(this.state.index===index)
           {
             return ;// it will stop working here
           
           } 
     
           this.OpenImage(index);
     
           if(this.state.imgId!==img.id)
           {
             console.log("photos are not the same ",this.state.imgId,img.id )
     
               this.CloseImage(this.state.index);
               this.CloseImage(index);
               
           }
           else{
             console.log("photos are the same",this.state.imgId, img.id)
             
           }
     
           this.setState({
             index:null, 
             imgId: null
           })
     
         }
     
       }
  

    render() {
        const {img, index, setSelected} = this.props
        return (
            <>
             {this.state.cardFaceDown ? 
              <CardBack img={img} index={index} setSelected={this.setSelected} flipOneCard={this.flipOneCard}/> : 

              <CardFront img={img} index={index} />
            }
             
{/*  
              <CardFront img={img} index={index} setSelected={setSelected}/>

              <CardBack img={img} index={index} setSelected={setSelected}/> */}
            </>
        )
    }
}



