import React, {Component} from 'react'
import Card from './Card'

export default class CardList extends Component {

    render() {
        return (
            <>
            <div>
                <h1 className="moves">Moves: {this.props.moves}</h1>
            </div>
            {this.winner()}
            <div className="cards">
            {this.state.images.map((img, index )=>{
                return <Card img={img} key={index} choosenCards={this.choosenCards} matchedPairs={this.state.matchedPairs}/>
            })}
            </div>
        </>
        )
    }
}

