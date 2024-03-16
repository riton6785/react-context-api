import React, { useContext, useEffect, useState } from 'react'
import { Cart } from './CartContext'
import { faker } from '@faker-js/faker';
import Product from './Product';


faker.seed(100)
const CartPage = () => {
  const [total, setTotal] = useState()
  const {cart, setCart} = useContext(Cart)
  useEffect(() => {
    setTotal(cart.reduce((acc, curr)=> acc+Number(curr.price), 0))
  }, [cart])
  return (
    <div>
      <span>My Cart</span>
      <span>Total: {total}</span>
      <div className="productContainer">
        {
          cart.map((product)=> (
            <Product product={product}/>
          ))
        }
      </div>

    </div>
  )
}

export default CartPage