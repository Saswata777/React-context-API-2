import React from 'react'
import { faker } from '@faker-js/faker';
import './style.css';
import { ChakraProvider } from '@chakra-ui/react'
import SingleProducts from './singleProducts';

const Home = () => {


    faker.seed(100) // In this way the product name will be same
    const generateFakeProducts = (count) => {
        const products = [];
        for (let i = 0; i < count; i++) {
          const product = {
            id: i,
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            imageUrl: faker.image.url(),
          };
          products.push(product);
        }
        return products;
      };
    
      const fakeProducts = generateFakeProducts(18); // You can adjust the count as per your requirement
        
    
      // console.log(cart);

  return (
    <ChakraProvider>
        <div className='productPage'>
                        {fakeProducts.map((product, index) => (
                            <SingleProducts  product={product}  key={index} />
                        ))}

        </div>
    

    </ChakraProvider>
  )
}

export default Home