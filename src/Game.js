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
  {'pair_id':"apple",url:'../images/apple.png'},
  {'pair_id':"snap",url:'../images/snapchat.png'},
  {'pair_id':"windows",url:'../images/windows.png'},
  {'pair_id':"slack",url:'../images/slack.png'}
];

let newObjects = [...imgs,...imgs]
const images= shuffleArray(newObjects)


class Game extends Component {
 state = {
   active_key: null, 
   pair_id: 0
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
        return <div  key={index} style={{"width": "25%","float":"left", "display" :"inline-block"}}
        onClick={(e) => this.setSelected( e, img, index)} ><img src={img.url} width="100%" alt={`${img}`} /></div>
    
    
         })
     
  }

 render() {
  
   
  return(
   <div className="game">
     <div className="board">
       
       <div className="cards">
          {this.renderImages()}
       </div>
     </div>
   </div>
    )
   }
 }


export default Game