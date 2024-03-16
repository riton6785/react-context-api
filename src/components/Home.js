import React, { useContext, useState } from 'react'
import { faker } from '@faker-js/faker';
import Product from './Product';

faker.seed(100)
const Home = () => {
  const productArray = Array(20).fill().map(() => ({
    Id: faker.string.uuid(),
    name: faker.internet.userName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
}));
const [products] = useState(productArray)

  return (
    <div className='productContainer'>
      {
        products.map((product)=>(
          <Product product={product}/>
        ))
      }
    </div>
  )
}

export default Home