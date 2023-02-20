import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './routes/Home'
import Project from './routes/Project'
import Contact from './routes/Contact'
import Page404 from './components/404/404'
import Test from './routes/Test'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/test' element={<Test/>} />
        <Route path='/*' element={<Page404/>} />
      </Routes>
    </>
  )
}

export default App