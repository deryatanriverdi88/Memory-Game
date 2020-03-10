import React, { Component } from 'react'

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
  {pair_id:1,url:'../images/apple.png'},
  {pair_id:2 ,url:'../images/facebook.png'},
  {pair_id:3,url:'../images/github.png'},
  {pair_id:4 ,url:'../images/google.png'}, 
  {pair_id:5,url:'../images/instagram.png'},
  {pair_id:6 ,url:'../images/linkedin.png'},
  {pair_id:7,url:'../images/medium.png'},
  {pair_id:8 ,url:'../images/netflix.png'}, 
  {pair_id:9,url:'../images/slack.png'},
  {pair_id:10 ,url:'../images/snapchat.png'},
  {pair_id:11,url:'../images/twitter.png'},
  {pair_id:12 ,url:'../images/windows.png'}
];

let newObjects = [...imgs,...imgs]
const images= shuffleArray(newObjects)


class Game extends Component {
 state = {
   active_key: null, 
   pair_id: 0, 
   cardFaceDown:true
 }

  
 
  OpenImage(key){
    console.log( "an image with a id of"+ key + " opened")
  
  }
  CloseImage(key){
    console.log("an image with a id of"+ key + " closed")
  }

  setSelected = (e, img,index) =>{
    //console.log(img.img_id, key)
    //console.log(img);
    if(this.state.active_key==null)
    { 
      this.setState({
        active_key: index, 
        pair_id: img.pair_id
      })
      this.OpenImage(index);
      //console.log("first image opened");
  
    }else{
      
      if(this.state.active_key==index)
      {
        return ;// it will stop working here
      
      } 


      this.OpenImage(index);
      if(this.state.pair_id!=img.pair_id)
      {
        console.log("resimleraynı değil ",this.state.pair_id,img.pair_id )

          this.CloseImage(this.state.active_key);
          this.CloseImage(index);
          
      }
      else{
        console.log("resimler aynı",this.state.pair_id,img.pair_id)
        
      }

      this.setState({
        active_key:null, 
        pair_id: null
      })

    }

  }
  renderImages  = () => {
     
      //  let newImages= [...images,...images]
       
       return images.map((img ,index)=> {
         //console.log(index)
         if(this.state.cardFaceDown){
          return  <div className="card "><img className="closed" key={index}
          onClick={(e) => this.setSelected( e, img, index)} src={img.url} alt={`${img}`} /> </div>
         } else {
          return  <div className="card"><img key={index}
          onClick={(e) => this.setSelected( e, img, index)} src={img.url} alt={`${img}`} /> </div>
         }
    })
     
  }

 render() {
  
   
  return(
   <div className="game">
         <div className="cards">

            {this.renderImages()}
            
         </div>
   </div>
    )
   }
 }


export default Game