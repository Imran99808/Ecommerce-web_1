import React, { useState } from 'react'
import { Link } from '../../routing';

const Nav = () => {
    const [toggle,setToggle]=useState(false);
  return (
    <div className='nav-bar'>
     <div className="container nav-items">
        <div className="n-left">
         <span className='fa-solid fa-border-all'></span>
         <h4>Categories <i className='fa fa-chevron-down'></i></h4>
        </div>
        <div className="n-right" style={{right:toggle?'':'-50rem'}}>
         <Link to='/'>Home</Link>
         <Link to='/page'>Page</Link>
         <li>User Account</li>
         <li>Vendor Account</li>
         <li>Track My Order</li>
         <Link to='/contact'>Contact</Link>
        </div>
        
        <div className="menu-bar" onClick={()=>{
            setToggle(!toggle);
        }}>
     <i className={`fa ${toggle?'fa-xmark':'fa-bars'}`} ></i>
     </div>
     </div>
     
    </div>
  )
}

export default Nav
