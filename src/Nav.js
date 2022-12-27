import logo from './images/logo.svg'
import  cancel from './images/icon-close.svg'
import hamburger from './images/icon-hamburger.svg'
import { useState } from 'react'

const Nav=()=>{
    const [navShowing,setNavShowing]=useState(false)
    return (
        <nav>
            <div  className='nav-icon'>
                <img src={logo} alt=''/>
                <img onClick={()=>setNavShowing(!navShowing)} className='hamburger' src={navShowing?cancel:hamburger} alt=''/>
            </div>
            {<div className={`nav-box ${navShowing?'disflex':'disnone'}`}>
                <p>Pricing</p>
                <p>Product</p>
                <p>About Us</p>
                <p>Career</p>
                <p>Commmuinity</p>
            </div>}
            <div className='button started'>Get Started</div>
        </nav>
    )
}
export default Nav