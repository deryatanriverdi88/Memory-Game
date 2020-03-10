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
   index: null, 
   imgId: null
 }

  
 
  OpenImage(index, img){
    console.log( "an image with a index of"+ index + " opened")
  }

  CloseImage(key){
    console.log("an image with a index of"+ key + " closed")
  }

  setSelected = (e, img,index) =>{

    if(this.state.index==null)
    { 
      this.setState({
        index: index, 
        imgId: img.id, 
        
      })
      this.OpenImage(index, img);
      //console.log("first image opened");
  
    }else{
      
      if(this.state.index===index)
      {
        return ;// it will stop working here
      
      } 

      this.OpenImage(index);

      if(this.state.imgId!==img.id)
      {
        console.log("photos are not the same ",this.state.imgId,img.id )

          this.CloseImage(this.state.index);
          this.CloseImage(index);
          
      }
      else{
        console.log("photos are the same",this.state.imgId, img.id)
        
      }

      this.setState({
        index:null, 
        imgId: null
      })

    }

  }
  // renderImages  = () => {
      
  //     //  let newImages= [...images,...images]
       
  //      return images.map((img ,index)=> {
  //        //console.log(index)
  //       //  if(this.state.cardFaceDown){
  //       //   return  <div className="card "><img className="back" key={index}
  //       //   onClick={(e) => this.setSelected( e, img, index)} src={img.url} alt={`${img}`} /> </div>
  //       //  } else {
  //       //   return  <div className="card"><img className="front" key={index}
  //       //   onClick={(e) => this.setSelected( e, img, index)} src={img.url} alt={`${img}`} /> </div>
  //       //  }
  //       return <Card setSelected={this.setSelected} img={img} index={index} />
  //   })
     
  // }

 render() {
  // console.log(this.state)
   
  return(
   <div className="game">
         <div className="cards">
           <CardList images={images} setSelected={this.setSelected}/> 
         </div>
   </div>
    )
   }
 }


export default Game