import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import LaundryRequest from './pages/LaundryRequest'
import LaundryStatus from './pages/LaundryStatus'
import Profile from './pages/Profile'
import Header from './components/Header'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/SignIn' element={<SignIn></SignIn>}></Route>
          <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
          <Route path='/LaundryRequest' element={<LaundryRequest></LaundryRequest>}></Route>
          <Route path='/LaundryStatus' element={<LaundryStatus></LaundryStatus>}></Route>
          <Route path='/Profile' element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
