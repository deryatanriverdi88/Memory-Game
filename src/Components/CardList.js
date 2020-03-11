
import React, {Component} from 'react'
import Card from './Card'


export default class CardList extends Component {

    state = {
        imgId: null,
        index: null, 
        match: false
    }

    setSelected = (id, index) => {
        console.log('img selected')
        this.setState({
            imgId: id,
            index: index
        })

        if(this.state.imgId === id){
            console.log('match')
            //if  there is a match cards should stay up
            this.setState({
                match: true
            })
        } else {
            console.log(" no match")
            //if  there isnt a match the cards should be  set down  to  facedown
        }
        // this method should compare two cards 
        //
       console.log(this.state.index, this.state.imgId)

    }

    render() {
        console.log(this.state.index, this.state.imgId)
        
        return (
            <>
            {this.props.images.map((img, index )=>{
                return <Card img={img} index={index}  key={index} setSelected={this.setSelected}/>
            })}
        </>
        )
    }
}

