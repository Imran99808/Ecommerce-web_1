import React from 'react'
import FlashDeals from '../Components/flashDeals/FlashDeals'
import Home from '../Components/Mainpage/Home'
import NewArrivals from '../Components/newArrivals/NewArrivals'
import TopCate from '../Components/top/TopCate'
import Discount from '../Components/discount/Discount'
import Shop from '../Components/shop/Shop'
import Annu from '../Components/annoucements/Annu'

function First({productItems,addToCart}) {
  return (
    <>
    <Home/> 
  
    <FlashDeals productItems={productItems} addToCart={addToCart}/>
    
   <TopCate/>
   <NewArrivals/>
   <Discount/>
   <Shop  addToCart={addToCart}/>
   <Annu/>
    </>
  )
}

export default First
