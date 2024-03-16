import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import { Cart } from './CartContext'

const Header = () => {
  const {cart} = useContext(Cart);
  return (
    <div>
      <span className='header'>Context API in react</span>
      <ul className="nav">
        <l1><Link to="/" className='navlink'>Home</Link></l1>
        <l1><Link to="/cart" className='navlink'>Cart{cart.length}</Link></l1>
      </ul>
    </div>
  )
}

export default Header