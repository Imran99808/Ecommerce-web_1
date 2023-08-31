import React, { useState } from 'react'
import SlideCard from './SlideCard'
import { Sdata } from './data'
import Move from '../../dragable/Move';





const PrevArrow=({onClick})=>{
  // console.log(onClick)
  return(
      <div className='control-btn' onClick={onClick}>
          <button className='prev'>
              <i className='fa fa-long-arrow-alt-left'>
                  h
              </i>
          </button>
      </div>
  )
}

const NextArrow=({onClick})=>{
  // console.log(onClick)
  return(
      <div className='control-btn' >
          <button  className='next' onClick={onClick}>
              <i className='fa fa-long-arrow-alt-right'>
                 h 
              </i>
          </button>
      </div>
  )
}















function Slider() {
   const settings={
     
      
       dots:1,
       iShow:1,
       circle:true,
      //  prevArrow:<PrevArrow/>,
      //  NextArrow:<NextArrow/>
      
      

   }
   
  

    function card(){
        let arr=[];
        for(let i=0;i<Sdata.length;i++){
             arr.push(<SlideCard key={i} id={Sdata[i].id} title={Sdata[i].title} desc={Sdata[i].desc} img={Sdata[i].cover} />);
            // arr.push(<div>emon</div>)
        }
        return arr;
    }
console.log(card())
  return (
     <section className='section'>
  
       <Move {...settings} >
       {card()}
       </Move>
         
       
        
        
 </section>
  )

  }
export default Slider
// transform: `translate(-${value}px)`,Transition:'all 1.4s'
// style={{left:`${position}px`,transform: `translate(-${value}px)`}}