import React from 'react'
import './Flash.css'
import FlashCard from './FlashCard'

function FlashDeals({productItems,addToCart}) {
  return (
   <section className='flash background'>
    <div className="container">
        <div className="f-heading">
            <i className='fa fa-bolt'></i>
            <h1>Flash Deals</h1>
        </div>
        <FlashCard productItems={productItems} addToCart={addToCart}/>
    </div>
   </section>
  )
}

export default FlashDeals
