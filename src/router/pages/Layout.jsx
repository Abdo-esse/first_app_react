import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to='/' className='nav-link '>Home</Link> 
          </li>
          <li className="nav-item">
            <Link to='/blogs' className='nav-link '>Blog</Link>
          </li>
          <li className="nav-item">
            <Link to='/contact' className='nav-link '>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="container-fluid w-75 mx-auto">
        <Outlet/>
      </div>
      
    </>
  )
}

export default Layout
