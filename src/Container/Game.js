import React, { Component } from 'react'
import CardList from '../Components/CardList';


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
  {id:1,url:'../images/apple.png'},
  {id:2 ,url:'../images/facebook.png'},
  {id:3,url:'../images/github.png'},
  {id:4 ,url:'../images/google.png'}, 
  {id:5,url:'../images/instagram.png'},
  {id:6 ,url:'../images/linkedin.png'},
  {id:7,url:'../images/medium.png'},
  {id:8 ,url:'../images/netflix.png'}, 
  {id:9,url:'../images/slack.png'},
  {id:10 ,url:'../images/snapchat.png'},
  {id:11,url:'../images/twitter.png'},
  {id:12 ,url:'../images/windows.png'}
];

let newObjects = [...imgs,...imgs]
const images= shuffleArray(newObjects)


class Game extends Component {
 state = {
   
 }
  // OpenImage(index, img){
  //   console.log( "an image with a index of"+ index + " opened")
  // }

  // CloseImage(key){
  //   console.log("an image with a index of"+ key + " closed")
  // }

  // setSelected = (e, img,index) =>{
  //   if(this.state.index==null)
  //   { 
  //     this.setState({
  //       index: index, 
  //       imgId: img.id, 
  //     })
  //     this.OpenImage(index, img);
  //     //console.log("first image opened");
  //   }else{
  //     if(this.state.index===index)
  //     {
  //       return ;// it will stop working here
  //     }
  //     this.OpenImage(index);

  //     if(this.state.imgId!==img.id)
  //     {
  //       console.log("photos are not the same ",this.state.imgId,img.id )

  //         this.CloseImage(this.state.index);
  //         this.CloseImage(index);
          
  //     }
  //     else{
  //       console.log("photos are the same",this.state.imgId, img.id)
        
  //     }

  //     this.setState({
  //       index:null, 
  //       imgId: null
  //     })

  //   }

  // }

 render() {   
  return(
   <div className="game">
         <div className="cards">
           <CardList images={images}/> 
         </div>
   </div>
    )
   }
 }


export default Game