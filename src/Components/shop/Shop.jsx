import React from 'react'
import Catg from './Catg'
import Shopcart from './Shopcart'
import './style.css'

function Shop({addToCart}) {
    return (
        <section className="shop background">
            <div className="container scontainer">
                <Catg />

                <div className="contentWidth">
                    <div className="heading cart-container">
                        <div className="heading-left row">
                            <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                            <h2>Mobile Phone</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View all</span>
                            <i className='fa fa-caret-right'></i>
                        </div>
                    </div>
                    <div className="product-content grid1">
                        <Shopcart  addToCart={addToCart}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop
