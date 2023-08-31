import React from 'react'
import TopCart from './TopCart'

function TopCate() {
  return (
    <>
    <section className='topCat background'>
        <div className="container">
            <div className="heading cart-container">
                <div className="heading-left row">
                    <i className='fa fa-border-all'></i>
                    <h2>Top Categories</h2>
                </div>
                <div className="heading-right row">
                    <span>View all</span>
                    <i className='fa fa-caret-right'></i>
                </div>
            </div>
            <TopCart/>
        </div>
    </section>
    </>
  )
}

export default TopCate
