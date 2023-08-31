import React from 'react'
import Dcard from './Dcard'
import './Discount.css'

function Discount() {
  return (
   <section className="discount background">
    <div className="d-container container">
        <div className="heading">
            <div className="h-left">
            <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
                <h2>Big Discount</h2>
            </div>
            <div className="h-right">
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
            </div>
        </div>
        <Dcard/>
    </div>
   </section>
  )
}

export default Discount
