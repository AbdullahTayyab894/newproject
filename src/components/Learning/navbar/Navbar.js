import React from 'react'
import logo from '../../../images/logo.png'
import Menu from './Menu'
import Account from './Account'
const Navbar = () => {
  return (
    <div className='navbar-parent'>
      <div style={{
        width:"100px"
      }}>
        <img src={logo} />
      </div>
      <div className='search' >
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <div className='routes' style={{
        width: "300px",
        display: "flex",
      }}>
        <Menu />
        <Account/>
      </div>
    </div >
  )
}

export default Navbar