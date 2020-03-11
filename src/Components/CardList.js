
import React, {Component} from 'react'
import Card from './Card'


export default class CardList extends Component {

    state = {
        imgId: null,
        index: null 
    }

    setSelected = (id, index) => {
        console.log('img selected')
        this.setState({
            imgId: id,
            index: index
        })

        if(this.state.imgId === id){
            console.log('match')
        } else {
            console.log(" no match")
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

