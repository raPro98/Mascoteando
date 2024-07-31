import React from 'react'
import "./NavBar.css"
import { PiShoppingCartFill } from "react-icons/pi"

const CartWidget = () => {
  return (
    <div className='flexBetween'>
        <PiShoppingCartFill size={30}/>
        <p className='m-0 px-2'>1</p>
    </div>
  )
}

export default CartWidget