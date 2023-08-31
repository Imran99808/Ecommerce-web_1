import React from 'react'
import Ncart from './Ncart';
import './style.css'

function NewArrivals() {
  return (
    <section className='newarrivals background'>
        <div className="container">
        <div className="heading cart-container">
                <div className="heading-left row">
                <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                    <h2>New Arrivals</h2>
                </div>
                <div className="heading-right row">
                    <span>View all</span>
                    <i className='fa fa-caret-right'></i>
                </div>
        </div>  
        <Ncart/>    
        </div>
    </section>
  )
}

export default NewArrivals;
