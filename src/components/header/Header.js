import React from 'react'
import './Header.css'
import search from '../../images/search.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-menu'>
        <li>Dashboard</li>
        <li>Metrics</li>
        <li>Community</li>
        <li>Pricing</li>
        <li>Call-Centre</li>
        <li>I-Consult</li>
      </div>
      <div className='header-search'>
        <form>
          <div class="search-container">
            <input type="text" class="search-input" name="search" placeholder="Search" />
            <img src={search} class="search-icon" width="24" height="24"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Header