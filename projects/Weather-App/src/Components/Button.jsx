import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.func} >{props.name}</button>
  )
}

export default Button
