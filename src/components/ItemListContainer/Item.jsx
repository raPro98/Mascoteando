import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({productoSolo}) => {
  return (
    <Link className='containerItem m-0 letra' to={`/item/${productoSolo.id}`}>
      <div className='d-flex justify-content-center mt-4'>
        <img className='imagen' src={productoSolo.imagen} alt={productoSolo.nombre} width={200}/>
      </div>
        <h3 className='ms-3 mt-1 letra'>{productoSolo.nombre}</h3>
        <p className='ms-3 letra'>{productoSolo.tipo}</p>
        <p className='ms-3 letra'>${productoSolo.precio}</p>
        <div className='d-flex justify-content-center'>
          <button type="button" className="btn btn-outline-success fw-medium">Agregar al Carrito</button>
        </div>
    </Link>
  )
}

export default Item