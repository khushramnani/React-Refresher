import React from 'react'
import { useContext } from 'react'
import { Cartcontext } from '../Context/Cartcontext'
const Cart = () => {
    const cart = useContext(Cartcontext)
    const total = cart.items.reduce((a,b)=> a + b.price ,0)
  return (
    
    <div>
        <h2>Cart</h2>
        {
            cart && cart.items.map((item,index) => <li key={index}>{item.name} : {item.price} <button onClick={(item)=> --item }>remove</button></li> )
        }
      <span>Total:₹{total}</span>
    </div>
  )
}

export default Cart
