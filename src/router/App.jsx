import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='blogs' element={<Blogs/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Route>

     </Routes>
    </BrowserRouter>
  )
}

export default App
