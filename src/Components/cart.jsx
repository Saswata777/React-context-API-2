import React, {useContext} from 'react'
import SingleProducts from './singleProducts'
import './style.css';
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Cart } from '../context';


const CartPage = () => {
  const {cart,setCart} = useContext(Cart)
  
  const[total, setTotal] = useState()

  useEffect(()=>{
      setTotal(cart.reduce(function(acc, curr){
        return acc = acc + Number(curr.price) ;
    }, 0/* Iniitialising the value of acc*/)) 
  },[cart])
  

  return (
      <>
    <div className='Total_price' style={{paddingTop:'100px'}}>Total: {total}</div>
    <div className='productNo'>No of product: {cart.length}</div>

    <ChakraProvider>
        <div className='productPage'>
          {cart.map((product, index) => <SingleProducts  product={product}  key={index} />)}
        </div>
    </ChakraProvider>
      </>
  )
}

export default CartPage