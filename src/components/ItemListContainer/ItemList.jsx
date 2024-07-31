import React from 'react'
import Item from './Item'

const ItemList = ({prodMascoteando}) => {

    console.log(prodMascoteando)
  return (
    <div>
        <div className='d-flex justify-content-between flex-wrap'>
            {
                prodMascoteando.map((producto) => <Item productoSolo ={producto} key = {producto.id}/>) //map es por cada producto devuelva el return con los div
            }
        </div>
    </div>
  )
}

export default ItemList