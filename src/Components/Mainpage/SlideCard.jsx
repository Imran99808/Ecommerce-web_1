import React from 'react'


 
function SlideCard({id,title,desc,img}) {
   



  return (
  
   <div className="slide-card">
    <div className="slide-content">
    <h1>{title}</h1>
    <p>{desc}</p>
    <button>Visit Collections</button>
    </div>
   <div className="slide-img">
     <img src={img} alt="" />
     </div>
   </div> 
  )
}

export default SlideCard
