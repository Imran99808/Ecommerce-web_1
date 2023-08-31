import {React,useState} from 'react'
import { loop } from '../../loop';
import sData from './sData'

function Shopcart({addToCart}) {
    const{ shopItems}=sData;
    const[count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }
  return (
    <>
     {loop(shopItems,(item,i)=>{
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
             <button onClick={()=> addToCart(item)}>
                 <i className="fa fa-plus"></i>
             </button>
         </div>
     </div>
    </div>
</div>

   )

   })
   }
</>
  )
}

export default Shopcart
