import React, { Component } from 'react'
import CardList from '../Components/CardList';
import Winner from '../Components/Winner'

// Sets up images before game start.
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
//

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

 // Handles the switch between winner and play.
 redirect = (page) => {
  if (this.state.gameStatus === 'winner'){
    // Switches from winner to play.
    this.setState({
        images: [],
        gameStatus: page,
        moves: 0,
        matchedPairs:[],
        timer: 0
    })
  }
  else {
     // Switches from play to winner.
    this.setState(prevState =>{
      return  {gameStatus: page,
      winTime: prevState.timer
      }
    })
  }
}
//

// Shuffles the images.
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

// Sets the state with shuffled images.
setCards = () => {
  this.setState({
    images: this.shuffleImages(newObjects)
  })
}
//

// Starts the game by setting timer and new cards.
componentDidMount =() => {
  setInterval(
    () => this.setState({ timer:( this.state.timer + 1)}),
      1000
  );
  this.setCards()
}
//

// Callback to choosenCards function that counts the moves.
 setMoves = () => {
    this.setState({
      moves : this.state.moves + 1
    })
 }

// It selects first and second card and sets the state, and faceUp value to true. And runs the setMoves function.
 choosenCards = (img) => {
  if(this.state.firstCard === null){
     this.setState({
         firstCard: {...img, faceUp:true}
     })
 } else if(this.state.firstCard){
     this.setState({
         secondCard: {...img, faceUp:true}
     },
     this.setMoves())
 }
}
//

// It runs the compareCards function when firstCard and secondCard exist in state.
componentDidUpdate= () => {
    if (this.state.firstCard && this.state.secondCard)
    this.compareCards()
}
//

// Sorts through the images array and replaces an image's faceUp value false with true, and returns a new array.
handleFaceUp = (images, card) => {
   return images.map(image => {
        if (image.id === card.id) {
           return card
        } else {
            return image
        }
    })
}

// Sets the state of firstCard and secondCard to null.
clearCards = () => {
 this.setState({
     firstCard: null,
     secondCard: null
 })
}

// Compares the firstCard and secondCard, if their id's are same,
// runs the handleFaceup function, and sets the state of images with
// the new array that is returned by handleFaceup func.,
// then sets the matchedPairs with the firstCard id.
// If their id's are not same, it returns old matchedPairs.
// At the end runs the clearCards function.
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
//

// Checks the length of matchedPairs array, if it equals to 12,
// and runs the redirect function.
winner = () => {
 if (this.state.matchedPairs.length  === 12){
    // setTimeout(() => {this.redirect('winner')}, 20)
    this.redirect('winner')
 }
}
//

// Resets the game by running redirect funtion with play,
// sets the  new cards.
resetGame = () => {
  this.redirect('play') 
  this.setCards(newObjects)
}
//

// Renders the CardList or Winner component based on gameStatus.
renderGame = () => {
   switch (this.state.gameStatus){
    case "play":
      return <CardList images={this.state.images} moves={this.state.moves} choosenCards={this.choosenCards} winner={this.winner} firstCard={this.state.firstCard}/>
    case "winner":
      return <Winner redirect={this.redirect} moves={this.state.moves}  resetGame={this.resetGame} />
   }
}

 render() {
  return(
   <div className="game">
         <div className='timer'>
         {this.state.gameStatus === "play"  ?  <h1>  Time : {this.state.timer} seconds</h1> : <h1> Your time was : {this.state.winTime} seconds</h1>}
         </div>
         {this.renderGame()}
   </div>
    )
   }
 }

export default Game