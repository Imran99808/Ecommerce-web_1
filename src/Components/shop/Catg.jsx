import React from 'react'
import { loop } from '../../loop'

function Catg() {
    const data = [
        {
          cateImg: "./images/category/cat-1.png",
          cateName: "Apple",
        },
        {
          cateImg: "./images/category/cat-2.png",
          cateName: "Samasung",
        },
        {
          cateImg: "./images/category/cat-1.png",
          cateName: "Oppo",
        },
        {
          cateImg: "./images/category/cat-2.png",
          cateName: "Vivo",
        },
        {
          cateImg: "./images/category/cat-1.png",
          cateName: "Redimi",
        },
        {
          cateImg: "./images/category/cat-2.png",
          cateName: "Sony",
        },
      ]
  return (
    <div className="categories">
        <div className=" chead cart-container">
            <h1>Brand</h1>
            <h1>Shops</h1>
        </div>
        {
            loop(data,(value,index)=>{
                  return(
                    <div className="category box" key={index}>
                        <img src={value.cateImg} alt="" />
                          <span>{value.cateName}</span>
                    </div>
                  )
            })
        }
        <div className="box box2">
            <button>View All Brands</button>
        </div>
    </div>
  )
}

export default Catg
