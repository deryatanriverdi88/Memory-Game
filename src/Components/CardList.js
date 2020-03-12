
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
            this.setState({
                match: false
            })
        }
        // this method should compare two cards 
        //
       console.log("setSelected " ,"index " , this.state.index, "id " , this.state.imgId)

    }

    render() {
        console.log("render " , "index "  , this.state.index, "id " , this.state.imgId)
        
        return (
            <>
            {this.props.images.map((img, index )=>{
                return <Card img={img} index={index} match={this.state.match} key={index} setSelected={this.setSelected}/>
            })}
        </>
        )
    }
}

