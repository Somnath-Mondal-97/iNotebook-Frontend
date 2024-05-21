import React from 'react'
import './Component.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = (props) => {
    let location = useLocation()
  return (
    <div>
        <div className="navbar py-0 bg-info fixed-top">
        <div className="container-fluid">
        <div className="col-lg-2 d-flex align-items-center">
            <h3 className='navbar-heading'>{props.heading}</h3>
        </div>
        <div className="col-lg-5 d-flex align-items-center justify-content-between nav-menu">
            <p><Link to='/' className={`nav-link ${location.pathname==='/'?'nav-link-active':""}`}>Home</Link></p>
            <p><Link to='/yourNotes' className={`nav-link ${location.pathname==='/yourNotes'?'nav-link-active':""}`}>Your Notes</Link></p>
            <p><Link to='/about' className={`nav-link ${location.pathname==='/about'?'nav-link-active':""}`}>About</Link></p>
            {!localStorage.getItem('token') ? <p><Link to='/login' className={`nav-link ${location.pathname==='/login' ?'nav-link-active':""}`}>LogIn</Link></p>:<p><Link to='/login' className={`nav-link ${location.pathname==='/login' ?'nav-link-active':""}`} onClick={()=>{localStorage.removeItem('token')}}>LogOut</Link></p>}
            
        </div>
      </div>
        </div>
      
    </div>
  )
}

export default Navbar
