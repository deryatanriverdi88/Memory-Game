import React, { Component } from 'react'
import CardList from '../Components/CardList';
import Winner from '../Components/Winner'

const shuffleArray = (array)=> {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

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
const images= shuffleArray(newObjects)
// const images= newObjects

class Game extends Component {
 state = {
   gameStatus: "play", 
   moves: 0
 }

 redirect = (page) => {
  this.setState({
      gameStatus: page
  })
 }

 setMoves = () => {
    this.setState({
      moves : this.state.moves + 1
    })
 }

 renderGame = () => {
   switch (this.state.gameStatus){
    case "play":
      return <div className="cards">
          <CardList images={images} redirect={this.redirect}
          timer={this.state.timer} setMoves={ this.setMoves}  moves={this.state.moves}/>
        </div>
    case "winner":
      return <div >
          <Winner redirect={this.redirect} />
      </div>
   }
 }

 render() {   
  return(
   <div className="game">
         {/* <div className="cards">
           <CardList images={images} /> 
         </div> */}
         {this.renderGame()}
   </div>
    )
   }
 }

export default Game