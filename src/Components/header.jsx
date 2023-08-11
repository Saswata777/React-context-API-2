import React ,{useContext}from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { Cart } from '../context'

const Header = () => {
  const {cart,setCart} = useContext(Cart);
  return (
    <div className='headingBar'>
        <div className='heading'> React Cotext API </div>
        <div className="link">
            <Link to='/'> Home </Link>
            <Link to='/cart'> Cart({cart.length}) </Link>
        </div>
    </div>
  )
}

export default Header