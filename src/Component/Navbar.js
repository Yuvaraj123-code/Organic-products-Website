import React from 'react'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.scss'
// import { IoBagAdd } from "react-icons/io5";


// import logo from './download-removebg-preview (1).png'


const Navbar=()=> {
  return (
    
    <div id='navlogo'>
      {/* <div className='logo'><img src={logo}/></div> */}
        <nav className='mynavbar1'>
        <ul className='mynavlinks'>
            <Link to='/'><li id='two'>Home</li></Link>
            <Link to='/service'><li className='two'>Service</li></Link>
            <Link to='/contact'><li className='two'>Contact</li></Link>
            <Link to='/Login'><li className='two'>Login</li></Link></ul>
            <a href ="#">< FaShoppingCart className='navcart' /></a>



        
        </nav>
    </div>
  )
}

export default Navbar