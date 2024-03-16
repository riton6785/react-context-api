import React, { useContext } from 'react'
import { Cart } from './CartContext'

const Product = ({product}) => {
    const {cart, setCart} = useContext(Cart)
    return (
        <div className="products">
            <img src={product.image} alt={product.name} />
            <div className="productDescription">
                <span>{product.name}</span>
                <span>{product.price}</span>
            </div>
            
            {console.log(cart)}
                {
                    cart.includes(product) ? (
                        <button className="addToCart" onClick={() => setCart(cart.filter((c) => c.Id !== product.Id))}>Remove From cart</button>
                    ) : (
                        <button className="Add to cart" onClick={() => setCart([...cart, product])}>Add to cart</button>
                    )
                }
                
            
        </div>
    )
}

export default Product