import React, { createContext, useContext, useState } from 'react'
import { faker } from '@faker-js/faker';

export const Cart = createContext();
faker.seed(100)
const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);
  return (
    <Cart.Provider value = {{cart, setCart}}>{children}</Cart.Provider>
  )
}

export default CartContext
