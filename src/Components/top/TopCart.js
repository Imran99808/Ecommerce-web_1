import React from 'react';
import {loop} from './../../loop';
import tData from './Tdata';
import Move from '../../dragable/Move';
import './style.css'
function TopCart() {
    const settings={
        iShow:3,
        circle:true,
       
      
       }
  
  return (
    <>
     <Move {...settings}>
     {
     loop(tData,(value,index)=>{

        return(
            <div className="box product" key={index}>
                <div className="nametop cart-container">
                    <span className="tleft">{value.para}</span >
                    <span  className="tright">{value.desc}</span >
                </div>
                <div className="img">
                    <img src={value.cover} alt="" />
                </div>
            </div>
        )
     })
     }

   </Move>
    </>
  )
}

export default TopCart
