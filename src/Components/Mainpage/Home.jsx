import React from 'react'
import Categories from './Categories'
import './Home.css'
import Slider from './Slider'




function Home() {
  return (
    <section id='home' >
        <div className="container ho-container"> 
        <Categories/> 
          <Slider/>
         
         
         </div> 
   </section>
  )
}

export default Home
