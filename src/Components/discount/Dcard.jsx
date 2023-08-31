import React from 'react'
import data from './Data'

import Move from '../../dragable/Move';
function Dcard() {

    const settings={
     
       
        //  dots:1,
        iShow:6,
    //  circle:true


       
       
 
    }
    function card(){
        let arr=[];
        for(let i=0;i<data.length;i++){
             arr.push( <div className='box product' key={i}>
             <div className='img'>
               <img src={data[i].cover} alt='' width='100%' />
             </div>
             <h4>{data[i].name}</h4>
             <span>{data[i].price}</span>
           </div>);
            // arr.push(<div>emon</div>)
        }
        return arr;
    }
  return (
    <div className='c-container'>
     <Move {...settings} >
       {card()}
       </Move>
    </div>
  )
}

export default Dcard
