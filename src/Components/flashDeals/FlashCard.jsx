import React, { useState } from 'react'
import Move from '../../dragable/Move'
import {loop} from '../../loop'

const PrevArrow=({onClick})=>{
    // console.log(onClick)
    return(
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i className='fa fa-long-arrow-alt-left'>
                    
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
                    
                </i>
            </button>
        </div>
    )
}

function FlashCard({productItems,addToCart}) {
    const[count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    const settings={
         iShow:4,
         circle:true,
         prevArrow:<PrevArrow/>,
         NextArrow:<NextArrow/>
       
        }
   
  
  return (
  <>
  <Move {...settings}>
   {loop(productItems,(item,i)=>{
     const{id,discount,cover,name,price}=item;
   return(
    <div className='box'>
    <div className="product mtop">
     <div className="img">
         <span className='discount2'>{discount}%off</span>
         <img src={cover} alt="" />
         <div className="product-like">
             <label htmlFor="">{count}</label><br />
             <i className="fa-regular fa-heart" onClick={increment}></i>
         </div>

     </div>
     <div className="product-details">
         <h3>{name}</h3>
         <div className="rate">
             <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>
             <i className="fa fa-star"></i>
         </div>
         <div className="price">
             <h4>{price}</h4>
             <button onClick={()=> addToCart(productItems[i])}>
                 <i className="fa fa-plus"></i>
             </button>
         </div>
     </div>
    </div>
</div>

   )

   })
   }

  </Move>
 
  </>
           
  )
}

export default FlashCard
