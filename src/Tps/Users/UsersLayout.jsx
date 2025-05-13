import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import UsersTable from './UsersTable'

function UsersLayout() {
  return (
    <BrowserRouter>
    <nav>
         <ul className="nav justify-content-center">
        <li className="nav-item">
            <Link className="nav-link " to={'/'}>Users list</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link " to={'/'}>Add ser</Link>
        </li>
     
       </ul>
    </nav>
      <Routes>
         <Route index element={<UsersTable/>} />
         <Route path={'/user/creat'} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default UsersLayout
