import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className='d-flex justify-content-center'>
        <div>
            <img src={item.imagen} alt={item.nombre} width={200}/>
        </div>

        <div>
            <h1>{item.nombre}</h1>
            <h2>{item.categoria.id}</h2>
            <h3>${item.precio}</h3>
        </div>
    </div>
  )
}

export default ItemDetail