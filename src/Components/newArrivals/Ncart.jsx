import React from 'react'
import { loop } from '../../loop'
import Ndata from './ndata'

function Ncart() {
  return (
    <div className="content grid product">
        {
            loop(Ndata,(val,index)=>{
                return(
                    <div className="box" key={index}>
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <h4>{val.name}</h4>
                        <span>{val.price}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Ncart
