import React from 'react'
import logo from '../assets/images/logo.svg'
import {Link} from '../../routing'

function Search({cartLength}) {
    console.log(cartLength)
  return (
   <section id='search'>
    <div className="container s-container">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="search-box">
            <i className='fa fa-search'></i>
            <input type="text" placeholder='search and hit enter...' />
            <span>All Category</span>

        </div>
        <div className="s-icons">
            <i className='fa fa-user icon-circle'></i>
          
          
           
            <Link to="/cart">   <i className='fa fa-shopping-bag icon-circle'></i>  </Link>
           <span>{cartLength}</span>
        </div>
    </div>
   </section>
  )
}

export default Search
