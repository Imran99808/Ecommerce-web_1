import React from 'react'
import { loop } from '../../loop'
import { cateData } from './data'

function Categories() {
  return (
    <div className='categories'>
      {
        loop(cateData,(d,i)=>{

          return(
            <div key={i} className="category">
            <img src={cateData[i].cateImg} alt="" />
            <span>{cateData[i].cateName}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default Categories

