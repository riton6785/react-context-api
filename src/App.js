import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import CartPage from './components/Cart'
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>

      <Route path="/" element={<Home/>} exact/>
      <Route path="/cart" element={<CartPage/>} exact/>
      </Routes>
    </BrowserRouter>
  )
}

export default App