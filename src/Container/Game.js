import React, { Component } from 'react'
import CardList from '../Components/CardList';
import Winner from '../Components/Winner'
import Timer from '../Components/Timer'

const imgs =[
  {id:1,url:'../images/apple.png', faceUp:false},
  {id:2 ,url:'../images/facebook.png', faceUp:false},
  {id:3,url:'../images/github.png',faceUp:false },
  {id:4 ,url:'../images/google.png', faceUp:false},
  {id:5,url:'../images/instagram.png',faceUp:false},
  {id:6 ,url:'../images/linkedin.png',faceUp:false},
  {id:7,url:'../images/medium.png',faceUp:false},
  {id:8 ,url:'../images/netflix.png',faceUp:false},
  {id:9,url:'../images/slack.png', faceUp:false},
  {id:10 ,url:'../images/snapchat.png',faceUp:false},
  {id:11,url:'../images/twitter.png',faceUp:false},
  {id:12 ,url:'../images/windows.png',faceUp:false}
];

let newObjects = [...imgs,...imgs]

class Game extends Component {
 state = {
  gameStatus: "play",
  moves: 0,
  images: [],
  firstCard: null,
  secondCard: null,
  matchedPairs: [],
  timer: 0,
  winTime: null
 }

 redirect = (page) => {
  if (this.state.gameStatus === 'winner'){
    this.setState(prevState => {
      return {
        images: [],
        gameStatus: page,
        moves: 0,
        matchedPairs:[],
        timer: 0,
      }
    })
  }
  else {
    this.setState(prevState =>{
      return  {gameStatus: page,
      winTime: prevState.timer
      }
    })
  }
}

// handles random images for game start

shuffleImages = (array)=> {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

setCards = () => {
  this.setState({
    images: this.shuffleImages(newObjects)
  })
}
//

start=
  setInterval(
      () => this.setState({ timer:( this.state.timer + 1)}),
        1000
  );

componentDidMount =() => {
  this.setCards()
}

 setMoves = () => {
    this.setState({
      moves : this.state.moves + 1
    })
 }

 choosenCards = (img) => {
  if(this.state.firstCard === null){
     this.setState({
         firstCard: {...img, faceUp:true}
     })
 } else if(this.state.firstCard){
     this.setState({
         secondCard: {...img, faceUp:true},
     },
     this.setMoves())
 }
}

componentDidUpdate= () => {
    if (this.state.firstCard && this.state.secondCard)
    this.compareCards()
}

handleFaceUp = (images, card) => {
   return images.map(image => {
        if (image.id === card.id) {
           return card
        } else {
            return image
        }
    })
}

compareCards = () => {
    if(this.state.firstCard.id ===  this.state.secondCard.id){
        const newImages= this.handleFaceUp(this.state.images, this.state.firstCard)
        this.setState({
            images: newImages,
            matchedPairs:[ ...this.state.matchedPairs, this.state.firstCard.id]
        })
    } else {
        this.setState({
            matchedPairs: [...this.state.matchedPairs]
        })
    }
    this.clearCards()
}

clearCards = () => {
 this.setState({
     firstCard: null,
     secondCard: null
 })
}

winner = () => {
 if (this.state.matchedPairs.length  === 12){
    setTimeout(() => {this.redirect('winner')}, 20)
 }
}

resetGame = () => {
  this.redirect('play') 
  this.setCards(newObjects)
}

 renderGame = () => {
   switch (this.state.gameStatus){
    case "play":
      return <CardList images={this.state.images} redirect={this.redirect} setMoves={ this.setMoves}  moves={this.state.moves} choosenCards={this.choosenCards} winner={this.winner}/>
    case "winner":
      return <div >
          <Winner redirect={this.redirect} moves={this.state.moves}  resetGame={this.resetGame} />
      </div>
   }
 }
 
 render() {
  return(
   <div className="game">
         <div className='timer'>
         {this.state.gameStatus === "play"  ?  <h3>  Time : {this.state.timer} seconds</h3> : <h3> Your time was : {this.state.winTime} seconds</h3>}
         </div>
         {this.renderGame()}
   </div>
    )
   }
 }

export default Game