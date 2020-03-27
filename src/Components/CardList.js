import React, {Component} from 'react'
import Card from './Card'

export default class CardList extends Component {

    render() {
        return (
            <>
            <div>
                <h1 className="moves">Moves: {this.props.moves}</h1>
            </div>
            {this.props.winner()}
            <div className="cards">
            {this.props.images.map((img, index )=>{
                return <Card img={img} key={index} choosenCards={this.props.choosenCards} firstCard={this.props.firstCard} />
            })}
            </div>
        </>
        )
    }
}
