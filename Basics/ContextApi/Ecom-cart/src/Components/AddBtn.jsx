import React from 'react'
import { useContext } from 'react'
import { Cartcontext } from '../Context/Cartcontext'

const AddBtn = (props) => {
    const cart = useContext(Cartcontext)
    console.log('cart',cart);
    
  return (
    <div>
      <button onClick={()=> cart.setitems([...cart.items , {name:props.name , price:props.price}])}>Add to Cart</button>
    </div>
  )
}

export default AddBtn
