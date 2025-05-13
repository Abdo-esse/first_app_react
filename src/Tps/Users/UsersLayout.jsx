import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import UsersTable from './UsersTable'
import UsersAdd from './UsersAdd'
import UsersEdit from './UsersEdit'

function UsersLayout() {
  return (
    <>
    <BrowserRouter>
    <nav>
         <ul className="nav justify-content-center">
        <li className="nav-item">
            <Link className="nav-link " to={'/'}>Users list</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link " to={'/user/creat'}>Add ser</Link>
        </li>
     
       </ul>
    </nav>
      <Routes>
         <Route index element={<UsersTable/>} />
         <Route path={'/user/creat'} element={<UsersAdd/>} />
         <Route path={'/user/:id/edit'} element={<UsersEdit/>} />
      </Routes>
    </BrowserRouter>

    <Outlet/>

    </>
    
  )
}

export default UsersLayout
