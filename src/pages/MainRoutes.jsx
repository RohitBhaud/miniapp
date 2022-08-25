

import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Login from './Login'
import Books from './Books'
import EditBook from './EditBook'
import SingleBook from './SingleBook'
import RequireAuth from '../Components/RequireAuth'

const MainRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Books/>} />
    <Route path="/books/:id" element={<SingleBook/>}/>
    <Route path="/books/:id/edit" element={<RequireAuth><EditBook/></RequireAuth>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="*" element={<h1>Page Not Found</h1>}/>
   </Routes>
  )
}

export default MainRoutes
