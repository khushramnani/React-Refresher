import React from 'react'
import AddBtn from './AddBtn'
const Items = (props) => {
  return (
    <div>
      <h3>Item: {props.name}</h3>
      <span>Price: {props.price}</span>
    <AddBtn name={props.name} price={props.price} />
    </div>
  )
}

export default Items
