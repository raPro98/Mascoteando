import React from 'react'

const ItemListContainer = (props) => {
  return (
    <h1 className='text-center'>{props.saludo} {props.inicio}</h1>
  )
}

export default ItemListContainer