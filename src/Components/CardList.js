
import React, {Component} from 'react'
import Card from './Card'


export default class CardList extends Component {

    state = {
        imgId: null,
        index: null, 
        match: false, 
        matchedPairs: []
    }

    setSelected = (id, index) => {
        console.log('img selected')
        if(this.state.index === null)
        this.setState({
            imgId: id,
            index: index
        })
       else {
           if(this.state.imgId === id){
               console.log('match')
               //if  there is a match cards should stay up
               this.setState({

                  match: true,
                  matchedPairs: [...this.state.matchedPairs, id]

               })
            
              
           } else {
               console.log(" no match")
               this.setState({
                   match: false,
            
               })
            
           }

           this.setState({
               index: null, 
               imgId: null
           })

       }
        // this method should compare two cards 
        //

    }

    render() {
      console.log(this.state.matchedPairs)
        
        return (
            <>
            {this.props.images.map((img, index )=>{
                return <Card img={img} index={index} match={this.state.match} key={index} setSelected={this.setSelected}/>
            })}
        </>
        )
    }
}

