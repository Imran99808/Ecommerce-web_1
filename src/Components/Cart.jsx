import React, { useState } from 'react';
import {loop}from './../loop'

export default function Cart({cart,addToCart,decCart}) {
       const totalPrice=(data)=>{
         let count=0;
       for(let i=0;i<data.length;i++){
         count+=data[i].price*data[i].qty;
       
       }
       console.log(count)
       return count;
       };
  return (
    <>
      <section className='cart-items'>
        <div className="container cart-container">
            <div className="cart-details">
            {cart.length===0&&<h1 className='no-items product'>No items are add in cart</h1>}

            {loop(cart,(item,i)=>{
                
                const productQty=item.price*item.qty;
                // setPrice(totalPrice+productQty)
                return(
              <div className="cart-list  product">
                <div className="img">
                    <img src={item.cover} alt="" />
                </div>
                <div className="cart-details">
                <h3>{item.name}</h3>
                <h4>
                    {item.price}.00{item.qty}
                   <span>{productQty}</span>
                </h4>
                </div>
                <div className="cart-items-function">
                    <div className="removeCart">
                        <button >
                            <i className='fa-solid fa-xmark'></i>
                        </button>
                    </div>
                    <div className="cartControl d_flex">
                        <button className='incCart' onClick={()=> addToCart(item)}>
                            <i className='fa fa-plus'></i>
                        </button>
                        <button className='desCart' onClick={()=> decCart(item)}>
                            <i className='fa fa-minus'></i>
                        </button>
                    </div>
                </div>
                <div className="cart-item-price"></div>
              </div>
                )
            })}
            </div>
            <div className="cart-total product">
                <h2>Cart Summary</h2>
                <div className="cart-container">
                    <h4>Total Price:</h4>
                    <h3>${totalPrice(cart)}.00</h3>

                </div>
            </div>

        </div>
      </section>
    </>
  )
}
